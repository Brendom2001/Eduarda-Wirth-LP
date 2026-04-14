import { m } from 'framer-motion'

const easing = [0.22, 1, 0.36, 1]

const benefits = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="18" stroke="#9A856A" strokeWidth="0.75" />
        <path
          d="M20 6C20 6, 30 12, 30 22C30 27.5 25.5 32 20 32C14.5 32 10 27.5 10 22C10 12, 20 6, 20 6Z"
          stroke="#9A856A" strokeWidth="0.75" fill="none"
        />
        <circle cx="20" cy="22" r="3" stroke="#9A856A" strokeWidth="0.75" />
        <line x1="20" y1="19" x2="20" y2="14" stroke="#9A856A" strokeWidth="0.5" />
      </svg>
    ),
    title: 'Cuidado Humano e Personalizado',
    text: 'Cada consulta é única. Ouvimos você com atenção e planejamos o tratamento respeitando o seu ritmo, suas necessidades e a sua história.',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="18" stroke="#9A856A" strokeWidth="0.75" />
        <circle cx="20" cy="20" r="8" stroke="#9A856A" strokeWidth="0.75" />
        <path d="M20 12 L20 8" stroke="#9A856A" strokeWidth="0.75" strokeLinecap="round" />
        <path d="M20 21 L23 20" stroke="#9A856A" strokeWidth="1" strokeLinecap="round" />
        <circle cx="20" cy="20" r="1.5" fill="#9A856A" fillOpacity="0.5" />
      </svg>
    ),
    title: 'Excelência Técnica e Tecnologia',
    text: 'Consultório moderno com tecnologia e materiais de qualidade, garantindo tratamentos precisos, seguros e resultados duradouros.',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="18" stroke="#9A856A" strokeWidth="0.75" />
        <path d="M13 20 Q20 11, 27 20 Q20 29, 13 20Z" stroke="#9A856A" strokeWidth="0.75" fill="none" />
        <line x1="20" y1="13" x2="20" y2="27" stroke="#9A856A" strokeWidth="0.4" strokeDasharray="2 2.5" />
        <circle cx="20" cy="20" r="2" fill="#9A856A" fillOpacity="0.3" />
      </svg>
    ),
    title: 'Experiência Leve e Memorável',
    text: 'Ambiente aconchegante e equipe acolhedora para que cada visita seja uma experiência leve, humana e que você queira repetir.',
  },
]

export default function BenefitsSection() {
  return (
    <section className="bg-brand-section/20 py-20">
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16">

        {/* Heading */}
        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: easing }}
          className="text-center mb-14"
        >
          <p className="font-dm text-xs text-brand-contrast font-semibold tracking-[0.35em] uppercase mb-4">
            Nossa filosofia
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-brand-title leading-tight">
            Cuidado Humano Com
            <br />
            <em className="font-light text-brand-cta">Excelência Técnica</em>
          </h2>
        </m.div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-14">
          {benefits.map((benefit, index) => (
            <m.div
              key={benefit.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, ease: easing, delay: index * 0.12 }}
              className="group text-center"
            >
              {/* Icon */}
              <div className="flex justify-center mb-7">
                <div className="w-20 h-20 rounded-full bg-brand-bg flex items-center justify-center group-hover:bg-brand-detail/20 transition-colors duration-400 shadow-warm-sm">
                  {benefit.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="font-playfair text-xl font-bold text-brand-title mb-4 leading-snug">
                {benefit.title}
              </h3>

              {/* Divider */}
              <div className="w-8 h-px bg-brand-cta/30 mx-auto mb-4 group-hover:w-14 transition-all duration-500" />

              {/* Text */}
              <p className="font-dm text-sm text-brand-body/90 leading-relaxed font-light">
                {benefit.text}
              </p>
            </m.div>
          ))}
        </div>

      </div>
    </section>
  )
}
