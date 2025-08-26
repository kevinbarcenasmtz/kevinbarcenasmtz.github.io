// src/components/resume/ProjectsIntro.tsx
import { motion } from "motion/react";

type ProjectsIntroProps = {
  title: string;
  description: string;
};

export default function ProjectsIntro({
  title,
  description,
}: ProjectsIntroProps) {
  return (
    <motion.div
      className="projects-intro"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
    >
      <motion.h2
        className="projects-intro-title"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {title}
      </motion.h2>

      <motion.div
        className="projects-intro-underline"
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 1, ease: [0.4, 0, 0.2, 1] }}
      />

      <motion.p
        className="projects-intro-description"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
}
