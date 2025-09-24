import { X, Mail, MessageSquare, Flag, RefreshCw, Download, Edit } from 'lucide-react'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Separator } from '../ui/separator'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { Progress } from '../ui/progress'
import { ScrollArea } from '../ui/scroll-area'

interface Student {
  id: string
  name: string
  email: string
  rollNumber: string
  department: string
  year: string
  status: 'active' | 'inactive' | 'graduated' | 'suspended'
  attendance: number
  gpa: number
  feeStatus: 'paid' | 'pending' | 'overdue'
  avatar?: string
  phone?: string
  address?: string
  parentContact?: string
  admissionDate?: string
  totalCredits?: number
  completedCredits?: number
}

interface StudentSlideOverProps {
  student: Student | null
  isOpen: boolean
  onClose: () => void
}

export function StudentSlideOver({ student, isOpen, onClose }: StudentSlideOverProps) {
  if (!student || !isOpen) return null

  const mockAcademicRecords = [
    { semester: 'Fall 2023', gpa: 3.8, credits: 18, status: 'Completed' },
    { semester: 'Spring 2023', gpa: 3.6, credits: 16, status: 'Completed' },
    { semester: 'Fall 2022', gpa: 3.9, credits: 17, status: 'Completed' },
    { semester: 'Spring 2024', gpa: 4.0, credits: 15, status: 'In Progress' },
  ]

  const mockAttendanceData = [
    { subject: 'Data Structures', attendance: 95, total: 40 },
    { subject: 'Algorithms', attendance: 88, total: 35 },
    { subject: 'Database Systems', attendance: 92, total: 38 },
    { subject: 'Software Engineering', attendance: 85, total: 42 },
  ]

  const mockFeeRecords = [
    { semester: 'Spring 2024', amount: 15000, status: 'Paid', date: '2024-01-15' },
    { semester: 'Fall 2023', amount: 15000, status: 'Paid', date: '2023-08-20' },
    { semester: 'Spring 2023', amount: 14500, status: 'Paid', date: '2023-01-18' },
  ]

  const mockLibraryRecords = [
    { book: 'Introduction to Algorithms', issueDate: '2024-02-15', dueDate: '2024-03-15', status: 'Returned' },
    { book: 'Clean Code', issueDate: '2024-03-01', dueDate: '2024-03-31', status: 'Issued' },
    { book: 'Design Patterns', issueDate: '2024-02-20', dueDate: '2024-03-20', status: 'Overdue' },
  ]

  const mockBadges = [
    { name: 'Academic Excellence', type: 'academic', earned: '2023-12-01' },
    { name: 'Leadership', type: 'leadership', earned: '2023-11-15' },
    { name: 'Community Service', type: 'service', earned: '2023-10-20' },
  ]

  const mockProjects = [
    { name: 'E-Commerce Website', technology: 'React, Node.js', status: 'Completed', grade: 'A+' },
    { name: 'Mobile App Development', technology: 'Flutter, Firebase', status: 'In Progress', grade: '-' },
    { name: 'Machine Learning Model', technology: 'Python, TensorFlow', status: 'Completed', grade: 'A' },
  ]

  const mockCertifications = [
    { name: 'AWS Cloud Practitioner', issuer: 'Amazon Web Services', date: '2023-09-15', status: 'Active' },
    { name: 'Google Analytics', issuer: 'Google', date: '2023-07-20', status: 'Active' },
    { name: 'React Developer', issuer: 'Meta', date: '2023-05-10', status: 'Active' },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
      case 'inactive': return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400'
      case 'graduated': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400'
      case 'suspended': return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getFeeStatusColor = (status: string) => {
    switch (status) {
      case 'paid': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
      case 'pending': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
      case 'overdue': return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 z-50" onClick={onClose} />
      
      {/* Slide Over Panel */}
      <div className="fixed right-0 top-0 h-full w-full max-w-2xl bg-background border-l z-50 transform animate-in slide-in-from-right duration-300">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <div className="flex items-center space-x-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src={student.avatar} alt={student.name} />
                <AvatarFallback>
                  {student.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-xl font-semibold">{student.name}</h2>
                <p className="text-sm text-muted-foreground">{student.rollNumber}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Mail className="h-4 w-4 mr-1" />
                Email
              </Button>
              <Button variant="outline" size="sm">
                <MessageSquare className="h-4 w-4 mr-1" />
                Message
              </Button>
              <Button variant="outline" size="sm">
                <Flag className="h-4 w-4 mr-1" />
                Flag
              </Button>
              <Button variant="ghost" size="sm" onClick={onClose}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Content */}
          <ScrollArea className="flex-1 p-6">
            <div className="space-y-6">
              {/* Basic Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Basic Information
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Department</label>
                      <p>{student.department}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Year</label>
                      <p>{student.year}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Status</label>
                      <Badge variant="secondary" className={getStatusColor(student.status)}>
                        {student.status}
                      </Badge>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Email</label>
                      <p className="text-sm">{student.email}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Phone</label>
                      <p>+1 (555) 123-4567</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Parent Contact</label>
                      <p>+1 (555) 987-6543</p>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Address</label>
                    <p className="text-sm">123 University Street, College Town, ST 12345</p>
                  </div>
                </CardContent>
              </Card>

              {/* Tabs for detailed information */}
              <Tabs defaultValue="academics" className="w-full">
                <TabsList className="grid w-full grid-cols-6">
                  <TabsTrigger value="academics">Academics</TabsTrigger>
                  <TabsTrigger value="attendance">Attendance</TabsTrigger>
                  <TabsTrigger value="fees">Fees</TabsTrigger>
                  <TabsTrigger value="library">Library</TabsTrigger>
                  <TabsTrigger value="badges">Badges</TabsTrigger>
                  <TabsTrigger value="projects">Projects</TabsTrigger>
                </TabsList>

                <TabsContent value="academics" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Academic Performance</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-3 gap-4 mb-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold">{student.gpa}</div>
                          <div className="text-sm text-muted-foreground">Current GPA</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold">65</div>
                          <div className="text-sm text-muted-foreground">Credits Completed</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold">120</div>
                          <div className="text-sm text-muted-foreground">Total Required</div>
                        </div>
                      </div>
                      <Progress value={54} className="mb-4" />
                      <div className="space-y-2">
                        {mockAcademicRecords.map((record, index) => (
                          <div key={index} className="flex justify-between items-center p-2 border rounded">
                            <div>
                              <div className="font-medium">{record.semester}</div>
                              <div className="text-sm text-muted-foreground">{record.credits} credits</div>
                            </div>
                            <div className="text-right">
                              <div className="font-medium">GPA: {record.gpa}</div>
                              <Badge variant="secondary" className="text-xs">
                                {record.status}
                              </Badge>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="attendance" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Attendance Overview</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center mb-4">
                        <div className="text-3xl font-bold">{student.attendance}%</div>
                        <div className="text-sm text-muted-foreground">Overall Attendance</div>
                      </div>
                      <div className="space-y-4">
                        {mockAttendanceData.map((subject, index) => (
                          <div key={index} className="space-y-2">
                            <div className="flex justify-between">
                              <span className="font-medium">{subject.subject}</span>
                              <span className="text-sm text-muted-foreground">
                                {Math.round((subject.attendance * subject.total) / 100)}/{subject.total}
                              </span>
                            </div>
                            <Progress value={subject.attendance} />
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="fees" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        Fee Records
                        <Badge variant="secondary" className={getFeeStatusColor(student.feeStatus)}>
                          {student.feeStatus}
                        </Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {mockFeeRecords.map((record, index) => (
                          <div key={index} className="flex justify-between items-center p-3 border rounded">
                            <div>
                              <div className="font-medium">{record.semester}</div>
                              <div className="text-sm text-muted-foreground">Due: {record.date}</div>
                            </div>
                            <div className="text-right">
                              <div className="font-medium">${record.amount.toLocaleString()}</div>
                              <Badge variant="secondary" className={getFeeStatusColor(record.status.toLowerCase())}>
                                {record.status}
                              </Badge>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="library" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Library Records</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {mockLibraryRecords.map((record, index) => (
                          <div key={index} className="p-3 border rounded">
                            <div className="flex justify-between items-start mb-2">
                              <div className="font-medium">{record.book}</div>
                              <Badge variant="secondary" className={
                                record.status === 'Returned' ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400' :
                                record.status === 'Issued' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400' :
                                'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
                              }>
                                {record.status}
                              </Badge>
                            </div>
                            <div className="text-sm text-muted-foreground">
                              Issued: {record.issueDate} | Due: {record.dueDate}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="badges" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Achievements & Badges</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 gap-3">
                        {mockBadges.map((badge, index) => (
                          <div key={index} className="flex items-center space-x-3 p-3 border rounded">
                            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center">
                              <span className="text-white font-bold text-sm">🏆</span>
                            </div>
                            <div className="flex-1">
                              <div className="font-medium">{badge.name}</div>
                              <div className="text-sm text-muted-foreground">
                                {badge.type} • Earned {badge.earned}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="projects" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Projects & Certifications</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h4 className="font-medium mb-3">Projects</h4>
                        <div className="space-y-3">
                          {mockProjects.map((project, index) => (
                            <div key={index} className="p-3 border rounded">
                              <div className="flex justify-between items-start mb-2">
                                <div className="font-medium">{project.name}</div>
                                <Badge variant="secondary">
                                  {project.grade !== '-' ? `Grade: ${project.grade}` : project.status}
                                </Badge>
                              </div>
                              <div className="text-sm text-muted-foreground">
                                Technology: {project.technology}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Separator />

                      <div>
                        <h4 className="font-medium mb-3">Certifications</h4>
                        <div className="space-y-3">
                          {mockCertifications.map((cert, index) => (
                            <div key={index} className="p-3 border rounded">
                              <div className="flex justify-between items-start mb-2">
                                <div className="font-medium">{cert.name}</div>
                                <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                                  {cert.status}
                                </Badge>
                              </div>
                              <div className="text-sm text-muted-foreground">
                                {cert.issuer} • {cert.date}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>

              {/* Action Buttons */}
              <div className="flex justify-between pt-4 border-t">
                <div className="space-x-2">
                  <Button variant="outline">
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Re-evaluation Request
                  </Button>
                  <Button variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Download Records
                  </Button>
                </div>
                <Badge variant="secondary" className="self-end">
                  Verification Status: Verified
                </Badge>
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </>
  )
}