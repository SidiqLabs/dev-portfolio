'use client';

import Image from 'next/image';
import { useState } from 'react';

import { Section } from '@/components/layouts/section';
import { Marquee } from '@/components/ui/marquee';

import { testimonialsData, type Testimonial } from '@/constants/testimonials-data';

import styles from './testimonials.module.css';

const topRowTestimonials = testimonialsData.filter((_, index) => index % 2 === 0);
const bottomRowTestimonials = testimonialsData.filter((_, index) => index % 2 === 1);

const featuredTestimonial = testimonialsData.find(
  (testimonial) => testimonial.featured
);

const defaultSelectedTestimonial = featuredTestimonial
  ? `${
      testimonialsData.indexOf(featuredTestimonial) % 2 === 0 ? 'right' : 'left'
    }-${featuredTestimonial.id}`
  : undefined;

const Testimonials = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(
    defaultSelectedTestimonial
  );

  return (
    <Section
      title='What People Say About Me'
      subtitle='Hear from mentors, reviewers, and colleagues about their experience seeing how I learn, build, and improve.'
      id='testimonials'
    >
      <div className='relative mx-auto max-w-[98rem] overflow-visible'>
        <div className='pointer-events-none absolute -right-50 -top-35 -z-10 size-[32.375rem] rounded-full [background:var(--glow-atmosphere-purple)] blur-[22.625rem]' />

        <div className='space-y-5'>
          <TestimonialRow
            direction='right'
            testimonials={topRowTestimonials}
            selectedTestimonial={selectedTestimonial}
            onSelect={setSelectedTestimonial}
          />

          <TestimonialRow
            direction='left'
            testimonials={bottomRowTestimonials}
            selectedTestimonial={selectedTestimonial}
            onSelect={setSelectedTestimonial}
          />
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;

type TestimonialRowProps = {
  testimonials: Testimonial[];
  selectedTestimonial: string | undefined;
  onSelect: (id: string) => void;
  direction: 'left' | 'right';
};

const TestimonialRow = ({
  testimonials,
  selectedTestimonial,
  onSelect,
  direction,
}: TestimonialRowProps) => {
  return (
    <div
      className={[
        styles.marqueeViewport,
        'relative left-1/2 w-[min(96.25rem,calc(100vw-2rem))] -translate-x-1/2',
        'md:w-[min(96.25rem,calc(100vw-clamp(6rem,10vw,10rem)))]',
      ].join(' ')}
    >
      <Marquee
        reverse={direction === 'right'}
        pauseOnHover
        repeat={1}
        className='py-2 [--duration:36s] [--gap:1.25rem]'
      >
        {testimonials.map((testimonial) => {
          const testimonialInstanceId = `${direction}-${testimonial.id}`;

          return (
            <div
              key={testimonialInstanceId}
              className='w-[clamp(20rem,31vw,31.25rem)] shrink-0'
            >
              <TestimonialCard
                testimonial={testimonial}
                isSelected={testimonialInstanceId === selectedTestimonial}
                onSelect={() => onSelect(testimonialInstanceId)}
              />
            </div>
          );
        })}
      </Marquee>
    </div>
  );
};

type TestimonialCardProps = {
  testimonial: Testimonial;
  isSelected: boolean;
  onSelect: () => void;
};

const TestimonialCard = ({
  testimonial,
  isSelected,
  onSelect,
}: TestimonialCardProps) => {
  const { name, role, avatarSrc, quote } = testimonial;

  return (
    <button
      type='button'
      onClick={onSelect}
      aria-pressed={isSelected}
      className={[
        'group h-[15.1875rem] w-full cursor-pointer overflow-hidden text-left',
        'rounded-2xl border p-5 md:rounded-3xl md:p-6',
        'bg-base-background/85 backdrop-blur-sm',
        'transition-all duration-300',
        isSelected
          ? 'border-transparent shadow-[var(--shadow-glow-brand-sm)] [background:linear-gradient(var(--color-base-background),var(--color-base-background))_padding-box,var(--gradient-brand)_border-box]'
          : 'border-neutral-900 hover:-translate-y-1 hover:border-brand-purple/40 hover:shadow-[var(--shadow-glow-brand-xs)]',
      ].join(' ')}
    >
      <div className='flex items-center gap-3'>
        <Image
          src={avatarSrc}
          alt={name}
          width={40}
          height={40}
          className='size-10 rounded-full object-cover'
        />

        <div>
          <p className='text-sm-bold text-neutral-25'>{name}</p>
          <p className='text-sm-regular text-neutral-400'>{role}</p>
        </div>
      </div>

      <p className='mt-6 line-clamp-4 text-[var(--text-lg)] leading-[var(--text-lg--line-height)] font-normal text-neutral-100/75'>
        “{quote}”
      </p>
    </button>
  );
};
