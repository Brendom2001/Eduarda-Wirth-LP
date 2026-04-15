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

// Componentes só montam quando estão próximos do viewport
// rootMargin: '2000px' garante pré-renderização antecipada para rolagem rápida
function LazySection({ children, minHeight = '200px', id }) {
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
      { rootMargin: '2000px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} id={id}>
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
          <LazySection minHeight="600px" id="procedimentos">
            <ProceduresSection />
          </LazySection>
          <LazySection minHeight="420px">
            <AuthoritySection />
          </LazySection>
          <LazySection minHeight="400px">
            <BenefitsSection />
          </LazySection>
          <LazySection minHeight="420px" id="depoimentos">
            <TestimonialsSection />
          </LazySection>
          <LazySection minHeight="380px" id="agendamento">
            <OfferSection />
          </LazySection>
          <LazySection minHeight="64px">
            <ScarcitySection />
          </LazySection>
          <LazySection minHeight="520px" id="sobre">
            <AboutSection />
          </LazySection>
          <LazySection minHeight="400px">
            <FinalCTA />
          </LazySection>
        </main>
        <LazySection minHeight="220px" id="footer">
          <Footer />
        </LazySection>
        <WhatsAppButton />
        <MobileCtaBar />
      </div>
    </LazyMotion>
  )
}
