'use client';

import { Mail, Menu } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from '@/components/ui/sheet';

import { navigationData } from '@/constants/navigation-data';

const Navbar = () => {
  const { scrollY } = useScroll();
  const background = useTransform(
    scrollY,
    [0, 100],
    [
      'color-mix(in srgb, var(--color-base-background) 0%, transparent)',
      'color-mix(in srgb, var(--color-base-background) 70%, transparent)',
    ]
  );
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(10px)']
  );

  return (
    <motion.header
      style={{
        background,
        backdropFilter: backdropBlur,
      }}
      className='fixed top-0 z-50 w-full'
    >
      <div className='flex-between custom-container h-16 md:h-21'>
        <Link
          href='/'
          aria-label='Go to homepage'
          className='transition-transform duration-300 hover:scale-[1.06]'
        >
          <Image
            src='/assets/logo/sidiq-symbol.svg'
            alt='Sidiq Kusumah'
            width={52}
            height={58}
            priority
            className='h-14 w-14 object-contain drop-shadow-[0_0_18px_rgba(135,70,235,0.22)] transition-all duration-300 hover:drop-shadow-[0_0_26px_rgba(135,70,235,0.42)] max-md:h-11 max-md:w-11'
          />
        </Link>
        <nav className='hidden min-[960px]:block'>
          <ul className='flex-start gap-3'>
            {navigationData.map((data) => (
              <li key={data.label}>
                <Link href={data.href} className='hover:text-primary-200 p-4'>
                  {data.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Button
          asChild
          variant='brand'
          size='brand'
          className='hidden w-[11.25rem] gap-2 px-0 min-[960px]:flex'
        >
          <Link href='#contact'>
            <Mail className='size-4' aria-hidden='true' />
            Hire Me
          </Link>
        </Button>

        <Sheet>
          <SheetTrigger asChild>
            <Menu className='cursor-pointer min-[960px]:hidden' />
          </SheetTrigger>
          <SheetContent>
            <nav className='mt-16'>
              <ul className='flex flex-col gap-4'>
                {navigationData.map((data) => (
                  <li key={data.label}>
                    <SheetClose asChild>
                      <Link
                        href={data.href}
                        className='hover:text-primary-200 py-4'
                      >
                        {data.label}
                      </Link>
                    </SheetClose>
                  </li>
                ))}
              </ul>
            </nav>

            <Button
              asChild
              variant='brand'
              size='brand'
              className='mt-3 w-full gap-2'
            >
              <SheetClose asChild>
                <Link href='#contact'>
                  <Mail className='size-4' aria-hidden='true' />
                  Hire Me
                </Link>
              </SheetClose>
            </Button>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
};

export default Navbar;
