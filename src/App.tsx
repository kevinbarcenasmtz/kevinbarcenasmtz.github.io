// src/App.tsx
import { useEffect, useRef, useState } from 'react';
import TableOfContents from './components/sidebar/TableOfContents';
import MobileNav from './components/sidebar/MobileNav';
import ProfileSection from './components/resume/ProfileSection';
import EducationSection from './components/resume/EducationSection';
import ExperienceItem from './components/resume/ExperienceSection';
import ProjectItem from './components/resume/ProjectItem';
import SkillsList from './components/resume/SkillsList';
import ContactInfo from './components/resume/ContactInfo';
import './index.css';
import './components/resume/resume.css';

const tocItems = [
  { id: 'about-me', label: 'About Me', depth: 1 },
  { id: 'education', label: 'Education', depth: 2 },
  { id: 'skills', label: 'Skills & Technologies', depth: 2 },
  { id: 'projects', label: 'Projects', depth: 1 },
  { id: 'trucking-logistics', label: 'Trucking Logistics', depth: 2 },
  { id: 'empire-football', label: 'Empire Football League', depth: 2 },
  { id: 'experience', label: 'Experience', depth: 1 },
  { id: 'contact', label: 'Contact Information', depth: 1 },
  { id: 'resume', label: 'Resume', depth: 1 },
];

// Resume data
const skills = [
  { 
    category: 'Technical Skills', 
    skills: 'Python, TypeScript, Java, C, Objective-C, Swift, HTML/CSS, NLTK, CLTK, Pandas, NumPy' 
  },
  { 
    category: 'Frameworks & Tools', 
    skills: 'Next.js, React Native, Expo, MongoDB, MySQL, Firebase, Supabase, NextAuth, Google Cloud Platform, Docker, AWS, Xcode' 
  },
  { 
    category: 'Languages', 
    skills: 'Spanish (Fluent), English (Native)' 
  }
];

const researchExperience = {
  title: 'Computational Linguistics Research Assistant',
  company: 'Linguistics Research Center, University of Texas at Austin',
  period: 'August 2023-Present',
  description: [
    'Processed and analyzed over 50,000 Mayan language entries, achieving 98% accuracy in data classification.',
    'Reduced data processing time by 60% through automation of workflow using Python scripts.',
    'Contributed to successful launch of online etymological dictionary accessed by linguistic scholars across the field.'
  ]
};

const truckingProject = {
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

const footballProject = {
  title: 'Empire Football League Soccer Platform',
  date: 'December 2024',
  technologies: 'Next.js, MongoDB, NextAuth, PayPal',
  description: [
    'Architected and deployed a comprehensive soccer league management system using Next.js 14 and MongoDB, featuring team profiles, match scheduling, and real-time standings updates, serving over 12 teams and 120+ players.',
    'Implemented secure role-based authentication using NextAuth.js to manage distinct access levels for league administrators, team managers, and players, with personalized dashboards and content management capabilities.',
    'Added responsive design principles resulting in a 45% increase in mobile user engagement.'
  ]
};

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef<HTMLElement[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on mobile on initial render and when window resizes
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]) {
          const index = sectionRefs.current.findIndex(
            (el) => el?.id === visible[0].target.id
          );
          if (index !== -1) setActiveIndex(index);
        }
      },
      { rootMargin: '0px 0px -80% 0px', threshold: 0.1 }
    );

    sectionRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  // Create a download resume button with responsive styling
  const ResumeButton = () => (
    <a 
      href="/resume.pdf" 
      target="_blank" 
      rel="noopener noreferrer"
      className="resume-button"
    >
      Download Resume (PDF)
    </a>
  );

  return (
    <div className="container">
      {isMobile ? (
        <MobileNav>
          <TableOfContents items={tocItems} activeIndex={activeIndex} />
        </MobileNav>
      ) : (
        <aside className="sidebar">
          <TableOfContents items={tocItems} activeIndex={activeIndex} />
        </aside>
      )}

      <main className="main">
        <section
          id="about-me"
          ref={(el) => {
            sectionRefs.current[0] = el!;
          }}
          className="section"
        >
          <h2>About Me</h2>
          <ProfileSection />
          <p>
            Computer Science & Linguistics student at the University of Texas at Austin,
            passionate about building web and mobile applications. 
            I combine my technical skills with linguistic knowledge to create innovative solutions.
          </p>
        </section>

        <section
          id="education"
          ref={(el) => {
            sectionRefs.current[1] = el!;
          }}
          className="section"
        >
          <h2>Education</h2>
          <EducationSection />
        </section>

        <section
          id="skills"
          ref={(el) => {
            sectionRefs.current[2] = el!;
          }}
          className="section"
        >
          <h2>Skills & Technologies</h2>
          <SkillsList skills={skills} />
        </section>

        <section
          id="projects"
          ref={(el) => {
            sectionRefs.current[3] = el!;
          }}
          className="section"
        >
          <h2>Projects</h2>
          <p>
            These are some of the projects I've worked on that demonstrate my technical skills and problem-solving abilities.
          </p>
        </section>

        <section
          id="trucking-logistics"
          ref={(el) => {
            sectionRefs.current[4] = el!;
          }}
          className="section"
        >
          <h2>Trucking Logistics</h2>
          <ProjectItem {...truckingProject} />
        </section>

        <section
          id="empire-football"
          ref={(el) => {
            sectionRefs.current[5] = el!;
          }}
          className="section"
        >
          <h2>Empire Football League Platform</h2>
          <ProjectItem {...footballProject} />
        </section>

        <section
          id="experience"
          ref={(el) => {
            sectionRefs.current[6] = el!;
          }}
          className="section"
        >
          <h2>Experience</h2>
          <ExperienceItem {...researchExperience} />
        </section>

        <section
          id="contact"
          ref={(el) => {
            sectionRefs.current[7] = el!;
          }}
          className="section"
        >
          <h2>Contact Information</h2>
          <ContactInfo />
        </section>

        <section
          id="resume"
          ref={(el) => {
            sectionRefs.current[8] = el!;
          }}
          className="section"
        >
          <h2>Resume</h2>
          <p>
            You can download my full resume as a PDF by clicking the link below:
          </p>
          <ResumeButton />
        </section>
      </main>
    </div>
  );
}