// src/components/sections/SectionContent.tsx - Add the new intro and props
import ProfileSection from '../resume/ProfileSection';
import EducationSection from '../resume/EducationSection';
import ExperienceItem from '../resume/ExperienceItem';
import EnhancedProjectItem from '../resume/EnhancedProjectItem';
import ProjectsIntro from '../resume/ProjectsIntro';
import SkillsList from '../resume/SkillsList';
import ContactInfo from '../resume/ContactInfo';
import {
  skills,
  researchExperience,
  truckingProjectEnhanced,
  footballProjectEnhanced,
  projectsIntro,
  resumeContent
} from '../../data/portfolio';

type SectionContentProps = {
  sectionId: string;
};

export default function SectionContent({ sectionId }: SectionContentProps) {
  if (sectionId === 'about-me') {
    return <ProfileSection />;
  }

  if (sectionId === 'education') {
    return <EducationSection />;
  }

  if (sectionId === 'skills') {
    return <SkillsList skills={skills} />;
  }

  if (sectionId === 'projects') {
    return <ProjectsIntro title={projectsIntro.title} description={projectsIntro.description} />;
  }

  if (sectionId === 'trucking-logistics') {
    return <EnhancedProjectItem {...truckingProjectEnhanced} />;
  }

  if (sectionId === 'empire-football') {
    return <EnhancedProjectItem {...footballProjectEnhanced} />;
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