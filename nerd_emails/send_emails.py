#!/usr/bin/env python3
"""
Email sender script using Resend API
Reads email addresses from a txt file and sends emails to each recipient
"""

import resend
import os
import sys
import time
import re
from typing import List
from concurrent.futures import ThreadPoolExecutor, as_completed
from threading import Lock
import threading

def read_emails_from_file(file_path: str) -> List[str]:
    """Read email addresses from formatted txt file (Name: {name}, Email: {email})"""
    try:
        emails = []
        with open(file_path, 'r') as file:
            for line in file:
                line = line.strip()
                if not line:
                    continue
                
                # Extract email using regex pattern
                email_match = re.search(r'Email:\s*([^\s,]+@[^\s,]+)', line)
                if email_match:
                    email = email_match.group(1)
                    emails.append(email)
                    
        return emails
    except FileNotFoundError:
        print(f"Error: File '{file_path}' not found.")
        sys.exit(1)
    except Exception as e:
        print(f"Error reading file: {e}")
        sys.exit(1)

# Global locks and rate limiter
file_lock = Lock()
print_lock = Lock()
last_request_time = [0, 0]  # Track last 2 request times
rate_lock = Lock()

def remove_email_from_file(file_path: str, email_to_remove: str) -> None:
    """Remove the line containing a specific email from the txt file (thread-safe)"""
    try:
        with file_lock:
            with open(file_path, 'r') as file:
                lines = file.readlines()
            
            # Filter out lines containing the email that was successfully sent
            remaining_lines = []
            for line in lines:
                email_match = re.search(r'Email:\s*([^\s,]+@[^\s,]+)', line)
                if email_match and email_match.group(1) == email_to_remove:
                    continue  # Skip this line
                remaining_lines.append(line)
            
            with open(file_path, 'w') as file:
                file.writelines(remaining_lines)
        
        with print_lock:
            print(f"✓ Removed line with {email_to_remove} from {file_path}")
    except Exception as e:
        with print_lock:
            print(f"✗ Failed to remove {email_to_remove} from file: {e}")

def send_email_with_rate_limit(to_email: str, subject: str, html_content: str, from_email: str) -> bool:
    """Send an email using Resend API with global rate limiting (thread-safe)"""
    with rate_lock:
        current_time = time.time()
        
        # Ensure we don't exceed 2 requests per second
        if len([t for t in last_request_time if current_time - t < 1.0]) >= 2:
            # Wait until we can make another request
            sleep_time = 1.0 - (current_time - min(last_request_time))
            if sleep_time > 0:
                time.sleep(sleep_time)
        
        # Update request times
        last_request_time[0] = last_request_time[1]
        last_request_time[1] = time.time()
    
    try:
        params = {
            "from": from_email,
            "to": [to_email],
            "subject": subject,
            "html": html_content,
        }
        
        email = resend.Emails.send(params)
        with print_lock:
            print(f"✓ Email sent successfully to {to_email} (ID: {email['id']})")
        return True
    except Exception as e:
        with print_lock:
            print(f"✗ Failed to send email to {to_email}: {e}")
        return False

def process_email_chunk(emails_chunk: List[str], subject: str, html_content: str, from_email: str, emails_file: str, thread_id: int) -> tuple:
    """Process a chunk of emails in a thread with rate limiting"""
    successful_sends = 0
    failed_sends = 0
    
    with print_lock:
        print(f"Thread {thread_id}: Starting to process {len(emails_chunk)} emails")
    
    for email in emails_chunk:
        if send_email_with_rate_limit(email, subject, html_content, from_email):
            successful_sends += 1
            # Remove email from file after successful send
            remove_email_from_file(emails_file, email)
        else:
            failed_sends += 1
    
    with print_lock:
        print(f"Thread {thread_id}: Completed - {successful_sends} successful, {failed_sends} failed")
    
    return successful_sends, failed_sends

def chunk_list(lst: List, chunk_size: int) -> List[List]:
    """Split a list into chunks of specified size"""
    return [lst[i:i + chunk_size] for i in range(0, len(lst), chunk_size)]

def main():
    # Configuration
    RESEND_API_KEY = os.getenv('RESEND_API_KEY') or "re_TauPH9G7_8ECERs6SNkDCQqSaVysR6noq"
    if not RESEND_API_KEY:
        print("Error: RESEND_API_KEY environment variable not set")
        print("Set it with: export RESEND_API_KEY='your_api_key_here'")
        sys.exit(1)
    
    resend.api_key = RESEND_API_KEY
    
    # Email configuration
    FROM_EMAIL = "nerd@nerd.lat"  # Change this to your verified domain
    SUBJECT = "Nerd.lat - Base de Datos ya disponible"
    
    # HTML email content
    HTML_CONTENT = open("html.txt", "r").read()
    
    # Read emails from file
    emails_file = "users.txt"  # Changed to match the new format
    email_addresses = read_emails_from_file(emails_file)
    
    if not email_addresses:
        print("No valid email addresses found in the file.")
        sys.exit(1)
    
    print(f"Found {len(email_addresses)} email addresses")
    
    # Split emails into chunks of 5000
    CHUNK_SIZE = 5000
    email_chunks = chunk_list(email_addresses, CHUNK_SIZE)
    num_threads = len(email_chunks)
    
    print(f"Splitting into {num_threads} threads with {CHUNK_SIZE} emails per thread")
    print("Starting parallel email sending process at 2 emails per second per thread...\n")
    
    # Send emails in parallel using ThreadPoolExecutor
    total_successful = 0
    total_failed = 0
    
    with ThreadPoolExecutor(max_workers=num_threads) as executor:
        # Submit all chunks to thread pool
        future_to_thread = {}
        for i, chunk in enumerate(email_chunks):
            future = executor.submit(process_email_chunk, chunk, SUBJECT, HTML_CONTENT, FROM_EMAIL, emails_file, i+1)
            future_to_thread[future] = i+1
        
        # Collect results as they complete
        for future in as_completed(future_to_thread):
            thread_id = future_to_thread[future]
            try:
                successful, failed = future.result()
                total_successful += successful
                total_failed += failed
            except Exception as exc:
                print(f"Thread {thread_id} generated an exception: {exc}")
    
    # Summary
    print(f"\n=== Email Sending Summary ===")
    print(f"Total emails: {len(email_addresses)}")
    print(f"Threads used: {num_threads}")
    print(f"Successful: {total_successful}")
    print(f"Failed: {total_failed}")

if __name__ == "__main__":
    main()