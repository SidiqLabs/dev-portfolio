'use client';

import emailjs from '@emailjs/browser';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import FormStatusDialog from '@/components/ui/form-status-dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import { contactData } from '@/constants/contact-data';

const contactSchema = z.object({
  name: z
    .string({ required_error: 'Name is required' })
    .min(2, 'Name must be at least 2 characters long')
    .max(50, 'Name must be at most 50 characters long'),
  email: z
    .string({ required_error: 'Email is required' })
    .email('Please enter a valid email address'),
  message: z
    .string({ required_error: 'Message is required' })
    .min(20, 'Message must be at least 20 characters long')
    .max(500, 'Message must be at most 500 characters long'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const Contact = () => {
  const [loading, setLoading] = React.useState(false);
  const [showDialog, setShowDialog] = React.useState(false);
  const [variant, setVariant] = React.useState<'success' | 'error'>('success');

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  async function onSubmit(data: ContactFormValues) {
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    const recipientEmail = process.env.NEXT_PUBLIC_EMAILJS_TO_EMAIL;

    try {
      setLoading(true);

      if (!serviceId || !templateId || !publicKey || !recipientEmail) {
        throw new Error('EmailJS configuration is incomplete.');
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          to_email: recipientEmail,
          name: data.name,
          email: data.email,
          message: data.message,
        },
        publicKey
      );

      form.reset();
      setVariant('success');
    } catch (error) {
      console.error('Error sending email:', error);
      setVariant('error');
    } finally {
      setShowDialog(true);
      setLoading(false);
    }
  }

  return (
    <section
      id='contact'
      className='relative overflow-visible py-20 md:py-28 lg:py-32'
    >
      <div
        aria-hidden='true'
        className='pointer-events-none absolute inset-x-0 -top-40 bottom-0'
      >
        {/* Grid Pattern Layer */}
        <div className="absolute inset-x-0 top-40 bottom-0 bg-[url('/assets/ornaments/grid-pattern.svg')] bg-[length:clamp(620px,86vw,1240px)_auto] bg-[position:calc(50%-28px)_top] bg-no-repeat opacity-100 md:bg-[position:calc(50%+48px)_top] lg:bg-[position:calc(50%+110px)_top]" />

        {/* Glow Dot Pattern Layer */}
        <div className='absolute inset-0'>
          <span className='absolute top-[14%] left-[12%] size-2 rounded-full bg-neutral-500 opacity-30 shadow-[0_0_8px_rgba(220,73,166,0.18)]' />
          <span className='absolute top-[24%] left-[22%] size-2 rounded-full bg-neutral-500 opacity-30 shadow-[0_0_8px_rgba(220,73,166,0.18)]' />
          <span className='absolute top-[28%] left-[10%] size-2 rounded-full bg-neutral-500 opacity-30 shadow-[0_0_8px_rgba(220,73,166,0.18)]' />
          <span className='absolute top-[36%] left-[28%] size-2 rounded-full bg-neutral-500 opacity-30 shadow-[0_0_8px_rgba(220,73,166,0.18)]' />
          <span className='absolute top-[12%] right-[16%] size-2 rounded-full bg-neutral-500 opacity-30 shadow-[0_0_8px_rgba(220,73,166,0.18)]' />
          <span className='absolute top-[18%] right-[28%] size-2 rounded-full bg-neutral-500 opacity-30 shadow-[0_0_8px_rgba(220,73,166,0.18)]' />
          <span className='absolute top-[26%] right-[10%] size-2 rounded-full bg-neutral-500 opacity-30 shadow-[0_0_8px_rgba(220,73,166,0.18)]' />
          <span className='absolute top-[34%] right-[22%] size-2 rounded-full bg-neutral-500 opacity-30 shadow-[0_0_8px_rgba(220,73,166,0.18)]' />
          <span className='absolute top-[42%] right-[14%] size-2 rounded-full bg-neutral-500 opacity-30 shadow-[0_0_8px_rgba(220,73,166,0.18)]' />
        </div>

        {/* Focused Blob Glow Layer */}
        <div className='absolute top-[-96px] left-[-72px] h-[280px] w-[360px] rounded-[50%] opacity-25 blur-[72px] [background:var(--glow-atmosphere-purple)]' />

        {/* Massive Ambient Haze Layer */}
        <div className='absolute top-[-180px] right-[-520px] h-[1120px] w-[1120px] rounded-full opacity-18 blur-[240px] [background:var(--glow-atmosphere-purple)]' />
      </div>

      <div className='custom-container relative grid items-center gap-12 md:grid-cols-[minmax(0,0.95fr)_minmax(25rem,1.05fr)] md:gap-16 lg:gap-28'>
        <div className='max-w-140 text-center md:text-left'>
          <h2 className='text-neutral-25 text-[clamp(2rem,5vw,3rem)] leading-[3.75rem] font-extrabold tracking-[-0.02em]'>
            {contactData.title}
          </h2>

          <p className='mx-auto mt-6 max-w-198 leading-[var(--text-lg--line-height)] font-normal text-[var(--text-lg)] text-neutral-100/75 md:mx-0'>
            {contactData.description}
          </p>
        </div>

        <div className='rounded-4xl border border-neutral-800/80 bg-neutral-950/65 p-4 shadow-[0_0_90px_rgba(129,68,223,0.18)] backdrop-blur-md md:p-5 lg:p-6'>
          <Form {...form}>
            <form
              className='space-y-4.5'
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        disabled={loading}
                        placeholder={contactData.fields.name}
                        autoComplete='name'
                        className='border border-neutral-800/80 bg-neutral-900/80 md:h-13'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        disabled={loading}
                        type='email'
                        placeholder={contactData.fields.email}
                        autoComplete='email'
                        className='border border-neutral-800/80 bg-neutral-900/80 md:h-13'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='message'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        disabled={loading}
                        placeholder={contactData.fields.message}
                        className='min-h-40 border border-neutral-800/80 bg-neutral-900/80 md:min-h-48'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type='submit'
                variant='brand'
                size='brand'
                disabled={loading}
                className='mt-5 w-full md:h-13'
              >
                {loading ? (
                  <span className='flex items-center justify-center gap-2'>
                    <span className='size-4 animate-spin rounded-full border-2 border-current border-t-transparent' />
                    {contactData.loadingLabel}
                  </span>
                ) : (
                  contactData.submitLabel
                )}
              </Button>
            </form>
          </Form>
        </div>
      </div>

      <FormStatusDialog
        open={showDialog}
        variant={variant}
        loading={loading}
        onOpenChange={setShowDialog}
      />
    </section>
  );
};

export default Contact;
