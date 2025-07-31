'use client'

import React, { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'
import { BentoGrid } from '@/components/ui/BentoGrid'
import { BentoCard } from '@/components/ui/BentoCard'

interface ValuePropItem {
  id: string
  title: string
  description: string
  icon: React.ReactNode
}

export const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  // Value propositions data
  const valueProps: ValuePropItem[] = [
    {
      id: 'reach',
      title: 'Reach Students Early',
      description: 'Connect with students at the beginning of their career journey when they\'re most curious.',
      icon: (
        <svg className="w-6 h-6 text-primary-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      id: 'pipeline',
      title: 'Build Talent Pipelines',
      description: 'Establish early relationships with future talent and create a sustainable recruitment pipeline.',
      icon: (
        <svg className="w-6 h-6 text-primary-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      id: 'culture',
      title: 'Showcase Company Culture',
      description: 'Present your unique workplace culture and values to attract students who align with your mission.',
      icon: (
        <svg className="w-6 h-6 text-primary-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: 'impact',
      title: 'Measurable Impact',
      description: 'Track engagement metrics and receive detailed analytics on student interactions and interests.',
      icon: (
        <svg className="w-6 h-6 text-primary-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      id: 'exclusive',
      title: 'Exclusive Access',
      description: 'Get priority access to emerging talent before they enter the competitive job market.',
      icon: (
        <svg className="w-6 h-6 text-primary-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
    {
      id: 'diversity',
      title: 'Diverse Talent Pool',
      description: 'Access students from diverse backgrounds and 72 school boards across Ontario.',
      icon: (
        <svg className="w-6 h-6 text-primary-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: 'cost-effective',
      title: 'Cost-Effective Recruitment',
      description: 'Reduce traditional recruiting costs while reaching a larger pool of potential candidates.',
      icon: (
        <svg className="w-6 h-6 text-primary-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ]

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="py-16 tablet:py-20 bg-background-light"
    >
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12 tablet:mb-16">
          <h2 className={cn(
            "text-h2-mobile tablet:text-h2 font-bold text-functional-dark transition-all duration-slow",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            Why This <span style={{color: '#0092ff'}}>Opportunity</span> Matters
          </h2>
        </div>

        {/* Bento Grid */}
        <BentoGrid>
          {/* Event Details Card - Small */}
          <BentoCard 
            className={cn(
              "col-span-3 desktop:col-span-1 bg-white border-l-4 border-primary-blue transition-all duration-slow delay-200",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            <h3 className="text-h4-mobile tablet:text-h4 text-functional-dark mb-6">
              Event Details
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent-teal mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="text-body font-semibold text-functional-dark">December 2, 2025</p>
                  <p className="text-body-small text-functional-neutral">Full-day virtual event with extended on-demand access</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent-teal mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <div>
                  <p className="text-body font-semibold text-functional-dark">50,000+ Students</p>
                  <p className="text-body-small text-functional-neutral">From 72 school boards across Ontario</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent-teal mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="text-body font-semibold text-functional-dark">Virtual Format</p>
                  <p className="text-body-small text-functional-neutral">Accessible from anywhere, no travel required</p>
                </div>
              </div>
            </div>
          </BentoCard>

          {/* Statistics Card - Large */}
          <BentoCard 
            className={cn(
              "col-span-3 desktop:col-span-2 flex items-center transition-all duration-slow delay-300",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            <div className="space-y-4">
              <p className="text-body text-functional-dark">
                About 50% of today's students expect to work in just 10 traditional jobs - doctor, teacher, lawyer, engineer - while career opportunities have never been more diverse. The OECD's landmark research shows that 'you cannot be what you cannot see,' and <strong>right now, students aren't seeing your industry</strong>.
              </p>
              <p className="text-body text-functional-dark">
                With career uncertainty at an all-time high and student expectations 3x greater than actual job demand in professional fields, young people need your voice. Research proves that direct employer engagement leads to better employment outcomes at age 25.
              </p>
              <p className="text-body text-functional-dark">
                <strong>Speak at the myBlueprint Career Summit</strong> to help Ontario's students discover the innovative careers, emerging technologies, and non-traditional pathways that exist in your sector.
              </p>
            </div>
          </BentoCard>

          {/* Video Card */}
          <BentoCard 
            className={cn(
              "col-span-3 desktop:col-span-2 p-0 transition-all duration-slow delay-400",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            {/* YouTube Video Embed with 16:9 Aspect Ratio */}
            <div className="p-3 h-full flex items-center">
              <div className="w-full aspect-video">
                <iframe
                  className="w-full h-full rounded-lg"
                  src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1"
                  title="Virtual Career Fair Overview"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </BentoCard>

          {/* Value Props Card */}
          <BentoCard 
            className={cn(
              "col-span-3 desktop:col-span-1 transition-all duration-slow delay-500",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            <h3 className="text-h4-mobile tablet:text-h4 text-functional-dark mb-6">
              Why This? And Why Now?
            </h3>
            <div className="space-y-4">
              {valueProps.map((prop) => (
                <div 
                  key={prop.id}
                  className="flex gap-3"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-secondary-blue-pale rounded-lg flex items-center justify-center">
                    {prop.icon}
                  </div>
                  <div>
                    <h4 className="text-body font-semibold text-functional-dark mb-1">
                      {prop.title}
                    </h4>
                    <p className="text-caption text-functional-neutral">
                      {prop.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </BentoCard>
        </BentoGrid>
      </div>
    </section>
  )
}