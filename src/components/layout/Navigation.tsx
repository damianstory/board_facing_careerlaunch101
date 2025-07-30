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
          'fixed top-0 left-0 right-0 z-50 hidden tablet:block bg-white/95 backdrop-blur-md transition-shadow duration-standard',
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
                src="https://i.imgur.com/DBm75jp.png"
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
                      : 'text-functional-neutral hover:text-primary-blue'
                  )}
                >
                  {link.label}
                </a>
              ))}
              
              <Button
                variant="primary"
                size="default"
                className="ml-4"
                onClick={() => {
                  const element = document.getElementById('tiers')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }
                }}
              >
                Book Consultation
              </Button>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Mobile Navigation */}
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 tablet:hidden bg-background-white transition-shadow duration-standard',
          isScrolled && 'shadow-[0_2px_8px_rgba(0,0,0,0.06)]'
        )}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Brand */}
            <a
              href="#hero"
              onClick={(e) => scrollToSection(e, '#hero')}
              className="flex items-center"
            >
              <Image
                src="https://i.imgur.com/DBm75jp.png"
                alt="VCF Sponsors"
                width={100}
                height={32}
                className="h-8 w-auto"
                priority
              />
            </a>
            
            {/* Hamburger Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-7 h-7 flex flex-col items-center justify-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue focus-visible:ring-offset-2 rounded"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span
                className={cn(
                  'w-6 h-0.5 bg-functional-dark transition-all duration-standard ease-spring',
                  isMobileMenuOpen && 'rotate-45 translate-y-2'
                )}
              />
              <span
                className={cn(
                  'w-6 h-0.5 bg-functional-dark transition-all duration-standard ease-spring',
                  isMobileMenuOpen && 'opacity-0'
                )}
              />
              <span
                className={cn(
                  'w-6 h-0.5 bg-functional-dark transition-all duration-standard ease-spring',
                  isMobileMenuOpen && '-rotate-45 -translate-y-2'
                )}
              />
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div
          className={cn(
            'fixed top-16 left-0 right-0 bottom-0 bg-background-white transform transition-transform duration-standard ease-spring',
            isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full pointer-events-none'
          )}
        >
          <div className="container py-8">
            <div className="flex flex-col gap-6">
              {navigationLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={cn(
                    'py-3 text-body-large font-medium transition-colors duration-fast',
                    activeSection === link.id
                      ? 'text-primary-blue'
                      : 'text-functional-dark'
                  )}
                >
                  {link.label}
                </a>
              ))}
              
              <Button
                variant="primary"
                size="mobile"
                className="mt-4 w-full"
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
                Book Consultation
              </Button>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Spacer for fixed navigation */}
      <div className="h-16 tablet:h-20" />
    </>
  )
}