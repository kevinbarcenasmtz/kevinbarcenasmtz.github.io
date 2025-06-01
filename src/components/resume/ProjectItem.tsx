// src/components/projects/MinimalProjectCard.tsx
type MinimalProjectProps = {
  title: string;
  date: string;
  technologies: string[];
  description: string[];
  demoUrl?: string;
  githubUrl?: string;
};

export default function MinimalProjectCard({
  title,
  date,
  description,
  technologies,
  demoUrl,
  githubUrl
}: MinimalProjectProps) {
  return (
    <div className="terminal-card">
      <div className="terminal-header">
        <div className="terminal-dots">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>
        <span className="terminal-title">{title}</span>
        <span className="terminal-date">{date}</span>
      </div>
     
      <div className="terminal-body">
        <div className="terminal-line">
          <span className="prompt">$</span>
          <span className="command">cat project_info.txt</span>
        </div>
       
        <div className="terminal-output">
          {description.map((desc, index) => (
            <p key={index}>{desc}</p>
          ))}
        </div>
       
        <div className="terminal-line">
          <span className="prompt">$</span>
          <span className="command">ls technologies/</span>
        </div>
       
        <div className="terminal-tech">
          {technologies.map((tech, i) => (
            <span key={tech} className="terminal-tech-item">
              {tech}{i < technologies.length - 1 ? '  ' : ''}
            </span>
          ))}
        </div>
       
        {(demoUrl || githubUrl) && (
          <>
            <div className="terminal-line">
              <span className="prompt">$</span>
              <span className="command">open links</span>
            </div>
            <div className="terminal-links">
              {demoUrl && <a href={demoUrl} target="_blank" rel="noopener noreferrer">[demo]</a>}
              {githubUrl && <a href={githubUrl} target="_blank" rel="noopener noreferrer">[code]</a>}
            </div>
          </>
        )}
      </div>
    </div>
  );
}