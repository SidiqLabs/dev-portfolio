// src/app/home/partials/hero.tsx

'use client';

import { Volume2, VolumeX } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import {
  type MouseEvent,
  type PointerEvent,
  useEffect,
  useRef,
  useState,
} from 'react';

import { Button } from '@/components/ui/button';

import { HERO_DATA, HERO_GLOW_DOTS } from '@/constants/hero-data';

const HERO_EASE = 'easeOut';

const HERO_ANIMATION_DURATION = 0.6;

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const videoContainerRef = useRef<HTMLDivElement | null>(null);
  const [isSoundEnabled, setIsSoundEnabled] = useState(false);
  const [isPreviewPlaying, setIsPreviewPlaying] = useState(false);

  const handlePlayPreview = async () => {
    const video = videoRef.current;

    if (!video) return;

    video.muted = !isSoundEnabled;

    try {
      await video.play();
      setIsPreviewPlaying(true);
    } catch {
      setIsPreviewPlaying(false);
    }
  };

  const handleStopPreview = () => {
    const video = videoRef.current;

    if (!video) return;

    video.pause();
    video.currentTime = 0;
    setIsPreviewPlaying(false);
  };

  useEffect(() => {
    const videoContainer = videoContainerRef.current;

    if (!videoContainer) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          const video = videoRef.current;

          if (!video) {
            return;
          }

          video.pause();
          video.currentTime = 0;
          setIsPreviewPlaying(false);
        }
      },
      {
        threshold: 0,
      }
    );

    observer.observe(videoContainer);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isPreviewPlaying) {
      return;
    }

    const TAP_MOVEMENT_THRESHOLD = 10;

    let pointerId: number | null = null;
    let startX = 0;
    let startY = 0;
    let startedOutsideVideo = false;
    let movedBeyondTapThreshold = false;

    const resetGesture = () => {
      pointerId = null;
      startedOutsideVideo = false;
      movedBeyondTapThreshold = false;
    };

    const handlePointerDown = (event: globalThis.PointerEvent) => {
      const videoContainer = videoContainerRef.current;
      const target = event.target;

      if (!videoContainer || !(target instanceof Node)) {
        resetGesture();
        return;
      }

      pointerId = event.pointerId;
      startX = event.clientX;
      startY = event.clientY;
      startedOutsideVideo = !videoContainer.contains(target);
      movedBeyondTapThreshold = false;
    };

    const handlePointerMove = (event: globalThis.PointerEvent) => {
      if (event.pointerId !== pointerId || !startedOutsideVideo) {
        return;
      }

      const deltaX = event.clientX - startX;
      const deltaY = event.clientY - startY;

      if (Math.hypot(deltaX, deltaY) > TAP_MOVEMENT_THRESHOLD) {
        movedBeyondTapThreshold = true;
      }
    };

    const handlePointerUp = (event: globalThis.PointerEvent) => {
      if (event.pointerId !== pointerId) {
        return;
      }

      const shouldStop = startedOutsideVideo && !movedBeyondTapThreshold;

      resetGesture();

      if (!shouldStop) {
        return;
      }

      const video = videoRef.current;

      if (!video) {
        return;
      }

      video.pause();
      video.currentTime = 0;
      setIsPreviewPlaying(false);
    };

    const handlePointerCancel = (event: globalThis.PointerEvent) => {
      if (event.pointerId === pointerId) {
        resetGesture();
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('pointermove', handlePointerMove);
    document.addEventListener('pointerup', handlePointerUp);
    document.addEventListener('pointercancel', handlePointerCancel);

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('pointerup', handlePointerUp);
      document.removeEventListener('pointercancel', handlePointerCancel);
    };
  }, [isPreviewPlaying]);

  const handleHeroVideoPointerLeave = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === 'mouse') {
      handleStopPreview();
    }
  };

  const handleHeroVideoPointerUp = (event: PointerEvent<HTMLDivElement>) => {
    const target = event.target;

    if (target instanceof Element && target.closest('button')) {
      return;
    }

    if (event.pointerType === 'mouse') {
      handleStopPreview();
      return;
    }

    if (isPreviewPlaying) {
      handleStopPreview();
      return;
    }

    void handlePlayPreview();
  };

  const handlePlayButtonPointerEnter = (
    event: PointerEvent<HTMLButtonElement>
  ) => {
    if (event.pointerType === 'mouse') {
      void handlePlayPreview();
    }
  };

  const handlePlayButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    void handlePlayPreview();
  };

  const handleToggleSound = async () => {
    const video = videoRef.current;

    if (!video) return;

    const nextSoundState = !isSoundEnabled;

    video.muted = !nextSoundState;

    try {
      await video.play();
      setIsSoundEnabled(nextSoundState);
      setIsPreviewPlaying(true);
    } catch {
      video.muted = true;
      setIsSoundEnabled(false);
      setIsPreviewPlaying(false);
    }
  };

  return (
    <section
      id='hero'
      className='relative overflow-hidden pt-32 pb-20 text-center'
    >
      {/* Background Atmosphere */}
      <div aria-hidden='true' className='pointer-events-none absolute inset-0'>
        {/* Grid Pattern Layer
            - bg-length controls responsive grid scale
            - bg-position controls horizontal / vertical alignment
            - opacity controls final grid visibility
        */}
        <div className="absolute inset-0 bg-[url('/assets/ornaments/grid-pattern.svg')] bg-[length:clamp(721px,100vw,1442px)_auto] bg-[position:center_top] bg-no-repeat opacity-100 md:bg-[position:calc(50%+48px)_top] lg:bg-[position:calc(50%+110px)_top]" />

        {/* Glow Dot Pattern Layer
            - data-driven dots for easy add / remove
            - hover prepares the interaction model
            - Framer Motion can replace span with motion.span later
        */}
        <div aria-hidden='true' className='absolute inset-0'>
          {HERO_GLOW_DOTS.map((dot, index) => (
            <motion.span
              key={dot.id}
              initial={{ opacity: 0, y: -320 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 4.2 + (index % 3) * 0.4,
                delay: 0.08 + index * 0.14,
                ease: 'linear',
              }}
              className={`absolute ${dot.className}`}
            >
              <motion.span
                animate={
                  dot.motion
                    ? {
                        opacity: [0.18, 0.48, 0.18],
                        scale: [1, 1.18, 1],
                        boxShadow: [
                          '0 0 8px rgba(220,73,166,0.18)',
                          '0 0 18px rgba(220,73,166,0.46)',
                          '0 0 8px rgba(220,73,166,0.18)',
                        ],
                      }
                    : undefined
                }
                transition={
                  dot.motion
                    ? {
                        duration: dot.motion.duration,
                        delay: 1 + dot.motion.delay,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }
                    : undefined
                }
                className='block size-2 rounded-full bg-neutral-500 opacity-30 shadow-[0_0_8px_rgba(220,73,166,0.18)] transition-all duration-300 hover:opacity-70 hover:shadow-[0_0_14px_rgba(220,73,166,0.45)]'
              />
            </motion.span>
          ))}
        </div>

        {/* Focused Blob Glow Layer
            Design reference:
            - smaller / denser purple glow
            - positioned near the top-left atmosphere area
            - section-local because it belongs only to Hero composition
        */}
        <div className='absolute top-[-96px] left-[-72px] h-[280px] w-[360px] rounded-[50%] opacity-25 blur-[72px] [background:var(--glow-atmosphere-purple)]' />

        {/* Massive Ambient Haze Layer
            Design reference:
            - very large soft purple haze
            - mostly outside the right viewport
            - creates atmospheric lighting, not a visible object

            Tuning guide:
            - top-[...] controls vertical position
              less negative = moves glow down toward the hero photo card
              more negative = moves glow up toward the navbar area

            - right-[...] controls horizontal position
              less negative = moves glow into the viewport
              more negative = pushes glow outside the viewport

            - h-[...] / w[...] control glow field size
              larger = wider ambient spread
              smaller = tighter ambient spread

            - blur-[...] controls softness
              larger = softer and more diffuse
              smaller = sharper and more visible

            - [background:var(--glow-atmosphere-purple)] opacity-18 controls intensity
              increase only if the glow feels too weak
              decrease if it starts overpowering the content
        */}
        <div className='absolute top-[-180px] right-[-520px] h-[1120px] w-[1120px] rounded-full opacity-18 blur-[240px] [background:var(--glow-atmosphere-purple)]' />
      </div>

      {/* Content */}
      <div className='relative z-10 mx-auto flex max-w-[1200px] flex-col items-center px-5 md:px-6'>
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: HERO_ANIMATION_DURATION,
            ease: HERO_EASE,
          }}
          className='ds-glow-brand-sm ds-hover-brand-sm group relative mb-6 rounded-full bg-[image:var(--gradient-brand)] p-px'
        >
          <div className='bg-base-background/90 group-hover:text-base-white flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium text-neutral-200 backdrop-blur-md transition-colors duration-300'>
            <span aria-hidden='true' className='text-sm'>
              👨‍💻
            </span>
            <span>{HERO_DATA.badge}</span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: HERO_ANIMATION_DURATION,
            delay: 0.08,
            ease: HERO_EASE,
          }}
          className='text-neutral-25 w-full max-w-[64rem] text-[clamp(2rem,5vw,3rem)] leading-[1.12] font-extrabold tracking-[-0.04em]'
        >
          {HERO_DATA.headline.prefix}{' '}
          <span className='group relative mx-2 inline-block py-2 md:py-0'>
            <span className='relative z-10 inline-block bg-[image:var(--gradient-brand)] bg-clip-text px-1 text-transparent md:py-2'>
              {HERO_DATA.headline.highlight}
            </span>

            {/* Mobile multi-line highlight frame */}
            <span
              aria-hidden='true'
              className='ds-glow-brand-sm ds-hover-brand-sm border-brand-pink/60 group-hover:border-brand-purple pointer-events-none absolute -inset-x-2 inset-y-0 border md:hidden'
            />
            <span
              aria-hidden='true'
              className='ds-glow-brand-xs bg-neutral-25 absolute top-0 left-[-0.5rem] h-[0.64rem] w-[1.22rem] -translate-x-1/2 -translate-y-1/2 md:hidden'
            />
            <span
              aria-hidden='true'
              className='ds-glow-brand-xs bg-neutral-25 absolute top-0 right-[-0.5rem] h-[0.64rem] w-[1.22rem] translate-x-1/2 -translate-y-1/2 md:hidden'
            />
            <span
              aria-hidden='true'
              className='ds-glow-brand-xs bg-neutral-25 absolute bottom-0 left-[-0.5rem] h-[0.64rem] w-[1.22rem] -translate-x-1/2 translate-y-1/2 md:hidden'
            />
            <span
              aria-hidden='true'
              className='ds-glow-brand-xs bg-neutral-25 absolute right-[-0.5rem] bottom-0 h-[0.64rem] w-[1.22rem] translate-x-1/2 translate-y-1/2 md:hidden'
            />

            {/* Desktop single-line highlight frame */}
            <span
              aria-hidden='true'
              className='ds-glow-brand-sm ds-hover-brand-sm border-brand-pink/60 group-hover:border-brand-purple pointer-events-none absolute -inset-x-2 top-1/2 hidden h-[1.25em] -translate-y-1/2 border md:block'
            />
            <span
              aria-hidden='true'
              className='ds-glow-brand-xs bg-neutral-25 absolute top-[calc(50%-0.625em)] left-[-0.5rem] hidden h-[0.64rem] w-[1.22rem] -translate-x-1/2 -translate-y-1/2 md:block'
            />
            <span
              aria-hidden='true'
              className='ds-glow-brand-xs bg-neutral-25 absolute top-[calc(50%-0.625em)] right-[-0.5rem] hidden h-[0.64rem] w-[1.22rem] translate-x-1/2 -translate-y-1/2 md:block'
            />
            <span
              aria-hidden='true'
              className='ds-glow-brand-xs bg-neutral-25 absolute bottom-[calc(50%-0.625em)] left-[-0.5rem] hidden h-[0.64rem] w-[1.22rem] -translate-x-1/2 translate-y-1/2 md:block'
            />
            <span
              aria-hidden='true'
              className='ds-glow-brand-xs bg-neutral-25 absolute right-[-0.5rem] bottom-[calc(50%-0.625em)] hidden h-[0.64rem] w-[1.22rem] translate-x-1/2 translate-y-1/2 md:block'
            />
          </span>{' '}
          {HERO_DATA.headline.suffix}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: HERO_ANIMATION_DURATION,
            delay: 0.16,
            ease: HERO_EASE,
          }}
          className='mt-6 w-full max-w-[48rem] leading-[var(--text-lg--line-height)] font-normal text-[var(--text-lg)] text-neutral-400'
        >
          {HERO_DATA.description}
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: HERO_ANIMATION_DURATION,
            delay: 0.24,
            ease: HERO_EASE,
          }}
          className='w-full md:w-auto'
        >
          <Button
            asChild
            variant='brand'
            size='brand'
            className='mt-8 w-full px-0 md:w-[206px]'
          >
            <Link href={HERO_DATA.primaryCTA.href}>
              {HERO_DATA.primaryCTA.label}
            </Link>
          </Button>
        </motion.div>
      </div>

      {/* Wave Ornament */}
      <div className='relative mt-0 -translate-y-16 md:mt-0 md:-translate-y-8'>
        <Image
          src='/assets/ornaments/waves-pattern.svg'
          alt=''
          aria-hidden='true'
          width={1443}
          height={381}
          className='h-auto w-full max-w-none min-w-[760px] object-cover opacity-80 md:min-w-0'
        />
      </div>

      {/* Image Card */}
      <motion.div
        initial={{ opacity: 0, y: 48 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{
          duration: 0.6,
          ease: 'easeOut',
        }}
        className='relative z-10 mx-auto mt-[-112px] max-w-[1200px] px-6 md:mt-[-80px]'
      >
        <div
          ref={videoContainerRef}
          onPointerUp={handleHeroVideoPointerUp}
          onPointerLeave={handleHeroVideoPointerLeave}
          className='group/video relative aspect-[1160/459] w-full overflow-hidden rounded-3xl bg-[image:var(--gradient-brand)]'
        >
          <div
            aria-hidden='true'
            className='absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.18),transparent_35%),var(--gradient-brand)] opacity-95'
          />

          <div
            aria-hidden='true'
            className='absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.18),transparent_45%)]'
          />

          {/* 
            Foreground Hero Image Composition Control

            Tuning Guide:
            - scale-[1.25]
              Controls zoom in / zoom out

            - translate-x-[...]
              Controls left / right position

            - translate-y-[...]
              Controls top / bottom position

            Important:
            Hero photos may use different aspect ratios.
            Tune composition values here instead of changing the frame size.
          */}
          <Image
            src='/assets/avatars/sidiq-kusumah-hero.png'
            alt='Sidiq Kusumah'
            width={1160}
            height={459}
            priority
            className={`relative z-10 mx-auto h-[clamp(135%,45vw,165%)] w-auto translate-x-[0px] translate-y-[clamp(-35px,-3vw,0px)] transform-gpu object-contain object-center transition duration-500 ${
              isPreviewPlaying ? 'scale-[1.02] opacity-0' : 'opacity-100'
            }`}
          />

          <video
            ref={videoRef}
            muted={!isSoundEnabled}
            loop
            playsInline
            preload='metadata'
            className={`absolute inset-0 z-10 h-full w-full rounded-[inherit] object-cover transition duration-500 ${
              isPreviewPlaying ? 'scale-[1.02] opacity-100' : 'opacity-0'
            }`}
          >
            <source src='/assets/videos/hero-preview.mp4' type='video/mp4' />
          </video>

          <span
            aria-hidden='true'
            className='absolute inset-0 z-20 bg-black/0 transition duration-500 group-hover/video:bg-black/10'
          />

          <button
            type='button'
            aria-label='Play hero preview video'
            onPointerEnter={handlePlayButtonPointerEnter}
            onClick={handlePlayButtonClick}
            className={`ds-focus-ring absolute top-1/2 left-1/2 z-30 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-out ${
              isPreviewPlaying
                ? 'pointer-events-none scale-110 opacity-0'
                : 'opacity-100'
            }`}
          >
            <Image
              src='/assets/icons/play-button.svg'
              alt=''
              width={71}
              height={71}
              className='h-14 w-14 max-md:size-[clamp(2.25rem,10vw,3.5rem)] md:h-16 md:w-16'
            />
          </button>

          <button
            type='button'
            aria-label={
              isSoundEnabled
                ? 'Mute hero preview sound'
                : 'Unmute hero preview sound'
            }
            onClick={(event) => {
              event.stopPropagation();
              handleToggleSound();
            }}
            className={`ds-focus-ring text-neutral-25 absolute right-1 bottom-1 z-30 grid size-11 place-items-center rounded-full transition duration-300 md:right-4 md:bottom-4 ${
              isPreviewPlaying
                ? 'opacity-100'
                : 'opacity-0 group-hover/video:opacity-100'
            }`}
          >
            <span className='border-neutral-25/20 grid size-8 place-items-center rounded-full border bg-neutral-950/50 backdrop-blur-md transition duration-300 hover:bg-neutral-950/70 md:size-11'>
              {isSoundEnabled ? (
                <Volume2 aria-hidden='true' className='size-4 md:size-5' />
              ) : (
                <VolumeX aria-hidden='true' className='size-4 md:size-5' />
              )}
            </span>
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
