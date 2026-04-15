import { useState, useEffect } from 'react'
import { m, useScroll, useTransform } from 'framer-motion'
import MagneticWrapper from './MagneticWrapper'

const easing = [0.22, 1, 0.36, 1]

// Mask reveal — container controla o stagger, linhas sobem de dentro
const h1Stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.05 } },
}

const lineMask = {
  hidden: { y: '110%' },
  visible: { y: '0%', transition: { duration: 0.9, ease: easing } },
}

const CheckIcon = () => (
  <span className="w-5 h-5 rounded-full bg-brand-cta/15 flex items-center justify-center flex-shrink-0">
    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
      <path d="M1 4L3.5 6.5L9 1" stroke="#9A856A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
)

export default function HeroSection() {
  // Dispara o bob loop após a entrada do badge (delay 0.9s + duration 0.6s + buffer)
  const [badgeBob, setBadgeBob] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setBadgeBob(true), 1700)
    return () => clearTimeout(t)
  }, [])

  // Parallax: imagem se move mais devagar que o scroll (profundidade editorial)
  const [isDesktop] = useState(
    () => typeof window !== 'undefined' && window.innerWidth >= 1024
  )
  const { scrollY } = useScroll()
  const imageY = useTransform(scrollY, [0, 700], [0, isDesktop ? -55 : -20])

  return (
    <section id="inicio" className="min-h-screen bg-brand-bg relative flex items-center pt-20 overflow-hidden">
      {/* Decorações ambiente — ocultas no mobile (blur-3xl é pesado na GPU móvel) */}
      <div className="hidden md:block absolute top-1/3 right-0 w-[520px] h-[520px] bg-brand-section/25 rounded-full blur-3xl pointer-events-none" />
      <div className="hidden md:block absolute bottom-1/4 left-0 w-72 h-72 bg-brand-detail/12 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16 py-10 md:py-16 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">

          {/* Left — Content */}
          <m.div
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.13 }}
            className="w-full"
          >
            {/* Eyebrow */}
            <m.p
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.65, ease: easing }}
              className="font-dm text-xs text-brand-contrast font-semibold tracking-[0.35em] uppercase mb-5 flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-cta animate-pulse inline-block" />
              Sapiranga / Nova Hartz · RS · Nutricionista
            </m.p>

            {/* H1 — mask reveal: cada linha sobe de dentro do seu container */}
            <m.h1
              variants={h1Stagger}
              className="font-playfair text-[1.65rem] sm:text-4xl lg:text-[3.4rem] xl:text-[4rem] font-bold text-brand-title leading-[1.05] sm:leading-[1.1] mb-5 sm:mb-7"
            >
              {/* Linha 1 */}
              <span className="block overflow-hidden py-[0.08em] sm:py-[0.15em]">
                <m.span variants={lineMask} className="block">
                  Nutrição leve, prática
                </m.span>
              </span>
              {/* Linha 2 — cor de destaque */}
              <span className="block overflow-hidden py-[0.08em] sm:py-[0.15em]">
                <m.em variants={lineMask} className="block font-light text-brand-cta not-italic">
                  e equilibrada
                </m.em>
              </span>
              {/* Linha 3 */}
              <span className="block overflow-hidden py-[0.08em] sm:py-[0.15em]">
                <m.span variants={lineMask} className="block">
                  que se encaixa na sua rotina
                </m.span>
              </span>
            </m.h1>

            {/* Subtitle */}
            <m.p
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.7, ease: easing }}
              className="font-dm text-base md:text-lg text-brand-body/90 leading-relaxed mb-9 max-w-[480px] font-light"
            >
              Atendimento presencial em Sapiranga e Nova Hartz,
              e online para todo o Brasil.
            </m.p>

            {/* Bullet list */}
            <m.ul
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.7, ease: easing }}
              className="space-y-3.5 mb-11"
            >
              {[
                'Presencial em Nova Hartz e Sapiranga',
                'Online para qualquer lugar do mundo',
                'Plano alimentar que cabe na sua rotina real',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 font-dm text-sm text-brand-body/90">
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </m.ul>

            {/* CTAs */}
            <m.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.7, ease: easing }}
              className="flex flex-col sm:flex-row gap-4 items-start"
            >
              <MagneticWrapper className="w-full sm:w-auto">
                <a
                  href="https://wa.me/5551995484860?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Eduarda%20Wirth."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 bg-brand-cta text-[#EAEAE5] font-dm font-medium tracking-wide text-sm px-7 py-4 rounded-full hover:bg-brand-contrast transition-all duration-300 hover:shadow-warm-lg hover:-translate-y-0.5 min-h-[52px] w-full justify-center sm:justify-start"
                >
                  Agendar Consulta
                  <svg
                    width="16" height="16" viewBox="0 0 16 16" fill="none"
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  >
                    <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </MagneticWrapper>
              <a
                href="https://wa.me/5551995484860?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Eduarda%20Wirth."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 border border-brand-detail/50 text-brand-contrast font-dm text-sm px-7 py-4 rounded-full hover:bg-brand-section/40 transition-all duration-300 min-h-[52px] w-full sm:w-auto justify-center sm:justify-start"
              >
                <svg className="w-4 h-4 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
            </m.div>

            {/* Social proof */}
            <m.div
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              transition={{ duration: 0.6, ease: easing, delay: 0.1 }}
              className="mt-9 flex items-center gap-4"
            >
              <div className="flex -space-x-2">
                {[21, 22, 23].map((n) => (
                  <div
                    key={n}
                    className="w-8 h-8 rounded-full border-2 border-brand-bg bg-brand-section overflow-hidden"
                  >
                    <img
                      src={`https://i.pravatar.cc/40?img=${n}`}
                      alt=""
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                ))}
              </div>
              <p className="font-dm text-sm text-brand-body/90">
                <span className="font-semibold text-brand-title">Nutricionista</span> formada pela Unisinos
              </p>
            </m.div>
          </m.div>

          {/* Right — Hero Image */}
          <m.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: easing, delay: 0.2 }}
            className="relative w-full"
          >
            <div className="relative aspect-[3/4] md:aspect-[4/5] max-w-sm mx-auto lg:max-w-none">
              {/* Image — parallax: imagem se move -55px enquanto o scroll avança 700px */}
              <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-warm-xl">
                <m.img
                  src="/hero-photo.png"
                  alt="Eduarda Wirth — Nutricionista em Sapiranga e Nova Hartz, RS"
                  style={{ y: imageY, height: 'calc(100% + 55px)' }}
                  className="w-full object-cover object-center"
                  loading="eager"
                  fetchpriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-contrast/20 via-transparent to-transparent rounded-2xl" />
              </div>

              {/* Offset frame — hidden on mobile to prevent overflow */}
              <div className="hidden md:block absolute -bottom-3 -right-3 w-full h-full border border-brand-detail/25 rounded-2xl -z-10 pointer-events-none" />

              {/* Floating badge — bottom left */}
              <m.div
                initial={{ opacity: 0, y: 16 }}
                animate={
                  badgeBob
                    ? { opacity: 1, y: [0, -7, 0] }
                    : { opacity: 1, y: 0 }
                }
                transition={
                  badgeBob
                    ? { y: { repeat: Infinity, duration: 3.2, ease: 'easeInOut' } }
                    : { duration: 0.6, ease: easing, delay: 0.9 }
                }
                className="absolute bottom-6 left-6 bg-[#EAEAE5]/95 backdrop-blur-sm px-4 py-3 shadow-warm-md rounded-xl"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-brand-cta/15 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-brand-cta" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-playfair text-sm text-brand-title italic leading-tight">
                      Atendimento online
                    </p>
                    <p className="font-dm text-[10px] text-brand-contrast tracking-wide mt-0.5">
                      Para todo o Brasil
                    </p>
                  </div>
                </div>
              </m.div>

              {/* Decorative circle — hidden on mobile to prevent overflow */}
              <div className="hidden md:block absolute -top-5 -left-5 w-20 h-20 border border-brand-detail/20 rounded-full -z-10 pointer-events-none" />
            </div>
          </m.div>

        </div>
      </div>
    </section>
  )
}
