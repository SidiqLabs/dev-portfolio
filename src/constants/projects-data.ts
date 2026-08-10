export type ProjectStatus = 'Completed' | 'In Progress';

export type Project = {
  title: string;
  description: string;
  imageSrc: string;
  techStack: string[];
  year: string;
  status: ProjectStatus;
  demoUrl?: string;
  sourceUrl?: string;
};

export const projectsData: Project[] = [
  {
    title: 'Movie MDB',
    description:
      'A movie discovery application built to practice API integration, responsive layouts, and dynamic content rendering.',
    imageSrc: '/assets/images/project1.jpg',
    techStack: ['React', 'TypeScript', 'API'],
    year: '2026',
    status: 'Completed',
    demoUrl: '#',
    sourceUrl: '#',
  },
  {
    title: 'Restaurant Web Frontend',
    description:
      'A restaurant ordering interface focused on menu browsing, cart flow, and frontend state management.',
    imageSrc: '/assets/images/project2.jpg',
    techStack: ['Next.js', 'Redux', 'Tailwind'],
    year: '2026',
    status: 'Completed',
    demoUrl: '#',
    sourceUrl: '#',
  },
  {
    title: 'Social Media App',
    description:
      'A social media interface built to practice post rendering, user interaction, and structured state flow.',
    imageSrc: '/assets/images/project3.jpg',
    techStack: ['React', 'TypeScript', 'Query'],
    year: '2026',
    status: 'Completed',
    demoUrl: '#',
    sourceUrl: '#',
  },
  {
    title: 'Library Management',
    description:
      'A library management project focused on data modeling, CRUD behavior, and clean application logic.',
    imageSrc: '/assets/images/project1.jpg',
    techStack: ['JavaScript', 'OOP', 'JSON'],
    year: '2026',
    status: 'Completed',
    demoUrl: '#',
    sourceUrl: '#',
  },
  {
    title: 'Blog Platform',
    description:
      'A blog interface prepared to support article listing, readable layouts, and content-driven structure.',
    imageSrc: '/assets/images/project2.jpg',
    techStack: ['Next.js', 'TypeScript', 'SEO'],
    year: '2026',
    status: 'In Progress',
    demoUrl: '#',
    sourceUrl: '#',
  },
  {
    title: 'Dev Portfolio',
    description:
      'A personal developer portfolio built with a design-system approach and disciplined frontend architecture.',
    imageSrc: '/assets/images/project3.jpg',
    techStack: ['Next.js', 'Tailwind', 'Motion'],
    year: '2026',
    status: 'In Progress',
    demoUrl: '#',
    sourceUrl: '#',
  },
];
