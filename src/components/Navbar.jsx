import { useState, useEffect } from 'react'
import { m, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Tratamentos', href: '#procedimentos' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Sobre', href: '#sobre' },
  ]

  return (
    <m.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#EAEAE5]/96 backdrop-blur-sm shadow-[0_1px_0_rgba(154,133,106,0.15)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16 py-4 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="group flex flex-col leading-none">
          <span className="font-playfair text-lg font-semibold text-brand-title tracking-wide group-hover:text-brand-cta transition-colors duration-300">
            Eduarda Wirth
          </span>
          <span className="font-dm text-[9px] tracking-[0.28em] uppercase text-brand-contrast mt-0.5">
            Nutricionista · CRN 21631D
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="font-dm text-sm text-brand-body/90 hover:text-brand-cta transition-colors duration-300 tracking-wide"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="https://wa.me/5551995484860?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Eduarda%20Wirth." target="_blank" rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-brand-cta text-[#EAEAE5] font-dm text-sm font-medium tracking-wide px-6 py-3 rounded-full hover:bg-brand-contrast transition-all duration-300 hover:shadow-warm-md min-h-[44px]"
        >
          Agendar Consulta
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          className="md:hidden w-11 h-11 flex flex-col items-center justify-center gap-1.5 -mr-1"
        >
          <span
            className={`block w-5 h-px bg-brand-contrast transition-all duration-300 origin-center ${
              menuOpen ? 'rotate-45 translate-y-[3px]' : ''
            }`}
          />
          <span
            className={`block w-5 h-px bg-brand-contrast transition-all duration-300 ${
              menuOpen ? 'opacity-0 scale-x-0' : ''
            }`}
          />
          <span
            className={`block w-5 h-px bg-brand-contrast transition-all duration-300 origin-center ${
              menuOpen ? '-rotate-45 -translate-y-[3px]' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <m.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden bg-[#EAEAE5]/98 backdrop-blur-sm border-t border-brand-detail/15"
          >
            <nav className="max-w-7xl mx-auto px-5 py-6 flex flex-col gap-1">
              {navLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="font-dm text-base text-brand-body/90 hover:text-brand-cta transition-colors py-2.5 border-b border-brand-detail/10 last:border-0"
                >
                  {label}
                </a>
              ))}
              <a
                href="https://wa.me/5551995484860?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Eduarda%20Wirth." target="_blank" rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="mt-4 flex items-center justify-center bg-brand-cta text-[#EAEAE5] font-dm font-medium text-sm rounded-full py-3.5 min-h-[44px] hover:bg-brand-contrast transition-colors duration-300"
              >
                Agendar Consulta
              </a>
            </nav>
          </m.div>
        )}
      </AnimatePresence>
    </m.header>
  )
}
