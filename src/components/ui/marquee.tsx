import {
  Fragment,
  type ComponentPropsWithRef,
  type ReactNode,
} from 'react';

import { cn } from '@/lib/utils';

interface MarqueeProps extends ComponentPropsWithRef<'div'> {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children: ReactNode;
  paused?: boolean;
  vertical?: boolean;
  repeat?: number;
}

export const Marquee = ({
  className,
  reverse = false,
  pauseOnHover = true,
  children,
  vertical = false,
  paused = false,
  repeat = 1,
  ...props
}: MarqueeProps) => {
  const repeatedChildren = Array.from({ length: repeat }, (_, index) => (
    <Fragment key={index}>{children}</Fragment>
  ));

  const sequenceClassName = cn(
    'flex shrink-0 [gap:var(--gap)]',
    vertical
      ? 'flex-col pb-[var(--gap)]'
      : 'flex-row pr-[var(--gap)]'
  );

  return (
    <div
      className={cn(
        'group flex [--duration:40s] [--gap:3rem]',
        vertical ? 'flex-col' : 'flex-row',
        className
      )}
      {...props}
    >
      <div
        className={cn(
          'flex w-max shrink-0',
          vertical
            ? 'animate-marquee-vertical flex-col'
            : 'animate-marquee flex-row',
          pauseOnHover &&
            'group-hover:[animation-play-state:paused]',
          paused && '[animation-play-state:paused]',
          reverse && '[animation-direction:reverse]'
        )}
      >
        <div className={sequenceClassName}>{repeatedChildren}</div>

        <div
          aria-hidden='true'
          inert
          className={sequenceClassName}
        >
          {repeatedChildren}
        </div>
      </div>
    </div>
  );
};
