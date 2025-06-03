// src/components/resume/PapersSection.tsx
import { samplePapers } from '../../data/note';

export default function PapersSection() {
  return (
    <div className="content-section">
      <div className="content-grid">
        {samplePapers.map((paper) => (
          <article key={paper.id} className="content-card">
            <div className="content-header">
              <div className="content-title-row">
                <h3 className="content-title">{paper.title}</h3>
                <span className={`content-status-badge ${paper.status.toLowerCase().replace(' ', '-')}`}>
                  {paper.status}
                </span>
              </div>
              <div className="paper-meta">
                <span className="paper-venue">{paper.venue}</span>
                <span className="content-date">{paper.date}</span>
              </div>
            </div>
            
            <p className="content-description paper-abstract">{paper.abstract}</p>
            
            <div className="content-tags">
              {paper.tags.map((tag) => (
                <span key={tag} className="content-tag">{tag}</span>
              ))}
            </div>
            
            <div className="content-actions">
              {paper.pdfUrl && (
                <a 
                  href={paper.pdfUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="content-link primary"
                >
                  Download PDF →
                </a>
              )}
              {paper.url && (
                <a 
                  href={paper.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="content-link secondary"
                >
                  View Online →
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}