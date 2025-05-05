// src/components/resume/EducationSection.tsx
export default function EducationSection() {
  return (
    <div className="education-section">
      <h3>University of Texas at Austin</h3>
      <p className="degree">B.S in Computer Science, B.A in Linguistics, Minor in Business</p>
      <p className="details">
        <span className="graduation">Expected Graduation: May 2026</span>
        <span className="gpa">GPA: 3.40</span>
      </p>
      <p className="coursework">
        <strong>Coursework:</strong> Operating Systems, Computer Architecture, Data Structures, 
        Machine Learning, Software Engineering, Database Management
      </p>
    </div>
  );
}