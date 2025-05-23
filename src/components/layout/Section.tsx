// src/components/layout/Section.tsx
import React, { RefObject } from 'react';

type SectionProps = {
  id: string;
  title: string;
  index: number;
  children: React.ReactNode;
  sectionRefs: RefObject<HTMLElement[]>;
};

export default function Section({ 
  id, 
  title, 
  index, 
  children, 
  sectionRefs 
}: SectionProps) {
  return (
    <section
      id={id}
      ref={(el) => {
        if (sectionRefs.current) {
          sectionRefs.current[index] = el!;
        }
      }}
      className="section"
    >
      <h2>{title}</h2>
      {children}
    </section>
  );
}