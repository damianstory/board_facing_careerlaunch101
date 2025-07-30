import { Navigation } from '@/components/layout/Navigation'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Tiers } from '@/components/sections/Tiers'
import { FAQ } from '@/components/sections/FAQ'

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <Hero />
        
        <About />
        
        <Tiers />
        
        <FAQ />
      </main>
    </>
  )
}