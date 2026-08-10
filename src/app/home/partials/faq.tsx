'use client';

import { motion } from 'motion/react';
import React from 'react';


import { Section } from '@/components/layouts/section';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import { FAQData } from '@/constants/faq-data';

const FAQ = () => {
  return (
    <Section
      title='Frequently Asked Question'
      subtitle='Find answers to some of the frequently asked questions below.'
      id='faq'
      descriptionClassName='mt-4'
    >
      <Accordion
        type='single'
        collapsible
        defaultValue='1'
        className='mx-auto flex max-w-[796px] flex-col gap-4 md:gap-5'
      >
        {FAQData.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.6,
              delay: index * 0.08,
              ease: 'easeOut',
            }}
          >
            <AccordionItem value={index.toString()}>
              <AccordionTrigger>{item.title}</AccordionTrigger>
              <AccordionContent>{item.description}</AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </Section>
  );
};

export default FAQ;
