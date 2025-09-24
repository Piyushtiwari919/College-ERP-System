import { useState } from 'react'
import { ChevronLeft, ChevronRight, Plus, Calendar as CalendarIcon } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Badge } from './ui/badge'

interface CalendarEvent {
  id: string
  title: string
  date: Date
  type: 'exam' | 'meeting' | 'deadline' | 'holiday' | 'event'
  time?: string
  description?: string
}

const mockEvents: CalendarEvent[] = [
  {
    id: '1',
    title: 'Mid-term Exams',
    date: new Date(2024, 2, 15),
    type: 'exam',
    time: '09:00 AM',
    description: 'Computer Science mid-term examinations'
  },
  {
    id: '2',
    title: 'Faculty Meeting',
    date: new Date(2024, 2, 18),
    type: 'meeting',
    time: '02:00 PM',
    description: 'Monthly department meeting'
  },
  {
    id: '3',
    title: 'Assignment Deadline',
    date: new Date(2024, 2, 20),
    type: 'deadline',
    time: '11:59 PM',
    description: 'Data Structures final project due'
  },
  {
    id: '4',
    title: 'Spring Break',
    date: new Date(2024, 2, 25),
    type: 'holiday',
    description: 'University spring break begins'
  },
  {
    id: '5',    
    title: 'Orientation Day',
    date: new Date(2024, 2, 28),
    type: 'event',
    time: '10:00 AM',
    description: 'New student orientation program'
  },
]

const getEventColor = (type: CalendarEvent['type']) => {
  const colorMap = {
    exam: 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400',
    meeting: 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400',
    deadline: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400',
    holiday: 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400',
    event: 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400',
  }
  return colorMap[type]
}

export function FacultyCalendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const getEventsForDate = (date: Date) => {
    return mockEvents.filter(event => 
      event.date.getDate() === date.getDate() &&
      event.date.getMonth() === date.getMonth() &&
      event.date.getFullYear() === date.getFullYear()
    )
  }

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentMonth(prev => {
      const newMonth = new Date(prev)
      if (direction === 'prev') {
        newMonth.setMonth(prev.getMonth() - 1)
      } else {
        newMonth.setMonth(prev.getMonth() + 1)
      }
      return newMonth
    })
  }

  const renderCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentMonth)
    const firstDay = getFirstDayOfMonth(currentMonth)
    const days = []

    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-8"></div>)
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)
      const events = getEventsForDate(date)
      const isToday = new Date().toDateString() === date.toDateString()
      const isSelected = selectedDate?.toDateString() === date.toDateString()

      days.push(
        <div
          key={day}
          className={`h-8 w-8 flex items-center justify-center text-sm cursor-pointer rounded-md transition-colors ${
            isToday ? 'bg-primary text-primary-foreground' :
            isSelected ? 'bg-muted' :
            'hover:bg-muted'
          }`}
          onClick={() => setSelectedDate(date)}
        >
          <span className="relative">
            {day}
            {events.length > 0 && (
              <div className="absolute -top-1 -right-1 h-2 w-2 bg-blue-500 rounded-full"></div>
            )}
          </span>
        </div>
      )
    }

    return days
  }

  const upcomingEvents = mockEvents
    .filter(event => event.date >= new Date())
    .sort((a, b) => a.date.getTime() - b.date.getTime())
    .slice(0, 5)

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="flex items-center gap-2">
            <CalendarIcon className="h-5 w-5" />
            Calendar
          </span>
          <Button size="sm" variant="outline">
            <Plus className="h-4 w-4 mr-1" />
            Add Event
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Calendar Header */}
        <div className="flex items-center justify-between">
          <Button variant="ghost" size="sm" onClick={() => navigateMonth('prev')}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <h3 className="font-semibold">
            {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
          </h3>
          <Button variant="ghost" size="sm" onClick={() => navigateMonth('next')}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Calendar Grid */}
        <div className="space-y-2">
          {/* Week days header */}
          <div className="grid grid-cols-7 gap-1 text-xs text-muted-foreground">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="h-8 flex items-center justify-center font-medium">
                {day}
              </div>
            ))}
          </div>
          
          {/* Calendar days */}
          <div className="grid grid-cols-7 gap-1">
            {renderCalendarDays()}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="space-y-2">
          <h4 className="font-medium text-sm">Upcoming Events</h4>
          <div className="space-y-2 max-h-40 overflow-y-auto">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="flex items-center justify-between p-2 border rounded text-sm">
                <div className="flex-1 min-w-0">
                  <div className="font-medium truncate">{event.title}</div>
                  <div className="text-xs text-muted-foreground">
                    {event.date.toLocaleDateString()} {event.time && `• ${event.time}`}
                  </div>
                </div>
                <Badge variant="secondary" className={getEventColor(event.type)}>
                  {event.type}
                </Badge>
              </div>
            ))}
          </div>
        </div>

        {/* Selected Date Events */}
        {selectedDate && (
          <div className="space-y-2 border-t pt-4">
            <h4 className="font-medium text-sm">
              Events for {selectedDate.toLocaleDateString()}
            </h4>
            {getEventsForDate(selectedDate).length > 0 ? (
              <div className="space-y-2">
                {getEventsForDate(selectedDate).map((event) => (
                  <div key={event.id} className="p-2 border rounded text-sm">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium">{event.title}</span>
                      <Badge variant="secondary" className={getEventColor(event.type)}>
                        {event.type}
                      </Badge>
                    </div>
                    {event.time && (
                      <div className="text-xs text-muted-foreground mb-1">{event.time}</div>
                    )}
                    {event.description && (
                      <div className="text-xs text-muted-foreground">{event.description}</div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">No events scheduled</p>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}