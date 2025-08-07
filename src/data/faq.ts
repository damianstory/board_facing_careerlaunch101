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
    answer: '<a href="https://myblueprint.ca/" target="_blank" rel="noopener noreferrer" style="color: #0092ff; text-decoration: none;">myBlueprint</a> exists to help empower every student to thrive and succeed in education, career, and life.\n\nMore specifically, we create career education software that is trusted by ~300 Canadian school boards to support over 1 million grade 7-12 students in researching and creating a plan for life after high school.',
    keywords: ['myblueprint', 'platform', 'career', 'students', 'canada']
  },
  {
    id: 'format-agenda',
    question: 'What is the format/agenda for the day?',
    answer: 'In addition to a kickoff/keynote, there will be 4 traditional blocks throughout the school day, with 5 sessions to choose from within each block. These sessions will be 45 minutes long, which includes roughly 15 minutes of Q&A.\n\nThe Freelance lunchtime block (optional for students) will feature 30 min long skills-focused sessions.\n\nTentative agenda looks like:\n• 9 - 9:15 am Welcome & Opening Remarks from myBlueprint\n• 9:15 - 9:45 am Keynote Speaker\n• 9:45 - 10:30 am Session Block 1\n• 10:45 - 11:30 am Session Block 2\n• 11:45 am - 12:30 pm Session Block 3\n• 12:30 - 1:15 pm Lunch + Sponsor Skills Sessions\n• 1:15 - 2 pm Session Block 4\n• 2 - 2:45 pm Explore Expo & Wrap-up\n• 7 - 7:45 pm Optional evening session',
    keywords: ['format', 'agenda', 'virtual', 'presentations', 'workshops', 'schedule']
  },
  {
    id: 'school-day-session',
    question: 'What is a School-day Session?',
    answer: 'These are the sessions that will take place during the school day, with students attending from their schools.\n\nAll sponsorship levels will have their session recording available for post-event on-demand viewing after the event has wrapped up for students to access on their own, but only school-day sessions will be streamed during the day with students watching from school.',
    keywords: ['school-day', 'session', 'classroom', 'teachers', 'curriculum', 'hours']
  },
  {
    id: 'student-viewing',
    question: 'How will students be watching the sessions?',
    answer: 'It will be up to individual schools to decide. Some have expressed keeping regular blocks for students, and voting as a class for which session to watch.\n\nOther schools will be setting up designated rooms for specific sessions and letting students decide which ones they want to attend.\n\nAll sessions regardless of sponsorship tier will be available on-demand after the event for students to revisit on their own time.',
    keywords: ['viewing', 'platform', 'browsers', 'devices', 'interactive', 'chat']
  },
  {
    id: 'participating-school-boards',
    question: 'Which school boards are participating?',
    answer: 'We hope they all do. This event specifically will be promoted to Ontario school boards. We have structured the event to make it financially feasible for boards to participate.\n\nTo make it even easier, you can sponsor a school board to attend. See the Additional Sponsorship Options above for more details.',
    keywords: ['school boards', 'ontario', 'participating', 'english', 'french', 'catholic', 'public']
  },
  {
    id: 'ontario-only',
    question: 'Why is this just for Ontario school boards?',
    answer: 'Because this is our first time running an event like this, and we\'re doing it on a tight timeline. Based on how this event goes, we are hoping to run similar events at a provincial level, from coast to coast moving forward.',
    keywords: ['ontario', 'province', 'curriculum', 'targeted', 'national', 'pathways']
  },
  {
    id: 'post-secondary-participation',
    question: 'Can post-secondary institutions participate as well?',
    answer: 'Absolutely. We hope you do. If you want to include a traditional \'Your School 101\' type of session, we suggest the Silver option. There will be a dedicated post-secondary section for the on-demand recordings.\n\nTo be included in the school day sessions, we would want to see something like an alumni panel talking about where they work now, and how your school helped prepare them for that. Or a skills based lunch time session (Gold) that would be applicable for students regardless of where they go to school.',
    keywords: ['post-secondary', 'universities', 'colleges', 'education', 'programs', 'pathways']
  },
  {
    id: 'title-sponsor',
    question: 'Can my company become the title sponsor for this event?',
    answer: 'Yes. For $50k CAD, you can sponsor all Ontario school boards to attend for free.\n\nYou and your company would instantly become legendary in the eyes of educators and students across the province, along with a few extra event perks.',
    keywords: ['title sponsor', 'exclusive', 'brand', 'visibility', 'premium', 'recognition']
  },
  {
    id: 'content-hub',
    question: 'What is the myBlueprint Content Hub?',
    answer: 'This is a new feature, currently in development, that will be available to myBlueprint student users. Content specific to careers, life skills, mindsets, emerging technologies, innovative industries, etc. is being created and curated for students to access within the myBlueprint platform.\n\nRecordings and clips from these recordings will be included within the content hub for students nationally to continue to access well after the event.',
    keywords: ['content hub', 'library', 'resources', 'videos', 'recordings', 'ongoing access']
  },
  {
    id: 'engagement-activity-lead-gen',
    question: 'What is an Engagement Activity? And what is lead-gen*?',
    answer: 'An engagement activity is something interactive that students can do at your booth.\n\nFor example, we can repurpose existing company content or industry information and turn it into a multiple choice quiz, true or false, two truths and a lie, etc. type of activity.\n\nStudents will be prompted to enter their email before completing the engagement activity in return for the chance of winning a prize/giveaway.\n\nStudent emails will not be shared with the sponsor. However, the sponsor will have the ability to draft an email (to be sent by myBlueprint) in January to all students who engaged with the activity.',
    keywords: ['engagement', 'activities', 'polls', 'quizzes', 'lead generation', 'recruitment', 'permissions']
  },
  {
    id: 'booth-content-availability',
    question: 'How long will booth content be available to students?',
    answer: 'Booth content will be promoted a week ahead of the event, for students and educators to explore beforehand, and will remain ungated, and available throughout the month of December.',
    keywords: ['booth content', 'availability', 'recordings', 'platform', '6 months', 'extended access']
  },
  {
    id: 'other-collaboration-ways',
    question: 'Are there other ways for my company to collaborate with myBlueprint?',
    answer: 'Definitely. You can participate in our national <a href="https://www.industryimmersionseries.ca/" target="_blank" rel="noopener noreferrer" style="color: #0092ff; font-weight: bold; text-decoration: none;">Industry Immersion Series</a> campaign, or have us promote, review/select winners, and disburse post-secondary <a href="https://education.myblueprint.ca/scholarship-success-stories" target="_blank" rel="noopener noreferrer" style="color: #0092ff; font-weight: bold; text-decoration: none;">scholarships on your behalf</a>.\n\nWe\'re also always open to custom opportunities. Click the <em>Talk To Us</em> button below to learn more.',
    keywords: ['collaboration', 'industry immersion', 'scholarships', 'custom opportunities', 'partnership']
  }
]