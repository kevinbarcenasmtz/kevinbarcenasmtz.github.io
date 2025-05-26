// src/components/resume/EnhancedProjectItem.tsx - Fix flickering
import { motion } from 'motion/react';

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

export default function EnhancedProjectItem({ 
  title, 
  date, 
  technologies, 
  description,
  metrics,
  demoUrl,
  githubUrl,
  featured = false
}: EnhancedProjectItemProps) {
  return (
    <motion.div 
      className={`enhanced-project-item ${featured ? 'featured' : ''}`}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}  // Changed from whileInView to animate
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      style={{ opacity: 1, transform: 'translateY(0px)' }}  // Force final state
    >      

      <div className="project-header">
        <h3>{title}</h3>
        <p className="project-date">{date}</p>
      </div>

      <div className="project-metrics">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="metric-badge"
          >
            <span className="metric-value">{metric.value}</span>
            <span className="metric-label">{metric.label}</span>
          </div>
        ))}
      </div>

      <div className="project-tech-enhanced">
        {technologies.map((tech) => (
          <motion.span
            key={tech}
            className="tech-tag"
            whileHover={{ y: -1 }}
            transition={{ duration: 0.2 }}
          >
            {tech}
          </motion.span>
        ))}
      </div>

      <ul className="project-description">
        {description.map((item, index) => (
          <li key={index}>
            {item}
          </li>
        ))}
      </ul>

      {(demoUrl || githubUrl) && (
        <div className="project-actions">
          {demoUrl && (
            <motion.a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-action-btn demo"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
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
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              View Code →
            </motion.a>
          )}
        </div>
      )}
    </motion.div>
  );
}