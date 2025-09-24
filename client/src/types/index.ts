export interface Student {
  id: string;
  name: string;
  email: string;
  phone: string;
  department: string;
  year: string;
  rollNumber: string;
  dateOfBirth: string;
  address: string;
  guardianName: string;
  guardianPhone: string;
  admissionDate: string;
  status: 'Active' | 'Inactive' | 'Graduated';
  gpa: number;
  feeStatus: 'Paid' | 'Pending' | 'Overdue';
}

export interface Faculty {
  id: string;
  name: string;
  email: string;
  phone: string;
  department: string;
  designation: string;
  dateOfJoining: string;
  qualification: string;
  experience: number;
  salary: number;
  status: 'Active' | 'Inactive';
}

export interface PendingApplication {
  id: string;
  studentName: string;
  email: string;
  phone: string;
  department: string;
  year: string;
  dateOfBirth: string;
  address: string;
  guardianName: string;
  guardianPhone: string;
  applicationDate: string;
  documents: string[];
  status: 'Pending' | 'Under Review';
}

export interface HostelRoom {
  id: string;
  hostelName: string;
  roomNumber: string;
  floor: number;
  capacity: number;
  currentOccupancy: number;
  type: 'Single' | 'Double' | 'Triple' | 'Quad';
  facilities: string[];
  monthlyRent: number;
  occupants: string[];
  status: 'Available' | 'Full' | 'Maintenance';
}

export interface KPIData {
  title: string;
  value: number;
  change: number;
  trend: 'up' | 'down';
  icon: string;
}