// src/App.tsx
import PortfolioLayout from './components/layout/PortfolioLayout';
import Section from './components/layout/Section';
import SectionContent from './components/sections/SectionContent';
import { tocItems, sectionConfigs } from './data/section';
import { usePortfolioNavigation } from './hooks/usePortfolioNavigation';
import './index.css';
import './components/resume/resume.css';

export default function App() {
  const { activeIndex, isMobile, sectionRefs } = usePortfolioNavigation();

  return (
    <PortfolioLayout 
      isMobile={isMobile} 
      tocItems={tocItems} 
      activeIndex={activeIndex}
    >
      {sectionConfigs.map((config, index) => (
        <Section
          key={config.id}
          id={config.id}
          title={config.title}
          index={index}
          sectionRefs={sectionRefs}
        >
          <SectionContent sectionId={config.id} />
        </Section>
      ))}
    </PortfolioLayout>
  );
}