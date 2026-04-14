import { useRef, useState, useEffect } from 'react'

/**
 * Dispara a animação uma única vez quando o elemento entra no viewport.
 * Usa IntersectionObserver nativo e desconecta imediatamente após o primeiro
 * disparo — imune a resize de viewport, barra de endereços mobile e re-renders.
 */
export function useAnimateOnce() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Se o elemento já está visível ao montar (tela grande / LazySection tardio)
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect() // Para imediatamente — nunca re-dispara
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -20px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, []) // Roda apenas uma vez ao montar

  return [ref, visible]
}
