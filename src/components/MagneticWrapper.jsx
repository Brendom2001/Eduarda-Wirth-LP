import { useRef, useCallback } from 'react'
import { m, useMotionValue, useSpring } from 'framer-motion'

const springConfig = { stiffness: 160, damping: 14, mass: 0.1 }

/**
 * Wraps any child with a subtle magnetic pull toward the cursor.
 * Uses mouse events — no-op on touch devices.
 * @param {string} className  — layout classes applied to the wrapper div
 * @param {number} strength   — how many px the element moves per px of cursor offset (default 0.32)
 */
export default function MagneticWrapper({ children, className = '', strength = 0.32 }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, springConfig)
  const sy = useSpring(y, springConfig)

  const handleMouseMove = useCallback((e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    x.set((e.clientX - cx) * strength)
    y.set((e.clientY - cy) * strength)
  }, [x, y, strength])

  const handleMouseLeave = useCallback(() => {
    x.set(0)
    y.set(0)
  }, [x, y])

  return (
    <m.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: sx, y: sy }}
      className={className}
    >
      {children}
    </m.div>
  )
}
