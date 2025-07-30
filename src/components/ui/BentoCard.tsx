import React from 'react'
import { cn } from '@/lib/utils'

interface BentoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  background?: React.ReactNode
}

export const BentoCard: React.FC<BentoCardProps> = ({
  children,
  background,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-xl bg-background-white p-6 tablet:p-8',
        'shadow-[0_2px_12px_rgba(0,0,0,0.05)] transition-all duration-standard',
        'hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)]',
        className
      )}
      {...props}
    >
      {background && (
        <div className="absolute inset-0 z-0">
          {background}
        </div>
      )}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}