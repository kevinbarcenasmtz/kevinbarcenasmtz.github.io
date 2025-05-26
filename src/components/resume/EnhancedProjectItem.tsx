// src/components/resume/EnhancedProjectItem.tsx
'use client';

import { motion } from 'framer-motion';

type Metric = {
  label: string;
  value: string;
};

type EnhancedProjectItemProps = {
  title: string;
  date: string;
  technologies: string[];
  description: string[];
  metrics: Metric[];
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
};

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

export default function EnhancedProjectItem({
  title,
  date,
  technologies,
  description,
  metrics,
  demoUrl,
  githubUrl,
  featured = false,
}: EnhancedProjectItemProps) {
  return (
    <motion.div
      className={`enhanced-project-item ${featured ? 'featured' : ''}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div className="project-header" variants={itemVariants}>
        <h3>{title}</h3>
        <p className="project-date">{date}</p>
      </motion.div>

      <motion.div className="project-metrics" variants={itemVariants}>
        {metrics.map((metric) => (
          <motion.div
            key={metric.label}
            className="metric-badge"
            whileHover={{
              y: -2,
              transition: { duration: 0.2 },
            }}
          >
            <span className="metric-value">{metric.value}</span>
            <span className="metric-label">{metric.label}</span>
          </motion.div>
        ))}
      </motion.div>

      <motion.div className="project-tech-enhanced" variants={itemVariants}>
        {technologies.map((tech) => (
          <motion.span
            key={tech}
            className="tech-tag"
            whileHover={{
              y: -1,
              transition: { duration: 0.2 },
            }}
          >
            {tech}
          </motion.span>
        ))}
      </motion.div>

      <motion.ul className="project-description" variants={itemVariants}>
        {description.map((item, index) => (
          <motion.li key={index} variants={itemVariants}>
            {item}
          </motion.li>
        ))}
      </motion.ul>

      {(demoUrl || githubUrl) && (
        <motion.div className="project-actions" variants={itemVariants}>
          {demoUrl && (
            <motion.a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-action-btn demo"
              whileHover={{
                scale: 1.02,
                y: -1,
                transition: { duration: 0.2 },
              }}
              whileTap={{
                scale: 0.98,
                transition: { duration: 0.1 },
              }}
            >
              View Demo →
            </motion.a>
          )}
          {githubUrl && (
            <motion.a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-action-btn github"
              whileHover={{
                scale: 1.02,
                y: -1,
                transition: { duration: 0.2 },
              }}
              whileTap={{
                scale: 0.98,
                transition: { duration: 0.1 },
              }}
            >
              View Code →
            </motion.a>
          )}
        </motion.div>
      )}
    </motion.div>
  );
}
