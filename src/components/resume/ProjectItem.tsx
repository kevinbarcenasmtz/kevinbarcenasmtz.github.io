// src/components/resume/ProjectItem.tsx
type ProjectItemProps = {
  title: string;
  date: string;
  technologies: string;
  description: string[];
};

export default function ProjectItem({ 
  title, 
  date, 
  technologies, 
  description 
}: ProjectItemProps) {
  return (
    <div className="project-item">
      <div className="project-header">
        <h3>{title}</h3>
        <p className="project-date">{date}</p>
      </div>
      <p className="project-tech">{technologies}</p>
      <ul className="project-description">
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}