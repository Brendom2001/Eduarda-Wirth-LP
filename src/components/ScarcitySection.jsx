import { m } from 'framer-motion'
import { useAnimateOnce } from '../hooks/useAnimateOnce'

export default function ScarcitySection() {
  const [ref, visible] = useAnimateOnce()

  return (
    <section className="bg-brand-contrast py-5 text-white">
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16">
        <m.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={visible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 text-center"
        >
          <div className="relative flex-shrink-0">
            <div className="w-2 h-2 rounded-full bg-brand-section" />
            <div className="absolute inset-0 w-2 h-2 rounded-full bg-brand-section animate-ping opacity-50" />
          </div>
          <p className="font-dm text-sm text-[#EAEAE5]">
            <span className="font-semibold">Vagas limitadas</span>{' '}
            <span className="text-brand-light/90">para novas consultas este mês.</span>
          </p>
        </m.div>
      </div>
    </section>
  )
}
