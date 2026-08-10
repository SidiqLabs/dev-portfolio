import React from 'react';

type SectionProps = {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  id?: string;
  descriptionClassName?: string;
};

export const Section: React.FC<SectionProps> = ({
  children,
  title,
  subtitle,
  id,
  descriptionClassName,
}) => {
  return (
    <div className='custom-container py-10 md:py-20' id={id}>
      {/* heading */}
      <div className='text-center'>
        <h2 className='text-[clamp(2rem,5vw,3rem)] leading-[3.75rem] font-extrabold tracking-[-0.02em] text-neutral-25'>
          {title}
        </h2>
        <p
          className={[
            'mx-auto mt-6 max-w-198 text-[var(--text-lg)] leading-[var(--text-lg--line-height)] font-normal text-neutral-100/75',
            descriptionClassName,
          ]
            .filter(Boolean)
            .join(' ')}
        >
          {subtitle}
        </p>
      </div>

      {/* content */}
      <div className='mt-6 md:mt-16'>{children}</div>
    </div>
  );
};
