export interface FAQItem {
  id: string
  question: string
  answer: string
  category?: 'event-details' | 'sponsorship-process'
  keywords?: string[]
}

export const faqs: FAQItem[] = [
  // Event Details (5 questions)
  {
    id: 'event-format',
    question: 'What is the format of the virtual career fair?',
    answer: 'The myBCS Virtual Career Fair is a fully online event hosted on our custom platform. Sponsors have dedicated virtual booths where they can engage with students through live chat, video calls, and scheduled presentations. Students can browse company profiles, submit resumes, and book 1-on-1 meetings throughout the day.',
    category: 'event-details',
    keywords: ['format', 'virtual', 'online', 'platform']
  },
  {
    id: 'attendance-expectations',
    question: 'How many students typically attend?',
    answer: 'Based on previous events, we expect 2,500+ registered students from Ontario universities and colleges. Past events have seen 85% attendance rates with highly engaged participants actively seeking internships and full-time opportunities in business, technology, and related fields.',
    category: 'event-details',
    keywords: ['attendance', 'students', 'participants', 'numbers']
  },
  {
    id: 'recruitment-goals',
    question: 'What types of roles can we recruit for?',
    answer: 'Sponsors typically recruit for internships, co-op positions, new graduate roles, and experienced positions across business, technology, marketing, finance, and operations. Students attending span all years of study with diverse backgrounds, making it ideal for various recruitment needs.',
    category: 'event-details',
    keywords: ['recruitment', 'roles', 'positions', 'internships', 'jobs']
  },
  {
    id: 'previous-sponsors',
    question: 'What companies have sponsored previous events?',
    answer: 'Past sponsors include Fortune 500 companies, leading Canadian corporations, innovative startups, and government organizations. Many sponsors return year after year due to the quality of candidates and ROI. We\'re happy to share specific success stories and testimonials during your consultation.',
    category: 'event-details',
    keywords: ['sponsors', 'companies', 'testimonials', 'success', 'previous']
  },
  {
    id: 'roi-metrics',
    question: 'How do sponsors measure ROI from the event?',
    answer: 'Sponsors typically measure success through qualified leads generated, interviews scheduled, offers extended, and brand awareness metrics. Our post-event report includes all key metrics. Past sponsors report average cost-per-hire 70% lower than traditional recruitment methods.',
    category: 'event-details',
    keywords: ['roi', 'metrics', 'success', 'measurement', 'results']
  },
  
  // Sponsorship Process (5 questions)
  {
    id: 'sponsorship-tiers',
    question: 'What sponsorship tiers are available?',
    answer: 'We offer multiple sponsorship tiers to fit different needs and budgets, starting from Bronze at $1,500 up to our limited Title Sponsor package. Each tier includes different benefits such as booth customization, speaking opportunities, logo placement, and post-event analytics. Contact us for a detailed comparison.',
    category: 'sponsorship-process',
    keywords: ['tiers', 'packages', 'pricing', 'options', 'bronze', 'silver', 'gold']
  },
  {
    id: 'booking-process',
    question: 'How does the sponsorship booking process work?',
    answer: 'The process is simple: 1) Book a consultation call with our team, 2) Select your preferred sponsorship tier, 3) Complete the sponsorship agreement and payment, 4) Receive your sponsor portal access to set up your booth and prepare for the event. Most sponsors complete the entire process within 48 hours.',
    category: 'sponsorship-process',
    keywords: ['booking', 'process', 'steps', 'timeline', 'registration']
  },
  {
    id: 'student-data',
    question: 'What student data do sponsors receive?',
    answer: 'Sponsors receive comprehensive analytics including booth visitor counts, resume submissions, chat transcripts (with consent), and contact information for students who express interest. Post-event, you\'ll receive a detailed report with all interactions and qualified leads within 48 hours.',
    category: 'sponsorship-process',
    keywords: ['data', 'analytics', 'resumes', 'leads', 'information']
  },
  {
    id: 'payment-terms',
    question: 'What are the payment terms and options?',
    answer: 'We accept payment via credit card, wire transfer, or check. Full payment is due within 7 days of signing the sponsorship agreement to secure your spot. We offer flexible payment plans for non-profit organizations and startups - please discuss with our team during consultation.',
    category: 'sponsorship-process',
    keywords: ['payment', 'terms', 'options', 'pricing', 'invoice']
  },
  {
    id: 'cancellation-policy',
    question: 'What is your cancellation policy?',
    answer: 'We understand plans can change. Cancellations made 30+ days before the event receive a full refund. Cancellations 15-29 days prior receive 50% refund. Within 14 days, we offer credit toward future myBCS events. We also provide sponsorship transfer options to other organizations.',
    category: 'sponsorship-process',
    keywords: ['cancellation', 'refund', 'policy', 'changes']
  }
]