'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'

const navigationLinks = [
  { id: 'hero', label: 'Home', href: '#hero' },
  { id: 'about', label: 'About Event', href: '#about' },
  { id: 'tiers', label: 'Sponsorship Tiers', href: '#tiers' },
  { id: 'faq', label: 'FAQ', href: '#faq' },
]

export const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  
  // Handle scroll for sticky nav shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  // Track active section with Intersection Observer
  useEffect(() => {
    const sections = navigationLinks.map(link => document.getElementById(link.id)).filter(Boolean)
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0,
      }
    )
    
    sections.forEach((section) => {
      if (section) observer.observe(section)
    })
    
    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section)
      })
    }
  }, [])
  
  // Smooth scroll with offset for sticky nav
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    
    if (element) {
      const navHeight = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - navHeight
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
    
    setIsMobileMenuOpen(false)
  }
  
  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])
  
  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 hidden nav-break:block bg-white/95 backdrop-blur-md transition-shadow duration-standard',
          isScrolled && 'shadow-[0_2px_8px_rgba(0,0,0,0.06)]'
        )}
      >
        <div className="container">
          <div className="flex items-center justify-between h-20">
            {/* Logo/Brand */}
            <a
              href="#hero"
              onClick={(e) => scrollToSection(e, '#hero')}
              className="flex items-center"
            >
              <Image
                src="/images/logo.png"
                alt="VCF Sponsors"
                width={120}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </a>
            
            {/* Navigation Links */}
            <div className="flex items-center gap-8">
              {navigationLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={cn(
                    'flex items-center h-full text-body font-medium transition-colors duration-fast',
                    activeSection === link.id
                      ? 'text-primary-blue'
                      : 'text-brand-navy hover:text-primary-blue'
                  )}
                >
                  {link.label}
                </a>
              ))}
              
              <Button
                variant="primary"
                size="default"
                className="ml-4 text-white"
                onClick={() => {
                  const element = document.getElementById('tiers')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }
                }}
              >
                Talk To Us
              </Button>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Mobile Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 block nav-break:hidden bg-white shadow-sm">
        <div className="container relative">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => scrollToSection(e, '#hero')}
              className="flex items-center"
            >
              <Image
                src="/images/logo.png"
                alt="VCF Sponsors"
                width={100}
                height={32}
                className="h-8 w-auto"
                priority
              />
            </a>
            
            {/* Simple Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-10 h-10 flex flex-col items-center justify-center space-y-1"
              aria-label="Toggle menu"
            >
              <div className={`w-6 h-0.5 bg-brand-navy transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-brand-navy transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-brand-navy transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="bg-white border-t">
            <div className="container py-4">
              <div className="flex flex-col space-y-4">
                {navigationLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="py-2 text-lg text-brand-navy hover:text-primary-blue"
                  >
                    {link.label}
                  </a>
                ))}
                <button 
                  className="mt-4 w-full bg-blue-600 text-white py-3 px-6 rounded-lg"
                  onClick={() => {
                    setIsMobileMenuOpen(false)
                    const element = document.getElementById('tiers')
                    if (element) {
                      setTimeout(() => {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                      }, 300)
                    }
                  }}
                >
                  Talk To Us
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
      
      {/* Spacer for fixed navigation */}
      <div className="h-16 nav-break:h-20" />
    </>
  )
}