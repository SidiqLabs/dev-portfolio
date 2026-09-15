// src/constants/hero-data.ts

export const HERO_DATA = {
  badge: "Sidiq's Portfolio",
  headline: {
    prefix: 'I am a',
    highlight: 'Front-End Software Engineer',
    suffix: '& Web Programming Enthusiast',
  },
  description:
    'Hi, I’m Sidiq, a front-end engineer in progress focused on building responsive, maintainable, and user-centered web applications with modern frontend technologies.',
  primaryCTA: {
    label: 'View Portfolio',
    href: '#projects',
  },
  video: {
    youtubeId: 'Lpmn8iMK32c',
    title: 'Sidiq portfolio introduction video',
  },
} as const;

export const HERO_GLOW_DOTS = [
  {
    id: 'dot-1',
    className: 'top-[14%] left-[12%]',
    motion: null,
  },
  {
    id: 'dot-2',
    className: 'top-[24%] left-[22%]',
    motion: {
      duration: 4.5,
      delay: 0.6,
    },
  },
  {
    id: 'dot-3',
    className: 'top-[28%] left-[10%]',
    motion: null,
  },
  {
    id: 'dot-4',
    className: 'top-[36%] left-[28%]',
    motion: {
      duration: 5.5,
      delay: 1.4,
    },
  },
  {
    id: 'dot-5',
    className: 'top-[12%] right-[16%]',
    motion: null,
  },
  {
    id: 'dot-6',
    className: 'top-[18%] right-[28%]',
    motion: {
      duration: 6.5,
      delay: 2.1,
    },
  },
  {
    id: 'dot-7',
    className: 'top-[26%] right-[10%]',
    motion: null,
  },
  {
    id: 'dot-8',
    className: 'top-[34%] right-[22%]',
    motion: {
      duration: 7.5,
      delay: 0.2,
    },
  },
  {
    id: 'dot-9',
    className: 'top-[42%] right-[14%]',
    motion: null,
  },
] as const;
