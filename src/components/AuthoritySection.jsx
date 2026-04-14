import { useRef, useEffect, useState } from 'react'
import { m, useInView } from 'framer-motion'

const easing = [0.22, 1, 0.36, 1]

function AnimatedCounter({ target, suffix = '', prefix = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const duration = 1800
    const steps = 60
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
    return () => clearInterval(timer)
  }, [isInView, target])

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString('pt-BR')}{suffix}
    </span>
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

export default function AuthoritySection() {
  return (
    <section className="bg-brand-contrast py-20 text-white">
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16">

        {/* Heading */}
        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
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

        {/* Metrics */}
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-px bg-brand-cta/20 mb-14"
        >
          {metrics.map(({ counter, unit, label }) => (
            <m.div
              key={label}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: easing }}
              className="bg-brand-contrast px-6 md:px-8 py-10 md:py-12 text-center group hover:bg-[#6d5843] transition-colors duration-300 last:col-span-2 md:last:col-span-1"
            >
              <p className="font-playfair text-4xl md:text-6xl font-bold text-white mb-2 group-hover:text-brand-light transition-colors duration-300">
                {counter}
                {unit && (
                  <span className="text-brand-light text-2xl font-light ml-1.5">
                    {unit}
                  </span>
                )}
              </p>
              <p className="font-dm text-xs text-brand-light/90 tracking-[0.2em] uppercase">
                {label}
              </p>
            </m.div>
          ))}
        </m.div>

        {/* Body text — máx. 2 linhas por bloco, separadas por ícone */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: easing }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="font-dm text-base md:text-lg text-brand-light/90 leading-relaxed font-light mb-6">
            Nossa missão vai além da técnica. Queremos que cada encontro
            seja leve, humano e memorável.
          </p>

          {/* Visual break */}
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

      </div>
    </section>
  )
}
