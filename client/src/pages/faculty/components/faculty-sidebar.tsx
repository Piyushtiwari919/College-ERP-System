import { useState } from 'react'
import { ChevronLeft, ChevronRight, Pin } from 'lucide-react'
import {
  BarChart3,
  BookOpen,
  Calendar,
  CreditCard,
  FileText,
  GraduationCap,
  Home,
  Library,
  MapPin,
  MessageSquare,
  Receipt,
  School,
  Settings,
  Shield,
  Star,
  TrendingUp,
  User,
  Users,
  UserCheck,
  ClipboardCheck,
  Award,
  Code,
  HelpCircle,
  Bot,
  LogIn
} from 'lucide-react'
import { Button } from './ui/button'
import { ScrollArea } from './ui/scroll-area'
import { Separator } from './ui/separator'
import { cn } from './ui/utils'

interface SidebarItem {
  id: string
  label: string
  icon: React.ComponentType<{ className?: string }>
  items?: SidebarItem[]
}

const sidebarItems: SidebarItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: Home },
  { id: 'attendance', label: 'Attendance', icon: UserCheck },
  { id: 're-evaluation', label: 'Re-Evaluation', icon: TrendingUp },
  { id: 'exam-marks', label: 'Exam Marks', icon: Award },
  { id: 'performance', label: 'Performance Analytics', icon: Star },
]

interface FacultySidebarProps {
  isCollapsed: boolean
  onToggleCollapse: () => void
  activeItem: string
  onItemSelect: (itemId: string) => void
}

export function FacultySidebar({ isCollapsed, onToggleCollapse, activeItem, onItemSelect }: FacultySidebarProps) {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set())
  const [isPinned, setIsPinned] = useState(true)

  const toggleExpanded = (itemId: string) => {
    const newExpanded = new Set(expandedItems)
    if (newExpanded.has(itemId)) {
      newExpanded.delete(itemId)
    } else {
      newExpanded.add(itemId)
    }
    setExpandedItems(newExpanded)
  }

  const renderSidebarItem = (item: SidebarItem, depth = 0) => {
    const isActive = activeItem === item.id
    const isExpanded = expandedItems.has(item.id)
    const hasChildren = item.items && item.items.length > 0

    return (
      <div key={item.id} className={cn('mb-1', depth > 0 && 'ml-4')}>
        <Button
          variant={isActive ? 'secondary' : 'ghost'}
          size="sm"
          className={cn(
            'w-full justify-start px-2 py-1.5 h-8 transition-all duration-200',
            isCollapsed && !hasChildren && 'px-0 justify-center',
            isActive && 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-l-2 border-blue-500'
          )}
          onClick={() => {
            if (hasChildren) {
              toggleExpanded(item.id)
            } else {
              onItemSelect(item.id)
            }
          }}
        >
          <item.icon className={cn('h-4 w-4', !isCollapsed && 'mr-2')} />
          {!isCollapsed && (
            <>
              <span className="flex-1 text-left truncate">{item.label}</span>
              {hasChildren && (
                <ChevronRight
                  className={cn(
                    'h-3 w-3 transition-transform duration-200',
                    isExpanded && 'rotate-90'
                  )}
                />
              )}
            </>
          )}
        </Button>

        {hasChildren && isExpanded && !isCollapsed && (
          <div className="mt-1 space-y-1">
            {item.items?.map((child) => renderSidebarItem(child, depth + 1))}
          </div>
        )}
      </div>
    )
  }

  return (
    <div
      className={cn(
        'relative flex flex-col h-full bg-sidebar border-r border-sidebar-border transition-all duration-300',
        isCollapsed ? 'w-16' : 'w-64'
      )}
    >
      {!isCollapsed && (
        <div className="flex items-center justify-between p-3 border-b border-sidebar-border">
          <span className="font-semibold text-sidebar-foreground">Navigation</span>
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="sm"
              className="w-6 h-6 p-0"
              onClick={() => setIsPinned(!isPinned)}
            >
              <Pin className={cn('h-3 w-3', isPinned && 'text-blue-500')} />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="w-6 h-6 p-0"
              onClick={onToggleCollapse}
            >
              <ChevronLeft className="h-3 w-3" />
            </Button>
          </div>
        </div>
      )}

      {isCollapsed && (
        <div className="flex justify-center p-2 border-b border-sidebar-border">
          <Button
            variant="ghost"
            size="sm"
            className="w-8 h-8 p-0"
            onClick={onToggleCollapse}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}

      <ScrollArea className="flex-1 px-2 py-2">
        <div className="space-y-1">
          {sidebarItems.map((item) => renderSidebarItem(item))}
        </div>
      </ScrollArea>

      {!isCollapsed && (
        <>
          <Separator />
          <div className="p-3">
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
          </div>
        </>
      )}
    </div>
  )
}