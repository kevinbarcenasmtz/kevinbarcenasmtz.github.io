import React, { useState, useRef, useEffect } from 'react';

type MobileNavProps = {
  children: React.ReactNode;
};

const useOutsideClick = (
  ref: React.RefObject<HTMLElement | null>,
  handler: () => void
) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) return;
      handler();
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};

export default function MobileNav({ children }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => isOpen && setIsOpen(false);
  useOutsideClick(sidebarRef, closeMenu);

  return (
    <>
      <button className="menu-toggle" onClick={toggleMenu}>
        <svg width="24" height="24" viewBox="0 0 24 24">
          {isOpen ? (
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" />
          ) : (
            <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" />
          )}
        </svg>
      </button>
      <div ref={sidebarRef} className={`sidebar ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(false)}>
        {children}
      </div>
      {isOpen && <div className="mobile-overlay" onClick={closeMenu} aria-hidden="true" />}
    </>
  );
}
