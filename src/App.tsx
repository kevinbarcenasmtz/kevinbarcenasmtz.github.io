// App.tsx
import { useEffect, useRef, useState } from 'react';
import './index.css';

const tocItems = [
  'introduction',
  'about me',
  'skills & technologies',
  'projects',
  'education',
  'experience',
  'blog',
  'contact information',
  'resume'

];

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [svgPath, setSvgPath] = useState('');
  const tocItemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const sectionRefs = useRef<HTMLElement[]>([]);
  const tocMaskContainerRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    function updatePath() {
      const refs = tocItemRefs.current.filter(Boolean) as HTMLAnchorElement[];
      if (refs.length < 2 || !tocMaskContainerRef.current) return;

      const containerTop = tocMaskContainerRef.current.getBoundingClientRect().top;
      let path = '';
      const startX = 1;
      const zigX = 13;

      for (let i = 0; i < refs.length; i++) {
        const el = refs[i]!;
        const elTop = el.getBoundingClientRect().top - containerTop;
        const mid = elTop + 18;

        if (i === 0) {
          path += `M${startX} ${elTop}`;
        } else {
          path += ` L${startX} ${mid} L${zigX} ${elTop}`;
        }
      }

      setSvgPath(path);
    }

    updatePath();
    window.addEventListener('scroll', updatePath, true);
    window.addEventListener('resize', updatePath);
    return () => {
      window.removeEventListener('scroll', updatePath, true);
      window.removeEventListener('resize', updatePath);
    };
  }, []);

  const thumbTop = tocItemRefs.current[activeIndex]?.offsetTop ?? 0;

  const svgMask = encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 1000">
      <path d="${svgPath}" stroke="white" stroke-width="1" fill="none" />
    </svg>
  `);

  return (
    <div className="container">
      <aside className="sidebar">
        <div className="toc">
          <div className="toc-links" ref={tocMaskContainerRef}>
            {svgPath && (
              <div
                className="thumb"
                style={{
                  transform: `translateY(${thumbTop}px)`,
                  WebkitMaskImage: `url("data:image/svg+xml,${svgMask}")`,
                  maskImage: `url("data:image/svg+xml,${svgMask}")`,
                }}
              />
            )}

            {tocItems.map((item, i) => (
              <a
                key={item}
                href={`#${item}`}
                ref={(el) => {tocItemRefs.current[i] = el;}}
                className={`toc-link ${i === activeIndex ? 'active' : ''}`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </aside>

      <main className="main">
        {tocItems.map((title, i) => (
          <section
            key={title}
            id={title}
            ref={(el) => {sectionRefs.current[i] = el!;}}
            className="section"
          >
            <h2>{title}</h2>
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