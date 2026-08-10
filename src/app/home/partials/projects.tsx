'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

import { Section } from '@/components/layouts/section';

import { type Project, projectsData } from '@/constants/projects-data';

const Projects = () => {
  return (
    <Section
      title='Selected Projects'
      subtitle='A collection of frontend projects that show my progress in building responsive, data-driven, and maintainable web applications.'
      id='projects'
    >
      <motion.div
        className='mx-auto grid w-full max-w-[72.375rem] grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3'
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {projectsData.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </motion.div>
    </Section>
  );
};

export default Projects;

type ProjectCardProps = {
  project: Project;
  index: number;
};

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const gradientId = `project-link-gradient-${index}`;

  return (
    <motion.article
      className='group flex h-full flex-col'
      initial={{ opacity: 0, y: 32, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: -8 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.55,
        ease: 'easeOut',
        delay: index * 0.07,
      }}
    >
      <div className='overflow-hidden rounded-2xl bg-card'>
        <Image
          src={project.imageSrc}
          alt={`${project.title} project preview`}
          width={520}
          height={416}
          className='aspect-[1.25/1] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105'
        />
      </div>

      <div className='mt-4 flex flex-1 flex-col'>
        <div className='flex items-start justify-between gap-4'>
          <div>
            <p className='text-xs font-medium text-secondary'>
              {project.year} · {project.status}
            </p>
            <h3 className='mt-2 text-lg font-semibold text-white'>
              {project.title}
            </h3>
          </div>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {project.techStack.map((tech) => (
            <span
              key={`${project.title}-${tech}`}
              className='rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-neutral-200'
            >
              {tech}
            </span>
          ))}
        </div>

        <p className='mt-4 min-h-[4.5rem] text-sm leading-6 text-neutral-200/80 line-clamp-3'>
          {project.description}
        </p>

        <motion.a
          href={project.demoUrl ?? '#'}
          className='mt-10 inline-flex w-fit items-center gap-2 transition-opacity hover:opacity-80'
          aria-label={`Visit ${project.title} project`}
          whileHover={{ x: 4 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        >
          <span
            className='inline-flex items-center gap-2 text-lg font-bold text-transparent'
            style={{
              background: 'var(--gradient-brand)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
            }}
          >
            Visit
            <svg
              className='size-5'
              viewBox='0 0 24 24'
              fill='none'
              aria-hidden='true'
            >
              <defs>
                <linearGradient
                  id={gradientId}
                  x1='0'
                  y1='0'
                  x2='24'
                  y2='24'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='var(--color-brand-pink)' />
                  <stop offset='1' stopColor='var(--color-brand-purple)' />
                </linearGradient>
              </defs>
              <path
                d='M7 17L17 7'
                stroke={`url(#${gradientId})`}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M7 7H17V17'
                stroke={`url(#${gradientId})`}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </span>
        </motion.a>
      </div>
    </motion.article>
  );
};
