'use client'

import React, { useEffect, useState, useRef } from 'react'
import { Button } from '@/components/ui/Button'
import { LogoCarousel } from '@/components/animations/LogoCarousel'

interface StatisticProps {
  value: number
  suffix?: string
  label: string
}

const AnimatedStatistic: React.FC<StatisticProps> = ({ value, suffix = '', label }) => {
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
  
  return (
    <div ref={ref} className="text-center">
      <div className="text-h2-mobile tablet:text-h2 font-extra-bold text-primary-blue">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-body-small tablet:text-body text-functional-neutral mt-1">
        {label}
      </div>
    </div>
  )
}

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-12 tablet:pt-16 pb-16 tablet:pb-20 bg-gradient-to-b from-secondary-blue-pale/30 to-transparent">
      <div className="container">
        {/* Main Content */}
        <div className="text-center max-w-4xl mx-auto mb-12 tablet:mb-16">
          <h1 className="text-h1-mobile tablet:text-h1 text-functional-dark mb-6">
            Partner with Ontario&apos;s Largest Virtual Career Fair
          </h1>
          <p className="text-body-large-mobile tablet:text-body-large text-functional-neutral mb-8">
            Connect with 50,000+ high school students on December 2, 2025
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col tablet:flex-row gap-4 justify-center items-center">
            <Button
              variant="primary"
              size="default"
              onClick={() => {
                const element = document.getElementById('tiers')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }}
            >
              Explore Sponsorship Tiers
            </Button>
            <Button
              variant="secondary"
              size="default"
              onClick={() => {
                const element = document.getElementById('about')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }}
            >
              Learn More
            </Button>
          </div>
        </div>
        
        {/* Statistics */}
        <div className="grid grid-cols-2 tablet:grid-cols-4 gap-8 mb-12 tablet:mb-16">
          <AnimatedStatistic value={50000} suffix="+" label="Students Attending" />
          <AnimatedStatistic value={72} label="School Boards" />
          <AnimatedStatistic value={25} suffix="+" label="Industry Partners" />
          <AnimatedStatistic value={97} suffix="%" label="Student Satisfaction" />
        </div>
        
        {/* Logo Carousel */}
        <div className="text-center">
          <p className="text-body-small text-functional-neutral mb-6">
            Join leading companies already partnering with us
          </p>
          <LogoCarousel />
        </div>
      </div>
    </section>
  )
}