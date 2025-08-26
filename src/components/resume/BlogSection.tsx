// src/components/resume/BlogsSection.tsx
import { sampleBlogs } from "../../data/note";

export default function BlogsSection() {
  return (
    <div className="content-section">
      <div className="content-grid">
        {sampleBlogs.map((blog) => (
          <article
            key={blog.id}
            className={`content-card ${blog.featured ? "featured" : ""}`}
          >
            <div className="content-header">
              <h3 className="content-title">{blog.title}</h3>
              <span className="content-date">{blog.date}</span>
            </div>

            <p className="content-description">{blog.description}</p>

            <div className="content-tags">
              {blog.tags.map((tag) => (
                <span key={tag} className="content-tag">
                  {tag}
                </span>
              ))}
            </div>

            {blog.url && (
              <div className="content-actions">
                <a
                  href={blog.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="content-link"
                >
                  Read Article →
                </a>
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
