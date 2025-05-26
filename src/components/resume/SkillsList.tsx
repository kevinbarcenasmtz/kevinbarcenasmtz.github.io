// src/components/resume/SkillsList.tsx
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

type SkillCategory = {
  category: string;
  skills: string;
};

type SkillsListProps = {
  skills: SkillCategory[];
};

export default function SkillsList({ skills }: SkillsListProps) {
  return (
    <div className="skills-typewriter">
      {skills.map((category, index) => (
        <TypewriterCategory 
          key={index}
          category={category}
          delay={index * 1.5}
        />
      ))}
    </div>
  );
}

type TypewriterCategoryProps = {
  category: SkillCategory;
  delay: number;
};

function TypewriterCategory({ category, delay }: TypewriterCategoryProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const fullText = category.skills;

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setHasStarted(true);
      let currentIndex = 0;
      
      const typingInterval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setDisplayedText(fullText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          setTimeout(() => setIsComplete(true), 1000); // Stop blinking after 1 second
        }
      }, 30); // 40ms per character - adjust typing speed here

      return () => clearInterval(typingInterval);
    }, delay * 1000);

    return () => clearTimeout(startTimer);
  }, [fullText, delay]);

  return (
    <motion.div 
      className="skill-category-typewriter"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay * 0.2 }}
    >
      <h4>{category.category}:</h4>
      <div className="typewriter-container-char">
        <div className={`typewriter-text-char ${isComplete ? 'completed' : ''} ${hasStarted ? 'started' : ''}`}>
          <span className="typewriter-content">{displayedText}</span>
        </div>
      </div>
    </motion.div>
  );
}