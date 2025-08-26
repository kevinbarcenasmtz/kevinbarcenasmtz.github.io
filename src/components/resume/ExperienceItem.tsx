// src/components/resume/ExperienceItem.tsx
type ExperienceItemProps = {
  title: string;
  company: string;
  period: string;
  description: string[];
  linkUrl?: string;
  repoUrls?: string[];
};

export default function ExperienceItem({
  title,
  company,
  period,
  description,
  linkUrl,
  repoUrls,
}: ExperienceItemProps) {
  return (
    <div className="experience-item">
      <div className="experience-header">
        <h3>{title}</h3>
        <p className="company">{company}</p>
        <p className="period">{period}</p>
      </div>
      <div className="experience-description">
        {description.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
      {linkUrl && (
        <div className="experience-link">
          <a href={linkUrl} target="_blank" rel="noopener noreferrer">
            Visit the website
          </a>
        </div>
      )}
      {repoUrls && repoUrls.length > 0 && (
        <div className="experience-repolinks">
          {repoUrls.map((url, index) => (
            <a key={index} href={url} target="_blank" rel="noopener noreferrer">
              Visit repo {index + 1}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
