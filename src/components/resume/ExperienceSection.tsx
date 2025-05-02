// src/components/resume/ExperienceItem.tsx
type ExperienceItemProps = {
  title: string;
  company: string;
  location?: string;
  period: string;
  description: string[];
};

export default function ExperienceItem({ 
  title, 
  company, 
  location, 
  period, 
  description 
}: ExperienceItemProps) {
  return (
    <div className="experience-item">
      <div className="experience-header">
        <h3>{title}</h3>
        <p className="company">
          {company}
          {location && <span className="location">, {location}</span>}
        </p>
        <p className="period">{period}</p>
      </div>
      <ul className="experience-description">
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}