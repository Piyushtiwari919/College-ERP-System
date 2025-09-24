import { CheckCircle, Clock, AlertCircle, Users, FileText, Calendar } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { ScrollArea } from './ui/scroll-area'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'

interface Task {
  id: string
  title: string
  description: string
  priority: 'high' | 'medium' | 'low'
  status: 'pending' | 'in-progress' | 'completed'
  dueDate: string
  category: 'approval' | 'review' | 'administrative'
  count?: number
}

const tasks: Task[] = [
  {
    id: '1',
    title: 'Review Student Applications',
    description: 'Review and approve 12 new student applications for Computer Science department',
    priority: 'high',
    status: 'pending',
    dueDate: 'Today',
    category: 'approval',
    count: 12,
  },
  {
    id: '2',
    title: 'Grade Assignment Submissions',
    description: 'Grade final project submissions for Data Structures course',
    priority: 'high',
    status: 'in-progress',
    dueDate: 'Tomorrow',
    category: 'review',
    count: 28,
  },


  {
    id: '5',
    title: 'Exam Schedule Planning',
    description: 'Finalize mid-term examination schedule for next month',
    priority: 'low',
    status: 'pending',
    dueDate: '1 week',
    category: 'administrative',
  },
  {
    id: '6',
    title: 'Faculty Performance Reviews',
    description: 'Complete annual performance reviews for department faculty',
    priority: 'medium',
    status: 'in-progress',
    dueDate: '1 week',
    category: 'review',
    count: 15,
  },
]

const approvals = tasks.filter(task => task.category === 'approval')
const reviews = tasks.filter(task => task.category === 'review')
const administrative = tasks.filter(task => task.category === 'administrative')

const getPriorityColor = (priority: Task['priority']) => {
  const colorMap = {
    high: 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400',
    medium: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400',
    low: 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400',
  }
  return colorMap[priority]
}

const getStatusIcon = (status: Task['status']) => {
  const iconMap = {
    pending: Clock,
    'in-progress': AlertCircle,
    completed: CheckCircle,
  }
  return iconMap[status]
}

const getStatusColor = (status: Task['status']) => {
  const colorMap = {
    pending: 'text-yellow-500',
    'in-progress': 'text-blue-500',
    completed: 'text-green-500',
  }
  return colorMap[status]
}

function TaskCard({ task }: { task: Task }) {
  const StatusIcon = getStatusIcon(task.status)
  
  return (
    <div className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center space-x-2">
          <h4 className="font-medium text-sm">{task.title}</h4>
          {task.count && (
            <Badge variant="secondary" className="text-xs">
              {task.count}
            </Badge>
          )}
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="secondary" className={getPriorityColor(task.priority)}>
            {task.priority}
          </Badge>
          <StatusIcon className={`h-4 w-4 ${getStatusColor(task.status)}`} />
        </div>
      </div>
      
      <p className="text-sm text-muted-foreground mb-3">{task.description}</p>
      
      <div className="flex items-center justify-between">
        <span className="text-xs text-muted-foreground">Due: {task.dueDate}</span>
        <div className="space-x-2">
          {task.status === 'pending' && (
            <Button size="sm" variant="outline">
              Start
            </Button>
          )}
          {task.status === 'in-progress' && (
            <Button size="sm" variant="outline">
              Continue
            </Button>
          )}
          {task.status === 'completed' && (
            <Button size="sm" variant="ghost" disabled>
              Completed
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

export function FacultyTasks() {
  const pendingCount = tasks.filter(t => t.status === 'pending').length
  const inProgressCount = tasks.filter(t => t.status === 'in-progress').length
  
  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Faculty Tasks & Approvals
          </span>
          <div className="flex items-center space-x-2">
            <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400">
              {pendingCount} pending
            </Badge>
            <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400">
              {inProgressCount} in progress
            </Badge>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="approvals" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="approvals" className="text-xs">
              Approvals ({approvals.length})
            </TabsTrigger>
            <TabsTrigger value="reviews" className="text-xs">
              Reviews ({reviews.length})
            </TabsTrigger>
            <TabsTrigger value="admin" className="text-xs">
              Admin ({administrative.length})
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="approvals">
            <ScrollArea className="h-80">
              <div className="space-y-3">
                {approvals.map((task) => (
                  <TaskCard key={task.id} task={task} />
                ))}
              </div>
            </ScrollArea>
          </TabsContent>
          
          <TabsContent value="reviews">
            <ScrollArea className="h-80">
              <div className="space-y-3">
                {reviews.map((task) => (
                  <TaskCard key={task.id} task={task} />
                ))}
              </div>
            </ScrollArea>
          </TabsContent>
          
          <TabsContent value="admin">
            <ScrollArea className="h-80">
              <div className="space-y-3">
                {administrative.map((task) => (
                  <TaskCard key={task.id} task={task} />
                ))}
              </div>
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}