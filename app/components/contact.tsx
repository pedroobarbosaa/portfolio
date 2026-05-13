"use client";

import { motion } from "motion/react";
import { Mail, Link2, GitBranch, Phone, ArrowUpRight } from "lucide-react";

const links = [
  {
    label: "Email",
    value: "barbosaapedroo@gmail.com",
    href: "mailto:barbosaapedroo@gmail.com",
    icon: Mail,
    display: "barbosaapedroo@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/pedrobarbosafreire",
    href: "https://www.linkedin.com/in/pedrobarbosafreire",
    icon: Link2,
    display: "/in/pedrobarbosafreire",
  },
  {
    label: "GitHub",
    value: "github.com/pedroobarbosaa",
    href: "https://github.com/pedroobarbosaa",
    icon: GitBranch,
    display: "github.com/pedroobarbosaa",
  },
  {
    label: "WhatsApp",
    value: "+55 61 99337-8082",
    href: "https://wa.me/5561993378082",
    icon: Phone,
    display: "+55 61 99337-8082",
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-muted/40 py-16 md:py-24"
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
          Contact
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.08, ease }}
          className="display-md mb-4 max-w-lg text-[#1d1d1f]"
        >
          Let's build something together.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.14, ease }}
          className="mb-16 max-w-md text-[17px] leading-[1.6] text-[#7a7a7a]"
        >
          Open to Data Analysis and BI roles. Based in Brasília — available
          for remote or relocation.
        </motion.p>

        {/* Contact cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.label === "Email" ? undefined : "_blank"}
              rel={link.label === "Email" ? undefined : "noopener noreferrer"}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease }}
              className="group flex flex-col gap-4 rounded-[18px] border border-[#e0e0e0] bg-[#ffffff] p-6 transition-colors duration-200 hover:border-[#c8c8c8] hover:bg-[#fafafc] cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f5f5f7]">
                  <link.icon className="h-4 w-4 text-[#1d1d1f]" />
                </div>
                <ArrowUpRight className="h-4 w-4 text-[#c8c8c8] transition-colors duration-200 group-hover:text-[#0066cc]" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[12px] font-medium uppercase tracking-[0.1em] text-[#7a7a7a]">
                  {link.label}
                </span>
                <span className="text-[14px] font-medium text-[#1d1d1f] break-all">
                  {link.display}
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Footer line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, delay: 0.3, ease }}
          className="mt-16 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs text-[#c8c8c8]"
        >
          <span>Pedro Barbosa Freire</span>
          <span aria-hidden>·</span>
          <span>Brasília, Brazil</span>
          <span aria-hidden>·</span>
          <span>{new Date().getFullYear()}</span>
          <span aria-hidden>·</span>
          <a
            href="/Pedro_Barbosa_CV.pdf"
            download="Pedro_Barbosa_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[#7a7a7a]"
          >
            Download CV
          </a>
          <span aria-hidden>·</span>
          <a
            href="https://linkedin.com/in/pedrobarbosafreire"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[#7a7a7a]"
          >
            LinkedIn
          </a>
        </motion.div>

      </div>
    </section>
  );
}
