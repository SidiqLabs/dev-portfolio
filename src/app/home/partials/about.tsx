// src/app/home/partials/about.tsx

import { motion } from 'motion/react';

import { ABOUT_DATA } from '@/constants/about-data';
import { type StatItem, statsData } from '@/constants/stats-data';
import { cn } from '@/lib/utils';

type StatisticCircleProps = StatItem;

/*
|--------------------------------------------------------------------------
| Statistics Circle Size
|--------------------------------------------------------------------------
|
| Controls responsive circle sizing for all statistic items.
| Shared between filled and outlined variants.
|
*/
const statisticCircleSizeClass =
  'aspect-square w-[clamp(9.5rem,39vw,11rem)] md:w-[clamp(11rem,19vw,17.0625rem)]';

/*
|--------------------------------------------------------------------------
| Statistics Typography Content
|--------------------------------------------------------------------------
|
| Controls:
| - statistic number typography
| - statistic label typography
| - inner content alignment
|
*/
const statisticCircleContent = (value: string, label: string) => (
  <div className='-translate-y-1 text-center'>
    <strong className='block text-[clamp(2.25rem,4vw,3.5rem)] leading-none font-extrabold tracking-[-0.03em] text-neutral-25'>
      {value}
    </strong>

    <span className='mt-4 block max-w-36 text-[clamp(0.875rem,1.15vw,1.125rem)] leading-snug font-normal text-neutral-200'>
      {label}
    </span>
  </div>
);

const StatisticCircle = ({ value, label, variant }: StatisticCircleProps) => {
  /*
  |--------------------------------------------------------------------------
  | Filled Statistics Variant
  |--------------------------------------------------------------------------
  |
  | Primary highlighted statistic style.
  | Uses solid gradient background.
  |
  */
  if (variant === 'filled') {
    return (
      <div
        className={cn(
          statisticCircleSizeClass,
          'ds-glow-brand-sm ds-transition-interactive flex flex-col items-center justify-center rounded-full bg-[image:var(--gradient-brand)] hover:-translate-y-2 hover:shadow-[var(--shadow-glow-brand-hover-sm)]',
        )}
      >
        {statisticCircleContent(value, label)}
      </div>
    );
  }

  /*
  |--------------------------------------------------------------------------
  | Outlined Statistics Variant
  |--------------------------------------------------------------------------
  |
  | Secondary statistic style.
  | Uses gradient border with dark inner background.
  |
  */
  return (
    <div
      className={cn(
        statisticCircleSizeClass,
        'ds-glow-brand-sm ds-transition-interactive group rounded-full bg-[image:var(--gradient-brand)] p-px hover:-translate-y-2 hover:shadow-[var(--shadow-glow-brand-hover-sm)]',
      )}
    >
      <div className='ds-transition-interactive flex h-full w-full flex-col items-center justify-center rounded-full bg-base-background/95 group-hover:bg-base-background/90'>
        {statisticCircleContent(value, label)}
      </div>
    </div>
  );
};

const About = () => {
  return (
    <section
      id='about'
      className='relative overflow-hidden bg-base-background pt-0 pb-20 md:pt-0 md:pb-28 lg:pt-0 lg:pb-32'
    >
      {/* Section Background Atmosphere */}
      <div
        aria-hidden='true'
        className='pointer-events-none absolute inset-0'
      >
        <div className='absolute top-10 left-1/2 h-[520px] w-[960px] -translate-x-1/2 rounded-full bg-[var(--gradient-brand-soft)] opacity-35 blur-[140px]' />
      </div>

      <div className='custom-container relative z-10'>
        {/* About Heading + Description Layout */}
        <div className='grid gap-8 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] md:items-start md:gap-12 lg:gap-20'>
          {/* About Section Title */}
          <motion.h2
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: 0.6,
              ease: 'easeOut',
            }}
            className='text-[clamp(2rem,5vw,3rem)] leading-[3.75rem] font-extrabold tracking-[-0.02em] text-neutral-25'
          >
            {ABOUT_DATA.title}
          </motion.h2>

          {/* About Section Description */}
          <motion.p
            initial={{ opacity: 0, y: 42 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: 0.6,
              delay: 0.12,
              ease: 'easeOut',
            }}
            className='max-w-198 text-[var(--text-lg)] leading-[var(--text-lg--line-height)] font-normal text-neutral-100/75'
          >
            {ABOUT_DATA.description}
          </motion.p>
        </div>

        {/* Statistics Grid */}
        <div className='mt-16 grid grid-cols-2 justify-items-center gap-5 sm:gap-6 md:mt-20 md:grid-cols-4 md:gap-5 lg:mt-24 lg:gap-5'>
          {statsData.map((statistic, index) => (
            <motion.div
              key={statistic.label}
              initial={{ opacity: 0, y: 42, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.12 + 0.24,
                ease: 'easeOut',
              }}
            >
              <StatisticCircle {...statistic} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
