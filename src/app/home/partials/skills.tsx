// src/app/home/partials/skills.tsx

'use client';

import { motion, useInView } from 'motion/react';
import Image from 'next/image';
import { useRef } from 'react';

import { Section } from '@/components/layouts/section';

import { SKILLS } from '@/constants/skills-data';

type Skill = (typeof SKILLS)[number];

type OrbitSkill = Skill & {
  readonly orbitRing: number;
};

const isOrbitSkill = (skill: Skill): skill is OrbitSkill => {
  return 'orbitRing' in skill;
};

const orbitSkills = SKILLS.filter(isOrbitSkill);

const Skills = () => {
  return (
    <Section
      id='skills'
      title='My Core Skill'
      subtitle='I focus on core frontend technologies that help me build responsive, maintainable, and user-centered web applications.'
      descriptionClassName='lg:max-w-[56rem]'
    >
      <div className='grid w-full items-center gap-[clamp(2.5rem,6vw,6.5rem)] lg:grid-cols-[minmax(0,1.08fr)_minmax(17.5rem,0.92fr)]'>
        <SkillsOrbit />
        <SkillsProgressList />
      </div>
    </Section>
  );
};

type OrbitConfig = {
  ring: 0 | 1 | 2 | 3;
  radius: number;
  cardRadiusOffset: number;
  startAngle: number;
  dotAngles: readonly [number, number];
  sizeClassName: string;
};

type OrbitDensity = 'roomy' | 'compact' | 'dense' | 'crowded';

type ProgressDensity = 'roomy' | 'compact' | 'dense' | 'crowded';

type OrbitObject =
  | {
      id: string;
      type: 'skill';
      skill: Skill;
      radius: number;
      angle: number;
      cardRadiusOffset: number;
      density: OrbitDensity;
    }
  | {
      id: string;
      type: 'dot';
      radius: number;
      angle: number;
    };

const ORBIT_CONFIGS: readonly OrbitConfig[] = [
  {
    ring: 0,
    radius: 18,
    cardRadiusOffset: 3,
    startAngle: 30,
    dotAngles: [120, 300],
    sizeClassName: 'size-[36%]',
  },
  {
    ring: 1,
    radius: 29,
    cardRadiusOffset: 4,
    startAngle: 90,
    dotAngles: [30, 210],
    sizeClassName: 'size-[58%]',
  },
  {
    ring: 2,
    radius: 40,
    cardRadiusOffset: 3,
    startAngle: 330,
    dotAngles: [90, 270],
    sizeClassName: 'size-[80%]',
  },
  {
    ring: 3,
    radius: 50,
    cardRadiusOffset: 0,
    startAngle: 45,
    dotAngles: [0, 180],
    sizeClassName: 'size-full',
  },
];

const getSkillsByOrbit = (ring: OrbitConfig['ring']) => {
  return orbitSkills.filter((skill) => skill.orbitRing === ring);
};

const getOrbitDensity = (skillCount: number): OrbitDensity => {
  if (skillCount <= 2) {
    return 'roomy';
  }

  if (skillCount === 3) {
    return 'compact';
  }

  if (skillCount === 4) {
    return 'dense';
  }

  return 'crowded';
};

const MAX_SKILLS_PER_ORBIT = Math.max(
  ...ORBIT_CONFIGS.map((config) => getSkillsByOrbit(config.ring).length)
);

const ORBIT_DENSITY = getOrbitDensity(MAX_SKILLS_PER_ORBIT);

const ORBIT_CARD_SIZE_CLASSES: Record<OrbitDensity, string> = {
  roomy: 'h-[clamp(48px,12vw,80px)] w-[clamp(96px,26vw,162px)]',
  compact: 'h-[clamp(42px,10vw,66px)] w-[clamp(80px,20vw,128px)]',
  dense: 'h-[clamp(36px,8vw,54px)] w-[clamp(64px,16vw,100px)]',
  crowded: 'h-[clamp(30px,7vw,46px)] w-[clamp(54px,13vw,84px)]',
};

const ORBIT_ICON_SIZE_CLASSES: Record<OrbitDensity, string> = {
  roomy: 'size-[clamp(32px,8vw,54px)]',
  compact: 'size-[clamp(26px,6vw,42px)]',
  dense: 'size-[clamp(22px,5vw,34px)]',
  crowded: 'size-[clamp(18px,4vw,28px)]',
};

const ORBIT_DOT_SIZE_CLASSES: Record<OrbitDensity, string> = {
  roomy: 'size-[clamp(10px,2vw,16px)]',
  compact: 'size-[clamp(8px,1.6vw,13px)]',
  dense: 'size-[clamp(6px,1.25vw,10px)]',
  crowded: 'size-[clamp(5px,1vw,8px)]',
};

const getProgressDensity = (skillCount: number): ProgressDensity => {
  if (skillCount <= 6) {
    return 'roomy';
  }

  if (skillCount <= 9) {
    return 'compact';
  }

  if (skillCount <= 12) {
    return 'dense';
  }

  return 'crowded';
};

const PROGRESS_DENSITY = getProgressDensity(SKILLS.length);

const PROGRESS_LIST_CLASSES: Record<ProgressDensity, string> = {
  roomy:
    'max-w-[clamp(19rem,38vw,29.3125rem)] space-y-[clamp(1.25rem,2vw,1.75rem)]',
  compact:
    'max-w-[clamp(18rem,36vw,27rem)] space-y-[clamp(1rem,1.7vw,1.375rem)]',
  dense:
    'max-w-[clamp(17.5rem,34vw,25rem)] space-y-[clamp(0.75rem,1.35vw,1rem)]',
  crowded:
    'max-w-[clamp(17rem,32vw,23rem)] space-y-[clamp(0.625rem,1vw,0.875rem)]',
};

const PROGRESS_LABEL_CLASSES: Record<ProgressDensity, string> = {
  roomy: 'mb-[clamp(0.625rem,1vw,0.875rem)] gap-4',
  compact: 'mb-[clamp(0.5rem,0.9vw,0.75rem)] gap-3',
  dense: 'mb-[clamp(0.375rem,0.7vw,0.625rem)] gap-3',
  crowded: 'mb-[clamp(0.25rem,0.6vw,0.5rem)] gap-2',
};

const PROGRESS_BAR_CLASSES: Record<ProgressDensity, string> = {
  roomy: 'h-[clamp(0.625rem,1vw,0.75rem)]',
  compact: 'h-[clamp(0.5rem,0.85vw,0.625rem)]',
  dense: 'h-[clamp(0.375rem,0.7vw,0.5rem)]',
  crowded: 'h-[clamp(0.25rem,0.55vw,0.375rem)]',
};

const PROGRESS_NAME_CLASSES: Record<ProgressDensity, string> = {
  roomy: 'text-sm-semibold lg:text-md-semibold',
  compact: 'text-sm-semibold',
  dense: 'text-xs-semibold sm:text-sm-semibold',
  crowded: 'text-xs-semibold',
};

const PROGRESS_VALUE_CLASSES: Record<ProgressDensity, string> = {
  roomy: 'text-sm-medium',
  compact: 'text-xs-medium sm:text-sm-medium',
  dense: 'text-xs-medium',
  crowded: 'text-[0.6875rem] font-medium leading-4',
};

const createOrbitObjects = (): OrbitObject[] => {
  return ORBIT_CONFIGS.flatMap((config) => {
    const skills = getSkillsByOrbit(config.ring);
    const angleStep = skills.length > 0 ? 360 / skills.length : 0;

    const skillObjects: OrbitObject[] = skills.map((skill, skillIndex) => ({
      id: skill.name.toLowerCase().replaceAll(' ', '-'),
      type: 'skill',
      skill,
      radius: config.radius,
      angle: config.startAngle + skillIndex * angleStep,
      cardRadiusOffset: config.cardRadiusOffset,
      density: ORBIT_DENSITY,
    }));

    const dotObjects: OrbitObject[] = config.dotAngles.map(
      (angle, dotIndex) => ({
        id: `dot-orbit-${config.ring + 1}-${dotIndex + 1}`,
        type: 'dot',
        radius: config.radius,
        angle,
      })
    );

    return [...skillObjects, ...dotObjects];
  });
};

const ORBIT_OBJECTS = createOrbitObjects();

const roundOrbitValue = (value: number) => {
  return Number(value.toFixed(4));
};

const getOrbitPositionStyle = (radius: number, angle: number) => {
  const normalizedAngle = angle - 90;
  const x = roundOrbitValue(
    Math.cos((normalizedAngle * Math.PI) / 180) * radius
  );
  const y = roundOrbitValue(
    Math.sin((normalizedAngle * Math.PI) / 180) * radius
  );

  return {
    left: `calc(50% + ${x}%)`,
    top: `calc(50% + ${y}%)`,
  };
};

const SkillsOrbit = () => {
  return (
    <div className='relative mx-auto aspect-square w-full max-w-[520px] justify-self-center'>
      {ORBIT_CONFIGS.map((config) => (
        <div
          key={`orbit-ring-${config.ring}`}
          aria-hidden='true'
          className={[
            'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-neutral-800/70',
            config.sizeClassName,
          ].join(' ')}
        />
      ))}

      <motion.div
        className='absolute inset-0'
        animate={{ rotate: 360 }}
        transition={{
          duration: 28,
          ease: 'linear',
          repeat: Infinity,
        }}
      >
        {ORBIT_OBJECTS.map((object) => {
          const effectiveRadius =
            object.type === 'skill'
              ? object.radius - object.cardRadiusOffset
              : object.radius;

          const positionStyle = getOrbitPositionStyle(
            effectiveRadius,
            object.angle
          );

          if (object.type === 'dot') {
            return (
              <OrbitDot
                key={object.id}
                density={ORBIT_DENSITY}
                style={positionStyle}
              />
            );
          }

          return (
            <SkillIconCard
              key={object.id}
              skill={object.skill}
              density={object.density}
              style={positionStyle}
            />
          );
        })}
      </motion.div>
    </div>
  );
};

type SkillIconCardProps = {
  skill: Skill;
  density: OrbitDensity;
  className?: string;
  style?: React.CSSProperties;
};

const SkillIconCard = ({
  skill,
  density,
  className,
  style,
}: SkillIconCardProps) => {
  return (
    <motion.div
      className={[
        'bg-base-background/95 absolute z-10 -translate-x-1/2 -translate-y-1/2 rounded-[clamp(10px,_2vw,_16px)] border border-transparent [background:linear-gradient(var(--color-base-background),var(--color-base-background))_padding-box,var(--gradient-brand)_border-box]',
        ORBIT_CARD_SIZE_CLASSES[density],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={style}
      animate={{ rotate: -360 }}
      transition={{
        duration: 28,
        ease: 'linear',
        repeat: Infinity,
      }}
    >
      <div className='flex h-full w-full items-center justify-center rounded-[inherit]'>
        <div className={ORBIT_ICON_SIZE_CLASSES[density]}>
          <Image
            src={skill.icon}
            alt={`${skill.name} icon`}
            width={72}
            height={72}
            className='h-full w-full object-contain'
          />
        </div>
      </div>
    </motion.div>
  );
};

type OrbitDotProps = {
  density: OrbitDensity;
  style: React.CSSProperties;
};

const OrbitDot = ({ density, style }: OrbitDotProps) => {
  return (
    <Image
      src='/assets/ornaments/orbit-dot.svg'
      alt=''
      width={16}
      height={16}
      aria-hidden='true'
      className={[
        'absolute z-0 -translate-x-1/2 -translate-y-1/2 opacity-80 brightness-125',
        ORBIT_DOT_SIZE_CLASSES[density],
      ].join(' ')}
      style={style}
    />
  );
};

const SkillsProgressList = () => {
  const progressListRef = useRef<HTMLDivElement | null>(null);
  const isProgressListInView = useInView(progressListRef, {
    once: true,
    amount: 0.35,
  });

  return (
    <div
      ref={progressListRef}
      className={[
        'w-full justify-self-center',
        PROGRESS_LIST_CLASSES[PROGRESS_DENSITY],
      ].join(' ')}
    >
      {SKILLS.map((skill, index) => (
        <div key={skill.name}>
          <div
            className={[
              'flex items-center justify-between',
              PROGRESS_LABEL_CLASSES[PROGRESS_DENSITY],
            ].join(' ')}
          >
            <h3
              className={[
                'text-neutral-25',
                PROGRESS_NAME_CLASSES[PROGRESS_DENSITY],
              ].join(' ')}
            >
              {skill.name}
            </h3>
            <span
              className={[
                'text-neutral-300',
                PROGRESS_VALUE_CLASSES[PROGRESS_DENSITY],
              ].join(' ')}
            >
              {skill.level}%
            </span>
          </div>

          <div
            className={[
              'overflow-hidden rounded-full bg-neutral-900',
              PROGRESS_BAR_CLASSES[PROGRESS_DENSITY],
            ].join(' ')}
          >
            <motion.div
              className='h-full origin-left rounded-full bg-[image:var(--gradient-brand)]'
              initial={false}
              animate={{
                scaleX: isProgressListInView ? skill.level / 100 : 0,
              }}
              transition={{
                duration: 1.8,
                delay: isProgressListInView ? index * 0.12 : 0,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
