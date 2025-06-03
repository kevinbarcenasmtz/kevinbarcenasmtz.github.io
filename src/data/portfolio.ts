// src/data/portfolio.ts - Add links and richer data to the enhanced projects

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

export const truckingLogistics = {
  title: 'Trucking Logistics Mobile App',
  date: 'January 2025',
  technologies: ['React Native', 'Expo', 'TypeScript', 'Node.js', 'Tesseract.js', 'Anthropic API', 'Heroku', 'Firebase'],
  description: [
    "Built a mobile app that helps trucking companies manage their paperwork digitally instead of drowning in receipts.",
    "The OCR workflow is pretty neat. The mobile app captures images, sends them as base64 to my Node.js backend on Heroku, which uses Tesseract.js to extract the text.",
    "Then the extracted text gets sent to Anthropic's API to classify and structure the receipt data (fuel purchases, mileage, expenses, etc.) before returning it to the frontend.",
    "Added smart reporting that generates tax documents and financial summaries, which apparently saves truckers hours of manual work every week.",
    "Set up CI/CD with GitHub Actions and EAS Build for automated testing and production builds.",
    "Started as a solution for one trucking company but now has 50+ active users across different operations."
  ],
  demoUrl: '#',
  githubUrl: 'https://github.com/kevinbarcenasmtz/trucklogistics',
};

export const empireFootballGroup = {
  title: 'Empire Football League Platform',
  date: 'December 2024',
  technologies: ["Next.js", "TypeScript", "Cloudflare", "MongoDB", "PayPal"],
  description: [
    "Created a full league management system for a local Austin soccer league that was still using spreadsheets and group chats to organize everything.",
    "Built role-based dashboards so league admins, team managers, and players each get exactly what they need without the clutter.",
    "The responsive design actually worked. Mobile usage jumped 45% because players could finally check standings and schedules easily on their phones.",
    "Now manages 12+ teams and 120+ players, turning weekend soccer chaos into something actually organized."
  ],
  demoUrl: 'https://www.empirefootballleague-atx.com/',
  githubUrl: 'https://github.com/kevinbarcenasmtz/EmpireFootballGroup',
};

export const unidadAustinContent = {
  title: "UNIDAD Central Texas",
  date: "Spring 2025",
  technologies: ["AWS Amplify", "React + Vite", "Tailwind", "PostgreSQL (AWS RDS)", "AWS EC2 Backend, with Docker containers" ,"Flask with SQLAlchemy ORM"],
  description : [
    "UNIDAD Central Texas, stands for Unidos, Navegando, Informacion y Derechos, Ayuda y Defensas",
    "The purpose of this full stack application is to connect underserved communities with essential local resources, legal education, and civic engagement opportunities.",
    "This project came intro fruition initially from a Software Engineering class @ UT Austin but over time I've continued to develop it to actually have use to Texas migrant communities."
  ],
  demoUrl: "",
  githubUrl: "https://gitlab.com/kevin14767/cs373-spring-2025-group-04/",
}

export const aboutMeContent = {
  paragraphs: [
    // New professional/academic summary paragraphs
    `Hi! my name's Kevin. I'm a Comp Sci and Linguistics student at the University
    of Texas at Austin. I'm particularly interested in computational linguistics,
    natural language processing, maching learning, and language modeling.`,
    `I'm currently working as a Software Engineering Intern at UKG. Also known as Ultimate
    Kronos Group.`
  ]
};

export const personalContent = {
  paragraphs: [
    `As a Mexican-American from Austin, Texas, whose both parents came from Mexico, 
    I've grown up with the advantage of being bilingual. This bilingualism has profoundly 
    shaped my outlook on life, my identity, and my personal ideals. It has influenced my 
    journey in higher education after high school. I believe that having the opportunity 
    to learn is a privilege and more importantly, it's a way I can inspire and influence 
    young teens to continue their educational journey. The critical question becomes: 
    What do I do with the knowledge I'm acquiring? I feel the best way to use my skills 
    and contribute to society is to create meaningful, useful solutions for people. This 
    is precisely why I've focused my studies on computer science, which laid the foundation 
    for me to develop software, apps, and solutions that can serve communities. My study of 
    linguistics further enhances this foundation by applying technological solutions to language 
    specific challenges, problems, and tasks that can be uniquely addressed through the intersection 
    of computer science and linguistics.`,
    `As I continue to develop technological solutions, I am committed to being mindful of the tools 
    I choose and fully understanding the broader implications of those choices.`
  ]
};

export const projectsIntro = {
  title: "Featured Projects",
  description: "These are some of the projects I've worked on that I'm particularly interested in. Each represents a learning opportunity in my development journey."
};

export const experienceIntro = {
  title: "Professional Experience",
  description: "My journey in applying computer science and linguistics through meaningful work experiences that have shaped my technical skills and professional growth."
};

// UKG Internship Experience
export const ukgInternshipExperience = {
  title: 'Software Engineering Intern',
  company: 'UKG (Ultimate Kronos Group)',
  period: 'January 2025 - Present',
  description: [
    'Developing and maintaining enterprise-level human capital management software serving millions of users worldwide',
    'Contributing to full-stack development using modern web technologies and cloud-based architecture',
    'Collaborating with cross-functional teams in agile development environments to deliver scalable solutions',
    'Participating in code reviews, technical design discussions, and sprint planning sessions',
    'Working on features that directly impact workforce management and employee experience platforms'
  ]
};

// Research Experience - MayaLEX
export const mayaLexExperience = {
  title: 'Computational Linguistics Research Assistant - MayaLEX',
  company: 'Linguistics Research Center, University of Texas at Austin',
  period: 'August 2023 - Present',
  description: [
    'Processing and analyzing over 50,000 Mayan language entries for the MayaLEX etymological dictionary project',
    'Developing Python automation scripts that reduced data processing time by 60% while maintaining 98% accuracy',
    'Implementing data classification algorithms for linguistic feature extraction and etymological analysis',
    'Contributing to the successful launch of an online etymological dictionary accessed by linguistic scholars globally',
    'Collaborating with linguists and researchers to ensure accurate representation of Mayan language families'
  ]
};

// Research Experience - NahuatLEX  
export const nahuatLexExperience = {
  title: 'Computational Linguistics Research Assistant - NahuatLEX',
  company: 'Linguistics Research Center, University of Texas at Austin', 
  period: 'September 2024 - Present',
  description: [
    'Extending computational linguistics research to Nahuatl language documentation and analysis',
    'Applying machine learning techniques to process and categorize Nahuatl etymological data',
    'Building upon MayaLEX methodology to create comprehensive Nahuatl language resources',
    'Developing cross-linguistic comparison tools between Mayan and Nahuatl language families',
    'Contributing to indigenous language preservation through digital humanities and computational methods'
  ]
};

export const notesIntro = {
  title: "Notes & Reflections",
  description: "Thoughts on development, learning, and building better software"
};

export const resumeContent = {
  description: "You can download my full resume as a PDF by clicking the link below:",
  buttonText: "Download Resume (PDF)",
  href: "/resume.pdf"
};