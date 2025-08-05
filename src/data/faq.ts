export interface FAQItem {
  id: string
  question: string
  answer: string
  category?: 'event-details' | 'sponsorship-process'
  keywords?: string[]
}

export const faqs: FAQItem[] = [
  {
    id: 'what-is-myblueprint',
    question: 'What is myBlueprint?',
    answer: 'myBlueprint is Canada\'s leading career exploration platform, serving over 1 million students annually. We provide career assessments, education planning tools, and experiential learning opportunities that help students discover their interests, skills, and career pathways from elementary through post-secondary.',
    keywords: ['myblueprint', 'platform', 'career', 'students', 'canada']
  },
  {
    id: 'format-agenda',
    question: 'What is the format/agenda for the day?',
    answer: 'The myBlueprint Career Launch is a full-day virtual event featuring live presentations from industry leaders, interactive workshops, employer showcases, and Q&A sessions. The day includes both school-day sessions (during school hours) and after-school programming to maximize student participation.',
    keywords: ['format', 'agenda', 'virtual', 'presentations', 'workshops', 'schedule']
  },
  {
    id: 'school-day-session',
    question: 'What is a School-day Session?',
    answer: 'School-day sessions are live presentations scheduled during regular school hours (typically 9am-3pm) that teachers can integrate into their classroom programming. These sessions allow entire classes to participate together and include curriculum-connected content that supports learning objectives.',
    keywords: ['school-day', 'session', 'classroom', 'teachers', 'curriculum', 'hours']
  },
  {
    id: 'student-viewing',
    question: 'How will students be watching the sessions?',
    answer: 'Students access sessions through our secure online platform via web browsers on computers, tablets, or mobile devices. Teachers can facilitate viewing in classrooms, or students can join individually from home. All sessions include interactive features like live chat, polls, and Q&A capabilities.',
    keywords: ['viewing', 'platform', 'browsers', 'devices', 'interactive', 'chat']
  },
  {
    id: 'participating-school-boards',
    question: 'Which school boards are participating?',
    answer: 'We partner with up to 72 school boards across Ontario, representing both English and French public and Catholic systems. This includes major boards like Toronto District School Board, York Region District School Board, and many others, reaching over 50,000 students province-wide.',
    keywords: ['school boards', 'ontario', 'participating', 'english', 'french', 'catholic', 'public']
  },
  {
    id: 'ontario-only',
    question: 'Why is this just for Ontario school boards?',
    answer: 'This specific event focuses on Ontario to provide targeted, province-specific career information that aligns with Ontario\'s curriculum standards and post-secondary pathways. However, myBlueprint serves students nationally, and we host similar events in other provinces throughout the year.',
    keywords: ['ontario', 'province', 'curriculum', 'targeted', 'national', 'pathways']
  },
  {
    id: 'sponsor-session-types',
    question: 'What types of sessions are you looking for from sponsors?',
    answer: 'We seek engaging presentations that showcase career pathways, emerging industries, workplace innovation, and real-world applications of skills students are learning. Popular formats include "Day in the Life" stories, industry overviews, skill demonstrations, and interactive career exploration sessions.',
    keywords: ['sessions', 'presentations', 'career pathways', 'industry', 'skills', 'workplace']
  },
  {
    id: 'post-secondary-participation',
    question: 'Can post-secondary institutions participate as well?',
    answer: 'Absolutely! Post-secondary institutions are valuable partners in helping students understand education pathways, program options, and how different fields of study connect to careers. Universities, colleges, and trade schools all play important roles in our programming.',
    keywords: ['post-secondary', 'universities', 'colleges', 'education', 'programs', 'pathways']
  },
  {
    id: 'title-sponsor',
    question: 'Can my company become the title sponsor for this event?',
    answer: 'Yes! We offer exclusive title sponsorship opportunities that provide maximum brand visibility and recognition. Title sponsors receive premium placement in all event communications, opening/closing acknowledgments, and enhanced engagement opportunities. Contact us to discuss availability and benefits.',
    keywords: ['title sponsor', 'exclusive', 'brand', 'visibility', 'premium', 'recognition']
  },
  {
    id: 'content-hub',
    question: 'What is the myBlueprint Content Hub?',
    answer: 'The myBlueprint Content Hub is our centralized library of career exploration resources, videos, and interactive content. Sponsor materials and session recordings are featured here, providing ongoing access for students, teachers, and families beyond the live event date.',
    keywords: ['content hub', 'library', 'resources', 'videos', 'recordings', 'ongoing access']
  },
  {
    id: 'engagement-activity-lead-gen',
    question: 'What is an Engagement Activity? And what is lead-gen*?',
    answer: 'Engagement Activities are interactive elements like polls, quizzes, career assessments, or contests that encourage student participation. Lead-gen refers to lead generation - capturing interested student information (with appropriate permissions) for future recruitment, internship programs, or educational outreach initiatives.',
    keywords: ['engagement', 'activities', 'polls', 'quizzes', 'lead generation', 'recruitment', 'permissions']
  },
  {
    id: 'booth-content-availability',
    question: 'How long will booth content be available to students?',
    answer: 'Sponsor booth content and session recordings remain accessible to students through the myBlueprint platform for 6 months following the live event. This extended access maximizes your investment and allows students to revisit information when making education and career decisions.',
    keywords: ['booth content', 'availability', 'recordings', 'platform', '6 months', 'extended access']
  }
]