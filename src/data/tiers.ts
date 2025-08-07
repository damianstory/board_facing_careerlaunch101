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
    name: 'Bronze',
    price: 250,
    availability: 'unlimited',
    benefits: [
      'Post-event Recording',
    ],
  },
  {
    id: 'apprentice',
    name: 'Silver',
    price: 750,
    availability: 'unlimited',
    benefits: [
      'Standard Booth',
      'Post-event Recording',
    ],
  },
  {
    id: 'freelancer',
    name: 'Gold',
    price: 1250,
    availability: 5,
    limited: true,
    benefits: [
      'Skills-based school-day session (at lunch)',
      'Standard Booth',
      'Post-event Recording',
    ],
  },
  {
    id: 'specialist',
    name: 'Platinum',
    price: 2500,
    availability: 20,
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