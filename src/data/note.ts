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
  type: 'API' | 'Guide' | 'Tutorial' | 'Reference';
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
  status: 'Published' | 'In Review' | 'Draft';
};

export const sampleBlogs: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'Building Scalable React Applications with TypeScript',
    date: '2025-01-15',
    description: 'A deep dive into patterns and practices for building maintainable React apps with TypeScript. Covering state management, component architecture, and performance optimization.',
    url: 'https://medium.com/@kevin/react-typescript-scalable',
    tags: ['React', 'TypeScript', 'Architecture'],
    featured: true
  },
  {
    id: 'blog-2',
    title: 'Computational Linguistics: Bridging Language and Technology',
    date: '2024-12-10',
    description: 'Exploring how computational methods are revolutionizing linguistic research, from corpus analysis to machine translation.',
    url: 'https://dev.to/kevin/computational-linguistics',
    tags: ['Linguistics', 'NLP', 'Research'],
    featured: false
  },
  {
    id: 'blog-3',
    title: 'Mobile App Development with React Native and Expo',
    date: '2024-11-20',
    description: 'Lessons learned from building cross-platform mobile apps, including performance tips, deployment strategies, and common pitfalls.',
    tags: ['React Native', 'Mobile', 'Expo'],
    featured: false
  }
];

export const sampleDocs: Document[] = [
  {
    id: 'doc-1',
    title: 'MayaLEX API Documentation',
    date: '2024-12-01',
    description: 'Comprehensive API documentation for the MayaLEX etymological dictionary platform, including endpoints, authentication, and data formats.',
    url: '/docs/mayalex-api',
    type: 'API',
    tags: ['API', 'Documentation', 'Linguistics']
  },
  {
    id: 'doc-2',
    title: 'React Component Library Style Guide',
    date: '2024-10-15',
    description: 'Design system and component library documentation for building consistent user interfaces with reusable React components.',
    type: 'Guide',
    tags: ['React', 'Design System', 'Components']
  },
  {
    id: 'doc-3',
    title: 'Trucking Logistics App Setup Guide',
    date: '2025-01-10',
    description: 'Step-by-step guide for setting up and configuring the trucking logistics mobile application, including OCR setup and API configuration.',
    url: '/docs/trucking-setup',
    type: 'Tutorial',
    tags: ['Mobile', 'Setup', 'OCR']
  }
];

export const samplePapers: Paper[] = [
  {
    id: 'paper-1',
    title: 'Automated Classification of Mayan Language Etymological Data',
    date: '2024-11-30',
    venue: 'Journal of Computational Linguistics',
    abstract: 'This paper presents a novel approach to automatically classifying and processing etymological data from Mayan languages using machine learning techniques. Our method achieved 98% accuracy in classification tasks and reduced processing time by 60%.',
    pdfUrl: '/papers/mayan-classification.pdf',
    tags: ['NLP', 'Machine Learning', 'Linguistics'],
    status: 'Published'
  },
  {
    id: 'paper-2',
    title: 'Cross-Platform Mobile Development for Enterprise Applications',
    date: '2024-09-15',
    venue: 'ACM Mobile Computing Conference',
    abstract: 'An analysis of cross-platform development frameworks for enterprise mobile applications, with a focus on performance, maintainability, and development velocity.',
    tags: ['Mobile Development', 'Enterprise', 'Performance'],
    status: 'In Review'
  },
  {
    id: 'paper-3',
    title: 'Digital Preservation of Indigenous Languages Through Computational Methods',
    date: '2024-08-20',
    venue: 'Digital Humanities Quarterly',
    abstract: 'Exploring the role of computational linguistics in preserving and documenting indigenous languages, with case studies from Mayan and Nahuatl language projects.',
    pdfUrl: '/papers/indigenous-preservation.pdf',
    tags: ['Digital Humanities', 'Language Preservation', 'Indigenous Languages'],
    status: 'Published'
  }
];