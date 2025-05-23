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

// Import data from data layer
import { tocItems } from './data/section';
import { 
  skills, 
  researchExperience, 
  truckingProject, 
  footballProject 
} from './data/portfolio';

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
            As a Mexican-American from Austin, Texas, with both parents who immigrated from Mexico, 
            I've grown up with the advantage of being bilingual. This bilingualism has profoundly shaped my 
            outlook on life, my identity, and my personal ideals. It has influenced my journey in higher
            education after high school. You see, it is not entirely common for Mexican young adults to pursue 
            education beyond high school. For various reasons, but I can provide more context for that later. 
            On a similar note I believe that having the opportunity to learn 
            is a privilege and more importantly, a way I can inspire and influence young teens to continue their 
            educational journey. The critical question becomes: What do I do with the knowledge I'm acquiring? I feel 
            the best way to use my skills and contribute to society is to create meaningful, useful solutions for people. 
            This is precisely why I've focused my studies on computer science, which laid the foundation for me to develop websites, 
            apps, and software that can serve communities. My study of linguistics further enhances this foundation by applying 
            technological solutions to language specific challenges, problems, and tasks that can be uniquely addressed through 
            the intersection of computer science and linguistics.
          </p>
          <p>
          Another characteristic that I strive to uphold is my personal code of ethics. While this varies by 
          individual, I believe there is a near universal human consensus around protecting one's family, children, 
          and loved ones. For me, this translates into being overly conscious about the things I purchase and the 
          things I support. People often say to "vote with your wallet," but in the tech industry, I think a quote on the same note would be
          "build/vote with your tech stack." As I continue to develop technological solutions, I am committed to
          being mindful of the tools I choose and fully understanding the broader implications of those choices.
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
            These are some of the projects I've worked on that I'm particularly proud of.
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