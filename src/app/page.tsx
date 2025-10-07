import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { LogoCarousel } from '@/components/animations/LogoCarousel'
import { About } from '@/components/sections/About'
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
                Students from these boards will be attending. Yours should too.
              </p>
            </div>
          </div>
        </section>
        
        <About />

        <FAQ />
      </main>
      <Footer />
    </>
  )
}