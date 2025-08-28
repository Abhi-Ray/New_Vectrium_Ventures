"use client";
import { motion } from "motion/react";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";

export function Automation() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-3xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
      >
        Experience{" "}
        <Highlight className="text-black dark:text-white">
          Agentic Automation
        </Highlight>{" "}
        that adapts, learns, and executes complex strategies — {" "} 
        <Highlight className="text-black dark:text-white">
        your co-founder.
        </Highlight>

      </motion.h1>
    </HeroHighlight>
  );
}
