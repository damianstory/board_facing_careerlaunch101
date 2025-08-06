'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface FooterProps extends React.HTMLAttributes<HTMLElement> {}

export const Footer: React.FC<FooterProps> = ({ className, ...props }) => {
  return (
    <footer 
      className={cn(
        'border-t border-gray-100 bg-white py-6',
        className
      )} 
      {...props}
    >
      <div className="container">
        <div className="text-center">
          <p className="text-body text-functional-dark">
            © 2025 myBlueprint Career Launch.{' '}
            <a
              href="https://myblueprint.ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-blue hover:underline transition-colors duration-fast"
              aria-label="Visit myBlueprint website (opens in new tab)"
            >
              myBlueprint
            </a>{' '}
            Special Projects.
          </p>
        </div>
      </div>
    </footer>
  )
}