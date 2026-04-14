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

function MetricCard({ counter, unit, label, index }) {
  const [ref, visible] = useAnimateOnce()

  return (
    <m.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      transition={{ duration: 0.6, ease: easing, delay: index * 0.1 }}
      className="bg-brand-contrast px-6 md:px-8 py-10 md:py-12 text-center group hover:bg-[#6d5843] transition-colors duration-300 last:col-span-2 md:last:col-span-1"
    >
      <p className="font-playfair text-4xl md:text-6xl font-bold text-white mb-2 group-hover:text-brand-light transition-colors duration-300">
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
    counter: <AnimatedCounter target={5049} />,
    unit: '',
    label: 'avaliações no Google',
  },
  {
    counter: <span>5,0</span>,
    unit: '★',
    label: 'nota média no Google',
  },
  {
    counter: <span>Sapiranga</span>,
    unit: '',
    label: 'Rio Grande do Sul · Centro',
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
        Nossa trajetória
      </p>
      <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
        Referência em Odontologia Integrada
        <br />
        <em className="font-light text-brand-section">em Sapiranga, RS</em>
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
        Nossa missão vai além da técnica. Queremos que cada encontro
        seja leve, humano e memorável.
      </p>
      <div className="flex items-center justify-center gap-3 mb-6">
        <div className="w-8 h-px bg-brand-cta/40" />
        <div className="w-1.5 h-1.5 rounded-full bg-brand-cta/60" />
        <div className="w-8 h-px bg-brand-cta/40" />
      </div>
      <p className="font-dm text-base md:text-lg text-brand-light/90 leading-relaxed font-light">
        Excelência, pra nós, também se revela na forma como se cuida.
        Cuidar com verdade é o que nos move.
      </p>
    </m.div>
  )
}

export default function AuthoritySection() {
  return (
    <section className="bg-brand-contrast py-20 text-white">
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16">
        <SectionHeader />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-brand-cta/20 mb-14">
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
