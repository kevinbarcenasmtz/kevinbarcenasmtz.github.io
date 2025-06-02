// src/components/resume/ExperienceIntro.tsx
import { motion } from 'motion/react';

type ExperienceIntroProps = {
  title: string;
  description: string;
};

export default function ExperienceIntro({ title, description }: ExperienceIntroProps) {
  return (
    <motion.div 
      className="experience-intro"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="experience-intro-title">{title}</h2>
      <p className="experience-intro-description">{description}</p>
    </motion.div>
  );
}