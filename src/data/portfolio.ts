// src/data/portfolio.ts - Add links and richer data to the enhanced projects
export const skills = [
  {
    category: 'Programming Languages',
    skills: 'Python, TypeScript, JavaScript, Java, C, Objective-C, Swift, HTML/CSS'
  },
  {
    category: 'Libraries & Frameworks',
    skills: 'Next.js, React Native, Expo, NLTK, CLTK, Pandas, NumPy, NextAuth'
  },
  {
    category: 'Databases & Cloud',
    skills: 'MongoDB, MySQL, PostgreSQL, Firebase, Supabase, Google Cloud Platform, AWS'
  },
  {
    category: 'Development Tools',
    skills: 'Docker, Xcode, Git, VS Code'
  },
  {
    category: 'Natural Languages',
    skills: 'Spanish (Native), English (Native)'
  }
];

export const researchExperience = {
  title: 'Computational Linguistics Research Assistant',
  company: 'Linguistics Research Center, University of Texas at Austin',
  period: 'August 2023-Present',
  description: [
    'Processed and analyzed over 50,000 Mayan language entries, achieving 98% accuracy in data classification.',
    'Reduced data processing time by 60% through automation of workflow using Python scripts.',
    'Contributed to successful launch of online etymological dictionary accessed by linguistic scholars across the field.'
  ]
};

// Enhanced project data with links and rich metadata
export const truckingProjectEnhanced = {
  title: 'Full Stack Developer – Trucking Logistics',
  date: 'January 2025',
  technologies: ['Expo React Native', 'TypeScript', 'Firebase', 'Firebase ML Kit', 'OpenAI API'],
  description: [
    'Architected and implemented a comprehensive trucking logistics application using Expo, launching to 50+ users.',
    'Integrated camera-based OCR technology via Google ML Kit to capture and analyze data from truck receipts, enhancing logistics management.',
    'Developed features for processing mileage and service receipts, extracting critical data such as fuel purchases, material weights, and pricing.',
    'Built an automated reporting system for generating detailed reports (daily, weekly, monthly, yearly) to aid in tax management and organizational efficiency for trucking companies.'
  ],
  metrics: [
    { label: 'Active Users', value: '50+' },
    { label: 'OCR Accuracy', value: '95%' },
    { label: 'Time Saved', value: '70%' }
  ],
  demoUrl: '#', // Add your actual demo URL here
  githubUrl: 'https://github.com/kevinbarcenasmtz/trucklogistics', 
  featured: true
};

export const footballProjectEnhanced = {
  title: 'Empire Football League Soccer Platform',
  date: 'December 2024',
  technologies: ['Next.js', 'MongoDB', 'NextAuth', 'PayPal'],
  description: [
    'Architected and deployed a comprehensive soccer league management system using Next.js 14 and MongoDB, featuring team profiles, match scheduling, and real-time standings updates, serving over 12 teams and 120+ players.',
    'Implemented secure role-based authentication using NextAuth.js to manage distinct access levels for league administrators, team managers, and players, with personalized dashboards and content management capabilities.',
    'Added responsive design principles resulting in a 45% increase in mobile user engagement.'
  ],
  metrics: [
    { label: 'Teams', value: '12+' },
    { label: 'Players', value: '120+' },
    { label: 'Mobile Growth', value: '45%' }
  ],
  demoUrl: 'https://www.empirefootballleague-atx.com/', 
  githubUrl: 'https://github.com/kevinbarcenasmtz/EmpireFootballGroup', 
  featured: true
};

// Keep the original simple versions for backward compatibility
export const truckingProject = {
  title: 'Full Stack Developer – Trucking Logistics',
  date: 'January 2025',
  technologies: 'Expo React Native, Typescript, Firebase, Firebase ML Kit, OpenAI API',
  description: [
    'Architected and implemented a comprehensive trucking logistics application using Expo, launching to 50+ users.',
    'Integrated camera-based OCR technology via Google ML Kit to capture and analyze data from truck receipts, enhancing logistics management.',
    'Developed features for processing mileage and service receipts, extracting critical data such as fuel purchases, material weights, and pricing.',
    'Built an automated reporting system for generating detailed reports (daily, weekly, monthly, yearly) to aid in tax management and organizational efficiency for trucking companies.'
  ]
};

export const footballProject = {
  title: 'Empire Football League Soccer Platform',
  date: 'December 2024',
  technologies: 'Next.js, MongoDB, NextAuth, PayPal',
  description: [
    'Architected and deployed a comprehensive soccer league management system using Next.js 14 and MongoDB, featuring team profiles, match scheduling, and real-time standings updates, serving over 12 teams and 120+ players.',
    'Implemented secure role-based authentication using NextAuth.js to manage distinct access levels for league administrators, team managers, and players, with personalized dashboards and content management capabilities.',
    'Added responsive design principles resulting in a 45% increase in mobile user engagement.'
  ]
};

export const aboutMeContent = {
  paragraphs: [
    `As a Mexican-American from Austin, Texas, whose both parents came from Mexico, I've grown up with the advantage of being bilingual. This bilingualism has profoundly shaped my outlook on life, my identity, and my personal ideals. It has influenced my journey in higher education after high school. I believe that having the opportunity to learn is a privilege and more importantly, it's a way I can inspire and influence young teens to continue their educational journey. The critical question becomes: What do I do with the knowledge I'm acquiring? I feel the best way to use my skills and contribute to society is to create meaningful, useful solutions for people. This is precisely why I've focused my studies on computer science, which laid the foundation for me to develop software, apps, and solutions that can serve communities. My study of linguistics further enhances this foundation by applying technological solutions to language specific challenges, problems, and tasks that can be uniquely addressed through the intersection of computer science and linguistics.`,
    `As I continue to develop technological solutions, I am committed to being mindful of the tools I choose and fully understanding the broader implications of those choices.`
  ]
};

// Enhanced projects intro with animation
export const projectsIntro = {
  title: "Featured Projects",
  description: "These are some of the projects I've worked on that I'm particularly proud of. Each represents a unique challenge and learning opportunity in my development journey."
};

export const resumeContent = {
  description: "You can download my full resume as a PDF by clicking the link below:",
  buttonText: "Download Resume (PDF)",
  href: "/resume.pdf"
};