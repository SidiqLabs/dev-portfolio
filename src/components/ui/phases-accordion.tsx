import React from 'react';

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';

import { cn } from '@/lib/utils';

type PhasesAccordionItemElement = React.ReactElement<PhasesAccordionItemProps>;

type PhasesAccordionProps = {
  children: PhasesAccordionItemElement | PhasesAccordionItemElement[];
};

const PhasesAccordion: React.FC<PhasesAccordionProps> = ({ children }) => {
  return (
    <Accordion type='single' collapsible>
      <div className='grid grid-cols-[2.5rem_auto] gap-x-4 md:grid-cols-[3rem_auto] md:gap-x-6'>
        {React.Children.map(children, (child, idx) =>
          React.cloneElement(child, { index: idx + 1 })
        )}
      </div>
    </Accordion>
  );
};

type PhasesAccordionItemProps = {
  index?: number;
  title: string;
  description: string;
};

export default PhasesAccordion;

export const PhasesAccordionItem: React.FC<PhasesAccordionItemProps> = ({
  index,
  title,
  description,
}) => {
  return (
    <>
      {/* left column */}
      <div
        className={cn(
          'group relative mb-4 last:mb-0 md:mb-8 [&:nth-last-child(2)]:mb-0',
          // target child
          '[&:nth-last-child(2)>.line-decoration]:h-1/2'
        )}
      >
        {/* line decoration */}
        <div className='line-decoration absolute left-1/2 h-[calc(100%+1rem)] w-0.25 -translate-x-1/2 bg-neutral-800 group-first:top-1/2 md:h-[calc(100%+2rem)]' />

        {/* index circle */}
        <span className='flex-center bg-primary-300 text-neutral-25 md:text-md-semibold text-sm-semibold absolute inset-x-0 top-1/2 aspect-square -translate-y-1/2 rounded-full'>
          {index}
        </span>
        {/* blur effect */}
        <span className='flex-center absolute inset-x-0 top-1/2 aspect-square -translate-y-1/2 rounded-full shadow-[0_0_17px_rgba(0,147,221,0.6)] blur-3xl'>
          {index}
        </span>
      </div>
      {/* right column */}
      <AccordionItem value={`item-${index}`}>
        <AccordionTrigger>{title}</AccordionTrigger>
        <AccordionContent>{description}</AccordionContent>
      </AccordionItem>
    </>
  );
};
