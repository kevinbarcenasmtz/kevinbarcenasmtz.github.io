// src/data/notes.ts

export type BlogPost = {
  id: string;
  title: string;
  date: string;
  description: string;
  url?: string;
  tags: string[];
  featured?: boolean;
};

export type Document = {
  id: string;
  title: string;
  date: string;
  description: string;
  url?: string;
  type: "API" | "Guide" | "Tutorial" | "Reference";
  tags: string[];
};

export type Paper = {
  id: string;
  title: string;
  date: string;
  venue: string;
  abstract: string;
  pdfUrl?: string;
  url?: string;
  tags: string[];
  status: "Published" | "In Review" | "Draft";
};

export const sampleBlogs: BlogPost[] = [
  // {
  //   id: 'blog-1',
  //   title: 'Building Scalable React Applications with TypeScript',
  //   date: '2025-01-15',
  //   description: 'A deep dive into patterns and practices for building maintainable React apps with TypeScript. Covering state management, component architecture, and performance optimization.',
  //   url: 'https://medium.com/@kevin/react-typescript-scalable',
  //   tags: ['React', 'TypeScript', 'Architecture'],
  //   featured: true
  // },
];

export const sampleDocs: Document[] = [
  // {
  //   id: 'doc-1',
  //   title: 'MayaLEX API Documentation',
  //   date: '2024-12-01',
  //   description: 'Comprehensive API documentation for the MayaLEX etymological dictionary platform, including endpoints, authentication, and data formats.',
  //   url: '/docs/mayalex-api',
  //   type: 'API',
  //   tags: ['API', 'Documentation', 'Linguistics']
  // },
];

export const samplePapers: Paper[] = [
  // {
  //   id: 'paper-1',
  //   title: 'Automated Classification of Mayan Language Etymological Data',
  //   date: '2024-11-30',
  //   venue: 'Journal of Computational Linguistics',
  //   abstract: 'This paper presents a novel approach to automatically classifying and processing etymological data from Mayan languages using machine learning techniques. Our method achieved 98% accuracy in classification tasks and reduced processing time by 60%.',
  //   pdfUrl: '/papers/mayan-classification.pdf',
  //   tags: ['NLP', 'Machine Learning', 'Linguistics'],
  //   status: 'Published'
  // },
];
