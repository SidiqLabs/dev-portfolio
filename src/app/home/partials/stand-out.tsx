'use client';

import { Check, X } from 'lucide-react';
import { motion } from 'motion/react';

import { Section } from '@/components/layouts/section';

import { standOutData } from '@/constants/stand-out-data';

const StandOut = () => {
  return (
    <Section
      title='Why I Stand Out'
      subtitle='A showcase of my unique approach and skill set compared to conventional front-end developers'
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className='mx-auto -mt-8 max-w-[72.375rem] rounded-2xl border border-neutral-800 bg-neutral-950/70 p-4 shadow-[0_0_40px_rgba(135,70,235,0.08)] md:p-5'
      >
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.12, ease: 'easeOut' }}
          className='text-neutral-25 grid h-12 grid-cols-[minmax(0,1.4fr)_minmax(2.75rem,0.8fr)_minmax(3.5rem,0.8fr)] items-center rounded-full px-5 text-center text-sm font-semibold [background:var(--gradient-brand)] md:h-14 md:px-8'
        >
          <div className='min-w-0 text-left'>Skill</div>
          <div>Me</div>
          <div>Common</div>
        </motion.div>

        <div>
          {standOutData.map((item, index) => (
            <motion.div
              key={item.skill}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: 0.5,
                delay: index * 0.07 + 0.18,
                ease: 'easeOut',
              }}
              className='grid min-h-14 grid-cols-[minmax(0,1.4fr)_minmax(2.75rem,0.8fr)_minmax(3.5rem,0.8fr)] items-center border-b border-neutral-800 px-5 text-center last:border-b-0 md:min-h-14 md:px-8'
            >
              <p className='text-neutral-25 min-w-0 text-left text-sm font-semibold'>
                {item.skill}
              </p>

              <div className='flex justify-center'>
                <StatusIcon isActive={item.me} />
              </div>

              <div className='flex justify-center'>
                <StatusIcon isActive={item.others} />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};

type StatusIconProps = {
  isActive: boolean;
};

const StatusIcon = ({ isActive }: StatusIconProps) => {
  if (isActive) {
    return (
      <motion.span
        initial={{ scale: 0.75, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className='text-neutral-25 inline-flex size-7 items-center justify-center rounded-full [background:var(--gradient-brand)]'
      >
        <Check size={16} strokeWidth={3} />
      </motion.span>
    );
  }

  return (
    <motion.span
      initial={{ scale: 0.75, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className='text-neutral-25 inline-flex size-7 items-center justify-center rounded-full bg-neutral-700'
    >
      <X size={16} strokeWidth={3} />
    </motion.span>
  );
};

export default StandOut;
