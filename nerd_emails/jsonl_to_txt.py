#!/usr/bin/env python3
"""
JSONL to TXT converter
Reads documents.jsonl and extracts name and email to create a formatted txt file
"""

import json
import sys
import os

def parse_jsonl_to_txt(input_file: str = "documents.jsonl", output_file: str = "users.txt"):
    """Parse JSONL file and extract name and email to txt format"""
    
    if not os.path.exists(input_file):
        print(f"Error: Input file '{input_file}' not found.")
        sys.exit(1)
    
    processed_count = 0
    skipped_count = 0
    
    try:
        with open(input_file, 'r', encoding='utf-8') as infile, \
             open(output_file, 'w', encoding='utf-8') as outfile:
            
            for line_num, line in enumerate(infile, 1):
                line = line.strip()
                if not line:
                    continue
                
                try:
                    # Parse JSON line
                    data = json.loads(line)
                    
                    # Extract name and email
                    name = data.get('name', 'Unknown')
                    email = data.get('email', '')
                    
                    # Skip if no email
                    if not email or '@' not in email:
                        print(f"⚠️  Line {line_num}: Skipping - no valid email found")
                        skipped_count += 1
                        continue
                    
                    # Format: Name: {name}, Email: {email}
                    formatted_line = f"Name: {name}, Email: {email}\n"
                    outfile.write(formatted_line)
                    processed_count += 1
                    
                    print(f"✓ Processed: {name} ({email})")
                    
                except json.JSONDecodeError as e:
                    print(f"⚠️  Line {line_num}: Invalid JSON - {e}")
                    skipped_count = 1
                    continue
                except Exception as e:
                    print(f"⚠️  Line {line_num}: Error processing - {e}")
                    skipped_count += 1
                    continue
    
    except Exception as e:
        print(f"Error processing files: {e}")
        sys.exit(1)
    
    # Summary
    print(f"\n=== Conversion Summary ===")
    print(f"Processed: {processed_count} users")
    print(f"Skipped: {skipped_count} lines")
    print(f"Output saved to: {output_file}")

def main():
    """Main function"""
    input_file = "documents.jsonl"
    output_file = "users.txt"
    
    # Check for command line arguments
    if len(sys.argv) > 1:
        input_file = sys.argv[1]
    if len(sys.argv) > 2:
        output_file = sys.argv[2]
    
    print(f"Converting {input_file} to {output_file}...")
    parse_jsonl_to_txt(input_file, output_file)

if __name__ == "__main__":
    main()