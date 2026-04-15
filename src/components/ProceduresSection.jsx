import { m } from 'framer-motion'
import { useAnimateOnce } from '../hooks/useAnimateOnce'

const easing = [0.22, 1, 0.36, 1]

// Objetos estáveis fora do componente — framer-motion não re-anima ao receber o mesmo objeto
const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
}

const headerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

const procedures = [
  {
    id: 1,
    category: 'Diagnóstico',
    name: 'Anamnese Clínica e Alimentar',
    benefit: 'Entendimento profundo da sua história alimentar',
    differential:
      'Avaliação detalhada do histórico clínico, hábitos alimentares e estilo de vida para construir um plano verdadeiramente personalizado.',
    approach: 'Individualizada',
    indication: 'Todos os perfis',
    tag: 'Primeiro passo',
  },
  {
    id: 2,
    category: 'Investigação',
    name: 'Rastreamento Metabólico',
    benefit: 'Identifica padrões que afetam sua saúde',
    differential:
      'Análise funcional dos processos metabólicos para compreender como seu organismo responde aos alimentos e orienta a conduta nutricional.',
    approach: 'Funcional',
    indication: 'Sob avaliação',
    tag: null,
  },
  {
    id: 3,
    category: 'Clínica',
    name: 'Avaliação de Exames',
    benefit: 'Interpretação nutricional dos seus exames',
    differential:
      'Leitura e interpretação de exames laboratoriais com foco nutricional, integrando os resultados ao plano alimentar de forma prática.',
    approach: 'Integrativa',
    indication: 'Com exames recentes',
    tag: null,
  },
  {
    id: 4,
    category: 'Corporal',
    name: 'Avaliação Antropométrica',
    benefit: 'Mapeamento completo da composição corporal',
    differential:
      'Medidas e análise corporal para acompanhar resultados com precisão e ajustar o plano conforme a evolução de cada paciente.',
    approach: 'Quantitativa',
    indication: 'Todos os perfis',
    tag: null,
  },
  {
    id: 5,
    category: 'Educação',
    name: 'Orientações Nutricionais',
    benefit: 'Ferramentas para escolhas conscientes no dia a dia',
    differential:
      'Orientações práticas e educação alimentar para que você desenvolva autonomia e uma relação mais saudável e leve com a comida.',
    approach: 'Educativa',
    indication: 'Todos os perfis',
    tag: 'Mais buscado',
  },
  {
    id: 6,
    category: 'Planejamento',
    name: 'Plano Alimentar Individualizado',
    benefit: 'Alimentação que se encaixa na sua rotina real',
    differential:
      'Plano alimentar pensado para a sua rotina, preferências e objetivos — sem restrições extremas, possível de seguir e sustentável a longo prazo.',
    approach: 'Personalizado',
    indication: 'Todos os perfis',
    tag: null,
  },
]

function ProcedureCard({ procedure, index }) {
  const [ref, visible] = useAnimateOnce()

  return (
    <m.article
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={visible ? 'visible' : 'hidden'}
      transition={{ duration: 0.65, ease: easing, delay: index * 0.1 }}
      className="group bg-[#EAEAE5] border border-brand-section/60 p-8 relative flex flex-col shadow-warm-sm hover:shadow-warm-lg transition-shadow duration-500 cursor-default"
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

      <div className="w-10 h-px bg-brand-cta/40 mb-5 group-hover:w-16 transition-[width] duration-500" />

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
          <a
            href="https://wa.me/5551995484860?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Eduarda%20Wirth."
            target="_blank"
            rel="noopener noreferrer"
            className="font-playfair text-base text-brand-cta font-medium italic hover:text-brand-contrast transition-colors duration-300"
          >
            Consulte-nos →
          </a>
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
      variants={headerVariants}
      initial="hidden"
      animate={visible ? 'visible' : 'hidden'}
      transition={{ duration: 0.7, ease: easing }}
      className="mb-16"
    >
      <p className="font-dm text-xs text-brand-contrast font-semibold tracking-[0.35em] uppercase mb-4">
        Consulta Nutricional
      </p>
      <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-brand-title leading-tight max-w-lg">
        O Que Está Incluso
        <br />
        <em className="font-light text-brand-cta">no Atendimento</em>
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
