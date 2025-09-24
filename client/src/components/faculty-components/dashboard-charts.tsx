import { Bar, BarChart, Line, LineChart, Pie, PieChart, Cell, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'

const attendanceData = [
  { month: 'Jan', attendance: 92 },
  { month: 'Feb', attendance: 89 },
  { month: 'Mar', attendance: 94 },
  { month: 'Apr', attendance: 87 },
  { month: 'May', attendance: 91 },
  { month: 'Jun', attendance: 88 },
]

const gradeDistributionData = [
  { grade: 'A+', count: 245, percentage: 25 },
  { grade: 'A', count: 320, percentage: 33 },
  { grade: 'B+', count: 180, percentage: 18 },
  { grade: 'B', count: 145, percentage: 15 },
  { grade: 'C+', count: 65, percentage: 7 },
  { grade: 'C', count: 25, percentage: 2 },
]


const departmentEnrollmentData = [
  { name: 'Computer Science', value: 450, color: '#3b82f6' },
  { name: 'Electrical Engineering', value: 320, color: '#8b5cf6' },
  { name: 'Mechanical Engineering', value: 280, color: '#06b6d4' },
  { name: 'Biology', value: 220, color: '#10b981' },
  { name: 'Chemistry', value: 180, color: '#f59e0b' },
  { name: 'Physics', value: 150, color: '#ef4444' },
]

export function DashboardCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Attendance Trend */}
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle>Attendance Trend</CardTitle>
          <CardDescription>Monthly attendance percentage over the past 6 months</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={attendanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'hsl(var(--background))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '6px',
                }}
              />
              <Line 
                type="monotone" 
                dataKey="attendance" 
                stroke="url(#attendanceGradient)"
                strokeWidth={3}
                dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: '#3b82f6', strokeWidth: 2 }}
              />
              <defs>
                <linearGradient id="attendanceGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="50%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Grade Distribution */}
      <Card>
        <CardHeader>
          <CardTitle>Grade Distribution</CardTitle>
          <CardDescription>Current semester grade breakdown</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={gradeDistributionData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="grade" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'hsl(var(--background))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '6px',
                }}
              />
              <Bar 
                dataKey="count" 
                fill="url(#gradeGradient)"
                radius={[4, 4, 0, 0]}
              />
              <defs>
                <linearGradient id="gradeGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="50%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Department Enrollment */}
      <Card>
        <CardHeader>
          <CardTitle>Department Enrollment</CardTitle>
          <CardDescription>Student distribution by department</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={departmentEnrollmentData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={120}
                paddingAngle={5}
                dataKey="value"
                
              >
                {departmentEnrollmentData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'hsl(var(--background))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '6px',
                }}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

     
    </div>
  )
}