// src/components/sections/SectionContent.tsx
import ProfileSection from '../resume/ProfileSection';
import EducationSection from '../resume/EducationSection';
import ExperienceItem from '../resume/ExperienceItem';
import ProjectItem from '../resume/ProjectItem';
import SkillsList from '../resume/SkillsList';
import ContactInfo from '../resume/ContactInfo';
import { 
  skills, 
  researchExperience, 
  truckingProject, 
  footballProject,
  aboutMeContent,
  projectsIntro,
  resumeContent
} from '../../data/portfolio';

type SectionContentProps = {
  sectionId: string;
};

export default function SectionContent({ sectionId }: SectionContentProps) {
  if (sectionId === 'about-me') {
    return (
      <>
        <ProfileSection />
        {aboutMeContent.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
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
    return <p>{projectsIntro}</p>;
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
        <p>{resumeContent.description}</p>
        <a 
          href={resumeContent.href}
          target="_blank" 
          rel="noopener noreferrer"
          className="resume-button"
        >
          {resumeContent.buttonText}
        </a>
      </>
    );
  }

  return null;
}