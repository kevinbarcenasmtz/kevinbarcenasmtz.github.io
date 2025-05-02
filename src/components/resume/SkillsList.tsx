// src/components/resume/SkillsList.tsx
type SkillCategory = {
  category: string;
  skills: string;
};

type SkillsListProps = {
  skills: SkillCategory[];
};

export default function SkillsList({ skills }: SkillsListProps) {
  return (
    <div className="skills-list">
      {skills.map((category, index) => (
        <div key={index} className="skill-category">
          <h4>{category.category}:</h4>
          <p>{category.skills}</p>
        </div>
      ))}
    </div>
  );
}