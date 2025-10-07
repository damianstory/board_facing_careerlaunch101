import React from 'react'
import { cn } from '@/lib/utils'

interface BentoGridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export const BentoGrid: React.FC<BentoGridProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        'grid grid-cols-6 gap-4 tablet:gap-6',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}