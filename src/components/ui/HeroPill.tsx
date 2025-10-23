'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface HeroPillProps {
  href?: string
  label: string
  announcement?: string
  className?: string
  isExternal?: boolean
  onClick?: () => void
}

export const HeroPill: React.FC<HeroPillProps> = ({
  href,
  label,
  announcement = '📣 Announcement',
  className,
  isExternal = false,
  onClick,
}) => {
  const baseStyles = cn(
    'inline-flex items-center gap-2 px-4 py-2 rounded-full',
    'bg-secondary-blue-pale/50 ring-1 ring-primary-blue/20',
    'hover:bg-secondary-blue-pale/80 transition-all duration-300',
    'cursor-pointer',
    className
  )

  const content = (
    <>
      {/* Badge */}
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-primary-blue text-white text-xs font-semibold">
        {announcement}
      </span>

      {/* Label */}
      <span className="text-brand-navy text-sm font-medium">
        {label}
      </span>
    </>
  )

  // Render as button if onClick is provided without href
  if (onClick && !href) {
    return (
      <motion.button
        onClick={onClick}
        className={baseStyles}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {content}
      </motion.button>
    )
  }

  // Render as external link
  if (isExternal && href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseStyles}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {content}
      </motion.a>
    )
  }

  // Render as Next.js Link
  if (href) {
    return (
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <Link href={href} className={baseStyles}>
          {content}
        </Link>
      </motion.div>
    )
  }

  // Fallback: render as div
  return (
    <motion.div
      className={baseStyles}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {content}
    </motion.div>
  )
}
