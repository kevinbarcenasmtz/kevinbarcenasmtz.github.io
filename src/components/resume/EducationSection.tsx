// src/components/resume/EducationSection.tsx
export default function EducationSection() {
  return (
    <div className="education-section">
      <h3>University of Texas at Austin</h3>
      <p className="degree">B.S in Computer Science, B.A in Linguistics, Minor in Business</p>
      
      <div className="education-details">
        <span>Expected Graduation: May 2026</span>
        <span className="gpa">GPA: 3.40</span>
      </div>
      
      <div className="coursework">
        <h4>Coursework:</h4>
        <div className="course-list">
          <span>Operating Systems</span>
          <span>Computer Architecture</span>
          <span>Data Structures</span>
          <span>Machine Learning</span>
          <span>Software Engineering</span>
          <span>Database Management</span>
          <span>Analyzing Textual Data: Linguistic Stats</span>
          <span>Matrix Calculations & Linear Algebra</span>
          <span>Probability & Statistics</span>
          <span>Phonetics: Production/Perception of Sounds</span>
          <span>Syntax & Semantincs: Strucutre/Meaning</span>
        </div>
      </div>
    </div>
  );
}