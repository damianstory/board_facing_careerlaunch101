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
      'Post-event Recording',
    ],
  },
  {
    id: 'apprentice',
    name: 'Apprentice',
    price: 750,
    availability: 'unlimited',
    benefits: [
      'Standard Booth',
      'Post-event Recording',
    ],
  },
  {
    id: 'freelancer',
    name: 'Freelancer',
    price: 1250,
    availability: 5,
    limited: true,
    benefits: [
      'School-day Session (at Lunch)',
      'Standard Booth',
      'Post-event Recording',
    ],
  },
  {
    id: 'specialist',
    name: 'Specialist',
    price: 2000,
    availability: 10,
    limited: true,
    benefits: [
      'Engagement Activity',
      'Q&A with Students',
      'School-day Session',
      'Premium Booth',
      'Post-event Recording',
    ],
  },
  {
    id: 'generalist',
    name: 'Generalist',
    price: 3000,
    availability: 10,
    limited: true,
    featured: true,
    benefits: [
      'Engagement Activity with lead-gen*',
      'Q&A with Students',
      'School-day Session',
      'Deluxe Booth',
      'Post-event Recording',
    ],
  },
]