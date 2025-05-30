// src/components/sidebar/MobileNav.tsx
import React, { useState, useRef } from 'react';
import { useOutsideClick } from '../../hooks/useOutsideClick';

type MobileNavProps = {
  children: React.ReactNode;
};

export default function MobileNav({ children }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => isOpen && setIsOpen(false);
  
  useOutsideClick(sidebarRef, closeMenu);

  // Handle clicks on navigation links specifically
  const handleNavLinkClick = (event: React.MouseEvent) => {
    // Only close if clicking on an actual navigation link
    const target = event.target as HTMLElement;
    if (target.tagName === 'A' || target.closest('a')) {
      // Close menu immediately to avoid interference with scroll detection
      setIsOpen(false);
    }
  };

  return (
    <>
      <button 
        className="menu-toggle" 
        onClick={toggleMenu}
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isOpen}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          {isOpen ? (
            <path 
              d="M18 6L6 18M6 6L18 18" 
              stroke="currentColor" 
              strokeWidth="2"
              strokeLinecap="round"
            />
          ) : (
            <path 
              d="M4 6H20M4 12H20M4 18H20" 
              stroke="currentColor" 
              strokeWidth="2"
              strokeLinecap="round"
            />
          )}
        </svg>
      </button>
      
      <div 
        ref={sidebarRef} 
        className={`sidebar ${isOpen ? 'open' : ''}`} 
        onClick={handleNavLinkClick}
      >
        {children}
      </div>
      
      {isOpen && (
        <div 
          className="mobile-overlay" 
          onClick={closeMenu} 
          aria-hidden="true" 
        />
      )}
    </>
  );
}