// src/components/sections/SectionContent.tsx - Add the new import and conditional
import ProfileSection from "../resume/ProfileSection";
import EducationSection from "../resume/EducationSection";
import ExperienceIntro from "../resume/ExperienceIntro";
import ExperienceItem from "../resume/ExperienceItem";
import ProjectItem from "../resume/ProjectItem";
import ProjectsIntro from "../resume/ProjectsIntro";
import NotesIntro from "../resume/NotesIntro";
import ContactInfo from "../resume/ContactInfo";
import PersonalSection from "../resume/PersonalSection";
import {
  truckingLogistics,
  empireFootballGroup,
  unidadAustinContent,
  projectsIntro,
  experienceIntro,
  ukgInternshipExperience,
  mayaLexExperience,
  nahuatLexExperience,
  notesIntro,
  miscIntro,
} from "../../data/portfolio";
import BlogsSection from "../resume/BlogSection";
import DocsSection from "../resume/DocsSection";
import PapersSection from "../resume/PapersSection";
import PDFViewer from "../pdf/pdfViewer";
import BookList from "../resume/BookList";

type SectionContentProps = {
  sectionId: string;
};

export default function SectionContent({ sectionId }: SectionContentProps) {
  if (sectionId === "about-me") {
    return <ProfileSection />;
  }

  if (sectionId === "education") {
    return <EducationSection />;
  }

  if (sectionId === "personal") {
    // Add this conditional
    return <PersonalSection />;
  }

  if (sectionId === "projects") {
    return (
      <ProjectsIntro
        title={projectsIntro.title}
        description={projectsIntro.description}
      />
    );
  }

  if (sectionId === "trucking-logistics") {
    return <ProjectItem {...truckingLogistics} />;
  }

  if (sectionId === "empire-football") {
    return <ProjectItem {...empireFootballGroup} />;
  }

  if (sectionId === "unidad-austin") {
    return <ProjectItem {...unidadAustinContent} />;
  }

  if (sectionId === "experience") {
    return (
      <ExperienceIntro
        title={experienceIntro.title}
        description={experienceIntro.description}
      />
    );
  }

  if (sectionId === "ukg-internship") {
    return (
      <>
        <ExperienceItem {...ukgInternshipExperience} />
        <PDFViewer pdfUrl="/ukg-presentation.pdf" />
      </>
    );
  }

  if (sectionId === "nahuatLEX") {
    return <ExperienceItem {...nahuatLexExperience} />;
  }

  if (sectionId === "mayaLEX") {
    return (
      <>
        <ExperienceItem {...mayaLexExperience} />
        <PDFViewer pdfUrl="/lingPoster.pdf" />
      </>
    );
  }

  if (sectionId === "notes") {
    return (
      <NotesIntro
        title={notesIntro.title}
        description={notesIntro.description}
      />
    );
  }

  if (sectionId === "blogs") {
    return <BlogsSection />;
  }

  if (sectionId === "docs") {
    return <DocsSection />;
  }

  if (sectionId === "papers") {
    return <PapersSection />;
  }

  if (sectionId === "contact") {
    return <ContactInfo />;
  }

  if (sectionId === "misc") {
    return (
      <>
        <ProjectsIntro
          title={miscIntro.title}
          description={miscIntro.description}
        />
        <BookList />
      </>
    );
  }

  return null;
}
