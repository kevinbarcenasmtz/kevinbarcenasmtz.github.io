// src/data/sections.ts
import { TocItem } from '../hooks/useToc';

export const tocItems: TocItem[] = [
  { id: 'about-me', label: 'About Me', depth: 1 },
  { id: 'personal', label: 'Personal', depth: 2},
  { id: 'education', label: 'Education', depth: 2 },
  { id: 'contact', label: 'Contact', depth: 2 },
  { id: 'projects', label: 'Projects', depth: 1 },
  { id: 'trucking-logistics', label: 'Trucking Logistics', depth: 2 },
  { id: 'empire-football', label: 'Empire Football League', depth: 2 },
  { id: 'experience', label: 'Experience', depth: 1 },
  { id: 'notes', label: 'Notes', depth: 1},
  { id: 'resume', label: 'Resume', depth: 1 },
];

export type SectionConfig = {
  id: string;
  title: string;
  order: number;
};

export const sectionConfigs: SectionConfig[] = [
  { id: 'about-me', title: 'About Me', order: 0 },
  { id: 'personal', title: 'Personal', order: 1},
  { id: 'education', title: 'Education', order: 2 },
  { id: 'contact', title: 'Contact', order: 3},
  { id: 'projects', title: 'Projects', order: 4 },
  { id: 'trucking-logistics', title: 'Trucking Logistics', order: 5 },
  { id: 'empire-football', title: 'Empire Football League Platform', order: 6 },
  { id: 'experience', title: 'Experience', order: 7 }, 
  { id: 'notes', title: 'Notes', order: 8},
  { id: 'resume', title: 'Resume', order: 9 },
];