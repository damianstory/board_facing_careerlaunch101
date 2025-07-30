'use client'

import React, { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { InfiniteSlider } from '@/components/ui/infinite-slider'

// Generate placeholder logos array (1-25)
const generateLogoArray = () => {
  return Array.from({ length: 25 }, (_, i) => ({
    id: i + 1,
    src: `/logos/coming-soon.jpg`,
    alt: `Company ${i + 1} Logo`,
  }))
}

export const LogoCarousel: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const logos = generateLogoArray()
  
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
    >
      {isVisible && (
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 tablet:w-32 bg-gradient-to-r from-background-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 tablet:w-32 bg-gradient-to-l from-background-white to-transparent z-10 pointer-events-none" />
          
          {/* Logo Track using InfiniteSlider */}
          <InfiniteSlider
            gap={32}
            duration={35}
            durationOnHover={70}
            className="py-4"
          >
            {logos.map((logo) => (
              <div
                key={logo.id}
                className="flex-shrink-0 w-24 h-12 tablet:w-32 tablet:h-16 relative"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 96px, 128px"
                  priority={logo.id <= 5}
                />
              </div>
            ))}
          </InfiniteSlider>
        </div>
      )}
    </div>
  )
}