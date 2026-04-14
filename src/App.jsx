import { lazy, Suspense, useRef, useEffect, useState } from 'react'
import { LazyMotion, domAnimation } from 'framer-motion'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import WhatsAppButton from './components/WhatsAppButton'
import MobileCtaBar from './components/MobileCtaBar'

const ProceduresSection = lazy(() => import('./components/ProceduresSection'))
const AuthoritySection = lazy(() => import('./components/AuthoritySection'))
const BenefitsSection = lazy(() => import('./components/BenefitsSection'))
const TestimonialsSection = lazy(() => import('./components/TestimonialsSection'))
const OfferSection = lazy(() => import('./components/OfferSection'))
const ScarcitySection = lazy(() => import('./components/ScarcitySection'))
const AboutSection = lazy(() => import('./components/AboutSection'))
const FinalCTA = lazy(() => import('./components/FinalCTA'))
const Footer = lazy(() => import('./components/Footer'))

// Componentes só montam quando estão próximos do viewport (400px de margem)
function LazySection({ children, minHeight = '200px' }) {
  const ref = useRef(null)
  const [shouldRender, setShouldRender] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true)
          observer.disconnect()
        }
      },
      { rootMargin: '900px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref}>
      {shouldRender ? (
        <Suspense fallback={<div style={{ minHeight }} />}>
          {children}
        </Suspense>
      ) : (
        <div style={{ minHeight }} aria-hidden="true" />
      )}
    </div>
  )
}

export default function App() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="font-dm bg-brand-bg overflow-x-hidden">
        <Navbar />
        <main className="pb-20 md:pb-0">
          <HeroSection />
          <LazySection minHeight="600px">
            <ProceduresSection />
          </LazySection>
          <LazySection minHeight="420px">
            <AuthoritySection />
          </LazySection>
          <LazySection minHeight="400px">
            <BenefitsSection />
          </LazySection>
          <LazySection minHeight="420px">
            <TestimonialsSection />
          </LazySection>
          <LazySection minHeight="380px">
            <OfferSection />
          </LazySection>
          <LazySection minHeight="64px">
            <ScarcitySection />
          </LazySection>
          <LazySection minHeight="520px">
            <AboutSection />
          </LazySection>
          <LazySection minHeight="400px">
            <FinalCTA />
          </LazySection>
        </main>
        <LazySection minHeight="220px">
          <Footer />
        </LazySection>
        <WhatsAppButton />
        <MobileCtaBar />
      </div>
    </LazyMotion>
  )
}
