// src/components/resume/DocsSection.tsx
import { sampleDocs } from "../../data/note";

export default function DocsSection() {
  return (
    <div className="content-section">
      <div className="content-grid">
        {sampleDocs.map((doc) => (
          <article key={doc.id} className="content-card">
            <div className="content-header">
              <div className="content-title-row">
                <h3 className="content-title">{doc.title}</h3>
                <span className="content-type-badge">{doc.type}</span>
              </div>
              <span className="content-date">{doc.date}</span>
            </div>

            <p className="content-description">{doc.description}</p>

            <div className="content-tags">
              {doc.tags.map((tag) => (
                <span key={tag} className="content-tag">
                  {tag}
                </span>
              ))}
            </div>

            {doc.url && (
              <div className="content-actions">
                <a
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="content-link"
                >
                  View Documentation →
                </a>
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
