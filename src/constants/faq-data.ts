// src/constants/faq-data.ts

export type FAQItem = {
  title: string;
  description: string;
};

export const FAQData: FAQItem[] = [
  {
    title: 'How do you ensure websites load quickly and efficiently?',
    description:
      'I focus on optimized images, clean component structure, lazy loading where needed, controlled rendering, and avoiding unnecessary JavaScript. Performance is treated as part of the user experience, not an afterthought.',
  },
  {
    title: 'What is your approach to front-end development?',
    description:
      'I build interfaces with clean structure, predictable data flow, responsive layout, and maintainable code. My goal is not only to make the UI look good, but also to make it reliable and easy to improve.',
  },
  {
    title: 'What kind of projects do you specialize in?',
    description:
      'I focus on modern web interfaces such as landing pages, dashboards, portfolio websites, interactive UI components, and frontend systems that require clean data handling.',
  },
  {
    title: 'How do you handle debugging and code quality?',
    description:
      'I use an audit-first workflow: inspect the structure, identify the real cause, verify runtime behavior, then patch carefully. This helps prevent random fixes and hidden regressions.',
  },
  {
    title: 'What technologies do you use?',
    description:
      'I work with HTML, CSS, JavaScript, TypeScript, React, Next.js, Tailwind CSS, Radix UI, and modern frontend tooling for building responsive and maintainable applications.',
  },
];
