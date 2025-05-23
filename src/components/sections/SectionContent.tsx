// src/components/sections/SectionContent.tsx
import ProfileSection from '../resume/ProfileSection';
import EducationSection from '../resume/EducationSection';
import ExperienceItem from '../resume/ExperienceSection';
import ProjectItem from '../resume/ProjectItem';
import SkillsList from '../resume/SkillsList';
import ContactInfo from '../resume/ContactInfo';
import { 
  skills, 
  researchExperience, 
  truckingProject, 
  footballProject 
} from '../../data/portfolio';

type SectionContentProps = {
  sectionId: string;
};

// Component-based section content instead of utility function
export default function SectionContent({ sectionId }: SectionContentProps) {
  if (sectionId === 'about-me') {
    return (
      <>
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
      </>
    );
  }

  if (sectionId === 'education') {
    return <EducationSection />;
  }

  if (sectionId === 'skills') {
    return <SkillsList skills={skills} />;
  }

  if (sectionId === 'projects') {
    return (
      <p>
        These are some of the projects I've worked on that I'm particularly proud of.
      </p>
    );
  }

  if (sectionId === 'trucking-logistics') {
    return <ProjectItem {...truckingProject} />;
  }

  if (sectionId === 'empire-football') {
    return <ProjectItem {...footballProject} />;
  }

  if (sectionId === 'experience') {
    return <ExperienceItem {...researchExperience} />;
  }

  if (sectionId === 'contact') {
    return <ContactInfo />;
  }

  if (sectionId === 'resume') {
    return (
      <>
        <p>
          You can download my full resume as a PDF by clicking the link below:
        </p>
        <a 
          href="/resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="resume-button"
        >
          Download Resume (PDF)
        </a>
      </>
    );
  }

  return null;
}