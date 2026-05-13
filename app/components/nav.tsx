"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "Certs", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 flex items-center justify-between px-8 transition-all duration-300 md:px-16",
        scrolled
          ? "h-14 bg-white/90 shadow-[0_1px_0_0_#f0f0f0] backdrop-blur-md"
          : "h-20 bg-transparent",
      ].join(" ")}
    >
      <a
        href="#"
        className="text-[17px] font-semibold tracking-[-0.374px] text-[#1d1d1f] transition-opacity hover:opacity-70"
      >
        Pedro Barbosa
      </a>

      <nav className="hidden items-center gap-8 md:flex">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-[14px] text-[#1d1d1f] transition-opacity hover:opacity-50"
          >
            {link.label}
          </a>
        ))}
        <a
          href="mailto:barbosaapedroo@gmail.com"
          className="cursor-pointer rounded-full bg-[#0066cc] px-[18px] py-[8px] text-[14px] text-white transition-all hover:bg-[#0071e3] active:scale-95"
        >
          Get in touch
        </a>
      </nav>

      {/* Mobile: scroll to contact section */}
      <button
        onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
        className="cursor-pointer rounded-full bg-[#0066cc] px-[16px] py-[7px] text-[13px] text-white md:hidden"
      >
        Contact
      </button>
    </header>
  );
}
