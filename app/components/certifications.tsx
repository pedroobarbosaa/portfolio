"use client";

import { motion } from "motion/react";
import { CardsSlider } from "@/components/ui/cards-slider-shadcnui";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="bg-muted/40 py-24"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease }}
          className="mb-4 text-[13px] font-medium uppercase tracking-[0.15em] text-[#7a7a7a]"
        >
          Certifications
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.08, ease }}
          className="display-md mb-3 max-w-lg text-[#1d1d1f]"
        >
          Credentials that back the work.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.14, ease }}
          className="mb-10 text-[15px] text-[#7a7a7a]"
        >
          Systems Analysis &amp; Development · Descomplica Faculdade Digital · 1,160h total · Graduated 2026
        </motion.p>

      </div>

      {/* Slider — full width so cards bleed past the content column */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, delay: 0.2, ease }}
      >
        <CardsSlider />
      </motion.div>

    </section>
  );
}
