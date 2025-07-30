'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { TIER_CONFIG, TierConfig } from '@/data/tiers'
import { cn } from '@/lib/utils'

interface ComparisonFeature {
  category: string
  features: {
    name: string
    intern: boolean | string
    apprentice: boolean | string
    freelancer: boolean | string
    specialist: boolean | string
    generalist: boolean | string
  }[]
}

export const Tiers: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
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
    return `Only ${tier.availability} spots remaining`
  }

  // Determine if tier has limited availability
  const isLimited = (tier: TierConfig): boolean => {
    return tier.limited === true && typeof tier.availability === 'number'
  }

  // Comparison table data
  const comparisonData: ComparisonFeature[] = [
    {
      category: 'Event Access',
      features: [
        {
          name: 'Virtual booth access',
          intern: true,
          apprentice: true,
          freelancer: true,
          specialist: true,
          generalist: true,
        },
        {
          name: 'Event platform access',
          intern: true,
          apprentice: true,
          freelancer: true,
          specialist: true,
          generalist: true,
        },
        {
          name: 'Student interaction tools',
          intern: true,
          apprentice: true,
          freelancer: true,
          specialist: true,
          generalist: true,
        },
      ],
    },
    {
      category: 'Booth Features',
      features: [
        {
          name: 'Basic booth design',
          intern: true,
          apprentice: false,
          freelancer: false,
          specialist: false,
          generalist: false,
        },
        {
          name: 'Enhanced booth design',
          intern: false,
          apprentice: true,
          freelancer: true,
          specialist: true,
          generalist: true,
        },
        {
          name: 'Premium booth placement',
          intern: false,
          apprentice: false,
          freelancer: true,
          specialist: true,
          generalist: true,
        },
        {
          name: 'Custom booth features',
          intern: false,
          apprentice: false,
          freelancer: false,
          specialist: true,
          generalist: true,
        },
      ],
    },
    {
      category: 'Student Engagement',
      features: [
        {
          name: 'Sponsored challenges',
          intern: '0',
          apprentice: '1',
          freelancer: '2',
          specialist: '3',
          generalist: 'Unlimited',
        },
        {
          name: 'Speaking slot',
          intern: false,
          apprentice: false,
          freelancer: '15 min',
          specialist: '30 min',
          generalist: 'Keynote',
        },
        {
          name: 'Pre-event webinar',
          intern: false,
          apprentice: false,
          freelancer: false,
          specialist: true,
          generalist: true,
        },
      ],
    },
    {
      category: 'Marketing & Analytics',
      features: [
        {
          name: 'Basic attendee analytics',
          intern: true,
          apprentice: true,
          freelancer: true,
          specialist: true,
          generalist: true,
        },
        {
          name: 'Logo in event marketing',
          intern: false,
          apprentice: true,
          freelancer: true,
          specialist: true,
          generalist: true,
        },
        {
          name: 'Social media promotion',
          intern: false,
          apprentice: false,
          freelancer: true,
          specialist: true,
          generalist: true,
        },
        {
          name: 'Post-event impact report',
          intern: false,
          apprentice: false,
          freelancer: false,
          specialist: false,
          generalist: true,
        },
      ],
    },
    {
      category: 'Support & Benefits',
      features: [
        {
          name: 'Email support',
          intern: true,
          apprentice: true,
          freelancer: true,
          specialist: true,
          generalist: true,
        },
        {
          name: 'Dedicated account manager',
          intern: false,
          apprentice: false,
          freelancer: false,
          specialist: true,
          generalist: true,
        },
        {
          name: 'Executive networking',
          intern: false,
          apprentice: false,
          freelancer: false,
          specialist: false,
          generalist: true,
        },
        {
          name: 'Year-round platform access',
          intern: false,
          apprentice: false,
          freelancer: false,
          specialist: false,
          generalist: true,
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
            "text-h2-mobile tablet:text-h2 text-functional-dark mb-4 transition-all duration-slow",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            Choose Your Sponsorship Level
          </h2>
          <p className={cn(
            "text-body-large-mobile tablet:text-body-large text-functional-neutral max-w-3xl mx-auto transition-all duration-slow delay-100",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            Select the perfect package to connect with students and achieve your recruitment goals
          </p>
        </div>

        {/* Tier Cards Grid */}
        <div 
          ref={cardsRef}
          className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-5 gap-6 mb-16"
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
              <h3 className="text-h4-mobile tablet:text-h4 text-functional-dark mb-4 text-center">
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
                  isLimited(tier) ? "text-warning-orange" : "text-functional-neutral"
                )}>
                  {getAvailabilityText(tier)}
                </span>
              </div>

              {/* Benefits List */}
              <div className="flex-grow mb-6">
                <ul className="space-y-3">
                  {tier.benefits.slice(0, 5).map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <svg 
                        className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" 
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
                      <span className="text-body-small text-functional-dark">
                        {benefit}
                      </span>
                    </li>
                  ))}
                  {tier.benefits.length > 5 && (
                    <li className="text-body-small text-functional-neutral italic">
                      + {tier.benefits.length - 5} more benefits
                    </li>
                  )}
                </ul>
              </div>

              {/* CTA Button */}
              <Button
                variant={isLimited(tier) ? "urgency" : tier.featured ? "primary" : "secondary"}
                size="default"
                className="w-full"
                onClick={() => {
                  // In a real app, this would trigger a consultation booking flow
                  console.log(`Selected tier: ${tier.name}`)
                }}
              >
                {isLimited(tier) 
                  ? `Book Now - ${tier.availability} left`
                  : tier.featured
                  ? "Book Consultation"
                  : `Choose ${tier.name}`
                }
              </Button>
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
          <h3 className="text-h3-mobile tablet:text-h3 text-functional-dark mb-8 text-center">
            Detailed Feature Comparison
          </h3>

          {/* Desktop Table */}
          <div className="hidden desktop:block overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4 text-body font-semibold text-functional-dark">
                    Features
                  </th>
                  {TIER_CONFIG.map(tier => (
                    <th 
                      key={tier.id} 
                      className={cn(
                        "py-4 px-4 text-center text-body font-semibold",
                        tier.featured ? "text-accent-orange" : "text-functional-dark"
                      )}
                    >
                      {tier.name}
                      {tier.featured && (
                        <span className="block text-caption font-normal mt-1">Most Popular</span>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((category, catIdx) => (
                  <React.Fragment key={catIdx}>
                    <tr className="bg-background-light">
                      <td 
                        colSpan={6} 
                        className="py-3 px-4 text-body font-semibold text-functional-dark"
                      >
                        {category.category}
                      </td>
                    </tr>
                    {category.features.map((feature, featIdx) => (
                      <tr 
                        key={featIdx} 
                        className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                      >
                        <td className="py-3 px-4 text-body-small text-functional-dark">
                          {feature.name}
                        </td>
                        {(['intern', 'apprentice', 'freelancer', 'specialist', 'generalist'] as const).map(tierKey => (
                          <td key={tierKey} className="py-3 px-4 text-center">
                            {typeof feature[tierKey] === 'boolean' ? (
                              feature[tierKey] ? (
                                <svg 
                                  className="w-5 h-5 text-success-green mx-auto" 
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
                              <span className="text-body-small text-functional-dark font-medium">
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
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 px-3 text-body-small font-semibold text-functional-dark sticky left-0 bg-background-white">
                      Features
                    </th>
                    {TIER_CONFIG.map(tier => (
                      <th 
                        key={tier.id} 
                        className={cn(
                          "py-3 px-3 text-center text-body-small font-semibold whitespace-nowrap",
                          tier.featured ? "text-accent-orange" : "text-functional-dark"
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
                          colSpan={6} 
                          className="py-2 px-3 text-body-small font-semibold text-functional-dark"
                        >
                          {category.category}
                        </td>
                      </tr>
                      {category.features.map((feature, featIdx) => (
                        <tr 
                          key={featIdx} 
                          className="border-b border-gray-100"
                        >
                          <td className="py-2 px-3 text-body-small text-functional-dark sticky left-0 bg-background-white">
                            {feature.name}
                          </td>
                          {(['intern', 'apprentice', 'freelancer', 'specialist', 'generalist'] as const).map(tierKey => (
                            <td key={tierKey} className="py-2 px-3 text-center">
                              {typeof feature[tierKey] === 'boolean' ? (
                                feature[tierKey] ? (
                                  <span className="text-success-green">✓</span>
                                ) : (
                                  <span className="text-gray-300">✗</span>
                                )
                              ) : (
                                <span className="text-caption text-functional-dark font-medium">
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
      </div>
    </section>
  )
}