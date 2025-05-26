// src/components/resume/NotesSection.tsx
import { motion } from 'motion/react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

const noteVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

export default function NotesSection() {
  const notes = [
    {
      date: "2024",
      category: "Development Philosophy",
      title: "On Building Maintainable Code",
      content: "I've learned that the best code is not the cleverest code, but the code that clearly communicates its intent. Every abstraction should solve a real problem, not just demonstrate technical prowess."
    },
    {
      date: "2024",
      category: "Technical Growth",
      title: "From Frameworks to Fundamentals",
      content: "While frameworks change rapidly, understanding core concepts like data flow, state management, and performance optimization creates a solid foundation that transcends any particular technology stack."
    },
    {
      date: "2024", 
      category: "Problem Solving",
      title: "The Power of Constraints",
      content: "Some of my best solutions came from working within tight constraints - limited time, resources, or technical requirements. Constraints force creativity and often lead to more elegant solutions."
    },
    {
      date: "2024",
      category: "Collaboration",
      title: "Code Reviews as Learning",
      content: "The most valuable part of code reviews isn't catching bugs - it's the knowledge transfer. Every review is an opportunity to learn something new or teach something valuable."
    }
  ];

  return (
    <motion.section 
      className="notes-section"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div className="section-header" variants={itemVariants}>
        <h2>Notes & Reflections</h2>
        <p className="section-subtitle">
          Thoughts on development, learning, and building better software
        </p>
      </motion.div>

      <motion.div className="notes-grid" variants={itemVariants}>
        {notes.map((note, index) => (
          <motion.article
            key={index}
            className="note-card"
            variants={noteVariants}
            whileHover={{
              y: -4,
              transition: { duration: 0.2 }
            }}
          >
            <div className="note-header">
              <span className="note-category">{note.category}</span>
              <span className="note-date">{note.date}</span>
            </div>
            <h3 className="note-title">{note.title}</h3>
            <p className="note-content">{note.content}</p>
          </motion.article>
        ))}
      </motion.div>

      <motion.div className="notes-footer" variants={itemVariants}>
        <p className="notes-disclaimer">
          These thoughts evolve as I grow as a developer. What matters most is the continuous journey of learning and improvement.
        </p>
      </motion.div>
    </motion.section>
  );
}