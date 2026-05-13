"use client";

import { motion } from "motion/react";
import { Database, Cloud, BarChart2 } from "lucide-react";
import { AuroraBackground } from "@/components/ui/aurora-background";

const items = [
  {
    icon: Database,
    title: "Data Engineering Track",
    institution: "Data Science Academy",
    detail: "72h",
  },
  {
    icon: Cloud,
    title: "Azure Data Fundamentals (DP-900)",
    institution: "Microsoft Learn",
    detail: null,
  },
  {
    icon: BarChart2,
    title: "Advanced Power BI",
    institution: "Data Science Academy",
    detail: "54h",
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function Learning() {
  return (
    <AuroraBackground
      id="learning"
      showRadialGradient={false}
      auroraOpacity="opacity-[0.15]"
      className="py-16 md:py-24 h-auto min-h-0"
    >
      <div className="max-w-6xl mx-auto px-6 w-full" style={{ position: "relative", zIndex: 10 }}>

        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease }}
          className="mb-4 text-[13px] font-medium uppercase tracking-[0.15em] text-[#7a7a7a]"
        >
          Currently Learning
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.08, ease }}
          className="display-md mb-3 max-w-lg text-[#1d1d1f]"
        >
          Always in motion.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.14, ease }}
          className="mb-12 text-[17px] leading-[1.6] text-[#7a7a7a]"
        >
          What I'm studying right now.
        </motion.p>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease }}
              className="flex flex-col gap-5 rounded-[18px] border border-[#e0e0e0] bg-[#ffffff] p-6 transition-colors duration-200 hover:border-[#c8c8c8] hover:bg-[#fafafc]"
            >
              {/* Icon */}
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f5f5f7]">
                <item.icon className="h-4 w-4 text-[#1d1d1f]" />
              </div>

              {/* Text */}
              <div className="flex flex-col gap-1 flex-1">
                <h3 className="text-[15px] font-semibold leading-snug tracking-[-0.374px] text-[#1d1d1f]">
                  {item.title}
                </h3>
                <p className="text-[13px] text-[#7a7a7a]">
                  {item.institution}
                  {item.detail && <span className="text-[#c8c8c8]"> · {item.detail}</span>}
                </p>
              </div>

              {/* Progress bar + badge */}
              <div className="flex flex-col gap-2">
                <div className="h-1 w-full overflow-hidden rounded-full bg-[#f5f5f7]">
                  <div className="h-full w-1/2 rounded-full bg-[#0066cc]/30" />
                </div>
                <span className="text-[11px] font-medium text-[#7a7a7a]">In progress</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </AuroraBackground>
  );
}
