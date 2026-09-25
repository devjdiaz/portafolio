"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { projects } from "@/lib/site-data";

const cards = [
  { project: projects[1], rotate: -6, x: -18, y: 34, z: 10 },
  { project: projects[2], rotate: 5, x: 26, y: 10, z: 20 },
  { project: projects[0], rotate: -2, x: 0, y: -18, z: 30 },
];

export function HeroVisual() {
  const reduce = useReducedMotion();

  return (
    <div className="relative mx-auto h-[320px] w-full max-w-[420px] sm:h-[380px] lg:mx-0">
      {cards.map((card, i) => (
        <motion.a
          key={card.project.name}
          href={card.project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute left-1/2 top-1/2 block w-[240px] overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)] sm:w-[280px]"
          style={{ zIndex: card.z }}
          initial={
            reduce
              ? false
              : { opacity: 0, x: "-50%", y: "-40%", rotate: 0, scale: 0.94 }
          }
          animate={{
            opacity: 1,
            x: `calc(-50% + ${card.x}px)`,
            y: `calc(-50% + ${card.y}px)`,
            rotate: card.rotate,
            scale: 1,
          }}
          whileHover={{ rotate: 0, scale: 1.04, zIndex: 40 }}
          transition={{
            duration: 0.7,
            delay: i * 0.12,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <Image
            src={card.project.image}
            alt={card.project.name}
            width={560}
            height={373}
            className="aspect-[3/2] w-full object-cover object-top"
            priority={i === 2}
          />
        </motion.a>
      ))}
    </div>
  );
}
