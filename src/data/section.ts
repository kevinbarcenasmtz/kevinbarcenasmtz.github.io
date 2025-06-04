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
  { id: 'unidad-austin', label: 'UNIDAD Central Texas', depth: 2 },
  { id: 'experience', label: 'Experience', depth: 1 },
  { id: 'mayaLEX', label: 'MayaLEX', depth: 2},
  { id: 'nahuatLEX', label: 'NahuatLEX', depth: 2},
  { id: 'ukg-internship', label: "UKG Internship", depth: 2},
  { id: 'notes', label: 'Notes', depth: 1},
  { id: 'blogs', label: 'Blogs', depth: 2},
  { id: 'papers', label: 'Papers', depth: 2},
  { id: 'docs', label: 'Documentation', depth: 2},
  { id: 'misc', label: 'Miscellaneous', depth: 1 },
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
  { id: 'empire-football', title: 'Empire Football Group Platform', order: 6 },
  { id: 'unidad-austin', title: 'UNIDAD Central Texas', order: 7 },
  { id: 'experience', title: 'Experience', order: 8 }, 
  { id: 'mayaLEX', title: 'MayaLEX', order: 9},
  { id: 'nahuatLEX', title: 'NahuatLEX', order: 10},
  { id: 'ukg-internship', title: "UKG Internship", order: 11},
  { id: 'notes', title: 'Notes', order: 12},
  { id: 'blogs', title: 'Blogs', order: 13},
  { id: 'papers', title: 'Papers', order: 14},
  { id: 'docs', title: 'Documentation', order: 15},
  { id: 'misc', title: 'Miscellaneous', order: 16 },
];