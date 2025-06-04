// src/components/resume/ContactInfo.tsx

export default function ContactInfo() {
  return (
    <div className="contact-info">
      <p>
        Github:{" "}
        <a
          href="https://github.com/kevinbarcenasmtz"
          target="_blank"
          rel="noopener noreferrer"
        >
          kevinbarcenasmtz
        </a>
      </p>
      <p>
        LinkedIn:{" "}
        <a
          href="https://www.linkedin.com/in/kevinbarcenas-mtz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          kevinbarcenas-mtz
        </a>
      </p>
      
      <p>
        Email: <span className="green">kevin14767 @ utexas (dot) edu</span>
      </p>
      <p>
        Discord: <span className="green">kevin14767</span>
      </p>

    </div>
  );
}