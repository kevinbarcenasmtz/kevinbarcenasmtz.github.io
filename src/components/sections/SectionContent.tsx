// src/components/sections/SectionContent.tsx - Add the new import and conditional
import ProfileSection from '../resume/ProfileSection';
import EducationSection from '../resume/EducationSection';
import ExperienceItem from '../resume/ExperienceItem';
import ProjectItem from '../resume/ProjectItem';
import ProjectsIntro from '../resume/ProjectsIntro';
import NotesSection from '../resume/NotesSection';
import ContactInfo from '../resume/ContactInfo';
import PersonalSection from '../resume/PersonalSection';
import {
  researchExperience,
  truckingLogistics,
  empireFootballGroup,
  unidadAustinContent,
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

  if (sectionId === 'personal') { // Add this conditional
    return <PersonalSection />;
  }

  if (sectionId === 'projects') {
    return <ProjectsIntro title={projectsIntro.title} description={projectsIntro.description} />;
  }

  if (sectionId === 'trucking-logistics') {
    return <ProjectItem {...truckingLogistics} />;
  }

  if (sectionId === 'empire-football') {
    return <ProjectItem {...empireFootballGroup} />;
  }

  if (sectionId === 'unidad-austin') {
    return <ProjectItem {...unidadAustinContent} />;
  }

  if (sectionId === 'experience') {
    return <ExperienceItem {...researchExperience} />;
  }
  
  if (sectionId === 'notes'){
    return <NotesSection/>;
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