import { useState, useEffect } from 'react'
import { m } from 'framer-motion'

export default function WhatsAppButton() {
  const [nearFooter, setNearFooter] = useState(false)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const footer = document.getElementById('footer')
    if (!footer) return

    const observer = new IntersectionObserver(
      ([entry]) => setNearFooter(entry.isIntersecting),
      { threshold: 0 }
    )

    observer.observe(footer)
    return () => observer.disconnect()
  }, [])

  return (
    <m.a
      href="https://wa.me/5551995449443?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação%20com%20a%20Dra.%20Laura%20Gehlen."
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: nearFooter ? 0 : 1, scale: nearFooter ? 0.85 : 1, y: nearFooter ? 12 : 0 }}
      transition={
        loaded
          ? { duration: 0.3, ease: 'easeInOut' }
          : { duration: 0.5, delay: 1.5, ease: [0.22, 1, 0.36, 1] }
      }
      onAnimationComplete={() => setLoaded(true)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Falar no WhatsApp"
      style={{ pointerEvents: nearFooter ? 'none' : 'auto' }}
      className="hidden md:flex fixed bottom-6 right-6 z-40 w-14 h-14 bg-[#25D366] rounded-full shadow-[0_4px_24px_rgba(37,211,102,0.4)] items-center justify-center hover:bg-[#22c05c] transition-colors duration-300"
    >
      <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>

      {/* Tooltip */}
      <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-brand-contrast text-[#EAEAE5] font-dm text-xs px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none shadow-warm-sm">
        Falar no WhatsApp
      </span>
    </m.a>
  )
}
