"use client";

import { motion } from "motion/react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import {
  BarChart3,
  FileSpreadsheet,
  LayoutDashboard,
  TrendingUp,
  Code2,
  Database,
  Braces,
  FileCode,
  Cloud,
  Container,
  GitBranch,
  Layers,
  Zap,
  Bot,
  FileText,
  Pen,
} from "lucide-react";

const categories = [
  {
    id: "bi",
    label: "BI & Analytics",
    description: "Dashboards, reporting, and data storytelling",
    items: [
      { name: "Power BI", icon: BarChart3, level: "Advanced" },
      { name: "DAX / Power Query", icon: TrendingUp, level: "Advanced" },
      { name: "Excel", icon: FileSpreadsheet, level: "Advanced" },
      { name: "Metabase", icon: LayoutDashboard, level: "Proficient" },
      { name: "Statistical Analysis", icon: TrendingUp, level: "Proficient" },
    ],
  },
  {
    id: "languages",
    label: "Languages",
    description: "Writing and querying data at every layer",
    items: [
      { name: "Python", icon: Code2, level: "Advanced" },
      { name: "SQL", icon: Database, level: "Advanced" },
      { name: "Pandas / NumPy", icon: Braces, level: "Proficient" },
      { name: "JSON / XML", icon: FileCode, level: "Proficient" },
      { name: "HTML / CSS / JavaScript", icon: Code2, level: "Proficient" },
    ],
  },
  {
    id: "cloud",
    label: "Cloud & Data Engineering",
    description: "Building and deploying production pipelines",
    items: [
      { name: "BigQuery", icon: Database, level: "Proficient" },
      { name: "Google Cloud Storage", icon: Cloud, level: "Proficient" },
      { name: "Docker", icon: Container, level: "Proficient" },
      { name: "Star Schema / ETL", icon: Layers, level: "Proficient" },
      { name: "PostgreSQL", icon: Database, level: "Proficient" },
      { name: "MySQL", icon: Database, level: "Proficient" },
    ],
  },
  {
    id: "automation",
    label: "Automation & Tools",
    description: "Eliminating toil and shipping faster",
    items: [
      { name: "Python Scripting", icon: Zap, level: "Advanced" },
      { name: "N8N", icon: Bot, level: "Proficient" },
      { name: "Report Automation", icon: FileText, level: "Advanced" },
      { name: "Git / GitHub", icon: GitBranch, level: "Proficient" },
      { name: "Figma (BI Theming)", icon: Pen, level: "Proficient" },
    ],
  },
];

const levelColor: Record<string, string> = {
  Advanced: "#0066cc",
  Proficient: "#7a7a7a",
};

const ease = [0.16, 1, 0.3, 1] as const;

export default function Stack() {
  return (
    <AuroraBackground
      id="stack"
      showRadialGradient={false}
      auroraOpacity="opacity-[0.15]"
      className="py-24 h-auto min-h-0"
    >
      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">

        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease }}
          className="mb-4 text-[13px] font-medium uppercase tracking-[0.15em] text-[#7a7a7a]"
        >
          Tech Stack
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.08, ease }}
          className="display-md mb-16 max-w-lg text-[#1d1d1f]"
        >
          The tools behind the work.
        </motion.h2>

        {/* 2×2 category grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: ci * 0.08, ease }}
              className="flex flex-col gap-6 rounded-[18px] border border-[#e0e0e0]/50 bg-white/70 p-8 backdrop-blur-sm"
            >
              {/* Category header */}
              <div className="flex flex-col gap-1">
                <h3 className="text-[17px] font-semibold tracking-[-0.374px] text-[#1d1d1f]">
                  {cat.label}
                </h3>
                <p className="text-[13px] text-[#7a7a7a]">{cat.description}</p>
              </div>

              {/* Tech items */}
              <div className="flex flex-col gap-2">
                {cat.items.map((item, ii) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.4, delay: ci * 0.08 + ii * 0.05, ease }}
                    className="flex items-center justify-between rounded-[11px] border border-[#e0e0e0]/60 bg-white/80 px-4 py-3"
                  >
                    <div className="flex items-center gap-3">
                      <item.icon
                        className="h-4 w-4 flex-shrink-0"
                        style={{ color: levelColor[item.level] }}
                      />
                      <span className="text-[14px] font-medium text-[#1d1d1f]">
                        {item.name}
                      </span>
                    </div>
                    <span
                      className="text-[11px] font-medium"
                      style={{ color: levelColor[item.level] }}
                    >
                      {item.level}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </AuroraBackground>
  );
}
