'use client'

import React, { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { InfiniteSlider } from '@/components/ui/infinite-slider'

// School board logos
const logos = [
  { id: 1, src: '/logos/algoma.png', alt: 'Algoma District School Board' },
  { id: 2, src: '/logos/bluewater.png', alt: 'Bluewater District School Board' },
  { id: 3, src: '/logos/dufferin-peel.png', alt: 'Dufferin-Peel Catholic District School Board' },
  { id: 4, src: '/logos/grand-erie.png', alt: 'Grand Erie District School Board' },
  { id: 5, src: '/logos/hammer.png', alt: 'Hamilton-Wentworth District School Board' },
  { id: 6, src: '/logos/lambton-kent.png', alt: 'Lambton Kent District School Board' },
  { id: 7, src: '/logos/northwest-catholic.png', alt: 'Northwest Catholic District School Board' },
  { id: 8, src: '/logos/ottawa-catholic.webp', alt: 'Ottawa Catholic District School Board' },
  { id: 9, src: '/logos/peel.png', alt: 'Peel District School Board' },
  { id: 10, src: '/logos/renfrew-county.png', alt: 'Renfrew County District School Board' },
  { id: 11, src: '/logos/toronto-catholic.png', alt: 'Toronto Catholic District School Board' },
  { id: 12, src: '/logos/upper-canada.png', alt: 'Upper Canada District School Board' },
  { id: 13, src: '/logos/upper-grand.webp', alt: 'Upper Grand District School Board' },
]

export const LogoCarousel: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  
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
            gap={48}
            duration={20}
            durationOnHover={40}
            className="py-6"
          >
            {logos.map((logo) => (
              <div
                key={logo.id}
                className="flex-shrink-0 relative flex items-center w-24 h-12 tablet:w-30 tablet:h-15 desktop:w-36 desktop:h-18"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 96px, (max-width: 1024px) 120px, 144px"
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