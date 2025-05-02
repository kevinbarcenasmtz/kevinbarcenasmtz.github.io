// src/components/resume/ContactInfo.tsx
export default function ContactInfo() {
  return (
    <div className="contact-info">
      <p>
        <span className="contact-label">Email:</span>
        <a href="mailto:kevin14767@utexas.edu">kevin14767@utexas.edu</a>
      </p>
      <p>
        <span className="contact-label">Phone:</span>
        <span>(512)-620-4612</span>
      </p>
      <p>
        <span className="contact-label">LinkedIn:</span>
        <a href="https://linkedin.com/in/kevin-barcenas" target="_blank" rel="noopener noreferrer">
          linkedin.com/in/kevin-barcenas
        </a>
      </p>
    </div>
  );
}