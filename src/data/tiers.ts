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
    name: 'Skill Snack',
    price: 0,
    availability: 'unlimited',
    benefits: [
      'Post-event Recording',
    ],
  },
  {
    id: 'apprentice',
    name: 'Silver',
    price: 500,
    availability: 'unlimited',
    benefits: [
      'Standard Booth',
      'Post-event Recording',
    ],
  },
  {
    id: 'specialist',
    name: 'Platinum',
    price: 2500,
    availability: 13,
    limited: true,
    featured: true,
    benefits: [
      'School-day Session',
      'Maximum Attention & Visibility',
      'Engagement Activity with lead-gen*',
      'Q&A with Students',
      'Deluxe Booth',
      'Post-event Recording',
    ],
  },
]