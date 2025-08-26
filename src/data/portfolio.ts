// src/data/portfolio.ts

export const truckingLogistics = {
  title: "Trucking Logistics Mobile App",
  date: "January 2025",
  technologies: [
    "React Native",
    "Expo",
    "TypeScript",
    "Node.js",
    "Tesseract.js",
    "Anthropic API",
    "Heroku",
    "Firebase",
  ],
  description: [
    "Built a mobile app that helps owner/operator companies manage their paperwork digitally instead of drowning in receipts.",
    "The OCR workflow: the mobile app captures images, sends them as base64 to my Node.js backend on Heroku, which uses Tesseract.js to extract the text.",
    "Then the extracted text gets sent to Anthropic's API to classify and structure the receipt data (fuel purchases, mileage, expenses, etc.) before returning it to the frontend.",
    "Added smart reporting that generates tax documents and financial summaries, which apparently saves truckers hours of manual work every week.",
    "Set up CI/CD with GitHub Actions and EAS Build for automated testing and production builds.",
    "Started as a solution for one trucking company but now has 50+ active users across different operations.",
  ],
  architecture: [
    "┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐",
    "│   React Native  │────│   Node.js/Heroku │────│    Firebase     │",
    "│   Mobile App    │    │     Backend      │    │    Database     │",
    "│   (Frontend)    │    │  (OCR + API)     │    │   (Storage)     │",
    "└─────────────────┘    └──────────────────┘    └─────────────────┘",
    "         │                        │                        │",
    "         │              ┌──────────────────┐               │",
    "         └──────────────│  Anthropic API   │───────────────┘",
    "                        │ (Classification) │",
    "                        └──────────────────┘",
  ],

  demoUrl: "#",
  githubUrl: "https://github.com/kevinbarcenasmtz/trucklogistics",
};

export const empireFootballGroup = {
  title: "Empire Football Group Platform",
  date: "December 2024 origin, actively maintained",
  technologies: ["Next.js", "TypeScript", "Cloudflare", "MongoDB", "PayPal"],
  description: [
    "Created a full organization management system for a local Austin soccer team that was still using spreadsheets and group chats to organize everything.",
    "The website manages three teams that are owned by one organization. The website serves as both a promotional asset and a management tool to keep track of everything.",
    "Built role-based dashboards so league admins, team managers, and players each get exactly what they need without the clutter.",
    "The responsive design is suited for both desktop and mobile users. Mobile usage jumped 45% because players could finally check standings and schedules easily on their phones.",
    "Initially hosted on Vercel but later migrated to Cloudflare, this project served as a great introduction to React principles including the useful routing service Next.js provides.",
    "Integrating MongoDB as the database service was also interesting. Looking at the use case in retrospect, the data structure is incredibly flexible, so it was a good choice at the time.",
  ],
  demoUrl: "https://www.empirefootballleague-atx.com/",
  githubUrl: "https://github.com/kevinbarcenasmtz/EmpireFootballGroup",
};

export const unidadAustinContent = {
  title: "UNIDAD Central Texas",
  date: "Spring 2025",
  technologies: [
    "AWS Amplify",
    "React + Vite",
    "Tailwind",
    "PostgreSQL (AWS RDS)",
    "AWS EC2 Backend, with Docker containers",
    "Flask with SQLAlchemy ORM",
  ],
  description: [
    `UNIDAD Central Texas is a full-stack application that was created during my Software Engineering class. By far the most labor-intensive project, this application serves as a directory for communities that are in jeopardy of facing discrimination at the hands of the immigration system.`,
    `UNIDAD Central Texas stands for Unidos, Navegando, Información y Derechos, Ayuda y Defensas. 
      As the name suggests, there's definitely a focus on Hispanic communities, but the project has resources for all communities.
      Additionally, the application has multilingual support with translations of the basic interface.`,
    "The purpose of this full-stack application is to connect underserved communities with essential local resources, legal education, and civic engagement opportunities.",
  ],
  demoUrl: "",
  githubUrl: "https://gitlab.com/kevin14767/cs373-spring-2025-group-04/",
};

export const aboutMeContent = {
  paragraphs: [
    // New professional/academic summary paragraphs
    `Hi! My name's Kevin. I'm a Computer Science and Linguistics student at the University
    of Texas at Austin. I'm particularly interested in computational linguistics,
    natural language processing, machine learning, and language modeling.`,
    `I'm currently in my senior year @ UT Austin where I'm continuing to work on NahuatLEX, MayaLEX, and personal projects alongside my studies.`,
  ],
};

export const personalContent = {
  paragraphs: [
    `As a Mexican-American from Austin, Texas, whose parents both came from Mexico, 
    I've grown up with the advantage of being bilingual. This bilingualism has profoundly 
    shaped my outlook on life, my identity, and my personal ideals. It has influenced my 
    journey in higher education after high school. I believe that having the opportunity 
    to learn is a privilege and, more importantly, it's a way I can inspire and influence 
    young teens to continue their educational journey. The critical question becomes: 
    What do I do with the knowledge I'm acquiring? I feel the best way to use my skills 
    and contribute to society is to create meaningful, useful solutions for people. This 
    is precisely why I've focused my studies on computer science, which laid the foundation 
    for me to develop software, apps, and solutions that can serve communities. My study of 
    linguistics further enhances this foundation by applying technological solutions to language-specific challenges, problems, and tasks that can be uniquely addressed through the intersection 
    of computer science and linguistics.`,
    `As I continue to develop technological solutions, I am committed to being mindful of the tools 
    I choose and fully understanding the broader implications of those choices.`,
  ],
};

export const projectsIntro = {
  title: "Projects",
  description:
    "The following are some of my projects that I've worked on throughout the years.",
};

export const experienceIntro = {
  title: "Professional Experience",
  description: `Below are some of the privileged experiences I've had applying my
    undergraduate studies to refine my technical skills and professional growth.`,
};

export const ukgInternshipExperience = {
  title: "Software Engineering Intern",
  company: "UKG (Ultimate Kronos Group)",
  period: "May 2025 - August 2025",
  description: [
    `
   During my time at UKG, I was part of the Pro Pay team, which handles payment applications related to tax purposes and other services. 
   The tech stack included C# with .NET, SQL Server, F#, and PrometheusQL for monitoring alongside Grafana.
    `,
    `
    Throughout the summer, I was tasked with migrating the authentication system for one of our applications to a more modern and secure protocol. 
    This required research into JWT tokens, OAuth2, Auth0, and OpenID Connect. There were many design decisions to make, including token caching, 
    expiration handling, and validation strategies.

What made this task particularly interesting was the contrast between implementations: one application used object-oriented design (C#) while another 
used functional programming (F#). This meant my implementation approaches differed significantly between the two. Due to F#'s functional nature, 
that implementation was actually much simpler and more concise.
    `,
    `
    I also worked on enhancing the monitoring and alerting system for our applications through Prometheus and Grafana. This involved upgrading our 
    previous metrics tracking system to a more robust and detailed implementation. I created custom metrics for different stages of the data pipeline 
    for one of our services, which imports State Unemployment Insurance (SUI) rates from one service to another, essentially synchronizing SUI rates between services.

    `,
    `Below is the end of internship prsentation I gave to the team, summarizing my work and experiences throughout the summer.`,
  ],
};

export const mayaLexExperience = {
  title: "Computational Linguistics Research Assistant - MayaLEX",
  company: "Linguistics Research Center, University of Texas at Austin",
  period: "August 2023 - Present",
  description: [
    `MayaLEX is a collection of lexical resources for early Mayan languages. The project serves as a digital initiative for indigenous languages
      where one can peruse etymological dictionaries like Colonial Ch'olti, Colonial Kaqchikel, Colonial K'iche', and much more.
      The main feature of the dictionary is the linking of words of one language to the words in other associated languages.
      As such, there was a heavy amount of processing and analysis of over 50,000 Mayan language entries, all
      coming from different colonial sources as well as modern sources. Throughout the development of the project,
      I created Python automation scripts that reduced data processing time of Excel datasets
      while also implementing data classification algorithms that helped extract specific linguistic features and attributes.
      The project is far from finished, but we had a successful launch of a robust prototype that has laid the groundwork for implementing 
      similar projects for other language families found in Mesoamerica.`,
    `MayaLEX holds a dear place in my heart due to the intended audience and purpose. Indigeneity in the archive is a practical and ethical challenge,
      one that must be taken into account when creating applications such as MayaLEX. For that reason, careful work is 
      required, and that applies to the programming side of things as well.`,
    `The website link redirects you to the initial launch of the MayaLEX prototype. As for the two repos,
      they contain the version history of the development of the project. Since most of the files and versions are on
      my local machine, I've been slowly trying to migrate both to a centralized repo with all the changes.`,
  ],
  linkUrl: "https://lrc-test.la.utexas.edu/lexicon/mayalex",
  repoUrls: [
    "https://github.com/kevinbarcenasmtz/MayaLEX",
    "https://github.com/kevinbarcenasmtz/MAYALEX_Workflow",
  ],
};

export const nahuatLexExperience = {
  title: "Computational Linguistics Research Assistant - NahuatLEX",
  company: "Linguistics Research Center, University of Texas at Austin",
  period: "April 2025 - Present",
  description: [
    `NahuatLEX serves as the V2 of the MayaLEX prototype. As I've been developing MayaLEX, I realized how crucial git control was, 
        especially when comparing different datasets and outputs of Python scripts. So as the development for NahuatLEX continues,
        I'll be practicing good Git habits to maintain version history. Now, NahuatLEX serves as a collection
        of lexical resources for the Nahuatl language family. The datasets/colonial sources used in NahuatLEX vary vastly from the 
        ones used in MayaLEX. So the data pre-processing process has looked quite different, with more of a focus on parsing HTML tags and
        cleaning up source code. The good news is that we now have an environment for deploying to production based on MayaLEX, so
        that pipeline should be a lot smoother to go through. The hard part would be preparing the data to be passed through.`,
    `While no official launch exists for the application yet, I do have the repo URL that is being updated frequently.`,
  ],
  repoUrls: ["https://github.com/kevinbarcenasmtz/NahuatLEX"],
};

export const notesIntro = {
  title: "Notes",
  description: `Here I intend to link some of my notes throughout the years,
   papers that I've read (that are interesting to me), and any documentation 
  that I've written related to stuff I've worked on.`,
};

export const miscIntro = {
  title: "Miscellaneous",
  description:
    "Not entirely sure what to include in this section! It'll eventually be populated though with stuff I find fun or interesting.",
};
