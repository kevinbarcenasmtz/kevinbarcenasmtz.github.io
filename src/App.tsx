// src/App.tsx
import TableOfContents from './components/sidebar/TableOfContents';
import MobileNav from './components/sidebar/MobileNav';
import './index.css';
import './components/resume/resume.css';

// Import data and utilities
import { tocItems, sectionConfigs } from "./data/section";
import { usePortfolioNavigation } from './hooks/usePortfolioNavigation';
import { renderSectionContent } from './utils/sectionRenderer';

export default function App() {
  const { activeIndex, isMobile, sectionRefs } = usePortfolioNavigation();

  return (
    <div className="container">
      {isMobile ? (
        <MobileNav>
          <TableOfContents items={tocItems} activeIndex={activeIndex} />
        </MobileNav>
      ) : (
        <aside className="sidebar">
          <TableOfContents items={tocItems} activeIndex={activeIndex} />
        </aside>
      )}

      <main className="main">
        {sectionConfigs.map((config, index) => (
          <section
            key={config.id}
            id={config.id}
            ref={(el) => {
              sectionRefs.current[index] = el!;
            }}
            className="section"
          >
            <h2>{config.title}</h2>
            {renderSectionContent({ sectionId: config.id })}
          </section>
        ))}
      </main>
    </div>
  );
}