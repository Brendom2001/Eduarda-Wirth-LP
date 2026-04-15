import { m } from 'framer-motion'
import { useAnimateOnce } from '../hooks/useAnimateOnce'

const easing = [0.22, 1, 0.36, 1]

const benefits = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="18" stroke="#9A856A" strokeWidth="0.75" />
        <path d="M13 20 L18 25 L27 14" stroke="#9A856A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Sem julgamentos',
    text: 'Aqui você é acolhida como é. Cada história é única e o atendimento respeita o seu ponto de partida, sem críticas ou comparações.',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="18" stroke="#9A856A" strokeWidth="0.75" />
        <path d="M14 26 Q20 10 26 26" stroke="#9A856A" strokeWidth="0.75" fill="none" strokeLinecap="round" />
        <circle cx="20" cy="20" r="2" fill="#9A856A" fillOpacity="0.4" />
      </svg>
    ),
    title: 'Sem metas irreais',
    text: 'Objetivos construídos de forma honesta, progressiva e sustentável — sem promessas milagrosas ou cobranças que desmotivam.',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="18" stroke="#9A856A" strokeWidth="0.75" />
        <rect x="13" y="14" width="14" height="12" rx="2" stroke="#9A856A" strokeWidth="0.75" />
        <path d="M16 14 L16 12M24 14 L24 12" stroke="#9A856A" strokeWidth="0.75" strokeLinecap="round" />
        <path d="M16 20 L18 22 L24 17" stroke="#9A856A" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Plano possível de seguir',
    text: 'Nada de cardápio de hospital. O plano alimentar é pensado para a sua realidade, com alimentos que você gosta e que cabem na sua rotina.',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="18" stroke="#9A856A" strokeWidth="0.75" />
        <path d="M12 28 C12 22 16 16 20 16 C24 16 28 22 28 28" stroke="#9A856A" strokeWidth="0.75" fill="none" strokeLinecap="round" />
        <circle cx="20" cy="13" r="2.5" stroke="#9A856A" strokeWidth="0.75" />
      </svg>
    ),
    title: 'Sua rotina é considerada',
    text: 'O atendimento leva em conta o seu trabalho, família, horários e preferências. A nutrição se adapta a você, não o contrário.',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="18" stroke="#9A856A" strokeWidth="0.75" />
        <path d="M20 12 C14 12 11 16 11 20 C11 24 14 28 20 28 C26 28 29 24 29 20 C29 16 26 12 20 12Z" stroke="#9A856A" strokeWidth="0.75" fill="none" />
        <path d="M17 20 L19 22 L23 17" stroke="#9A856A" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Sem restrições extremas',
    text: 'A alimentação saudável não precisa ser sofrida. O equilíbrio é o caminho — sem cortar grupos alimentares inteiros ou eliminar o prazer de comer.',
  },
]

function BenefitItem({ benefit, index }) {
  const [ref, visible] = useAnimateOnce()

  return (
    <m.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 0.65, ease: easing, delay: index * 0.12 }}
      className="group text-center"
    >
      <div className="flex justify-center mb-7">
        <div className="w-20 h-20 rounded-full bg-brand-bg flex items-center justify-center group-hover:bg-brand-detail/20 transition-colors duration-400 shadow-warm-sm">
          {benefit.icon}
        </div>
      </div>
      <h3 className="font-playfair text-xl font-bold text-brand-title mb-4 leading-snug">
        {benefit.title}
      </h3>
      <div className="w-8 h-px bg-brand-cta/30 mx-auto mb-4 group-hover:w-14 transition-all duration-500" />
      <p className="font-dm text-sm text-brand-body/90 leading-relaxed font-light">
        {benefit.text}
      </p>
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
        Diferenciais
      </p>
      <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-brand-title leading-tight">
        O Que Você Não Vai
        <br />
        <em className="font-light text-brand-cta">Encontrar Aqui</em>
      </h2>
    </m.div>
  )
}

export default function BenefitsSection() {
  return (
    <section className="bg-brand-section/20 py-20">
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16">
        <SectionHeader />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-14">
          {benefits.map((benefit, index) => (
            <BenefitItem key={benefit.title} benefit={benefit} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
