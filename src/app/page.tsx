import { Navigation } from '@/components/layout/Navigation'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Tiers } from '@/components/sections/Tiers'

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <Hero />
        
        <About />
        
        <Tiers />
        
        <section id="faq" className="py-16 tablet:py-20 bg-background-light">
          <div className="container">
            <h2 className="text-h2-mobile tablet:text-h2 text-center mb-8">Frequently Asked Questions</h2>
            <p className="text-body-large text-center max-w-3xl mx-auto">
              FAQ accordion with search functionality coming soon.
            </p>
          </div>
        </section>
      </main>
    </>
  )
}