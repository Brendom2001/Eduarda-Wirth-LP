import { m } from 'framer-motion'
import { useAnimateOnce } from '../hooks/useAnimateOnce'

const easing = [0.22, 1, 0.36, 1]

const testimonials = [
  {
    quote: 'Recomento demais o trabalho dela e de toda a equipe!',
    name: 'Maria Eduarda Pereira Plangg',
    location: 'Sapiranga, RS',
    source: 'Avaliação no Google',
    initial: 'M',
  },
  {
    quote: 'Consultório moderno, tecnologia e materiais de qualidade.',
    name: 'Luiz Fernando Kichler',
    location: 'Sapiranga, RS',
    source: 'Avaliação no Google',
    initial: 'L',
  },
  {
    quote: 'Além de tudo, o ambiente é super aconchegante!',
    name: 'Gustavo',
    location: 'Sapiranga, RS',
    source: 'Avaliação no Google',
    initial: 'G',
  },
]

const StarRow = () => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill="#9A856A">
        <path d="M6 0L7.34 4.13H11.71L8.18 6.69L9.53 10.82L6 8.26L2.47 10.82L3.82 6.69L0.29 4.13H4.66L6 0Z" />
      </svg>
    ))}
  </div>
)

function TestimonialCard({ testimonial, index }) {
  const [ref, visible] = useAnimateOnce()

  return (
    <m.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{ duration: 0.65, ease: easing, delay: index * 0.12 }}
      className="bg-brand-section/15 border border-brand-section/50 p-8 flex flex-col hover:border-brand-detail/60 hover:bg-brand-section/25 transition-all duration-300 rounded-xl"
    >
      <StarRow />

      <div className="font-playfair text-6xl text-brand-cta/12 leading-none mt-4 mb-1 select-none">
        "
      </div>

      <p className="font-dm text-sm text-brand-body/90 leading-relaxed italic flex-1 mb-8 font-light">
        {testimonial.quote}
      </p>

      <div className="border-t border-brand-section/60 pt-5 flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-brand-detail/25 flex items-center justify-center flex-shrink-0">
          <span className="font-playfair text-sm font-medium text-brand-title">
            {testimonial.initial}
          </span>
        </div>
        <div>
          <p className="font-dm text-sm font-semibold text-brand-title">{testimonial.name}</p>
          <p className="font-dm text-xs text-brand-body/90 mt-0.5">{testimonial.location}</p>
          <p className="font-dm text-xs text-brand-body/90 mt-0.5">{testimonial.source}</p>
        </div>
      </div>
    </m.div>
  )
}

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
      <p className="font-dm text-xs text-brand-contrast font-semibold tracking-[0.35em] uppercase mb-4">
        Depoimentos
      </p>
      <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-brand-title leading-tight">
        O Que Nossos Pacientes
        <br />
        <em className="font-light text-brand-cta">Estão Dizendo</em>
      </h2>
    </m.div>
  )
}

export default function TestimonialsSection() {
  return (
    <section id="depoimentos" className="bg-brand-bg py-20">
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16">
        <SectionHeader />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <TestimonialCard key={t.name} testimonial={t} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
