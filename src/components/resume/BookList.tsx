// src/components/resume/BookList.tsx
import { readingList } from "../../data/portfolio";

export default function BookList() {
  return (
    <div className="content-section">
      <div className="content-grid">
        <h1 className="reading-list-title">Reading List</h1>
        {readingList.map((book) => (
          <article key={book.id} className="content-card">
            <div className="content-header">
              <h3 className="content-title">{book.title}</h3>
              <span className="content-author">{book.author}</span>
            </div>

            <p className="content-description">{book.notes}</p>

            <div className="book-status">
              <span
                className={`status-badge ${book.status.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {book.status}
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
