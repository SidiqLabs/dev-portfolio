'use client';

import * as AccordionPrimitive from '@radix-ui/react-accordion';
import Image from 'next/image';
import * as React from 'react';

import { cn } from '@/lib/utils';

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot='accordion' {...props} />;
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot='accordion-item'
      className={cn(
        [
          'group/item rounded-xl bg-neutral-900/70 p-px',
          'transition-all duration-300 ease-out',
          'md:rounded-2xl',
          'data-[state=open]:bg-[linear-gradient(90deg,var(--color-brand-pink),var(--color-brand-purple))]',
          'data-[state=open]:shadow-[var(--shadow-glow-brand-xs)]',
        ].join(' '),
        className
      )}
      {...props}
    >
      <div
        className={[
          'rounded-[11px] bg-neutral-950',
          'px-[18px] py-[14px]',
          'md:rounded-[15px]',
          'md:px-5 md:py-[18px]',
        ].join(' ')}
      >
        {props.children}
      </div>
    </AccordionPrimitive.Item>
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className='flex'>
      <AccordionPrimitive.Trigger
        data-slot='accordion-trigger'
        className={cn(
          [
            'group/trigger flex flex-1 cursor-pointer items-start justify-between gap-4 text-left',
            'transition-all duration-300 ease-out',
            'text-neutral-25 hover:text-neutral-25',
            'data-[state=open]:text-neutral-25',
            '!text-md-semibold leading-snug md:text-lg-semibold',
          ].join(' '),
          className
        )}
        {...props}
      >
        <div className='flex-1 pr-2'>{children}</div>

        <Image
          src='/assets/icons/accordion-caret.svg'
          alt=''
          width={14}
          height={10}
          aria-hidden='true'
          className={[
            'mt-[6px] shrink-0 text-neutral-100',
            'transition-transform duration-300 ease-out',
            'group-data-[state=open]/trigger:rotate-180',
          ].join(' ')}
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot='accordion-content'
      className={[
        'overflow-hidden',
        'data-[state=closed]:animate-accordion-up',
        'data-[state=open]:animate-accordion-down',
      ].join(' ')}
      {...props}
    >
      <div
        className={cn(
          [
            'mt-3',
            'max-w-[95%]',
            'text-[var(--text-lg)] leading-[var(--text-lg--line-height)] text-neutral-100/60',
          ].join(' '),
          className
        )}
      >
        {children}
      </div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
