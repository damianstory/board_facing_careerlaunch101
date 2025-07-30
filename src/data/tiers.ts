export interface TierConfig {
  id: string
  name: string
  price: number
  availability: number | 'unlimited'
  limited?: boolean
  featured?: boolean
  benefits: string[]
}

export const TIER_CONFIG: TierConfig[] = [
  {
    id: 'intern',
    name: 'Intern',
    price: 250,
    availability: 'unlimited',
    benefits: [
      'Virtual booth with basic branding',
      'Company profile in event directory',
      'Access to attendee analytics',
      'Post-event contact list (opt-in students)',
    ],
  },
  {
    id: 'apprentice',
    name: 'Apprentice',
    price: 500,
    availability: 'unlimited',
    benefits: [
      'Everything in Intern tier',
      'Enhanced virtual booth design',
      'Logo featured in event marketing',
      '1 sponsored student challenge',
      'Priority placement in directory',
    ],
  },
  {
    id: 'freelancer',
    name: 'Freelancer',
    price: 1000,
    availability: 5,
    limited: true,
    benefits: [
      'Everything in Apprentice tier',
      'Premium booth placement',
      '15-minute speaking slot',
      '2 sponsored student challenges',
      'Featured company spotlight',
      'Social media promotion',
    ],
  },
  {
    id: 'specialist',
    name: 'Specialist',
    price: 1500,
    availability: 10,
    limited: true,
    benefits: [
      'Everything in Freelancer tier',
      '30-minute workshop session',
      '3 sponsored student challenges',
      'Custom booth features',
      'Pre-event student webinar',
      'Dedicated account manager',
    ],
  },
  {
    id: 'generalist',
    name: 'Generalist',
    price: 2500,
    availability: 10,
    limited: true,
    featured: true,
    benefits: [
      'Everything in Specialist tier',
      'Keynote speaking opportunity',
      'Title sponsor recognition',
      'Unlimited student challenges',
      'Year-round platform access',
      'Custom engagement features',
      'Executive networking session',
      'Post-event impact report',
    ],
  },
]