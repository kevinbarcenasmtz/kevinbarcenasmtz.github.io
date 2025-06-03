// src/components/resume/NotesIntro.tsx
import { motion } from 'motion/react';

type NotesIntroProps = {
  title: string;
  description: string;
};

export default function NotesIntro({ title, description }: NotesIntroProps) {
  return (
    <motion.div 
      className="notes-intro"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="notes-intro-title">{title}</h2>
      <p className="notes-intro-description">{description}</p>
    </motion.div>
  );
}