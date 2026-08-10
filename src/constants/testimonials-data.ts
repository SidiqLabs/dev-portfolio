export type Testimonial = {
  id: string;
  name: string;
  role: string;
  avatarSrc: string;
  quote: string;
  featured?: boolean;
};

export const testimonialsData: Testimonial[] = [
  {
    id: 'frontend-mentor',
    name: 'Frontend Mentor',
    role: 'Web Development Instructor',
    avatarSrc: '/assets/images/profile1.jpg',
    quote:
      'Sidiq does not just copy code. He keeps asking why something works until the structure finally makes sense.',
  },
  {
    id: 'project-reviewer',
    name: 'Project Reviewer',
    role: 'Code Review Partner',
    avatarSrc: '/assets/images/profile2.jpg',
    quote:
      'He is persistent when fixing UI issues. He checks the browser result, compares the design, and improves it step by step.',
    featured: true,
  },
  {
    id: 'technical-colleague',
    name: 'Technical Colleague',
    role: 'Automation & Maintenance Team',
    avatarSrc: '/assets/images/profile3.jpg',
    quote:
      'His maintenance background gives him a practical mindset. He understands that reliable systems are built carefully.',
  },
  {
    id: 'learning-partner',
    name: 'Learning Partner',
    role: 'Frontend Study Group',
    avatarSrc: '/assets/images/profile1.jpg',
    quote:
      'Sidiq asks direct questions, accepts correction, and keeps refining the implementation until it feels cleaner.',
  },
  {
    id: 'ui-feedback-partner',
    name: 'UI Feedback Partner',
    role: 'Design Review Contributor',
    avatarSrc: '/assets/images/profile2.jpg',
    quote:
      'He pays attention to spacing, responsive behavior, animation, and visual consistency. That patience shows in the result.',
  },
  {
    id: 'development-partner',
    name: 'Development Partner',
    role: 'Project Collaboration Reviewer',
    avatarSrc: '/assets/images/profile3.jpg',
    quote:
      'He treats his portfolio like a real product. Decisions are documented, builds are checked, and details are not ignored.',
  },
  {
    id: 'react-reviewer',
    name: 'React Reviewer',
    role: 'Component Review Partner',
    avatarSrc: '/assets/images/profile1.jpg',
    quote:
      'His component structure keeps getting better. He is learning to separate UI, data, and logic in a professional way.',
  },
  {
    id: 'nextjs-partner',
    name: 'Next.js Partner',
    role: 'App Router Reviewer',
    avatarSrc: '/assets/images/profile2.jpg',
    quote:
      'He is careful with page composition and section boundaries. That discipline is important for a scalable frontend project.',
  },
  {
    id: 'design-reviewer',
    name: 'Design Reviewer',
    role: 'Visual Feedback Partner',
    avatarSrc: '/assets/images/profile3.jpg',
    quote:
      'He does not stop at making things work. He keeps adjusting the UI until the section feels balanced and intentional.',
  },
  {
    id: 'code-feedback-partner',
    name: 'Code Feedback Partner',
    role: 'Frontend Practice Reviewer',
    avatarSrc: '/assets/images/profile1.jpg',
    quote:
      'His code reviews show steady progress. He is getting better at spotting duplication, naming issues, and weak structure.',
  },
  {
    id: 'bootcamp-peer',
    name: 'Bootcamp Peer',
    role: 'Frontend Learning Peer',
    avatarSrc: '/assets/images/profile2.jpg',
    quote:
      'Sidiq has strong consistency. Even after work, he keeps learning and pushing his portfolio forward.',
  },
  {
    id: 'qa-reviewer',
    name: 'QA Reviewer',
    role: 'Interface Testing Partner',
    avatarSrc: '/assets/images/profile3.jpg',
    quote:
      'He checks small visual bugs carefully. Hover state, spacing, overflow, and responsive issues do not escape easily.',
  },
  {
    id: 'frontend-community-member',
    name: 'Community Member',
    role: 'Frontend Discussion Partner',
    avatarSrc: '/assets/images/profile1.jpg',
    quote:
      'He brings real-world engineering questions into frontend learning. That makes his learning path more grounded.',
  },
  {
    id: 'animation-reviewer',
    name: 'Animation Reviewer',
    role: 'Motion Feedback Partner',
    avatarSrc: '/assets/images/profile2.jpg',
    quote:
      'His animation choices are becoming smoother. He is learning that good motion should support the interface, not distract from it.',
  },
  {
    id: 'accessibility-partner',
    name: 'Accessibility Partner',
    role: 'UI Quality Reviewer',
    avatarSrc: '/assets/images/profile3.jpg',
    quote:
      'He is starting to care about labels, keyboard behavior, and semantic structure. That is a good sign for production work.',
  },
  {
    id: 'performance-reviewer',
    name: 'Performance Reviewer',
    role: 'Frontend Optimization Partner',
    avatarSrc: '/assets/images/profile1.jpg',
    quote:
      'He thinks about bundle size, rendering, and image usage. The mindset is moving from just building to optimizing.',
  },
  {
    id: 'career-mentor',
    name: 'Career Mentor',
    role: 'Developer Career Advisor',
    avatarSrc: '/assets/images/profile2.jpg',
    quote:
      'Sidiq is building his transition carefully. His portfolio shows effort, direction, and serious ownership.',
  },
  {
    id: 'engineering-partner',
    name: 'Engineering Partner',
    role: 'System Thinking Reviewer',
    avatarSrc: '/assets/images/profile3.jpg',
    quote:
      'He connects frontend decisions with engineering principles. That makes his work more mature than simple visual cloning.',
  },
];
