import { Plus, UserPlus, Calendar, MapPin, CreditCard, Bell } from 'lucide-react'
import { Button } from './ui/button'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

const quickActions = [
  {
    id: 'add-student',
    label: 'Add Student',
    icon: UserPlus,
    description: 'Register new student',
    color: 'bg-blue-500 hover:bg-blue-600',
  },
  {
    id: 'create-exam',
    label: 'Create Exam',
    icon: Calendar,
    description: 'Schedule new examination',
    color: 'bg-green-500 hover:bg-green-600',
  },
  {
    id: 'generate-admit-card',
    label: 'Generate Admit Card',
    icon: CreditCard,
    description: 'Create exam permits',
    color: 'bg-orange-500 hover:bg-orange-600',
  },
  {
    id: 'send-notification',
    label: 'Send Notification',
    icon: Bell,
    description: 'Broadcast messages',
    color: 'bg-red-500 hover:bg-red-600',
  },
]

export function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Plus className="h-5 w-5" />
          Quick Actions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap items-stretch" style={{ justifyContent: 'space-evenly' }}>
          {quickActions.map((action) => (
            <Button
              key={action.id}
              variant="outline"
              className="flex-grow flex flex-col items-center justify-center h-auto min-h-[100px] p-4 text-center space-y-2 hover:scale-105 transition-all duration-200"
            >
              <div className={`p-2 rounded-full ${action.color} text-white`}>
                <action.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-medium">{action.label}</div>
                <div className="text-xs text-muted-foreground">{action.description}</div>
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}