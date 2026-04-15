import { m } from 'framer-motion'
import { useAnimateOnce } from '../hooks/useAnimateOnce'

const easing = [0.22, 1, 0.36, 1]

const includes = [
  'Anamnese clínica e alimentar completa',
  'Plano alimentar individualizado',
  'Orientações para a sua rotina real',
]

const CheckFilled = () => (
  <span className="w-6 h-6 rounded-full bg-brand-cta flex items-center justify-center flex-shrink-0">
    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
      <path d="M1 4L3.5 6.5L9 1" stroke="#EAEAE5" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
)

export default function OfferSection() {
  const [headerRef, headerVisible] = useAnimateOnce()
  const [cardRef, cardVisible] = useAnimateOnce()

  return (
    <section id="agendamento" className="bg-brand-detail/15 py-20">
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16">
        <div className="max-w-3xl mx-auto">

          <m.div
            ref={headerRef}
            initial={{ opacity: 0, y: 24 }}
            animate={headerVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.7, ease: easing }}
            className="text-center mb-10"
          >
            <p className="font-dm text-xs text-brand-contrast font-semibold tracking-[0.35em] uppercase mb-4">
              Agendamento
            </p>
            <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-title leading-tight">
              Consulta Nutricional
              <br />
              <em className="font-light text-brand-cta">Personalizada</em>
            </h2>
          </m.div>

          <m.div
            ref={cardRef}
            initial={{ opacity: 0, y: 28 }}
            animate={cardVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
            transition={{ duration: 0.75, ease: easing, delay: 0.1 }}
            className="bg-[#EAEAE5] border border-brand-section rounded-2xl p-6 md:p-14 relative shadow-warm-md"
          >
            <div className="absolute top-5 right-5 w-14 h-14 border-t border-r border-brand-cta/20 rounded-tr-xl pointer-events-none" />
            <div className="absolute bottom-5 left-5 w-14 h-14 border-b border-l border-brand-cta/20 rounded-bl-xl pointer-events-none" />

            <p className="font-dm text-sm text-brand-body/90 leading-relaxed mb-10 max-w-xl mx-auto text-center font-light">
              Consulta completa com a Eduarda Wirth — entendemos a sua rotina,
              objetivos e elaboramos um plano alimentar que você realmente consegue seguir.
            </p>

            <div className="space-y-4 max-w-sm mx-auto mb-12">
              {includes.map((item) => (
                <div key={item} className="flex items-center gap-3.5">
                  <CheckFilled />
                  <span className="font-dm text-sm text-brand-title font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <a
                href="https://wa.me/5551995484860?text=Olá!%20Gostaria%20de%20agendar%20minha%20consulta%20com%20a%20Eduarda%20Wirth."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-brand-cta text-[#EAEAE5] font-dm font-medium tracking-wide text-sm px-8 md:px-12 py-4 rounded-full hover:bg-brand-contrast transition-all duration-300 hover:shadow-warm-lg hover:-translate-y-0.5 min-h-[52px] w-full sm:w-auto justify-center"
              >
                Agendar Consulta
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <p className="font-dm text-xs text-brand-body/90 mt-5 tracking-wide">
                (51) 9 9548-4860 · Sapiranga / Nova Hartz, RS · Online para todo o Brasil
              </p>
            </div>
          </m.div>

        </div>
      </div>
    </section>
  )
}
