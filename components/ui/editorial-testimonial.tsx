"use client"
import { useState } from "react"
import { ChevronLeft, ChevronRight, MessageSquare, X } from "lucide-react"

const testimonials = [
  {
    id: 1,
    quote: "Thank you once again. Success on your journey, and may God bless you.",
    originalQuote: "Mais uma vez obrigado, sucesso na caminhada e que Deus te abençoe.",
    author: "Clemon Campos",
    role: "Managing Partner",
    company: "Clemon Campos Advocacia",
    initials: "CC",
  },
  {
    id: 2,
    quote: "Thank you for everything — we're here whenever you need us.",
    originalQuote: "Obrigada por tudo e seguimos aqui a disposição!",
    author: "Daniela Vaz",
    role: "Attorney",
    company: "Clemon Campos Advocacia",
    initials: "DV",
  },
  {
    id: 3,
    quote: "Much success in your life, Pedro! Thank you for your dedication.",
    originalQuote: "Muito sucesso na sua vida, Pedro! Obrigada pela dedicação.",
    author: "Bárbara Freire",
    role: "Lead Attorney",
    company: "Clemon Campos Advocacia",
    initials: "BF",
  },
  {
    id: 4,
    quote: "God bless you greatly! I'll say it again: you are a remarkable young man. Thank you for the partnership.",
    originalQuote: "Deus te abençoe muito! Repito: você é um menino diferenciado. Obrigada pela parceria.",
    author: "Raiane Alves",
    role: "Attorney",
    company: "Clemon Campos Advocacia",
    initials: "RA",
  },
]

export default function TestimonialsEditorial() {
  const [active, setActive] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const handleChange = (index: number) => {
    if (index === active || isTransitioning) return
    setIsTransitioning(true)
    setTimeout(() => {
      setActive(index)
      setTimeout(() => setIsTransitioning(false), 50)
    }, 300)
  }

  const handlePrev = () => {
    const newIndex = active === 0 ? testimonials.length - 1 : active - 1
    handleChange(newIndex)
  }

  const handleNext = () => {
    const newIndex = active === testimonials.length - 1 ? 0 : active + 1
    handleChange(newIndex)
  }

  const current = testimonials[active]

  return (
    <div className="w-full max-w-4xl mx-auto px-0 py-4">
      <div className="flex items-stretch gap-8">

        {/* Left watermark column */}
        <div className="hidden md:flex w-12 flex-shrink-0 items-center justify-center overflow-hidden">
          <span
            className="text-5xl font-light tracking-widest text-foreground/[0.06] select-none whitespace-nowrap"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            Clemon Campos Advocacia
          </span>
        </div>

        {/* Main content */}
        <div className="flex flex-1 items-start gap-8">
        <span
          className="text-[120px] font-light leading-none text-foreground/10 select-none transition-all duration-500"
          style={{ fontFeatureSettings: '"tnum"' }}
        >
          {String(active + 1).padStart(2, "0")}
        </span>
        <div className="flex-1 pt-6">
          <blockquote
            className={`text-2xl md:text-3xl font-light leading-relaxed text-foreground tracking-tight transition-all duration-300 ${
              isTransitioning ? "opacity-0 translate-x-4" : "opacity-100 translate-x-0"
            }`}
          >
            {current.quote}
          </blockquote>

          <p className={`mt-3 text-xs italic text-muted-foreground/60 transition-all duration-300 ${
            isTransitioning ? "opacity-0" : "opacity-100"
          }`}>
            "{current.originalQuote}"
          </p>

          <button
            onClick={() => setLightboxOpen(true)}
            className={`mt-3 inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-xs text-muted-foreground transition-all duration-300 hover:border-foreground/30 hover:text-foreground cursor-pointer ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
          >
            <MessageSquare className="h-[10px] w-[10px]" />
            View on WhatsApp ↗
          </button>

          <div
            className={`mt-8 group cursor-default transition-all duration-300 delay-100 ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center ring-2 ring-foreground/10 group-hover:ring-foreground/30 transition-all duration-300">
                <span className="text-sm font-medium text-muted-foreground">{current.initials}</span>
              </div>
              <div>
                <p className="font-medium text-foreground">{current.author}</p>
                <p className="text-sm text-muted-foreground">
                  {current.role}
                  <span className="mx-2 text-foreground/20">/</span>
                  <span className="group-hover:text-foreground transition-colors duration-300">{current.company}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        </div> {/* end main content */}
      </div>

      <div className="mt-16 flex items-center justify-between md:pl-20">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            {testimonials.map((_, index) => (
              <button key={index} onClick={() => handleChange(index)} className="group relative py-4 cursor-pointer">
                <span
                  className={`block h-px transition-all duration-500 ease-out ${
                    index === active
                      ? "w-12 bg-foreground"
                      : "w-6 bg-foreground/20 group-hover:w-8 group-hover:bg-foreground/40"
                  }`}
                />
              </button>
            ))}
          </div>
          <span className="text-xs text-muted-foreground tracking-widest uppercase">
            {String(active + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={handlePrev}
            className="p-2 rounded-full text-foreground/40 hover:text-foreground hover:bg-foreground/5 transition-all duration-300 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="p-2 rounded-full text-foreground/40 hover:text-foreground hover:bg-foreground/5 transition-all duration-300 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6 transition-opacity duration-200"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 cursor-pointer"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          <img
            src="/images/testimonials-whatsapp.png"
            alt="WhatsApp testimonials"
            className="max-h-[90vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  )
}
