import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { cn } from './ui/utils'

interface KPICardProps {
  title: string
  value: number | string
  previousValue?: number
  suffix?: string
  prefix?: string
  icon?: React.ComponentType<{ className?: string }>
  trend?: 'up' | 'down' | 'neutral'
  trendValue?: number
  className?: string
  animated?: boolean
}

export function KPICard({
  title,
  value,
  previousValue,
  suffix = '',
  prefix = '',
  icon: Icon,
  trend,
  trendValue,
  className,
  animated = true
}: KPICardProps) {
  const [displayValue, setDisplayValue] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const numericValue = typeof value === 'number' ? value : 0

  useEffect(() => {
    setIsVisible(true)
    if (animated && typeof value === 'number') {
      let start = 0
      const end = numericValue
      const duration = 1500
      const increment = Math.ceil(end / (duration / 16))

      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setDisplayValue(end)
          clearInterval(timer)
        } else {
          setDisplayValue(start)
        }
      }, 16)

      return () => clearInterval(timer)
    } else {
      setDisplayValue(numericValue)
    }
  }, [value, animated, numericValue])

  const getTrendColor = () => {
    if (trend === 'up') return 'text-green-500'
    if (trend === 'down') return 'text-red-500'
    return 'text-muted-foreground'
  }

  const getTrendIcon = () => {
    if (trend === 'up') return '↗'
    if (trend === 'down') return '↘'
    return '→'
  }

  return (
    <Card className={cn(
      'transition-all duration-300 hover:shadow-lg hover:-translate-y-1',
      'bg-gradient-to-br from-background to-background/50',
      'border-border/50 backdrop-blur-sm',
      isVisible && 'animate-in slide-in-from-bottom-4 duration-500',
      className
    )}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        {Icon && (
          <Icon className="h-4 w-4 text-muted-foreground" />
        )}
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline justify-between">
          <div className="text-2xl font-bold">
            {prefix}
            {animated && typeof value === 'number' 
              ? displayValue.toLocaleString() 
              : value
            }
            {suffix}
          </div>
          {trend && trendValue && (
            <div className={cn('flex items-center text-xs', getTrendColor())}>
              {getTrendIcon()}
              <span className="ml-1">
                {trendValue > 0 ? '+' : ''}{trendValue}%
              </span>
            </div>
          )}
        </div>
        {previousValue && (
          <p className="text-xs text-muted-foreground mt-1">
            Previous: {previousValue.toLocaleString()}
          </p>
        )}
      </CardContent>
    </Card>
  )
}