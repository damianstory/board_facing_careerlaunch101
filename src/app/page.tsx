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
        <section className="py-12 bg-white border-t border-gray-100">
          <div className="container">
            <div className="text-center">
              <p className="text-body-small text-functional-neutral mb-6">
                Join leading companies already partnering with us
              </p>
              <LogoCarousel />
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