import { Clock, User, FileText, CreditCard, MapPin, Calendar } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { ScrollArea } from './ui/scroll-area'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'

interface Activity {
  id: string
  type: 'registration' | 'payment' | 'exam' | 'hostel' | 'grade' | 'attendance'
  title: string
  description: string
  timestamp: string
  user?: {
    name: string
    avatar?: string
  }
  priority?: 'high' | 'medium' | 'low'
}

const recentActivities: Activity[] = [
  {
    id: '1',
    type: 'registration',
    title: 'New Student Registration',
    description: 'John Doe submitted application for Computer Science',
    timestamp: '2 minutes ago',
    user: { name: 'John Doe' },
    priority: 'high',
  },
 
  {
    id: '3',
    type: 'exam',
    title: 'Exam Results Published',
    description: 'Mid-term results for Data Structures published',
    timestamp: '1 hour ago',
    priority: 'high',
  },
 
  {
    id: '5',
    type: 'grade',
    title: 'Grade Updated',
    description: 'Database Systems grade updated for Carol Davis',
    timestamp: '3 hours ago',
    user: { name: 'Carol Davis' },
    priority: 'medium',
  },
  {
    id: '6',
    type: 'attendance',
    title: 'Attendance Marked',
    description: 'Morning session attendance recorded for CS301',
    timestamp: '4 hours ago',
    priority: 'low',
  },
  {
    id: '7',
    type: 'registration',
    title: 'Document Verification',
    description: 'Academic transcripts verified for Eva Brown',
    timestamp: '5 hours ago',
    user: { name: 'Eva Brown' },
    priority: 'medium',
  },

]

const getActivityIcon = (type: Activity['type']) => {
  const iconMap = {
    registration: User,
    payment: CreditCard,
    exam: FileText,
    hostel: MapPin,
    grade: FileText,
    attendance: Clock,
  }
  return iconMap[type] || User
}

const getActivityColor = (type: Activity['type']) => {
  const colorMap = {
    registration: 'text-blue-500',
    payment: 'text-green-500',
    exam: 'text-purple-500',
    hostel: 'text-orange-500',
    grade: 'text-indigo-500',
    attendance: 'text-cyan-500',
  }
  return colorMap[type] || 'text-gray-500'
}

const getPriorityColor = (priority: Activity['priority']) => {
  const colorMap = {
    high: 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400',
    medium: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400',
    low: 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400',
  }
  return colorMap[priority || 'low']
}

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="h-5 w-5" />
          Recent Activity
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-80">
          <div className="space-y-4">
            {recentActivities.map((activity) => {
              const Icon = getActivityIcon(activity.type)
              
              return (
                <div
                  key={activity.id}
                  className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                >
                  <div className={`p-2 rounded-full bg-muted ${getActivityColor(activity.type)}`}>
                    <Icon className="h-4 w-4" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-medium text-sm truncate">{activity.title}</h4>
                      {activity.priority && (
                        <Badge variant="secondary" className={`${getPriorityColor(activity.priority)} text-xs`}>
                          {activity.priority}
                        </Badge>
                      )}
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-2">{activity.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{activity.timestamp}</span>
                      {activity.user && (
                        <div className="flex items-center space-x-2">
                          <Avatar className="h-6 w-6">
                            <AvatarImage src={activity.user.avatar} alt={activity.user.name} />
                            <AvatarFallback className="text-xs">
                              {activity.user.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <span className="text-xs text-muted-foreground">{activity.user.name}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}