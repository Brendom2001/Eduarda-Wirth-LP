import { useRef, useEffect, useState } from 'react'
import { m } from 'framer-motion'
import { useAnimateOnce } from '../hooks/useAnimateOnce'

const easing = [0.22, 1, 0.36, 1]

// Usa IntersectionObserver nativo para evitar re-trigger do counter
function AnimatedCounter({ target }) {
  const ref = useRef(null)
  const [count, setCount] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const run = () => {
      if (started.current) return
      started.current = true
      const duration = 1800
      const steps = 50
      const increment = target / steps
      let current = 0
      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          setCount(target)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)
    }

    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      run()
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          run()
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return <span ref={ref}>{count.toLocaleString('pt-BR')}</span>
}

// Variantes de entrada por índice no mobile
const mobileInitial = [
  { opacity: 0, x: -52 },   // 0 — Presencial: entra da esquerda
  { opacity: 0, y: 28 },    // 1 — Online: fade + subida
  { opacity: 0, x: 52 },    // 2 — CRN: entra da direita
]
const mobileVisible = [
  { opacity: 1, x: 0 },
  { opacity: 1, y: 0 },
  { opacity: 1, x: 0 },
]

function MetricCard({ counter, unit, label, index }) {
  const [ref, visible] = useAnimateOnce()
  const [isMobile] = useState(
    () => typeof window !== 'undefined' && window.innerWidth < 640
  )

  const initial   = isMobile ? mobileInitial[index]  : { opacity: 0, y: 16 }
  const animateOn = isMobile ? mobileVisible[index]  : { opacity: 1, y: 0 }
  const animateOff = isMobile ? mobileInitial[index] : { opacity: 0, y: 16 }

  return (
    <m.div
      ref={ref}
      initial={initial}
      animate={visible ? animateOn : animateOff}
      transition={{ duration: isMobile ? 0.7 : 0.6, ease: easing, delay: index * 0.12 }}
      className="bg-brand-contrast px-6 md:px-8 py-8 md:py-12 text-center group hover:bg-[#6d5843] transition-colors duration-300"
    >
      <p className="font-playfair text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-2 group-hover:text-brand-light transition-colors duration-300">
        {counter}
        {unit && (
          <span className="text-brand-light text-2xl font-light ml-1.5">{unit}</span>
        )}
      </p>
      <p className="font-dm text-xs text-brand-light/90 tracking-[0.2em] uppercase">
        {label}
      </p>
    </m.div>
  )
}

const metrics = [
  {
    counter: <span>Presencial</span>,
    unit: '',
    label: 'Sapiranga · Nova Hartz, RS',
  },
  {
    counter: <span>Online</span>,
    unit: '',
    label: 'Para todo o Brasil',
  },
  {
    counter: <span>CRN</span>,
    unit: '',
    label: '21631D · Registro profissional',
  },
]

function SectionHeader() {
  const [ref, visible] = useAnimateOnce()

  return (
    <m.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.7, ease: easing }}
      className="text-center mb-14"
    >
      <p className="font-dm text-xs text-brand-light/90 font-semibold tracking-[0.35em] uppercase mb-4">
        Sobre a nutricionista
      </p>
      <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
        Nutrição com Propósito
        <br />
        <em className="font-light text-brand-section">em Sapiranga e Nova Hartz, RS</em>
      </h2>
    </m.div>
  )
}

function BodyText() {
  const [ref, visible] = useAnimateOnce()

  return (
    <m.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.7, ease: easing }}
      className="max-w-2xl mx-auto text-center"
    >
      <p className="font-dm text-base md:text-lg text-brand-light/90 leading-relaxed font-light mb-6">
        Nutricionista formada pela Unisinos e pós-graduanda em Nutrição
        Esportiva Funcional, com atendimento presencial em Sapiranga e Nova Hartz.
      </p>
      <div className="flex items-center justify-center gap-3 mb-6">
        <div className="w-8 h-px bg-brand-cta/40" />
        <div className="w-1.5 h-1.5 rounded-full bg-brand-cta/60" />
        <div className="w-8 h-px bg-brand-cta/40" />
      </div>
      <p className="font-dm text-base md:text-lg text-brand-light/90 leading-relaxed font-light">
        Acredito que a nutrição vai muito além de dietas restritivas — ela é
        uma ferramenta de autonomia, equilíbrio e qualidade de vida.
      </p>
    </m.div>
  )
}

export default function AuthoritySection() {
  return (
    <section className="bg-brand-contrast py-20 text-white">
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16">
        <SectionHeader />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-brand-cta/20 mb-14">
          {metrics.map(({ counter, unit, label }, index) => (
            <MetricCard
              key={label}
              counter={counter}
              unit={unit}
              label={label}
              index={index}
            />
          ))}
        </div>

        <BodyText />
      </div>
    </section>
  )
}
