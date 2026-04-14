import { m } from 'framer-motion'
import { useAnimateOnce } from '../hooks/useAnimateOnce'

const easing = [0.22, 1, 0.36, 1]

const highlights = [
  { label: 'Odontologia Integrada', detail: 'Cuidado completo e humanizado' },
  { label: 'Atendimento premium', detail: 'Personalizado e exclusivo' },
  { label: 'Tecnologia avançada', detail: 'Materiais de qualidade' },
  { label: 'Ambiente aconchegante', detail: 'Sapiranga, RS · Centro' },
]

// O iframe carrega assim que AboutSection monta (a 900px do viewport via LazySection)
function LazyMap() {
  return (
    <iframe
      src="https://maps.google.com/maps?q=R.+Presidente+Kenedy,+281,+Sapiranga,+RS,+Brasil&t=&z=16&ie=UTF8&iwloc=&output=embed"
      className="w-full h-full border-0"
      loading="lazy"
      title="Localização do Consultório — Dra. Laura Gehlen"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
    />
  )
}

export default function AboutSection() {
  const [mapRef, mapVisible] = useAnimateOnce()
  const [badgeRef, badgeVisible] = useAnimateOnce()
  const [textRef, textVisible] = useAnimateOnce()

  return (
    <section id="sobre" className="bg-brand-bg py-20">
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-28 items-center">

          <m.div
            ref={mapRef}
            initial={{ opacity: 0, y: 28 }}
            animate={mapVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
            transition={{ duration: 0.8, ease: easing }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md">
              <div className="w-full h-full rounded-2xl overflow-hidden shadow-warm-xl">
                <LazyMap />
              </div>

              <div className="absolute -bottom-4 -right-4 w-full h-full border border-brand-detail/20 rounded-2xl -z-10 pointer-events-none" />

              <m.div
                ref={badgeRef}
                initial={{ opacity: 0, scale: 0.9, y: 12 }}
                animate={badgeVisible ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 12 }}
                transition={{ duration: 0.6, ease: easing, delay: 0.35 }}
                className="absolute -bottom-4 left-4 bg-[#EAEAE5] border border-brand-section px-4 py-3 shadow-warm-md rounded-xl"
              >
                <div className="flex items-center gap-2">
                  <svg className="w-3.5 h-3.5 text-brand-cta flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <div>
                    <p className="font-dm text-xs font-semibold text-brand-title leading-tight">
                      R. Pres. Kenedy, 281 · Sala 311
                    </p>
                    <p className="font-dm text-[10px] text-brand-contrast tracking-wide mt-0.5">
                      Centro · Sapiranga, RS
                    </p>
                  </div>
                </div>
              </m.div>
            </div>
          </m.div>

          <m.div
            ref={textRef}
            initial={{ opacity: 0, y: 28 }}
            animate={textVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
            transition={{ duration: 0.8, ease: easing, delay: 0.1 }}
          >
            <p className="font-dm text-xs text-brand-contrast font-semibold tracking-[0.35em] uppercase mb-4">
              Sobre nós
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-brand-title leading-tight mb-5">
              Dra. Laura Gehlen
              <br />
              <em className="font-light text-brand-cta">Odontologia Integrada</em>
            </h2>
            <div className="w-12 h-px bg-brand-cta/40 mb-8" />

            <div className="space-y-5 font-dm text-sm text-brand-body/90 leading-relaxed mb-10 font-light">
              <p>
                Nossa missão vai além da técnica. Queremos que cada encontro
                seja leve, humano e memorável.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-6 h-px bg-brand-cta/40" />
                <div className="w-1 h-1 rounded-full bg-brand-cta/50" />
                <div className="w-6 h-px bg-brand-cta/40" />
              </div>
              <p>
                Cuidar com verdade é o que nos move. Transformar com
                sensibilidade é o que nos define.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-6 h-px bg-brand-cta/40" />
                <div className="w-1 h-1 rounded-full bg-brand-cta/50" />
                <div className="w-6 h-px bg-brand-cta/40" />
              </div>
              <p>
                Consultório moderno no centro de Sapiranga, RS — ambiente
                aconchegante do primeiro contato ao resultado final.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-x-8 gap-y-5">
              {highlights.map(({ label, detail }) => (
                <div key={label} className="border-t border-brand-section/60 pt-4">
                  <p className="font-dm text-xs font-semibold text-brand-title tracking-wide">{label}</p>
                  <p className="font-dm text-xs text-brand-body/90 mt-1">{detail}</p>
                </div>
              ))}
            </div>
          </m.div>

        </div>
      </div>
    </section>
  )
}
