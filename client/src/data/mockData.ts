import { Student, Faculty, PendingApplication, HostelRoom } from '../types';

export const mockStudents: Student[] = [
  {
    id: 'STU001',
    name: 'Alice Johnson',
    email: 'alice.johnson@college.edu',
    phone: '+1234567890',
    department: 'Computer Science',
    year: '2nd Year',
    rollNumber: 'CS2023001',
    dateOfBirth: '2003-05-15',
    address: '123 Main St, City, State',
    guardianName: 'Robert Johnson',
    guardianPhone: '+1234567891',
    admissionDate: '2023-08-15',
    status: 'Active',
    gpa: 3.8,
    feeStatus: 'Paid'
  },
  {
    id: 'STU002',
    name: 'Bob Smith',
    email: 'bob.smith@college.edu',
    phone: '+1234567892',
    department: 'Mechanical Engineering',
    year: '3rd Year',
    rollNumber: 'ME2022001',
    dateOfBirth: '2002-08-22',
    address: '456 Oak Ave, City, State',
    guardianName: 'Mary Smith',
    guardianPhone: '+1234567893',
    admissionDate: '2022-08-15',
    status: 'Active',
    gpa: 3.6,
    feeStatus: 'Pending'
  },
  {
    id: 'STU003',
    name: 'Carol Davis',
    email: 'carol.davis@college.edu',
    phone: '+1234567894',
    department: 'Electrical Engineering',
    year: '1st Year',
    rollNumber: 'EE2024001',
    dateOfBirth: '2004-02-10',
    address: '789 Pine Rd, City, State',
    guardianName: 'James Davis',
    guardianPhone: '+1234567895',
    admissionDate: '2024-08-15',
    status: 'Active',
    gpa: 4.0,
    feeStatus: 'Paid'
  }
];

export const mockFaculty: Faculty[] = [
  {
    id: 'FAC001',
    name: 'Dr. Sarah Wilson',
    email: 'sarah.wilson@college.edu',
    phone: '+1234567896',
    department: 'Computer Science',
    designation: 'Professor',
    dateOfJoining: '2018-08-01',
    qualification: 'Ph.D. in Computer Science',
    experience: 12,
    salary: 85000,
    status: 'Active'
  },
  {
    id: 'FAC002',
    name: 'Dr. Michael Brown',
    email: 'michael.brown@college.edu',
    phone: '+1234567897',
    department: 'Mechanical Engineering',
    designation: 'Associate Professor',
    dateOfJoining: '2020-01-15',
    qualification: 'Ph.D. in Mechanical Engineering',
    experience: 8,
    salary: 75000,
    status: 'Active'
  }
];

export const mockApplications: PendingApplication[] = [
  {
    id: 'APP001',
    studentName: 'David Thompson',
    email: 'david.thompson@email.com',
    phone: '+1234567898',
    department: 'Computer Science',
    year: '1st Year',
    dateOfBirth: '2004-07-18',
    address: '321 Elm St, City, State',
    guardianName: 'Linda Thompson',
    guardianPhone: '+1234567899',
    applicationDate: '2024-12-01',
    documents: ['10th Certificate', '12th Certificate', 'ID Proof'],
    status: 'Pending'
  },
  {
    id: 'APP002',
    studentName: 'Emma Rodriguez',
    email: 'emma.rodriguez@email.com',
    phone: '+1234567800',
    department: 'Electrical Engineering',
    year: '1st Year',
    dateOfBirth: '2004-04-25',
    address: '654 Maple Dr, City, State',
    guardianName: 'Carlos Rodriguez',
    guardianPhone: '+1234567801',
    applicationDate: '2024-12-02',
    documents: ['10th Certificate', '12th Certificate', 'ID Proof', 'Medical Certificate'],
    status: 'Under Review'
  }
];

export const mockHostelRooms: HostelRoom[] = [
  {
    id: 'ROOM001',
    hostelName: 'Gandhi Hostel',
    roomNumber: 'A101',
    floor: 1,
    capacity: 2,
    currentOccupancy: 1,
    type: 'Double',
    facilities: ['Wi-Fi', 'AC', 'Study Table', 'Wardrobe'],
    monthlyRent: 8000,
    occupants: ['Alice Johnson'],
    status: 'Available'
  },
  {
    id: 'ROOM002',
    hostelName: 'Nehru Hostel',
    roomNumber: 'B205',
    floor: 2,
    capacity: 3,
    currentOccupancy: 3,
    type: 'Triple',
    facilities: ['Wi-Fi', 'Fan', 'Study Table', 'Wardrobe'],
    monthlyRent: 6000,
    occupants: ['Bob Smith', 'Carol Davis', 'John Doe'],
    status: 'Full'
  }
];