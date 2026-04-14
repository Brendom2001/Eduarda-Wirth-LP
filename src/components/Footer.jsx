import { m } from 'framer-motion'
import { useAnimateOnce } from '../hooks/useAnimateOnce'

export default function Footer() {
  const [col1Ref, col1Visible] = useAnimateOnce()
  const [col2Ref, col2Visible] = useAnimateOnce()
  const [col3Ref, col3Visible] = useAnimateOnce()

  return (
    <footer id="footer" className="bg-brand-contrast text-white">
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16">

        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-10 items-start">

          <m.div
            ref={col1Ref}
            initial={{ opacity: 0 }}
            animate={col1Visible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="font-playfair mb-1">
              <span className="text-[#EAEAE5] text-xl font-semibold tracking-wide">Dra. Laura Gehlen</span>
            </div>
            <p className="font-dm text-[9px] tracking-[0.28em] uppercase text-brand-light/90 mb-4">
              Odontologia Integrada
            </p>
            <p className="font-dm text-xs text-brand-light/90 leading-relaxed max-w-[200px] font-light">
              Cuidado humano, excelência técnica e um sorriso que transforma.
            </p>
          </m.div>

          <m.div
            ref={col2Ref}
            initial={{ opacity: 0 }}
            animate={col2Visible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:text-center"
          >
            <p className="font-dm text-xs text-brand-light/90 font-semibold tracking-[0.25em] uppercase mb-3">
              Localização
            </p>
            <p className="font-dm text-sm text-brand-light/90 leading-relaxed">
              R. Pres. Kenedy, 281, sala 311<br />
              Centro · Sapiranga — RS<br />
              CEP 93800-140
            </p>
            <p className="font-dm text-sm text-brand-light/90 mt-2">
              (51) 99544-9443
            </p>
            <a
              href="https://wa.me/5551995449443?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação%20com%20a%20Dra.%20Laura%20Gehlen."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 bg-[#25D366] text-white font-dm text-xs font-medium px-5 py-2.5 rounded-full hover:bg-[#22c05c] transition-colors duration-300 min-h-[40px]"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Falar no WhatsApp
            </a>
          </m.div>

          <m.nav
            ref={col3Ref}
            initial={{ opacity: 0 }}
            animate={col3Visible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:text-right"
          >
            <p className="font-dm text-xs text-brand-light/90 font-semibold tracking-[0.25em] uppercase mb-3">
              Menu
            </p>
            <div className="flex flex-col gap-2.5">
              {[
                { label: 'Tratamentos', href: '#procedimentos' },
                { label: 'Depoimentos', href: '#depoimentos' },
                { label: 'Sobre', href: '#sobre' },
                { label: 'Agendar Consulta', href: '#agendamento' },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="font-dm text-xs text-brand-light/90 hover:text-white transition-colors duration-300 tracking-wide"
                >
                  {label}
                </a>
              ))}
            </div>
          </m.nav>
        </div>

        <div className="border-t border-brand-cta/20 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-dm text-xs text-brand-light/70 text-center md:text-left">
            © 2025 Dra. Laura Gehlen · Odontologia Integrada · Sapiranga, RS · Todos os direitos reservados.
          </p>
          <p className="font-dm text-xs text-brand-light/70 text-center md:text-right max-w-xs">
            Este site tem finalidade informativa. Consulte sempre um profissional habilitado.
          </p>
        </div>

      </div>
    </footer>
  )
}
