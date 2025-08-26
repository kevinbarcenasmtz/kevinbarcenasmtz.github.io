// src/hooks/usePortfolioNavigation.ts
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "./useMediaQuery";
import { URLManager } from "../utils/urlManager";

export function usePortfolioNavigation() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef<HTMLElement[]>([]);
  const isUpdatingFromScroll = useRef(false);

  // Use media query hook instead of manual resize listener
  const isMobile = useMediaQuery("(max-width: 768px)");

  // Handle initial page load and URL-based navigation
  useEffect(() => {
    const initialSection = URLManager.handleInitialLoad();

    // Find the index of the initial section
    const initialIndex = sectionRefs.current.findIndex(
      (el) => el?.id === initialSection,
    );

    if (initialIndex !== -1) {
      setActiveIndex(initialIndex);
    }
  }, []);

  // Listen for browser back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      const sectionFromUrl = URLManager.getCurrentSection();
      const index = sectionRefs.current.findIndex(
        (el) => el?.id === sectionFromUrl,
      );

      if (index !== -1) {
        setActiveIndex(index);
        // Scroll to section without updating URL (since URL is already correct)
        const element = document.getElementById(sectionFromUrl);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  //
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isUpdatingFromScroll.current) return;

        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]) {
          const index = sectionRefs.current.findIndex(
            (el) => el?.id === visible[0].target.id,
          );
          if (index !== -1) {
            // Add a small delay to ensure navigation is complete
            setTimeout(() => {
              setActiveIndex(index);
              URLManager.updateURL(visible[0].target.id);
            }, 50);
          }
        }
      },
      {
        rootMargin: "0px 0px -70% 0px", // Adjusted for better mobile detection
        threshold: 0.1,
      },
    );

    const currentRefs = sectionRefs.current.filter(Boolean);
    currentRefs.forEach((ref) => observer.observe(ref));

    return () => observer.disconnect();
  }, []);

  return {
    activeIndex,
    isMobile,
    sectionRefs,
  };
}
