"use client";

import { Card } from "@/components/ui/card";
import { AnimatePresence, animate, motion, useMotionValue } from "motion/react";
import { ChevronLeft, ChevronRight, ExternalLink, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface CardData {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  institution: string;
  verifyUrl: string;
}

const cards: CardData[] = [
  {
    id: 1,
    title: "Basic Frontend",
    description: "Foundations of web development — HTML, CSS, and JavaScript. First module of the ADS degree.",
    category: "240h · Sep 2024",
    image: "/images/certificates/basic-frontend.png",
    institution: "Descomplica",
    verifyUrl: "https://certificados.descomplica.com.br/graduacao/258ba2e298aaabe3e79e7e1b65f774567335edee65c92cff361d4bdec66d1c12",
  },
  {
    id: 2,
    title: "Programmer",
    description: "Core programming logic, algorithms, and structured development practices.",
    category: "160h · Dec 2024",
    image: "/images/certificates/programmer.png",
    institution: "Descomplica",
    verifyUrl: "https://certificados.descomplica.com.br/graduacao/8110cf4bed5b82d64423b5f24b958ff054e715596c2d46a446f35e94773f36fb",
  },
  {
    id: 3,
    title: "Object-Oriented Developer",
    description: "OOP principles, design patterns, and scalable code architecture.",
    category: "240h · Apr 2025",
    image: "/images/certificates/object-oriented-developer.png",
    institution: "Descomplica",
    verifyUrl: "https://certificados.descomplica.com.br/graduacao/8e3bb63c5a910de93690114d578090ca949968ac616ee69dc7e7249e79b2c2e4",
  },
  {
    id: 4,
    title: "Backend Developer",
    description: "Server-side development, APIs, databases, and backend architecture.",
    category: "160h · Apr 2026",
    image: "/images/certificates/backend-developer.png",
    institution: "Descomplica",
    verifyUrl: "https://certificados.descomplica.com.br/graduacao/d29642eeec5093e74f90dd73e7eacc7e1cd40ff460039a99328b4bb20608b2c3",
  },
  {
    id: 5,
    title: "Frontend Developer",
    description: "Advanced frontend — frameworks, component architecture, and modern UI development.",
    category: "240h · Apr 2026",
    image: "/images/certificates/frontend-developer.png",
    institution: "Descomplica",
    verifyUrl: "https://certificados.descomplica.com.br/graduacao/0d99005f1934432d77e7d0432ed56382cfaa7098b0db166051404ec74c7190b1",
  },
  {
    id: 6,
    title: "Full Stack Developer",
    description: "Integration of frontend and backend — complete application development from end to end.",
    category: "160h · Apr 2026",
    image: "/images/certificates/full-stack-developer.png",
    institution: "Descomplica",
    verifyUrl: "https://certificados.descomplica.com.br/graduacao/52e882a5901fe4a589c9db6614299a3894acb22b28fbca24d59993c506b27bb8",
  },
];

function Lightbox({ image, title, onClose }: { image: string; title: string; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 cursor-pointer"
        aria-label="Close"
      >
        <X className="h-5 w-5" />
      </button>

      <motion.img
        src={image}
        alt={title}
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.92 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="max-h-[90vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />
    </motion.div>
  );
}

export function CardsSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const x = useMotionValue(0);
  const [lightbox, setLightbox] = useState<{ image: string; title: string } | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      setWidth(
        containerRef.current.scrollWidth - containerRef.current.offsetWidth
      );
    }
  }, []);

  const scrollTo = (direction: "left" | "right") => {
    const currentX = x.get();
    const containerWidth = containerRef.current?.offsetWidth || 0;
    const scrollAmount = containerWidth * 0.8;
    let newX = direction === "left" ? currentX + scrollAmount : currentX - scrollAmount;
    newX = Math.max(Math.min(newX, 0), -width);
    animate(x, newX, { type: "spring", stiffness: 300, damping: 30, mass: 1 });
  };

  return (
    <>
      <div className="w-full max-w-6xl mx-auto p-8 relative group/slider">
        {/* Navigation Arrows */}
        <div className="absolute top-1/2 -translate-y-1/2 left-2 z-20 opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300">
          <button
            onClick={() => scrollTo("left")}
            className="h-12 w-12 rounded-full bg-background/80 backdrop-blur-md border border-border/50 shadow-lg flex items-center justify-center hover:bg-background hover:scale-110 transition-all active:scale-95 cursor-pointer"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-2 z-20 opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300">
          <button
            onClick={() => scrollTo("right")}
            className="h-12 w-12 rounded-full bg-background/80 backdrop-blur-md border border-border/50 shadow-lg flex items-center justify-center hover:bg-background hover:scale-110 transition-all active:scale-95 cursor-pointer"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <motion.div
          ref={containerRef}
          className="cursor-grab active:cursor-grabbing overflow-hidden px-4 py-8 -mx-4 -my-8"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            dragElastic={0.1}
            style={{ x }}
            className="flex gap-6"
          >
            {cards.map((card) => (
              <motion.div
                key={card.id}
                className="min-w-[320px] max-w-[320px] h-[420px]"
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <Card className="group relative h-full overflow-hidden rounded-3xl border-border/50 bg-card/30 backdrop-blur-md transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 pt-0 gap-0">
                  {/* Image Section */}
                  <div className="relative h-48 w-full overflow-hidden rounded-t-3xl p-0 m-0">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Hover Overlay Action */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[2px] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setLightbox({ image: card.image, title: card.title })}
                        className="flex items-center gap-2 rounded-full bg-white/90 px-5 py-2 text-sm font-semibold text-black shadow-lg cursor-pointer"
                      >
                        View Certificate
                      </motion.button>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 flex flex-col h-[calc(100%-12rem)] justify-between">
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold leading-tight tracking-tight text-foreground transition-colors group-hover:text-primary">
                        {card.title}
                      </h3>
                      <p className="line-clamp-3 text-sm text-muted-foreground leading-relaxed">
                        {card.description}
                      </p>
                    </div>

                    <div className="pt-4 mt-auto border-t border-border/50 flex items-center justify-between gap-3">
                      <div className="flex flex-col gap-0.5">
                        <span className="text-[11px] font-medium text-muted-foreground">
                          {card.institution}
                        </span>
                        <span className="text-[10px] text-muted-foreground/70">
                          {card.category}
                        </span>
                      </div>
                      <a
                        href={card.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex shrink-0 items-center gap-1 rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground transition-colors duration-200 hover:bg-[#0066cc] hover:border-[#0066cc] hover:text-white cursor-pointer"
                      >
                        Verify
                        <ExternalLink className="h-[10px] w-[10px]" />
                      </a>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <Lightbox
            image={lightbox.image}
            title={lightbox.title}
            onClose={() => setLightbox(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
