import Image from 'next/image';
import React from 'react';

import { Button } from './button';
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from './dialog';

interface FormStatusDialogProps extends React.ComponentProps<typeof Dialog> {
  variant: 'success' | 'error';
  loading?: boolean;
}

const dialogContent = {
  success: {
    icon: '/assets/icons/icon-form-message-success.svg',
    title: 'Your message has been sent!',
    description:
      'Thanks for reaching out. I’ll review your message and reply as soon as I can.',
  },
  error: {
    icon: '/assets/icons/icon-form-message-error.svg',
    title: 'Oops! Your message couldn’t be sent.',
    description: 'Please try again later or check your internet connection.',
  },
} as const;

const FormStatusDialog: React.FC<FormStatusDialogProps> = ({
  variant,
  loading,
  ...props
}) => {
  const content = dialogContent[variant];

  return (
    <Dialog {...props}>
      <DialogContent className='max-h-[calc(100dvh-2rem)] w-[calc(100vw-2rem)] max-w-[519px] overflow-y-auto'>
        <DialogBody className='relative overflow-hidden border border-neutral-800/80 bg-neutral-950/65 px-[clamp(1rem,5vw,1.5rem)] pt-[clamp(2.25rem,10vw,4.4375rem)] pb-[clamp(1.5rem,7vw,2rem)] backdrop-blur-md md:h-[495px] md:px-8 md:pt-[71px] md:pb-10'>
          <div
            aria-hidden='true'
            className='pointer-events-none absolute inset-0 bg-[url("/assets/ornaments/grid-pattern.svg")] bg-[length:auto_78%] bg-top bg-repeat opacity-20'
          />

          <div
            aria-hidden='true'
            className='pointer-events-none absolute inset-0'
          >
            <span className='absolute top-[12%] left-[11%] size-1.5 rounded-full bg-neutral-500 opacity-30 shadow-[0_0_8px_rgba(220,73,166,0.18)]' />
            <span className='absolute top-[18%] right-[13%] size-1.5 rounded-full bg-neutral-500 opacity-30 shadow-[0_0_8px_rgba(220,73,166,0.18)]' />
            <span className='absolute top-[36%] left-[9%] size-1.5 rounded-full bg-neutral-500 opacity-30 shadow-[0_0_8px_rgba(220,73,166,0.18)]' />
            <span className='absolute top-[45%] right-[10%] size-1.5 rounded-full bg-neutral-500 opacity-30 shadow-[0_0_8px_rgba(220,73,166,0.18)]' />
            <span className='absolute bottom-[24%] left-[15%] size-1.5 rounded-full bg-neutral-500 opacity-30 shadow-[0_0_8px_rgba(220,73,166,0.18)]' />
            <span className='absolute right-[16%] bottom-[18%] size-1.5 rounded-full bg-neutral-500 opacity-30 shadow-[0_0_8px_rgba(220,73,166,0.18)]' />
          </div>

          <div
            aria-hidden='true'
            className='pointer-events-none absolute right-[-88px] bottom-[-140px] h-[260px] w-[320px] rounded-[50%] bg-[var(--gradient-brand-soft)] opacity-22 blur-[88px]'
          />

          <div
            aria-hidden='true'
            className='pointer-events-none absolute inset-x-0 top-0 h-[340px] bg-[radial-gradient(circle_at_50%_34%,rgba(135,70,235,0.22),transparent_72%)]'
          />

          <div className='relative z-10 flex flex-col items-center'>
            <Image
              src={content.icon}
              alt=''
              width={169}
              height={162}
              className='h-auto w-[clamp(7rem,34vw,10.5rem)]'
            />

            <DialogTitle className='mt-[clamp(1.25rem,6vw,2rem)] text-[clamp(1.125rem,4.8vw,1.25rem)] leading-[clamp(1.75rem,7vw,2.125rem)] font-semibold text-white md:mt-8'>
              {content.title}
            </DialogTitle>

            <DialogDescription className='mx-auto mt-2 max-w-[32rem] text-[clamp(0.875rem,4vw,1rem)] leading-[clamp(1.5rem,6.5vw,1.875rem)] font-normal text-neutral-300'>
              {content.description}
            </DialogDescription>

            <div className='mt-6 w-full md:mt-8'>
              <DialogClose asChild>
                <Button variant='brand' size='brand' className='w-full'>
                  {loading ? 'Loading...' : 'Done'}
                </Button>
              </DialogClose>
            </div>
          </div>
        </DialogBody>
      </DialogContent>
    </Dialog>
  );
};

export default FormStatusDialog;
