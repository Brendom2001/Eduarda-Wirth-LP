import { m } from 'framer-motion'
import { useAnimateOnce } from '../hooks/useAnimateOnce'

const easing = [0.22, 1, 0.36, 1]

const highlights = [
  { label: 'Nutrição Esportiva Funcional', detail: 'Pós-graduanda na área' },
  { label: 'Formação', detail: 'Unisinos · CRN 21631D' },
  { label: 'Presencial', detail: 'Sapiranga e Nova Hartz, RS' },
  { label: 'Online', detail: 'Para qualquer lugar do mundo' },
]

// Variantes reutilizadas — objetos estáveis fora do componente
const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11 } },
}

const highlightStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: easing } },
}

const fadeUpSm = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easing } },
}

const lineDraw = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: { scaleX: 1, opacity: 1, transition: { duration: 0.75, ease: easing } },
}

const lineGroup = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
}

// O iframe carrega assim que AboutSection monta (a 900px do viewport via LazySection)
function LazyMap() {
  return (
    <iframe
      src="https://maps.google.com/maps?q=-29.5846755,-50.903423&t=&z=15&ie=UTF8&iwloc=&output=embed"
      className="w-full h-full border-0"
      loading="lazy"
      title="Localização — Eduarda Wirth Nutricionista"
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
    <section className="bg-brand-bg py-20">
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-28 items-center">

          {/* Mapa */}
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

              <div className="hidden md:block absolute -bottom-4 -right-4 w-full h-full border border-brand-detail/20 rounded-2xl -z-10 pointer-events-none" />

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
                      Sapiranga · Nova Hartz
                    </p>
                    <p className="font-dm text-[10px] text-brand-contrast tracking-wide mt-0.5">
                      Rio Grande do Sul · Online
                    </p>
                  </div>
                </div>
              </m.div>
            </div>
          </m.div>

          {/* Texto — stagger em cascata */}
          <m.div
            ref={textRef}
            variants={staggerContainer}
            initial="hidden"
            animate={textVisible ? 'visible' : 'hidden'}
          >
            {/* Eyebrow */}
            <m.p
              variants={fadeUp}
              className="font-dm text-xs text-brand-contrast font-semibold tracking-[0.35em] uppercase mb-4"
            >
              Sobre a nutricionista
            </m.p>

            {/* Título */}
            <m.h2
              variants={fadeUp}
              className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold text-brand-title leading-tight mb-5"
            >
              Eduarda Wirth
              <br />
              <em className="font-light text-brand-cta">Nutricionista · CRN 21631D</em>
            </m.h2>

            {/* Linha decorativa */}
            <m.div
              variants={lineDraw}
              style={{ transformOrigin: 'left' }}
              className="w-12 h-px bg-brand-cta/40 mb-8"
            />

            {/* Parágrafo 1 */}
            <m.p
              variants={fadeUp}
              className="font-dm text-sm text-brand-body/90 leading-relaxed font-light"
            >
              Nutricionista formada pela Unisinos e pós-graduanda em
              Nutrição Esportiva Funcional.
            </m.p>

            {/* Separador ornamental */}
            <m.div variants={lineGroup} className="flex items-center gap-3 my-5">
              <m.div variants={lineDraw} style={{ transformOrigin: 'right' }} className="w-6 h-px bg-brand-cta/40" />
              <div className="w-1 h-1 rounded-full bg-brand-cta/50" />
              <m.div variants={lineDraw} style={{ transformOrigin: 'left' }} className="w-6 h-px bg-brand-cta/40" />
            </m.div>

            {/* Parágrafo 2 */}
            <m.p
              variants={fadeUp}
              className="font-dm text-sm text-brand-body/90 leading-relaxed font-light"
            >
              Acredito que a nutrição vai muito além de dietas restritivas —
              ela é uma ferramenta de autonomia, equilíbrio e qualidade de vida.
            </m.p>

            {/* Separador ornamental */}
            <m.div variants={lineGroup} className="flex items-center gap-3 my-5">
              <m.div variants={lineDraw} style={{ transformOrigin: 'right' }} className="w-6 h-px bg-brand-cta/40" />
              <div className="w-1 h-1 rounded-full bg-brand-cta/50" />
              <m.div variants={lineDraw} style={{ transformOrigin: 'left' }} className="w-6 h-px bg-brand-cta/40" />
            </m.div>

            {/* Parágrafo 3 */}
            <m.p
              variants={fadeUp}
              className="font-dm text-sm text-brand-body/90 leading-relaxed font-light mb-10"
            >
              Atendimento presencial em Sapiranga e Nova Hartz — RS,
              e online para qualquer lugar do mundo.
            </m.p>

            {/* Highlights — stagger interno */}
            <m.div
              variants={highlightStagger}
              className="grid grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-5"
            >
              {highlights.map(({ label, detail }) => (
                <m.div
                  key={label}
                  variants={fadeUpSm}
                  className="border-t border-brand-section/60 pt-4"
                >
                  <p className="font-dm text-xs font-semibold text-brand-title tracking-wide">{label}</p>
                  <p className="font-dm text-xs text-brand-body/90 mt-1">{detail}</p>
                </m.div>
              ))}
            </m.div>
          </m.div>

        </div>
      </div>
    </section>
  )
}
