'use client'

import React, { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

// Generate placeholder logos array (1-25)
const generateLogoArray = () => {
  return Array.from({ length: 25 }, (_, i) => ({
    id: i + 1,
    src: `/logos/logo-${i + 1}.png`,
    alt: `Company ${i + 1} Logo`,
  }))
}

export const LogoCarousel: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const logos = generateLogoArray()
  
  // Duplicate logos for seamless scrolling
  const duplicatedLogos = [...logos, ...logos]
  
  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )
    
    if (containerRef.current) {
      observer.observe(containerRef.current)
    }
    
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [])
  
  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {isVisible && (
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 tablet:w-32 bg-gradient-to-r from-background-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 tablet:w-32 bg-gradient-to-l from-background-white to-transparent z-10 pointer-events-none" />
          
          {/* Logo Track */}
          <div
            className={cn(
              'flex items-center gap-8 tablet:gap-12',
              isPaused ? '' : 'animate-scroll-left'
            )}
            style={{
              animationPlayState: isPaused ? 'paused' : 'running',
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`${logo.id}-${index}`}
                className="flex-shrink-0 w-24 h-12 tablet:w-32 tablet:h-16 relative"
              >
                {/* Placeholder div with company name */}
                <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center">
                  <span className="text-caption tablet:text-body-small text-functional-neutral font-medium">
                    Company {logo.id}
                  </span>
                </div>
                {/* Next/Image will be used when actual logos are available */}
                {/* <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 96px, 128px"
                /> */}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}