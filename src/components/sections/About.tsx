'use client'

import React, { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'
import { BentoGrid } from '@/components/ui/BentoGrid'
import { BentoCard } from '@/components/ui/BentoCard'
import { Handshake, Star } from 'lucide-react'

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
      title: 'Early Exposure',
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
      id: 'diversity',
      title: 'Diverse Talent Pool',
      description: 'Access students with diverse backgrounds from all across Ontario.',
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
    {
      id: 'unparalleled-reach',
      title: 'Unparalleled Reach',
      description: 'Over 1 million Canadian students use myBlueprint to research/create a plan for life after high school.',
      icon: (
        <svg className="w-6 h-6 text-primary-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
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
        {/* Bento Grid */}
        <BentoGrid>
          {/* Agenda Card - Notion Embed */}
          <BentoCard
            id="agenda"
            className={cn(
              "col-span-6 bg-white transition-all duration-slow delay-200",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            <h3 className="text-h4-mobile tablet:text-h4 text-brand-navy mb-6 text-center">
              Event Agenda - Click OPEN on the right side of a session title to see the full description
            </h3>
            <div className="w-full">
              <iframe
                src="https://phantom-harrier-dac.notion.site/ebd/278f4a4d79df8042a3f6e26838685056?v=278f4a4d79df803e85a6000c44612ed2"
                className="w-full border-0 rounded-lg"
                style={{ height: '1600px' }}
                allowFullScreen
              />
            </div>
          </BentoCard>
        </BentoGrid>

        {/* Section Header */}
        <div className="text-center mb-12 tablet:mb-16 mt-16">
          <h2 className={cn(
            "text-h2-mobile tablet:text-h2 text-brand-navy transition-all duration-slow",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            What You <span style={{color: '#0092ff'}}>Need to Know</span>
          </h2>
        </div>

        {/* Bento Grid */}
        <BentoGrid>
          {/* Event Logistics Options Card */}
          <BentoCard
            className={cn(
              "col-span-6 bg-white border-l-4 border-primary-blue transition-all duration-slow delay-300",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            {/* Header Section */}
            <div className="mb-6 text-center">
              <h3 className="text-h4-mobile tablet:text-h4 text-brand-navy mb-4">
                Event Logistics
              </h3>
            </div>

            {/* Two-Column Options Grid */}
            <div className="grid grid-cols-1 tablet:grid-cols-2 gap-6 my-8">
              {/* Option 1 - Recommended */}
              <div className="relative border-2 border-primary-blue rounded-lg p-5 bg-white">
                {/* Recommended Badge */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary-blue text-white text-caption px-3 py-1 rounded-full font-semibold">
                    RECOMMENDED
                  </span>
                </div>

                <h4 className="text-h4-mobile text-brand-navy mt-2 mb-3">
                  Option 1: Career Launch Day
                </h4>
                <div className="text-body text-brand-navy leading-relaxed space-y-3">
                  <p>
                    Commit to <strong>December 2nd</strong> being the Career Launch Day with students watching sessions in class. As <strong>the sessions will all be pre-recorded</strong>, the teacher will hit play when they are ready, instead of a predetermined set time that has to work for everyone. Sessions are 45min max so should fit in most classes, along with a pre/post resource we create to compliment each session.
                  </p>
                  <p>
                    With Option 1, we&apos;ll organize sessions into groups, across 4 separate blocks, to ensure no student has to watch the same session twice that day, <strong>just like how a real conference would work</strong>. As a class you&apos;ll pick the session you want to watch out of the ~5 that are available in that block.
                  </p>
                </div>
              </div>

              {/* Option 2 */}
              <div className="border border-neutral-2 rounded-lg p-5 bg-white">
                <h4 className="text-h4-mobile text-brand-navy mb-3 mt-2">
                  Option 2: Career Launch Week
                </h4>
                <div className="text-body text-brand-navy leading-relaxed space-y-3">
                  <p>
                    For schools that can&apos;t commit to the dedicated full day career focus, <strong>position it as Career Launch Week</strong> where over the course of <strong>December 1-5</strong>, educators are encouraged to watch at least one of the sessions with each of their classes, on the days that make the most sense to them.
                  </p>
                  <p>
                    With Option 2, sessions wouldn&apos;t be organized in blocks like a conference, they would be <strong>a la carte like you see them listed in the agenda right now</strong>. The risk with this option is that you could have students who will sit through the same session more than once over the course of the week.
                  </p>
                </div>
              </div>
            </div>

            {/* Footer Section */}
            <div className="space-y-4 pt-4 border-t border-neutral-2 text-center">
              <p className="text-body text-neutral-4 leading-relaxed">
                The whole board doesn&apos;t have to commit to each school doing the same thing. If Option 1 is better for some schools, and Option 2 for others, that&apos;s fine. You don&apos;t need to know who is doing what before securing your spot. We&apos;ll communicate instructions for both options.
              </p>
              <p className="text-body text-brand-navy font-semibold leading-relaxed">
                And as a reminder, with either option, your investment gives you on-demand access to all the Career Launch recordings for students/staff to watch for the remainder of the school year, whether in class, or at home.
              </p>
            </div>
          </BentoCard>
        </BentoGrid>
      </div>
    </section>
  )
}