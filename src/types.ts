export interface User {
  id: string;
  email: string;
  name: string;
  isAdmin?: boolean;
}

export interface Message {
  id: string;
  content: string;
  timestamp: Date;
  isUser: boolean;
  isLoading?: boolean;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  promptCount: number;
}

export interface BookingData {
  confirmationCode: string | null;
  hotel: {
    name: string | null;
    location: string | null;
    image: string | null;
    additionalImages?: string[];
  };
  dates: {
    checkIn: string | null;
    checkOut: string | null;
  };
  room: {
    type: 'single' | 'double' | null;
    pricePerNight: number | null;
    totalPrice: number | null;
  };
  guests: string[];
  totalNights: number | null;
}

export interface WebhookResponse {
  output: string | null;
  type: string | null;
  data: {
    bookingData: BookingData;
  };
}

export interface Company {
  id: string;
  name: string;
  taxId: string;
  address: string;
  phone: string;
  email: string;
  logo?: string;
}

export interface Employee {
  id: string;
  fullName: string;
  documentId: string;
  email: string;
  phone: string;
  position: string;
  startDate: string;
  photo?: string;
  tagIds: string[];
  policyIds: string[];
  department: string;
}

export interface Assignment {
  id: string;
  companyId: string;
  employeeId: string;
  startDate: string;
  role: 'admin' | 'user' | 'manager';
}

export interface Tag {
  id: string;
  name: string;
  color: string;
  description?: string;
}

export interface Policy {
  id: string;
  name: string;
  description: string;
  type: PolicyType;
  value?: number;
  startDate: string;
  endDate: string;
  departments: string[];
  employeeIds: string[];
  status: PolicyStatus;
}

export type PolicyType = 'budget' | 'schedule' | 'benefits' | 'other';
export type PolicyStatus = 'active' | 'inactive' | 'draft' | 'expired';
export type FormMode = 'create' | 'edit';