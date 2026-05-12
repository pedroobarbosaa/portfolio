"use client";
import React from "react";
import { motion } from "motion/react";

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...new Array(2)].fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(({ text, initials, name, role, original }, i) => (
              <div className="p-8 rounded-3xl border border-border bg-background shadow-sm max-w-xs w-full" key={i}>
                <div className="text-sm leading-relaxed text-foreground">{text}</div>
                {original && (
                  <div className="text-xs italic text-muted-foreground/60 mt-3">"{original}"</div>
                )}
                <div className="flex items-center gap-3 mt-5">
                  <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center ring-2 ring-border">
                    <span className="text-xs font-medium text-muted-foreground">{initials}</span>
                  </div>
                  <div className="flex flex-col">
                    <div className="font-medium tracking-tight leading-5 text-sm">{name}</div>
                    <div className="leading-5 text-xs text-muted-foreground">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

const testimonials = [
  {
    text: "Thank you once again. Success on your journey, and may God bless you.",
    original: "Mais uma vez obrigado, sucesso na caminhada e que Deus te abençoe.",
    initials: "CC",
    name: "Clemon Campos",
    role: "Managing Partner · Clemon Campos Advocacia",
  },
  {
    text: "Thank you for everything — we're here whenever you need us.",
    original: "Obrigada por tudo e seguimos aqui a disposição!",
    initials: "DV",
    name: "Daniela Vaz",
    role: "Attorney · Clemon Campos Advocacia",
  },
  {
    text: "Much success in your life, Pedro! Thank you for your dedication.",
    original: "Muito sucesso na sua vida, Pedro! Obrigada pela dedicação.",
    initials: "BF",
    name: "Bárbara Freire",
    role: "Lead Attorney · Clemon Campos Advocacia",
  },
  {
    text: "God bless you greatly! I'll say it again: you are a remarkable young man. Thank you for the partnership.",
    original: "Deus te abençoe muito! Repito: você é um menino diferenciado. Obrigada pela parceria.",
    initials: "RA",
    name: "Raiane Alves",
    role: "Attorney · Clemon Campos Advocacia",
  },
];

const firstColumn = testimonials.slice(0, 2);
const secondColumn = testimonials.slice(2, 4);

export const TestimonialsSection = () => {
  return (
    <section className="bg-transparent py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto mb-12"
        >
          <div className="text-xs font-medium tracking-widest text-muted-foreground uppercase mb-4">
            WHAT THE TEAM SAID
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center">
            From the people I worked with.
          </h2>
        </motion.div>

        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] max-h-[520px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={18} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={22} />
        </div>
      </div>
    </section>
  );
};
