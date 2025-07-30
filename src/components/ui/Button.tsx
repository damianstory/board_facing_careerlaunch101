import React from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'urgency'
  size?: 'default' | 'mobile'
  children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'default',
  className,
  children,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-standard ease-standard focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'
  
  const variants = {
    primary: 'bg-primary-blue text-primary-white shadow-[0_4px_12px_rgba(0,146,255,0.15)] hover:bg-[#0074CC] hover:shadow-[0_6px_16px_rgba(0,146,255,0.25)] hover:-translate-y-[1px]',
    secondary: 'bg-transparent text-primary-blue border-2 border-primary-blue hover:bg-secondary-blue-pale',
    urgency: 'bg-accent-orange text-primary-white shadow-[0_4px_12px_rgba(249,115,22,0.15)] animate-subtle-pulse',
  }
  
  const sizes = {
    default: 'h-14 px-6 text-button',
    mobile: 'h-12 px-6 text-button-mobile',
  }
  
  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}