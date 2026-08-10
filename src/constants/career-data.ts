// src/constants/career-data.ts

export type CareerItem = {
  role: string;
  organization: string;
  period: string;
  highlights: string[];
};

export const CAREER_SECTION_DATA = {
  title: 'Career Journey',
  description:
    'A visual timeline of my transition from technical field experience to modern frontend engineering.',
} as const;

export const careerData: CareerItem[] = [
  {
    role: 'Maintenance Technician',
    organization: 'Automotive Manufacturing Industry',
    period: 'Current Role',
    highlights: [
      'Handled real-world troubleshooting for production machines with a focus on accuracy, safety, and downtime reduction.',
      'Built a strong engineering mindset through root-cause analysis, structured checking, and disciplined problem solving.',
      'Developed practical experience in electrical systems, machine control, and industrial maintenance workflows.',
    ],
  },
  {
    role: 'Frontend Developer in Training',
    organization: 'Frontend Bootcamp & Personal Practice',
    period: '2025 - Present',
    highlights: [
      'Strengthened JavaScript, TypeScript, React, and Next.js fundamentals through structured assignments and project-based learning.',
      'Practiced professional frontend patterns including component composition, state management, reusable UI, and clean data flow.',
      'Focused on building responsive, maintainable, and user-centered interfaces using modern frontend technologies.',
    ],
  },
  {
    role: 'Personal Portfolio Development',
    organization: 'Dev Portfolio Project',
    period: '2026',
    highlights: [
      'Built a personal developer portfolio using Next.js App Router, TypeScript, Tailwind CSS v4, and shadcn-style UI primitives.',
      'Implemented a design-system-driven workflow with reusable constants, controlled styling scope, and responsive layout discipline.',
      'Enhanced the user experience with a modern UI, responsive layouts, and subtle motion animations.',
    ],
  },
];
