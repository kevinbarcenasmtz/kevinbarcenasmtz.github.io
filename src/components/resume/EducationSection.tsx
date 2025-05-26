// src/components/resume/EducationSection.tsx
import { motion } from 'motion/react';

const courses = [
  { name: 'Operating Systems', category: 'systems' },
  { name: 'Computer Architecture', category: 'systems' },
  { name: 'Data Structures', category: 'fundamentals' },
  { name: 'Machine Learning', category: 'ml' },
  { name: 'Software Engineering', category: 'software' },
  { name: 'Database Management', category: 'data' }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

const courseVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

export default function EducationSection() {
  return (
    <motion.div
      className="education-card"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{
        boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
        transition: { duration: 0.3 }
      }}
    >
      <motion.h3 variants={itemVariants} className="education-title">
        University of Texas at Austin
      </motion.h3>
      
      <motion.p variants={itemVariants} className="degree">
        B.S in Computer Science, B.A in Linguistics, Minor in Business
      </motion.p>
      
      <motion.div variants={itemVariants} className="education-details">
        <span className="graduation">Expected Graduation: May 2026</span>
        <motion.span
          className="gpa"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          GPA: 3.40
        </motion.span>
      </motion.div>
      
      <motion.div variants={itemVariants} className="coursework-section">
        <h4>Coursework:</h4>
        <motion.div className="course-tags" layout>
          {courses.map((course) => (
            <motion.span
              key={course.name}
              className={`course-tag ${course.category}`}
              variants={courseVariants}
            >
              {course.name}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}