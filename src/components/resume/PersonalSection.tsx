// src/components/resume/PersonalSection.tsx
import { personalContent } from "../../data/portfolio";

export default function PersonalSection() {
  return (
    <div className="personal-section">
      <div className="personal-content">
        {personalContent.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}