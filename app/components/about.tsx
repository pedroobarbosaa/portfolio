"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  BarChart3,
  Database,
  Cloud,
  GitBranch,
  FileBarChart,
  Code2,
} from "lucide-react";
import CornerFrameScrambleText from "@/components/ui/corner-frame-scramble-text";
import { Radar, IconContainer } from "@/components/ui/radar-effect";

const stats = [
  {
    value: "40h",
    label: "eliminated per month",
    detail: "Manual work replaced by Python automation",
  },
  {
    value: "3,000+",
    label: "cases tracked",
    detail: "Active legal cases with deadline control",
  },
  {
    value: "115+",
    label: "reports automated / mo",
    detail: "Individualized case reports, near-zero delivery time",
  },
  {
    value: "~90%",
    label: "risk reduction",
    detail: "Missed-deadline risk across the full case portfolio",
  },
];

const iconCls = "h-5 w-5 text-[#7a7a7a]";

const ease = [0.16, 1, 0.3, 1] as const;

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, delay, ease },
});

export default function About() {
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-60px" });

  return (
    <section
      id="about"
      className="bg-muted/40 py-16 md:py-24"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Two-column block */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-start md:gap-16">

          {/* ── Left: eyebrow + heading + icon grid ── */}
          <div ref={headingRef} className="flex flex-col">
            <motion.p
              {...inView(0)}
              className="mb-6 text-[13px] font-medium uppercase tracking-[0.15em] text-[#7a7a7a]"
            >
              About
            </motion.p>

            <CornerFrameScrambleText
              value="Where legal complexity meets clean data."
              as="h2"
              trigger={headingInView}
              className="display-md text-[#1d1d1f]"
            />

            {/* 3×2 icon grid */}
            {headingInView && (
              <div className="relative mt-10 flex h-64 w-full items-start justify-center overflow-hidden">
                {/* Row 1 — 3 icons, evenly spaced */}
                <div className="absolute top-3 flex w-full items-center justify-around px-4">
                  <IconContainer icon={<BarChart3 className={iconCls} />} text="Power BI" delay={0.3} />
                  <IconContainer icon={<Database className={iconCls} />} text="SQL" delay={0.5} />
                  <IconContainer icon={<Cloud className={iconCls} />} text="BigQuery" delay={0.4} />
                </div>

                {/* Row 2 — 3 icons, evenly spaced */}
                <div className="absolute top-[88px] flex w-full items-center justify-around px-4">
                  <IconContainer icon={<GitBranch className={iconCls} />} text="Pipelines" delay={0.6} />
                  <IconContainer icon={<Code2 className={iconCls} />} text="Python" delay={0.7} />
                  <IconContainer icon={<FileBarChart className={iconCls} />} text="Reports" delay={0.8} />
                </div>

                {/* Radar centered */}
                <Radar className="absolute -bottom-10 left-1/2 -translate-x-1/2" />

                {/* Bottom hairline */}
                <div className="absolute bottom-0 z-40 h-px w-full bg-gradient-to-r from-transparent via-[#e0e0e0] to-transparent" />
              </div>
            )}
          </div>

          {/* ── Right: narrative ── */}
          <motion.div {...inView(0.2)} className="flex flex-col justify-start pt-[52px]">
            <p className="text-[17px] leading-[1.6] tracking-[-0.374px] text-[#1d1d1f]">
              I started in law — five semesters in — before realizing the most interesting problems in any
              organization live in its data. I switched paths, built a full analytics function from scratch
              at a law firm, and never looked back.
            </p>
            <p className="mt-4 text-[17px] leading-[1.6] tracking-[-0.374px] text-[#1d1d1f]">
              My edge is translating complex business rules into clean data architecture — fast. Whether it's
              a Python pipeline, a DAX model, or a dashboard a non-technical team will actually use, I focus
              on delivery that holds up in production.
            </p>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="my-16 h-px bg-[#e0e0e0]" />

        {/* Stat strip */}
        <div className="grid grid-cols-2 gap-px bg-[#e0e0e0] md:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.value}
              {...inView(0.1 + i * 0.08)}
              className="flex flex-col gap-2 bg-white px-6 py-8"
            >
              <span className="text-[40px] font-semibold leading-none tracking-[-0.374px] text-[#1d1d1f]">
                {s.value}
              </span>
              <span className="text-[14px] font-semibold text-[#1d1d1f]">
                {s.label}
              </span>
              <span className="text-[13px] leading-[1.4] text-[#7a7a7a]">
                {s.detail}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
