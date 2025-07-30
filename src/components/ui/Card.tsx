import React from 'react'
import { cn } from '@/lib/utils'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'tier' | 'content'
  featured?: boolean
  children: React.ReactNode
}

export const Card: React.FC<CardProps> = ({
  variant = 'content',
  featured = false,
  className,
  children,
  ...props
}) => {
  const baseStyles = 'rounded-2xl bg-background-white transition-all duration-standard ease-decelerate'
  
  const variants = {
    tier: cn(
      'p-8 tablet:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-100',
      'hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)]',
      featured && 'border-2 border-[#0092ff] relative'
    ),
    content: 'p-5 tablet:p-6 shadow-[0_2px_12px_rgba(0,0,0,0.05)]',
  }
  
  return (
    <div
      className={cn(
        baseStyles,
        variants[variant],
        className
      )}
      {...props}
    >
      {featured && variant === 'tier' && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0092ff] text-white px-4 py-1 rounded-xl text-caption font-bold uppercase tracking-wider text-center">
          BEST VALUE
        </span>
      )}
      {children}
    </div>
  )
}