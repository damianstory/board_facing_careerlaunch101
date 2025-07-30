import { Navigation } from '@/components/layout/Navigation'
import { Hero } from '@/components/sections/Hero'
import { LogoCarousel } from '@/components/animations/LogoCarousel'
import { About } from '@/components/sections/About'
import { Tiers } from '@/components/sections/Tiers'
import { FAQ } from '@/components/sections/FAQ'

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <Hero />
        
        {/* Logo Carousel - Positioned just below hero */}
        <section className="py-6 bg-white border-t border-gray-100">
          <div className="container">
            <div className="text-center">
              <LogoCarousel />
              <p className="text-body font-semibold text-functional-dark mt-6">
                You're in good company.
              </p>
            </div>
          </div>
        </section>
        
        <About />
        
        <Tiers />
        
        <FAQ />
      </main>
    </>
  )
}