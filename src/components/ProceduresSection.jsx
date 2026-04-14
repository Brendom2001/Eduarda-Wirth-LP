import { m } from 'framer-motion'
import { useAnimateOnce } from '../hooks/useAnimateOnce'

const easing = [0.22, 1, 0.36, 1]

const procedures = [
  {
    id: 1,
    category: 'Saúde e Prevenção',
    name: 'Saúde Bucal Preventiva',
    benefit: 'Protege e mantém o seu sorriso saudável',
    differential:
      'Cuidado preventivo contínuo com acompanhamento individualizado e tecnologia de ponta, para preservar a saúde do seu sorriso a longo prazo.',
    approach: 'Preventiva e contínua',
    indication: 'Todas as idades',
    tag: 'Mais procurado',
  },
  {
    id: 2,
    category: 'Estética e Harmonia',
    name: 'Odontologia Estética',
    benefit: 'Transforma e harmoniza o seu sorriso',
    differential:
      'Tratamentos estéticos planejados com precisão clínica e sensibilidade artística, valorizando a beleza natural e a identidade de cada sorriso.',
    approach: 'Estética e funcional',
    indication: 'Personalizada',
    tag: null,
  },
  {
    id: 3,
    category: 'Cuidado Integrado',
    name: 'Tratamentos Integrados',
    benefit: 'Visão completa da sua saúde bucal',
    differential:
      'Abordagem integrativa que une cuidado técnico e humano, oferecendo um atendimento completo, leve e memorável em cada etapa do tratamento.',
    approach: 'Multidisciplinar',
    indication: 'Sob avaliação',
    tag: 'Atendimento completo',
  },
]

function ProcedureCard({ procedure, index }) {
  const [ref, visible] = useAnimateOnce()

  return (
    <m.article
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{ duration: 0.65, ease: easing, delay: index * 0.1 }}
      className="group bg-[#EAEAE5] border border-brand-section/60 p-8 relative flex flex-col shadow-warm-sm hover:shadow-warm-lg transition-all duration-500 cursor-default"
    >
      {procedure.tag && (
        <div className="absolute top-0 right-8 -translate-y-1/2">
          <span className="bg-brand-cta text-[#EAEAE5] font-dm text-[10px] tracking-[0.15em] uppercase px-3 py-1 rounded-full block">
            {procedure.tag}
          </span>
        </div>
      )}

      <p className="font-dm text-[10px] text-brand-contrast font-semibold tracking-[0.3em] uppercase mb-3">
        {procedure.category}
      </p>

      <h3 className="font-playfair text-2xl font-bold text-brand-title mb-4 leading-tight">
        {procedure.name}
      </h3>

      <div className="w-10 h-px bg-brand-cta/40 mb-5 group-hover:w-16 transition-all duration-500" />

      <p className="font-dm text-sm text-brand-body/90 mb-3">
        <span className="font-semibold text-brand-title">Benefício: </span>
        {procedure.benefit}
      </p>

      <p className="font-dm text-sm text-brand-body/90 leading-relaxed mb-auto pb-8">
        {procedure.differential}
      </p>

      <div className="border-t border-brand-section/50 pt-6 space-y-3">
        <div className="flex items-center justify-between">
          <span className="font-dm text-[10px] text-brand-contrast font-semibold uppercase tracking-[0.2em]">
            Abordagem
          </span>
          <span className="font-dm text-sm text-brand-title font-medium">
            {procedure.approach}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-dm text-[10px] text-brand-contrast font-semibold uppercase tracking-[0.2em]">
            Indicação
          </span>
          <span className="font-dm text-sm text-brand-title font-medium">
            {procedure.indication}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-dm text-[10px] text-brand-contrast font-semibold uppercase tracking-[0.2em]">
            Agendamento
          </span>
          <span className="font-playfair text-base text-brand-cta font-medium italic">
            Consulte-nos
          </span>
        </div>
      </div>
    </m.article>
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
      className="mb-16"
    >
      <p className="font-dm text-xs text-brand-contrast font-semibold tracking-[0.35em] uppercase mb-4">
        Nossos Serviços
      </p>
      <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-brand-title leading-tight max-w-lg">
        Tratamentos Mais
        <br />
        <em className="font-light text-brand-cta">Procurados</em>
      </h2>
    </m.div>
  )
}

export default function ProceduresSection() {
  return (
    <section id="procedimentos" className="bg-brand-bg py-20">
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16">
        <SectionHeader />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {procedures.map((procedure, index) => (
            <ProcedureCard key={procedure.id} procedure={procedure} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
