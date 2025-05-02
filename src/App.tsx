import { useEffect, useRef, useState } from 'react';
import TableOfContents from './components/TableOfContents';
import './index.css';

const tocItems = [
  { id: 'about-me', label: 'About Me', depth: 1 },
  { id: 'introduction', label: 'Introduction', depth: 2 },
  { id: 'skills-&-technologies', label: 'Skills & Technologies', depth: 2 },
  { id: 'projects', label: 'Projects', depth: 1 },
  { id: 'explore', label: 'Explore', depth: 2 },
  { id: 'writing-content', label: 'Writing Content', depth: 2 },
  { id: 'experience', label: 'Experience', depth: 1 },
  { id: 'blog', label: 'Blog', depth: 1 },
  { id: 'contact-information', label: 'Contact Information', depth: 1 },
  { id: 'resume', label: 'Resume', depth: 1 },
];

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]) {
          const index = sectionRefs.current.findIndex(
            (el) => el?.id === visible[0].target.id
          );
          if (index !== -1) setActiveIndex(index);
        }
      },
      { rootMargin: '0px 0px -80% 0px', threshold: 0.1 }
    );

    sectionRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="container">
      <aside className="sidebar">
        <TableOfContents items={tocItems} activeIndex={activeIndex} />
      </aside>

      <main className="main">
        {tocItems.map((item, i) => (
          <section
            key={item.id}
            id={item.id}
            ref={(el) => {
              sectionRefs.current[i] = el!;
            }}
            className="section"
          >
            <h2>{item.label}</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              dignissim metus id lorem gravida, at feugiat leo sagittis.
            </p>
          </section>
        ))}
      </main>
    </div>
  );
}
