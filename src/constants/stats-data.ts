export type StatItem = {
  value: string;
  label: string;
  variant: 'outline' | 'filled';
};

export const statsData: StatItem[] = [
  {
    value: '3+',
    label: 'Years Experience',
    variant: 'outline',
  },
  {
    value: '30+',
    label: 'Projects',
    variant: 'filled',
  },
  {
    value: '90+',
    label: 'Students',
    variant: 'outline',
  },
  {
    value: '20+',
    label: 'Learning Milestones',
    variant: 'filled',
  },
];
