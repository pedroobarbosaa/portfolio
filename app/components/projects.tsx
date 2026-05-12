"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Lock, ExternalLink, Briefcase } from "lucide-react";
import BentoCard from "@/components/ui/bento-card";
import { TestimonialsSection } from "@/components/ui/testimonials-columns-1";
import { AuroraBackground } from "@/components/ui/aurora-background";

const analyticsProjects = [
  {
    category: "Data Engineering",
    title: "Netflix Analytics Pipeline",
    description:
      "End-to-end pipeline from raw CSV to interactive dashboard. Ingests data into Google Cloud Storage, models it into a Star Schema on BigQuery with 7 analytical views, and serves insights through a Dockerized Metabase instance.",
    stack: ["Python", "BigQuery", "GCS", "SQL", "Docker", "Metabase", "Star Schema"],
    link: "https://github.com/pedroobarbosaa/netflix-analytics-pipeline",
    linkLabel: "View on GitHub",
    public: true,
  },
  {
    category: "BI & Design",
    title: "Performance Tracking Dashboard",
    description:
      "Power BI dashboard tracking global sales performance across categories, countries, and order priorities. Custom Figma-designed theme, semantic color coding, and deliberate visual hierarchy — built to maximize data storytelling and user adoption.",
    stack: ["Power BI", "DAX", "Power Query", "Figma"],
    link: "https://github.com/pedroobarbosaa/performance-tracking-powerbi",
    linkLabel: "View on GitHub",
    public: true,
  },
];

const clemonMetrics = [
  { value: "40h", label: "manual work eliminated / month" },
  { value: "115+", label: "reports automated / month" },
  { value: "~90%", label: "reduction in missed deadlines" },
  { value: "<1h", label: "avg client response time" },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function Projects() {
  return (
    <>
      {/* ── PROFESSIONAL EXPERIENCE + TESTIMONIALS (subtle Aurora) ── */}
      <AuroraBackground
        id="projects"
        showRadialGradient={false}
        auroraOpacity="opacity-[0.15]"
        className="pt-24 pb-0 h-auto min-h-0"
      >
        <div
          className="max-w-6xl mx-auto px-6 w-full"
          style={{ position: "relative", zIndex: 10 }}>

          {/* ── WORK HEADER ── */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease }}
            className="mb-4 text-[13px] font-medium uppercase tracking-[0.15em] text-[#7a7a7a]"
          >
            Work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.08, ease }}
            className="display-md mb-3 max-w-lg text-[#1d1d1f]"
          >
            What I've built and where I've shipped.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.14, ease }}
            className="mb-16 text-[17px] leading-[1.6] text-[#7a7a7a]"
          >
            Projects, professional experience, and client work.
          </motion.p>

        </div>

        <div
          className="max-w-6xl mx-auto px-6 w-full"
          style={{ position: "relative", zIndex: 10 }}
        >
          {/* PROFESSIONAL EXPERIENCE */}
          <div id="experience">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease }}
              className="mb-4 text-[12px] font-medium uppercase tracking-[0.15em] text-[#7a7a7a]"
            >
              Professional Experience
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.08, ease }}
              className="rounded-[18px] border border-[#e0e0e0] bg-[#ffffff] p-8 transition-colors duration-200 hover:border-[#c8c8c8] hover:bg-[#fafafc]"
            >
              {/* Top row */}
              <div className="mb-6 flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-[22px] font-semibold tracking-[-0.374px] text-[#1d1d1f]">
                    Clemon Campos Advocacia
                  </h3>
                  <p className="mt-0.5 text-[15px] font-medium text-[#0066cc]">Data Analyst &amp; Data Engineer</p>
                </div>
                <span className="mt-1 text-[13px] text-[#7a7a7a] sm:text-right">
                  Oct 2025 – Mar 2026 · Brasília, Brazil
                </span>
              </div>

              {/* Description */}
              <p className="mb-8 max-w-2xl text-[15px] leading-[1.7] text-[#7a7a7a]">
                Built the company's entire data function from scratch — designing pipelines,
                automating reports, and delivering dashboards that gave leadership real-time
                visibility into a 3,000+ case portfolio.
              </p>

              {/* Divider before metrics */}
              <div className="mb-8 h-px bg-[#e0e0e0]" />

              {/* Metrics */}
              <div className="mb-8 grid grid-cols-2 gap-px bg-[#e0e0e0] sm:grid-cols-4">
                {clemonMetrics.map((m) => (
                  <div key={m.value} className="flex flex-col gap-2 bg-white px-6 py-6">
                    <span className="text-[32px] font-semibold leading-none tracking-[-0.374px] text-[#1d1d1f]">
                      {m.value}
                    </span>
                    <span className="text-[12px] leading-[1.5] text-[#7a7a7a]">{m.label}</span>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#e0e0e0] pt-6">
                <div className="flex flex-wrap gap-2">
                  {["Python", "Power BI", "DAX", "ETL", "Report Automation"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#e0e0e0] bg-[#f5f5f7] px-3 py-1 text-[11px] font-medium text-[#333333]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1.5 text-[13px] text-[#7a7a7a]">
                  <Briefcase className="h-3.5 w-3.5" />
                  Professional Experience
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Testimonials — full-width inside Aurora */}
        <div className="w-full" style={{ position: "relative", zIndex: 10 }}>
          <TestimonialsSection />
        </div>
      </AuroraBackground>

      {/* ── DATA & ANALYTICS + FREELANCE (gray) ── */}
      <section className="bg-muted/40 py-24">
        <div className="max-w-6xl mx-auto px-6">

          {/* DATA & ANALYTICS */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease }}
            className="mb-4 text-[12px] font-medium uppercase tracking-[0.15em] text-[#7a7a7a]"
          >
            Data &amp; Analytics
          </motion.p>

          <div className="mb-16 grid grid-cols-1 gap-4 md:grid-cols-2">
            {analyticsProjects.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease }}
                className="group flex flex-col rounded-[18px] border border-[#e0e0e0] bg-[#ffffff] p-6 transition-colors duration-200 hover:border-[#c8c8c8] hover:bg-[#fafafc]"
              >
                <span className="mb-4 self-start rounded-full bg-[#f5f5f7] px-3 py-1 text-[12px] font-medium text-[#7a7a7a]">
                  {p.category}
                </span>
                <h3 className="mb-3 text-[19px] font-semibold leading-snug tracking-[-0.374px] text-[#1d1d1f]">
                  {p.title}
                </h3>
                <p className="mb-6 flex-1 text-[15px] leading-[1.6] text-[#7a7a7a]">
                  {p.description}
                </p>
                <div className="mb-6 flex flex-wrap gap-2">
                  {p.stack.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#e0e0e0] bg-[#f5f5f7] px-3 py-1 text-[11px] font-medium text-[#333333]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {p.public ? (
                  <a
                    href={p.link!}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex cursor-pointer items-center gap-1 text-[14px] font-medium text-[#0066cc] transition-opacity hover:opacity-70"
                  >
                    {p.linkLabel}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-[14px] text-[#7a7a7a]">
                    <Lock className="h-3.5 w-3.5" />
                    {p.linkLabel}
                  </span>
                )}
              </motion.div>
            ))}
          </div>

          {/* FREELANCE & CLIENT WORK */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease }}
            className="mb-4 text-[12px] font-medium uppercase tracking-[0.15em] text-[#7a7a7a]"
          >
            Freelance &amp; Client Work
          </motion.p>

          <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[1fr_auto_1fr]">

            {/* Left — The Brief */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
              className="flex flex-col gap-4 rounded-[18px] border border-[#e0e0e0] bg-[#fafafc] p-6"
            >
              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#7a7a7a]">
                The Brief
              </span>
              <p className="text-[15px] leading-[1.6] text-[#1d1d1f]">
                Client had an outdated Wix site and needed something fast,
                professional, and easy to share with prospects.
              </p>
              <div className="mt-auto flex flex-col gap-2 border-t border-[#e0e0e0] pt-4">
                {["Replaced a Wix site", "Custom proposal URLs", "Deployed on Cloudflare"].map((f) => (
                  <div key={f} className="flex items-center gap-2 text-[13px] text-[#7a7a7a]">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#0066cc]" />
                    {f}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Center — BentoCard */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.2, ease }}
              className="w-full lg:w-[520px]"
            >
              <BentoCard />
            </motion.div>

            {/* Right — The Stack + Live */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.3, ease }}
              className="flex flex-col gap-4 rounded-[18px] border border-[#e0e0e0] bg-[#fafafc] p-6"
            >
              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#7a7a7a]">
                The Stack
              </span>
              <div className="flex flex-wrap gap-2">
                {["HTML", "CSS", "JavaScript", "Cloudflare Pages"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#e0e0e0] bg-white px-3 py-1 text-[12px] font-medium text-[#333333]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex flex-col gap-3 border-t border-[#e0e0e0] pt-4">
                <a
                  href="https://www.tioandre.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex cursor-pointer items-center gap-1.5 text-[14px] font-medium text-[#0066cc] transition-opacity hover:opacity-70"
                >
                  <ExternalLink className="h-4 w-4" />
                  View Live Site
                </a>
                <span className="inline-flex items-center gap-1.5 text-[13px] text-[#7a7a7a]">
                  <Lock className="h-3.5 w-3.5" />
                  Source private
                </span>
              </div>
            </motion.div>

          </div>

        </div>
      </section>
    </>
  );
}
