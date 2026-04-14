import { m } from 'framer-motion'

const easing = [0.22, 1, 0.36, 1]

export default function FinalCTA() {
  return (
    <section className="bg-brand-section/20 py-20 relative overflow-hidden">
      {/* Decorative rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-brand-cta/8 rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-brand-cta/5 rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border border-brand-cta/3 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16 text-center relative z-10">
        <m.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.75, ease: easing }}
        >
          <p className="font-dm text-xs text-brand-contrast font-semibold tracking-[0.35em] uppercase mb-6">
            Próximo passo
          </p>

          <h2 className="font-playfair text-3xl md:text-5xl lg:text-6xl font-bold text-brand-title leading-tight mb-6">
            Agende a Sua Avaliação
            <br />
            <em className="font-light text-brand-cta">com a Dra. Laura Gehlen</em>
          </h2>

          <p className="font-dm text-base text-brand-body/90 max-w-xl mx-auto mb-12 leading-relaxed font-light">
            Dê o primeiro passo em direção a um sorriso mais saudável.
            Avaliação gratuita e sem compromisso.
          </p>

          <a
            href="https://wa.me/5551995449443?text=Olá!%20Gostaria%20de%20agendar%20minha%20avaliação%20gratuita%20com%20a%20Dra.%20Laura%20Gehlen."
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 bg-brand-cta text-[#EAEAE5] font-dm font-medium tracking-wide text-sm px-8 md:px-14 py-4 md:py-5 rounded-full hover:bg-brand-contrast transition-all duration-300 hover:shadow-warm-xl hover:-translate-y-1 min-h-[52px] w-full sm:w-auto"
          >
            Agendar Avaliação Gratuita
            <svg
              width="16" height="16" viewBox="0 0 16 16" fill="none"
              className="group-hover:translate-x-1 transition-transform duration-300"
            >
              <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          <p className="font-dm text-xs text-brand-body/90 mt-6 tracking-wide">
            (51) 99544-9443 · R. Pres. Kenedy, 281, sala 311 · Centro, Sapiranga — RS
          </p>
        </m.div>
      </div>
    </section>
  )
}
