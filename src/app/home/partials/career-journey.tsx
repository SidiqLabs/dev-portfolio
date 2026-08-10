// src/app/home/partials/career-journey.tsx

'use client';

import { BriefcaseBusiness, CalendarDays } from 'lucide-react';
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from 'motion/react';
import { useRef } from 'react';

import { CAREER_SECTION_DATA, careerData } from '@/constants/career-data';

const CareerJourney = () => {
  const timelineRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 78%', 'end 38%'],
  });

  const timelineProgress = useMotionValue(0);

  useMotionValueEvent(scrollYProgress, 'change', (latestProgress) => {
    if (latestProgress > timelineProgress.get()) {
      timelineProgress.set(latestProgress);
    }
  });

  const timelineScaleY = useSpring(timelineProgress, {
    stiffness: 70,
    damping: 24,
    mass: 0.45,
    restDelta: 0.001,
  });

  return (
    <section id='career-journey' className='bg-base-background py-10 md:py-20'>
      <div className='custom-container'>
        {/* Career Journey Heading */}
        <div className='text-center'>
          {/* Career Journey Title */}
          <h2 className='text-neutral-25 text-[clamp(2rem,5vw,3rem)] leading-[3.75rem] font-extrabold tracking-[-0.02em]'>
            {CAREER_SECTION_DATA.title}
          </h2>

          {/* Career Journey Description */}
          <p className='mx-auto mt-4 max-w-[48rem] leading-[var(--text-lg--line-height)] font-normal text-[var(--text-lg)] text-neutral-400'>
            {CAREER_SECTION_DATA.description}
          </p>
        </div>

        {/* Timeline Wrapper */}
        <div ref={timelineRef} className='relative mx-auto mt-12 max-w-[980px]'>
          {/* Scroll-driven Timeline Progress */}
          <motion.div
            aria-hidden='true'
            style={{ scaleY: timelineScaleY }}
            className='from-brand-pink via-brand-purple to-brand-pink absolute top-2 left-4 h-[calc(100%-1rem)] w-[6px] origin-top rounded-full bg-gradient-to-b md:left-6'
          />

          {/* Timeline Items */}
          <div className='space-y-5 md:space-y-6'>
            {careerData.map((item, index) => (
              <motion.article
                key={`${item.role}-${item.period}`}
                initial={{ opacity: 0, y: 48 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                  ease: 'easeOut',
                }}
                className='relative pl-12 md:pl-20'
              >
                {/* Timeline Node */}
                <div className='absolute top-[-36px] left-[-17px] z-10 flex size-[72px] items-center justify-center md:left-[-9px]'>
                  {/* Outer Figma Ellipse */}
                  <motion.span
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.14,
                      ease: 'easeOut',
                    }}
                    className='absolute size-6 rounded-full bg-[var(--color-primary-100)] shadow-[0_4px_24px_rgba(135,70,235,0.32)]'
                  />

                  {/* Inner Gradient Dot */}
                  <motion.span
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.35,
                      delay: index * 0.14 + 0.12,
                      ease: 'easeOut',
                    }}
                    className='relative size-3 rounded-full bg-[image:var(--gradient-brand)]'
                  />
                </div>

                {/* Career Card */}
                <div className='ds-glow-brand-sm ds-transition-interactive bg-base-background hover:border-brand-purple/40 rounded-3xl border border-neutral-800/70 p-5 hover:-translate-y-2 hover:shadow-[var(--shadow-glow-brand-hover-sm)] md:p-6'>
                  {/* Career Role */}
                  <h3 className='text-neutral-25 text-[1.125rem] leading-7 font-bold md:text-[1.25rem]'>
                    {item.role}
                  </h3>

                  {/* Career Metadata */}
                  <div className='mt-4 flex flex-col gap-2.5 leading-[var(--text-lg--line-height)] font-medium text-[var(--text-lg)] text-neutral-300 sm:flex-row sm:flex-wrap sm:items-center'>
                    <div className='flex items-center gap-2'>
                      <BriefcaseBusiness className='size-4 text-neutral-200' />
                      <span>{item.organization}</span>
                    </div>

                    <span className='hidden text-neutral-500 sm:inline'>•</span>

                    <div className='flex items-center gap-2'>
                      <CalendarDays className='size-4 text-neutral-200' />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  {/* Career Highlights */}
                  <ul className='mt-5 space-y-2.5 leading-[var(--text-lg--line-height)] font-normal text-[var(--text-lg)] text-neutral-400'>
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className='flex gap-3'>
                        <span className='bg-brand-pink/80 mt-[0.72em] size-1.5 shrink-0 rounded-full shadow-[0_0_10px_rgba(220,73,166,0.35)]' />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerJourney;
