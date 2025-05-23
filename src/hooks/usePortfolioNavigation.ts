// src/hooks/usePortfolioNavigation.ts
import { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from './useMediaQuery';

export function usePortfolioNavigation() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef<HTMLElement[]>([]);
  
  // Use media query hook instead of manual resize listener
  const isMobile = useMediaQuery('(max-width: 768px)');

  // Intersection observer effect for active section tracking
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

    // Only observe sections that exist
    const currentRefs = sectionRefs.current.filter(Boolean);
    currentRefs.forEach((ref) => observer.observe(ref));
    
    return () => observer.disconnect();
  }, []); // Remove dependency array since refs are stable

  return {
    activeIndex,
    isMobile,
    sectionRefs
  };
}