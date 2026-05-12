"use client";

import { motion } from "motion/react";
import { twMerge } from "tailwind-merge";
import React from "react";

export const Circle = ({
  className,
  children,
  idx,
  ...rest
}: {
  className?: string;
  children?: React.ReactNode;
  idx: number;
  [key: string]: unknown;
}) => {
  return (
    <motion.div
      {...rest}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: idx * 0.1, duration: 0.2 }}
      className={twMerge(
        "absolute inset-0 left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 transform rounded-full",
        className
      )}
    />
  );
};

export const Radar = ({ className }: { className?: string }) => {
  const circles = new Array(8).fill(1);
  return (
    <div
      className={twMerge(
        "relative flex h-20 w-20 items-center justify-center rounded-full",
        className
      )}
    >
      <style>{`
        @keyframes radar-spin {
          from { transform: rotate(20deg); }
          to   { transform: rotate(380deg); }
        }
        .animate-radar-spin {
          animation: radar-spin 10s linear infinite;
        }
      `}</style>
      {/* Rotating sweep */}
      <div
        style={{ transformOrigin: "right center" }}
        className="animate-radar-spin absolute right-1/2 top-1/2 z-40 flex h-[5px] w-[400px] items-end justify-center overflow-hidden bg-transparent"
      >
        <div className="relative z-40 h-[1px] w-full bg-gradient-to-r from-transparent via-[#0066cc] to-transparent" />
      </div>
      {/* Concentric circles — light-theme palette */}
      {circles.map((_, idx) => (
        <Circle
          style={{
            height: `${(idx + 1) * 2.8}rem`,
            width: `${(idx + 1) * 2.8}rem`,
            border: `1px solid rgba(29,29,31,${0.12 - idx * 0.012})`,
          }}
          key={`circle-${idx}`}
          idx={idx}
        />
      ))}
    </div>
  );
};

export const IconContainer = ({
  icon,
  text,
  delay,
}: {
  icon?: React.ReactNode;
  text?: string;
  delay?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: delay ?? 0 }}
      className="relative z-50 flex flex-col items-center justify-center gap-1.5"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#e0e0e0] bg-white shadow-sm">
        {icon}
      </div>
      {text && (
        <span className="text-center text-[10px] font-medium text-[#7a7a7a]">
          {text}
        </span>
      )}
    </motion.div>
  );
};
