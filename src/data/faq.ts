export interface FAQItem {
  id: string
  question: string
  answer: string
  category?: 'event-details' | 'sponsorship-process'
  keywords?: string[]
}

export const faqs: FAQItem[] = [
  {
    id: 'on-demand-structure',
    question: 'If all sessions are on-demand, why do we need to commit to a day or week to watch them?',
    answer: 'So that there is structure in place to support your educators with an understanding of how and when to best use these recordings. And as another example to communicate to your school community that your board/school is invested in student career/life readiness.\n\nAs a reminder, you and your students will have access to these recordings so you can use them throughout the school year as you see fit, as well. They don\'t disappear after December 5th.',
    keywords: ['on-demand', 'structure', 'recordings', 'schedule', 'flexibility']
  },
  {
    id: 'ontario-only',
    question: 'Why is this only for Ontario boards?',
    answer: 'This is our first time running an event like this, so we wanted to start small, and learn before scaling this. We also wanted to offer sessions that were specific to Ontario students.\n\nIf all goes well, next year, we plan to expand the event, and run it in November as part of Take Your Kids to Work Day and National Career Development Month.',
    keywords: ['ontario', 'boards', 'scaling', 'provincial', 'expansion']
  },
  {
    id: 'virtual-platform',
    question: 'What is the virtual conference tool you are using to host the videos?',
    answer: 'It\'s a well known platform called RingCentral Events (formerly Hopin Events). This is what teachers will use during the week of December 1-5 to access recordings to play in class. We will make sure you have access to the url well in advance to share with your IT teams.\n\nStudents are not expected to create accounts with this platform. They will be able to access recordings from their myBlueprint account as of December 7th, 2025.',
    keywords: ['platform', 'ringcentral', 'hopin', 'virtual', 'conference', 'access']
  },
  {
    id: 'student-access-recordings',
    question: 'How will students get access to recordings after the event',
    answer: 'Starting on December 7th, students will be able to access the recordings through a link in their myBlueprint account, accessed via the Dashboard.\n\nStudents will not need to create an account to access recordings.',
    keywords: ['students', 'access', 'recordings', 'myblueprint', 'dashboard']
  },
  {
    id: 'participation-tracking',
    question: 'Will we be able to see how many of our board/school classes participated?',
    answer: 'Yes. Because teachers need to create an account on RingCentral to access the recordings during the week of December 1-5, we will be able to tell how many individual sessions were watched at a teacher, school, and board level for that week. ',
    keywords: ['tracking', 'participation', 'analytics', 'data', 'reporting']
  },
  {
    id: 'licensing-requirement',
    question: 'Do you have to be licensing myBlueprint to participate?',
    answer: 'No. Any school board or independent school can participate.',
    keywords: ['licensing', 'myblueprint', 'participation', 'requirements', 'eligibility']
  },
  {
    id: 'shsm-connection',
    question: 'How does this connect to SHSM?',
    answer: 'Some boards are thinking about using this as a vehicle to support Reach Aheads for currently enrolled students, and as a tool to promote SHSM experiences to their 9s and 10s.',
    keywords: ['shsm', 'reach ahead', 'specialist high skills', 'ontario', 'pathways']
  },
  {
    id: 'post-secondary-involvement',
    question: 'Are post-secondaries going to be involved?',
    answer: 'We hope so. Largely through the exhibit hall with booths. This event was intended to focus on career opportunities specifically.',
    keywords: ['post-secondary', 'universities', 'colleges', 'booths', 'exhibit']
  },
  {
    id: 'session-count',
    question: 'How many sessions are there?',
    answer: 'There will be somewhere between 20-25 when the agenda is fully finalized.',
    keywords: ['sessions', 'count', 'agenda', 'schedule', 'number']
  },
  {
    id: 'career-coaching-initiative',
    question: 'Can participating in Career Launch "satisfy" the Ontario career coaching initiative?',
    answer: 'That\'s a good question. We plan to talk to the HIEC team about that but don\'t have an answer for that yet.',
    keywords: ['career coaching', 'ontario', 'initiative', 'hiec', 'requirements']
  },
  {
    id: 'intermediate-suitability',
    question: 'Are these sessions suitable for our 7s and 8s?',
    answer: 'Many of them will be, yes. Some will be specifically for grade 11/12 students but those are the exception, not the rule.\n\nAhead of the event, we can flag specific sessions that would be well suited for the intermediate audience.',
    keywords: ['grade 7', 'grade 8', 'intermediate', 'suitability', 'age appropriate']
  },
  {
    id: 'pre-post-resources',
    question: 'What are these pre/post resources you mentioned?',
    answer: 'The myBlueprint team will be creating some resources/lesson plans to support pre (exploration), and post (reflection) activities related to individual sessions.',
    keywords: ['resources', 'lesson plans', 'pre-activities', 'post-activities', 'teachers']
  },
  {
    id: 'same-as-2024',
    question: 'Is this the same Launch event as the 2024 version?',
    answer: 'No. This was inspired by that event, but the myBlueprint Career Launch is being organized solely by the myBlueprint team.',
    keywords: ['2024', 'launch', 'comparison', 'history', 'previous event']
  },
  {
    id: 'french-sessions',
    question: 'Will there be any sessions delivered in French?',
    answer: 'Sessions will have French transcriptions available, however, all of the speakers for this year\'s event have indicated they will be delivering their sessions in English.',
    keywords: ['french', 'language', 'transcription', 'bilingual', 'translation']
  },
  {
    id: 'oecd-stat',
    question: 'Where did you get that 50% stat from above?',
    answer: 'It\'s from a recently published OECD report titled: <a href="https://www.oecd.org/en/publications/the-state-of-global-teenage-career-preparation_d5f8e3f2-en.html" target="_blank" rel="noopener noreferrer" style="color: #0092ff; text-decoration: none;">The State of Global Teenage Career Preparation</a>',
    keywords: ['oecd', 'statistics', 'report', 'data', 'research']
  },
  {
    id: 'industry-immersion',
    question: 'Is this connected to the Industry Immersion Series?',
    answer: 'No, this is completely independent from the <a href="https://www.industryimmersionseries.ca/" target="_blank" rel="noopener noreferrer" style="color: #0092ff; text-decoration: none;">Industry Immersion Series</a>.',
    keywords: ['industry immersion', 'series', 'connection', 'independent', 'separate']
  },
  {
    id: 'contact-questions',
    question: 'Who can I reach out to with questions about the event?',
    answer: 'Contact Damian at <a href="mailto:damian.matheson@myblueprint.ca" style="color: #0092ff; text-decoration: none;">damian.matheson@myblueprint.ca</a>',
    keywords: ['contact', 'questions', 'support', 'email', 'damian']
  }
]