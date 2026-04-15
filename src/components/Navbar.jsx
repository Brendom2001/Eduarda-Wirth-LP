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
    { label: 'Serviços', href: '#procedimentos' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Sobre', href: '#sobre' },
  ]

  return (
    <m.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#EAEAE5]/95 backdrop-blur-md border-b border-brand-detail/20 shadow-[0_2px_32px_rgba(120,97,74,0.08)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16 py-5 md:py-6 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="group flex flex-col leading-none gap-1">
          <span className="font-playfair text-xl font-semibold text-brand-title tracking-wide group-hover:text-brand-cta transition-colors duration-400">
            Eduarda Wirth
          </span>
          <span className="font-dm text-[8.5px] tracking-[0.32em] uppercase text-brand-contrast/80">
            Nutricionista · CRN 21631D
          </span>
        </a>

        {/* Separator desktop */}
        <div className="hidden lg:block w-px h-8 bg-brand-detail/30 mx-2" />

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-9">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="relative font-dm text-sm text-brand-body/80 hover:text-brand-cta transition-colors duration-300 tracking-wide py-1 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-brand-cta after:transition-[width] after:duration-400 hover:after:w-full"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="https://wa.me/5551995484860?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Eduarda%20Wirth."
          target="_blank"
          rel="noopener noreferrer"
          className={`hidden md:inline-flex items-center gap-2.5 font-dm text-sm font-medium tracking-wide px-6 py-2.5 rounded-full transition-all duration-500 min-h-[44px] ${
            scrolled
              ? 'bg-brand-cta text-[#EAEAE5] hover:bg-brand-contrast hover:shadow-warm-md'
              : 'border border-brand-cta/50 text-brand-cta hover:bg-brand-cta hover:text-[#EAEAE5] hover:border-brand-cta'
          }`}
        >
          <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
          </svg>
          Agendar Consulta
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          className="md:hidden w-11 h-11 flex flex-col items-center justify-center gap-[5px] -mr-1"
        >
          <span
            className={`block w-[22px] h-px bg-brand-contrast transition-all duration-300 origin-center ${
              menuOpen ? 'rotate-45 translate-y-[3px]' : ''
            }`}
          />
          <span
            className={`block h-px bg-brand-contrast transition-all duration-300 ${
              menuOpen ? 'opacity-0 w-0' : 'w-[14px] self-end'
            }`}
          />
          <span
            className={`block w-[22px] h-px bg-brand-contrast transition-all duration-300 origin-center ${
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
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden bg-[#EAEAE5]/98 backdrop-blur-md border-t border-brand-detail/15"
          >
            <div className="max-w-7xl mx-auto px-5 pt-5 pb-7 flex flex-col">

              {/* Mobile menu header */}
              <div className="flex items-center gap-3 mb-6 pb-5 border-b border-brand-detail/15">
                <div className="w-8 h-8 rounded-full bg-brand-cta/12 flex items-center justify-center flex-shrink-0">
                  <span className="font-playfair text-sm text-brand-cta font-semibold">E</span>
                </div>
                <div>
                  <p className="font-playfair text-sm font-semibold text-brand-title leading-tight">Eduarda Wirth</p>
                  <p className="font-dm text-[9px] tracking-[0.25em] uppercase text-brand-contrast/70 mt-0.5">Nutricionista · CRN 21631D</p>
                </div>
              </div>

              {/* Nav links */}
              <nav className="flex flex-col gap-0.5 mb-6">
                {navLinks.map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className="group flex items-center justify-between font-dm text-base text-brand-body/90 hover:text-brand-cta transition-colors py-3 border-b border-brand-detail/10 last:border-0"
                  >
                    <span>{label}</span>
                    <svg className="w-3.5 h-3.5 text-brand-detail group-hover:text-brand-cta group-hover:translate-x-0.5 transition-all duration-300" fill="none" viewBox="0 0 16 16">
                      <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                ))}
              </nav>

              {/* Mobile CTA */}
              <a
                href="https://wa.me/5551995484860?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Eduarda%20Wirth."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2.5 bg-brand-cta text-[#EAEAE5] font-dm font-medium text-sm rounded-full py-3.5 min-h-[52px] hover:bg-brand-contrast transition-colors duration-300"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
                Agendar Consulta
              </a>

            </div>
          </m.div>
        )}
      </AnimatePresence>
    </m.header>
  )
}
