import Image from 'next/image';
import Link from 'next/link';

import { socialMediaData } from '@/constants/social-media-data';

const Footer = () => {
  return (
    <footer className='border-t border-neutral-900 bg-base-background'>
      <div className='custom-container flex flex-col-reverse items-center gap-5 py-7 md:flex-row md:justify-between md:py-8'>
        <div className='flex flex-col items-center gap-2.5 md:flex-row md:gap-4'>
          <Image
            src='/assets/logo/sidiq-symbol.svg'
            alt='Sidiq Kusumah'
            width={52}
            height={58}
            className='h-11 w-11 object-contain drop-shadow-[0_0_18px_rgba(135,70,235,0.22)] md:h-12 md:w-12'
          />

          <p className='text-sm-regular text-center text-neutral-100/75 md:text-left'>
            © 2026 Sidiq Kusumah. All rights reserved.
          </p>
        </div>

        <div className='flex items-center justify-center gap-3.5'>
          {socialMediaData.map((icon) => (
            <Link
              key={icon.alt}
              href={icon.href}
              target='_blank'
              rel='noreferrer'
              aria-label={icon.alt}
              className='flex-center size-10 rounded-full border border-neutral-800/80 bg-neutral-950/40 p-2.5 transition-colors hover:border-primary-200 hover:bg-neutral-900/70 md:size-10.5'
            >
              <Image
                src={icon.src}
                alt=''
                width={24}
                height={24}
                className='h-full w-auto'
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
