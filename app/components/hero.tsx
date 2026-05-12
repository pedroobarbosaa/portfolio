"use client";

import { motion, useReducedMotion } from "motion/react";
import { AuroraBackground } from "@/components/ui/aurora-background";

const easing = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const reduced = useReducedMotion();

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: reduced ? 0 : 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: easing },
  });

  return (
    <AuroraBackground
      id="hero"
      className="min-h-screen pt-24 pb-16 text-center"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center w-full">
      {/* Eyebrow */}
      <motion.p
        {...fadeUp(0)}
        className="mb-5 text-[13px] font-medium uppercase tracking-[0.15em] text-[#7a7a7a]"
      >
        Data Analyst · Brasília, Brazil · Open to Remote
      </motion.p>

      {/* Name */}
      <motion.h1
        {...fadeUp(0.12)}
        className="hero-display mb-3 max-w-3xl text-[#1d1d1f]"
      >
        Pedro Barbosa
      </motion.h1>

      {/* Tagline */}
      <motion.p
        {...fadeUp(0.24)}
        className="lead-airy mb-10 max-w-lg text-[#7a7a7a]"
      >
        Pipelines. Dashboards. Automation.
        <br className="hidden sm:block" />
        From raw data to decisions — fast.
      </motion.p>

      {/* CTAs */}
      <motion.div
        {...fadeUp(0.36)}
        className="flex flex-wrap items-center justify-center gap-3"
      >
        <button
          onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          className="cursor-pointer rounded-full bg-[#0066cc] px-[22px] py-[11px] text-[17px] font-normal text-white transition-all duration-200 hover:bg-[#0071e3] active:scale-95"
        >
          View Projects
        </button>
        <button
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          className="cursor-pointer rounded-full border border-[#0066cc] px-[22px] py-[11px] text-[17px] font-normal text-[#0066cc] transition-all duration-200 hover:bg-[#0066cc]/5 active:scale-95"
        >
          Contact
        </button>
      </motion.div>

      {/* Availability */}
      <motion.p
        {...fadeUp(0.48)}
        className="mt-10 text-[13px] text-[#7a7a7a]"
      >
        Open to Data Analysis and BI roles — remote or hybrid.
      </motion.p>

      </div>{/* end max-w-6xl */}

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          className="text-[#cccccc]"
        >
          <path
            d="M10 3v14M10 17l-5-5M10 17l5-5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </AuroraBackground>
  );
}
