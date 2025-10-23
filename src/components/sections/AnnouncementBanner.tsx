'use client'

import React from 'react'
import { HeroPill } from '@/components/ui/HeroPill'

interface AnnouncementBannerProps {
  announcement?: string
  label?: string
  href?: string
  isExternal?: boolean
  onClick?: () => void
}

export const AnnouncementBanner: React.FC<AnnouncementBannerProps> = ({
  announcement = '📅 Event Agenda',
  label = 'View Full Schedule',
  href,
  isExternal = false,
  onClick,
}) => {
  return (
    <div className="w-full bg-white py-4">
      <div className="container flex justify-center">
        <HeroPill
          announcement={announcement}
          label={label}
          href={href}
          isExternal={isExternal}
          onClick={onClick}
        />
      </div>
    </div>
  )
}
