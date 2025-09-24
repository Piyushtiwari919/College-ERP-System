import { CreditCard, Download, Eye, FileText, Printer, Search, User } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card'
import { Button } from '../../../components/ui/button'
import { Badge } from '../../../components/ui/badge'
import { Input } from '../../../components/ui/input'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../../components/ui/table'
import { KPICard } from '../../../components/faculty-components/kpi-card'
import { Avatar, AvatarFallback, AvatarImage } from '../../../components/ui/avatar'

const admitCards = [
  {
    id: '1',
    studentName: 'Alice Johnson',
    rollNo: 'CS21001',
    examType: 'Mid-term Examination',
    subjects: ['Data Structures', 'Database Management', 'Software Engineering'],
    examDate: '2024-03-15',
    venue: 'Hall A',
    status: 'generated',
    downloadCount: 5
  },
  {
    id: '2',
    studentName: 'Bob Smith',
    rollNo: 'CS21002',
    examType: 'Final Examination',
    subjects: ['Computer Networks', 'Operating Systems'],
    examDate: '2024-03-18',
    venue: 'Hall B',
    status: 'generated',
    downloadCount: 2
  },
  {
    id: '3',
    studentName: 'Carol Davis',
    rollNo: 'CS21003',
    examType: 'Mid-term Examination',
    subjects: ['Data Structures', 'Algorithms'],
    examDate: '2024-03-20',
    venue: 'Lab 1',
    status: 'pending',
    downloadCount: 0
  },
  {
    id: '4',
    studentName: 'David Wilson',
    rollNo: 'CS21004',
    examType: 'Final Examination',
    subjects: ['Web Development', 'Mobile Computing'],
    examDate: '2024-03-22',
    venue: 'Hall C',
    status: 'generated',
    downloadCount: 3
  }
]

const getStatusColor = (status: string) => {
  switch (status) {
    case 'generated': return 'bg-gradient-to-r from-green-400 to-emerald-500 text-white'
    case 'pending': return 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white'
    case 'expired': return 'bg-gradient-to-r from-red-400 to-red-500 text-white'
    default: return 'bg-gradient-to-r from-gray-400 to-gray-500 text-white'
  }
}

export function AdmitCardPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Admit Card Management
          </h1>
          <p className="text-muted-foreground mt-2">Generate and manage examination admit cards</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Printer className="h-4 w-4 mr-2" />
            Bulk Print
          </Button>
          <Button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700">
            <FileText className="h-4 w-4 mr-2" />
            Generate Cards
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <KPICard
          title="Total Cards"
          value={156}
          icon={CreditCard}
          className="bg-gradient-to-br from-purple-50 to-violet-100 dark:from-purple-950/20 dark:to-violet-950/20 border-purple-200 dark:border-purple-800"
        />
        <KPICard
          title="Generated"
          value={142}
          icon={FileText}
          className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950/20 dark:to-emerald-950/20 border-green-200 dark:border-green-800"
        />
        <KPICard
          title="Pending"
          value={14}
          icon={FileText}
          className="bg-gradient-to-br from-yellow-50 to-amber-100 dark:from-yellow-950/20 dark:to-amber-950/20 border-yellow-200 dark:border-yellow-800"
        />
        <KPICard
          title="Downloads"
          value={287}
          icon={Download}
          className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950/20 dark:to-indigo-950/20 border-blue-200 dark:border-blue-800"
        />
      </div>

      {/* Search and Filters */}
      <Card className="glass-card">
        <CardContent className="p-6">
          <div className="flex items-center space-x-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by student name or roll number..."
                className="pl-8"
              />
            </div>
            <Button variant="outline">
              <FileText className="h-4 w-4 mr-2" />
              Generate All
            </Button>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Download All
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Admit Cards Table */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="h-5 w-5 text-purple-500" />
            Admit Cards
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/10 dark:to-pink-950/10">
                  <TableHead>Student</TableHead>
                  <TableHead>Roll Number</TableHead>
                  <TableHead>Exam Type</TableHead>
                  <TableHead>Subjects</TableHead>
                  <TableHead>Exam Date</TableHead>
                  <TableHead>Venue</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Downloads</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {admitCards.map((card) => (
                  <TableRow key={card.id} className="hover:bg-gradient-to-r hover:from-purple-50/50 hover:to-pink-50/50 dark:hover:from-purple-950/5 dark:hover:to-pink-950/5">
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src="" alt={card.studentName} />
                          <AvatarFallback>
                            {card.studentName.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <span className="font-medium">{card.studentName}</span>
                      </div>
                    </TableCell>
                    <TableCell className="font-mono text-sm">{card.rollNo}</TableCell>
                    <TableCell>{card.examType}</TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {card.subjects.slice(0, 2).map((subject, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {subject}
                          </Badge>
                        ))}
                        {card.subjects.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{card.subjects.length - 2} more
                          </Badge>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>{new Date(card.examDate).toLocaleDateString()}</TableCell>
                    <TableCell>{card.venue}</TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(card.status)}>
                        {card.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Download className="h-3 w-3 text-muted-foreground" />
                        {card.downloadCount}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-3 w-3 mr-1" />
                          Preview
                        </Button>
                        <Button variant="outline" size="sm">
                          <Download className="h-3 w-3 mr-1" />
                          Download
                        </Button>
                        <Button variant="outline" size="sm">
                          <Printer className="h-3 w-3 mr-1" />
                          Print
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Admit Card Preview */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle>Admit Card Preview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 p-6 rounded-lg border">
              <div className="text-center mb-6">
                <div className="h-12 w-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">KG</span>
                </div>
                <h2 className="text-xl font-bold">University Name</h2>
                <p className="text-sm text-muted-foreground">Mid-term Examination - Spring 2024</p>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <div className="space-y-2">
                    <div className="flex">
                      <span className="font-medium w-24">Name:</span>
                      <span>Alice Johnson</span>
                    </div>
                    <div className="flex">
                      <span className="font-medium w-24">Roll No:</span>
                      <span className="font-mono">CS21001</span>
                    </div>
                    <div className="flex">
                      <span className="font-medium w-24">Program:</span>
                      <span>Computer Science</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="space-y-2">
                    <div className="flex">
                      <span className="font-medium w-24">Date:</span>
                      <span>March 15, 2024</span>
                    </div>
                    <div className="flex">
                      <span className="font-medium w-24">Time:</span>
                      <span>09:00 AM - 12:00 PM</span>
                    </div>
                    <div className="flex">
                      <span className="font-medium w-24">Venue:</span>
                      <span>Hall A</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="font-medium mb-2">Subjects:</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-gradient-to-r from-purple-400 to-pink-500 text-white">Data Structures</Badge>
                  <Badge className="bg-gradient-to-r from-purple-400 to-pink-500 text-white">Database Management</Badge>
                  <Badge className="bg-gradient-to-r from-purple-400 to-pink-500 text-white">Software Engineering</Badge>
                </div>
              </div>
              
              <div className="border-t pt-4 text-xs text-muted-foreground">
                <p>• Students must bring this admit card to the examination hall</p>
                <p>• Entry without admit card is strictly prohibited</p>
                <p>• Report to the examination hall 30 minutes before the exam</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}