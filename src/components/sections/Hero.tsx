'use client'

import React, { useEffect, useState, useRef } from 'react'
import Image from 'next/image'

interface StatisticProps {
  value: number | string
  suffix?: string
  label: string
  format?: 'number' | 'k'
}

const AnimatedStatistic: React.FC<StatisticProps> = ({ value, suffix = '', label, format = 'number' }) => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )
    
    if (ref.current) {
      observer.observe(ref.current)
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])
  
  useEffect(() => {
    if (!isVisible) return
    
    // If value is a string, don't animate
    if (typeof value === 'string') {
      setCount(value as any)
      return
    }
    
    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0
    
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    
    return () => clearInterval(timer)
  }, [isVisible, value])
  
  const formatValue = (val: number | string) => {
    if (typeof val === 'string') return val
    if (format === 'k') {
      return val >= 1000 ? `${Math.floor(val / 1000)}k` : val.toString()
    }
    return val.toLocaleString()
  }
  
  return (
    <div ref={ref} className="text-left">
      <div className="text-h2-mobile tablet:text-h2 font-extra-bold text-white">
        {formatValue(count)}{suffix}
      </div>
      <div className="text-body-small tablet:text-body text-white/80 mt-1">
        {label}
      </div>
    </div>
  )
}

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-[600px] tablet:h-[700px] desktop:h-[800px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-background.jpg"
          alt="Virtual career fair background"
          fill
          className="object-cover"
          priority
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container">
          <div className="max-w-2xl">
            {/* Main Content */}
            <h1 className="text-h1-mobile tablet:text-h1 text-white mb-6">
              Partner with Ontario&apos;s Largest Virtual Career Fair
            </h1>
            <p className="text-body-large-mobile tablet:text-body-large text-white/90 mb-12">
              Connect with 50,000+ high school students on December 2, 2025
            </p>
            
            {/* Statistics */}
            <div className="grid grid-cols-3 gap-6 tablet:gap-8">
              <AnimatedStatistic value={50000} suffix="+" label="Students Attending" format="k" />
              <AnimatedStatistic value={72} label="School Boards" />
              <AnimatedStatistic value={40} suffix="+" label="Industry Partners" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}