'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { InfoIcon } from '@/components/ui/Tooltip'
import { TIER_CONFIG, TierConfig } from '@/data/tiers'
import { cn } from '@/lib/utils'

// Additional sponsorship opportunities data
interface AdditionalOpportunity {
  id: string
  title: string
  price: number
  availability: number
  description: string
  highlights: string[]
  featured?: boolean
}

const additionalOpportunities: AdditionalOpportunity[] = [
  {
    id: 'session-track',
    title: 'Sponsor a Session Track',
    price: 2500,
    availability: 5,
    description: '"This session was brought to you by..." for each of the 5 sessions within a track of your choosing',
    highlights: ['Includes 1 min video at start of each track session', 'Reaches all students regardless of session choice', 'Great Booth included at no extra cost']
  },
  {
    id: 'school-board', 
    title: 'Sponsor a School Board',
    price: 3000,
    availability: 20,
    description: 'School boards are investing between 1-3k depending on the size of their board. You can pay for their students to attend',
    highlights: ['Special keynote shoutout & pre/post event communications', 'Email introduction to the school board lead', 'Great Booth included at no extra cost']
  },
  {
    id: 'keynote',
    title: 'Sponsor the Keynote', 
    price: 5000,
    availability: 1,
    description: 'Introduce the keynote speaker, kick off the event, and get premium visibility to all attendees',
    highlights: ['Includes 5 minutes to address all attendees', 'Premium visibility when engagement is the highest', 'Great Booth included at no extra cost'],
    featured: false
  },
  {
    id: 'evening-session',
    title: 'Exclusive Evening Session',
    price: 5000, 
    availability: 1,
    description: 'Host an exclusive (optional) evening session for students to attend from home on zoom.',
    highlights: ['No other sessions will be scheduled at the same time', 'Promoted throughout the event', 'Great Booth included at no extra cost']
  }
]

interface ComparisonFeature {
  category: string
  features: {
    name: string | React.ReactNode
    intern: boolean | string
    apprentice: boolean | string
    freelancer: boolean | string
    specialist: boolean | string
  }[]
}

export const Tiers: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isAdditionalOpen, setIsAdditionalOpen] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const tableRef = useRef<HTMLDivElement>(null)

  // Format price with comma separator
  const formatPrice = (price: number): string => {
    return price.toLocaleString('en-US')
  }

  // Get availability text
  const getAvailabilityText = (tier: TierConfig): string => {
    if (tier.availability === 'unlimited') {
      return 'Unlimited spots'
    }
    if (tier.id === 'freelancer' || tier.id === 'specialist' || tier.id === 'generalist') {
      return 'Limited spots available'
    }
    return `Only ${tier.availability} spots remaining`
  }

  // Determine if tier has limited availability
  const isLimited = (tier: TierConfig): boolean => {
    return tier.limited === true && typeof tier.availability === 'number'
  }

  // Comparison table data
  const comparisonData: ComparisonFeature[] = [
    {
      category: 'Session Structure',
      features: [
        {
          name: (
            <span className="flex items-center gap-1">
              Choice of session time
              <InfoIcon 
                tooltip="Available to the first 5 sponsors. Move fast."
                size="sm"
              />
            </span>
          ),
          intern: false,
          apprentice: false,
          freelancer: false,
          specialist: true,
        },
        {
          name: 'Q&A with students',
          intern: false,
          apprentice: false,
          freelancer: false,
          specialist: true,
        },
        {
          name: 'School day session',
          intern: false,
          apprentice: false,
          freelancer: true,
          specialist: true,
        },
        {
          name: 'Post-event Recording',
          intern: true,
          apprentice: true,
          freelancer: true,
          specialist: true,
        },
      ],
    },
    {
      category: 'Promotion & Analytics',
      features: [
        {
          name: 'Pre & post event promotion',
          intern: false,
          apprentice: false,
          freelancer: true,
          specialist: true,
        },
        {
          name: 'Added to myB content hub',
          intern: false,
          apprentice: false,
          freelancer: true,
          specialist: true,
        },
        {
          name: 'Session analytics',
          intern: false,
          apprentice: false,
          freelancer: true,
          specialist: true,
        },
        {
          name: 'Post-event recording analytics',
          intern: true,
          apprentice: true,
          freelancer: true,
          specialist: true,
        },
      ],
    },
    {
      category: 'Booth Features',
      features: [
        {
          name: 'Engagement activity w/ lead-gen*',
          intern: false,
          apprentice: false,
          freelancer: false,
          specialist: true,
        },
        {
          name: 'Session slides embedded',
          intern: false,
          apprentice: false,
          freelancer: false,
          specialist: true,
        },
        {
          name: 'Custom call to action',
          intern: false,
          apprentice: true,
          freelancer: true,
          specialist: true,
        },
        {
          name: 'Downloadable resources',
          intern: false,
          apprentice: '2',
          freelancer: '3',
          specialist: '5',
        },
        {
          name: '5 min max promo video',
          intern: false,
          apprentice: true,
          freelancer: true,
          specialist: true,
        },
        {
          name: 'Ability for booth raffle',
          intern: false,
          apprentice: true,
          freelancer: true,
          specialist: true,
        },
        {
          name: 'Company description',
          intern: false,
          apprentice: true,
          freelancer: true,
          specialist: true,
        },
      ],
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
      id="tiers" 
      className="py-16 tablet:py-20"
    >
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12 tablet:mb-16">
          <h2 className={cn(
            "text-h2-mobile tablet:text-h2 text-brand-navy mb-4 transition-all duration-slow",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            Choose Your <span style={{color: '#0092ff'}}>Sponsorship</span> Level
          </h2>
          <p className={cn(
            "text-body-large-mobile tablet:text-body-large text-neutral-4 max-w-3xl mx-auto transition-all duration-slow delay-100",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            Something for everyone. And if there isn't, let us know. We can create something custom for you.  
          </p>
        </div>

        {/* Tier Cards Grid */}
        <div 
          ref={cardsRef}
          className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-4 gap-6 mb-16"
        >
          {TIER_CONFIG.map((tier, index) => (
            <Card 
              key={tier.id} 
              variant="tier" 
              featured={tier.featured}
              className={cn(
                "flex flex-col h-full transition-all duration-slow",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              {/* Tier Name */}
              <h3 className="text-h4-mobile tablet:text-h4 text-brand-navy mb-4 text-center">
                {tier.name}
              </h3>

              {/* Price */}
              <div className="text-center mb-4">
                <span className="text-h2-mobile tablet:text-h2 font-bold text-primary-blue">
                  ${formatPrice(tier.price)}
                </span>
              </div>

              {/* Availability */}
              <div className="text-center mb-6">
                <span className={cn(
                  "text-body-small font-medium",
                  isLimited(tier) ? "text-neutral-4" : "text-neutral-4"
                )}>
                  {getAvailabilityText(tier)}
                </span>
              </div>

              {/* Benefits List */}
              <div className="flex-grow mb-6">
                <ul className="space-y-3">
                  {tier.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <svg 
                        className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M5 13l4 4L19 7" 
                        />
                      </svg>
                      <span className="text-body-small text-brand-navy">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <a
                href="https://tidycal.com/damianmatheson/career-launch"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button
                  variant={isLimited(tier) ? "urgency" : tier.featured ? "primary" : "secondary"}
                  size="default"
                  className={cn(
                    "w-full",
                    (tier.id === 'freelancer' || tier.id === 'specialist' || tier.id === 'generalist') && "!bg-[#0092ff] !text-white hover:!bg-[#0076cc] active:!bg-[#005a99]"
                  )}
                >
                  {isLimited(tier) 
                    ? `Book Now - ${tier.availability} left`
                    : tier.featured
                    ? "Book Consultation"
                    : `Choose ${tier.name}`
                  }
                </Button>
              </a>
            </Card>
          ))}
        </div>

        {/* Comparison Table */}
        <div 
          ref={tableRef}
          className={cn(
            "transition-all duration-slow delay-500",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <h3 className="text-h3-mobile tablet:text-h3 text-brand-navy mb-8 text-center">
            Detailed Feature Comparison
          </h3>

          {/* Desktop Table */}
          <div className="hidden desktop:block">
            <table className="w-full border-collapse">
              <thead className="sticky top-[80px] z-40 bg-white">
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4 text-body font-semibold text-brand-navy">
                    Features
                  </th>
                  {TIER_CONFIG.map(tier => (
                    <th 
                      key={tier.id} 
                      className={cn(
                        "py-4 px-4 text-center text-body font-semibold",
                        tier.featured ? "text-[#0092ff]" : "text-brand-navy"
                      )}
                    >
                      {tier.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((category, catIdx) => (
                  <React.Fragment key={catIdx}>
                    <tr className="bg-background-light">
                      <td 
                        colSpan={5} 
                        className="py-3 px-4 text-body font-semibold text-brand-navy"
                      >
                        {category.category}
                      </td>
                    </tr>
                    {category.features.map((feature, featIdx) => (
                      <tr 
                        key={featIdx} 
                        className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                      >
                        <td className="py-3 px-4 text-body-small text-brand-navy">
                          {feature.name}
                        </td>
                        {(['intern', 'apprentice', 'freelancer', 'specialist'] as const).map(tierKey => (
                          <td key={tierKey} className="py-3 px-4 text-center">
                            {typeof feature[tierKey] === 'boolean' ? (
                              feature[tierKey] ? (
                                <svg 
                                  className="w-5 h-5 text-green-600 mx-auto" 
                                  fill="none" 
                                  viewBox="0 0 24 24" 
                                  stroke="currentColor"
                                >
                                  <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M5 13l4 4L19 7" 
                                  />
                                </svg>
                              ) : (
                                <svg 
                                  className="w-5 h-5 text-gray-300 mx-auto" 
                                  fill="none" 
                                  viewBox="0 0 24 24" 
                                  stroke="currentColor"
                                >
                                  <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M6 18L18 6M6 6l12 12" 
                                  />
                                </svg>
                              )
                            ) : (
                              <span className="text-body-small text-brand-navy font-medium">
                                {feature[tierKey]}
                              </span>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile/Tablet Comparison */}
          <div className="desktop:hidden">
            <div className="bg-secondary-blue-pale p-4 rounded-lg mb-4">
              <p className="text-body-small text-primary-blue text-center">
                Swipe left to compare all tiers →
              </p>
            </div>
            <div className="overflow-x-auto -mx-5 px-5">
              <table className="min-w-[600px] w-full border-collapse">
                <thead className="sticky top-[64px] z-40 bg-white">
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 px-3 text-body-small font-semibold text-brand-navy sticky left-0 bg-white z-50">
                      Features
                    </th>
                    {TIER_CONFIG.map(tier => (
                      <th 
                        key={tier.id} 
                        className={cn(
                          "py-3 px-3 text-center text-body-small font-semibold whitespace-nowrap",
                          tier.featured ? "text-[#0092ff]" : "text-brand-navy"
                        )}
                      >
                        {tier.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((category, catIdx) => (
                    <React.Fragment key={catIdx}>
                      <tr className="bg-background-light">
                        <td 
                          colSpan={5} 
                          className="py-2 px-3 text-body-small font-semibold text-brand-navy"
                        >
                          {category.category}
                        </td>
                      </tr>
                      {category.features.map((feature, featIdx) => (
                        <tr 
                          key={featIdx} 
                          className="border-b border-gray-100"
                        >
                          <td className="py-2 px-3 text-body-small text-brand-navy sticky left-0 bg-background-white">
                            {feature.name}
                          </td>
                          {(['intern', 'apprentice', 'freelancer', 'specialist'] as const).map(tierKey => (
                            <td key={tierKey} className="py-2 px-3 text-center">
                              {typeof feature[tierKey] === 'boolean' ? (
                                feature[tierKey] ? (
                                  <span className="text-green-600">✓</span>
                                ) : (
                                  <span className="text-gray-300">✗</span>
                                )
                              ) : (
                                <span className="text-caption text-brand-navy font-medium">
                                  {feature[tierKey]}
                                </span>
                              )}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Additional Sponsorship Opportunities Section */}
        <div className={cn(
          "mt-20 transition-all duration-slow delay-[600ms]",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          {/* Accordion Header */}
          <button
            onClick={() => setIsAdditionalOpen(!isAdditionalOpen)}
            className="w-full bg-background-white border-2 border-[#0092ff] hover:shadow-md rounded-xl p-6 transition-all duration-standard mb-6 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue focus-visible:ring-offset-2"
            aria-expanded={isAdditionalOpen}
            aria-controls="additional-opportunities-content"
            type="button"
          >
            <div className="flex items-center justify-between">
              <div className="text-center flex-1">
                <h3 className="text-h3-mobile tablet:text-h3 text-brand-navy mb-2">
                  Additional Sponsorship Opportunities
                </h3>
                <p className="text-body text-neutral-4">
                  Click to explore other impactful ways to engage with students
                </p>
              </div>
              <div className="flex-shrink-0 ml-4">
                <svg 
                  className={cn(
                    "w-6 h-6 text-primary-blue transition-transform duration-standard",
                    isAdditionalOpen && "rotate-180"
                  )}
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M19 9l-7 7-7-7" 
                  />
                </svg>
              </div>
            </div>
          </button>

          {/* Collapsible Content */}
          <div
            id="additional-opportunities-content"
            className={cn(
              "overflow-hidden transition-all duration-500 ease-in-out",
              isAdditionalOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
            )}
            aria-hidden={!isAdditionalOpen}
          >
            {/* Opportunities Grid */}
            <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-2 gap-6 max-w-5xl mx-auto pt-2">
            {additionalOpportunities.map((opportunity, index) => (
              <div
                key={opportunity.id}
                className={cn(
                  "bg-background-white rounded-xl p-5 border transition-all duration-standard hover:shadow-lg hover:-translate-y-1",
                  opportunity.featured 
                    ? "border-2 border-[#0092ff] shadow-md" 
                    : "border border-gray-100 shadow-sm"
                )}
              >
                {/* Header with Title and Price */}
                <div className="flex justify-between items-center mb-3">
                  <h4 className="text-h4-mobile tablet:text-h4 text-brand-navy flex-1 pr-2">
                    {opportunity.title}
                  </h4>
                  <div className="text-h4-mobile tablet:text-h4 font-bold text-primary-blue">
                    ${opportunity.price.toLocaleString()}
                  </div>
                </div>

                {/* Availability Badge */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 rounded-full text-caption font-semibold bg-secondary-blue-pale text-primary-blue">
                    {opportunity.availability === 1 
                      ? "Only 1 remaining"
                      : `${opportunity.availability} spots remaining`}
                  </span>
                </div>

                {/* Description */}
                <p className="text-body-small text-neutral-5 mb-4">
                  {opportunity.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2 mb-5">
                  {opportunity.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <svg 
                        className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M5 13l4 4L19 7" 
                        />
                      </svg>
                      <span className="text-body-small text-brand-navy">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

            {/* Bottom CTA */}
            <div className="text-center mt-12">
              <p className="text-body text-neutral-4 mb-4">
                Ready to get started? Want to discuss custom options?
              </p>
              <a
                href="https://tidycal.com/damianmatheson/career-launch"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="secondary"
                  size="default"
                >
                  Book a Time to Talk
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}