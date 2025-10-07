'use client'

import React, { useState, useMemo, useCallback, useEffect } from 'react'
import { Search, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { AccordionItem } from '@/components/ui/Accordion'
import { faqs } from '@/data/faq'

interface FAQProps extends React.HTMLAttributes<HTMLElement> {}

export const FAQ: React.FC<FAQProps> = ({ className, ...props }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchDebounce, setSearchDebounce] = useState('')
  const [openItem, setOpenItem] = useState<string | null>(null)
  const [hasMounted, setHasMounted] = useState(false)

  // Ensure hydration consistency
  useEffect(() => {
    setHasMounted(true)
  }, [])

  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchDebounce(searchQuery)
    }, 250)

    return () => clearTimeout(timer)
  }, [searchQuery])

  // Filter FAQs based on search
  const filteredFAQs = useMemo(() => {
    if (!searchDebounce.trim()) return faqs

    const query = searchDebounce.toLowerCase()
    return faqs.filter(faq => {
      const searchableText = [
        faq.question,
        faq.answer,
        ...(faq.keywords || [])
      ].join(' ').toLowerCase()
      
      return searchableText.includes(query)
    })
  }, [searchDebounce])


  const handleClearSearch = useCallback(() => {
    setSearchQuery('')
    const input = document.querySelector<HTMLInputElement>('#faq-search')
    if (input) input.focus()
  }, [])

  const handleToggle = useCallback((id: string) => {
    setOpenItem(prev => prev === id ? null : id)
  }, [])


  return (
    <section
      id="faq"
      className={cn(
        'py-16 md:py-24 bg-background-light',
        className
      )}
      {...props}
    >
      <div className="container" suppressHydrationWarning>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4 md:space-y-6">
            <h3 className="text-h3-mobile md:text-h3 text-brand-navy text-center mb-8 md:mb-12">
              Frequently Asked Questions
            </h3>
            
            <div className="space-y-3 md:space-y-4">
              {filteredFAQs.map((faq) => (
                <div
                  key={faq.id}
                  id={`faq-${faq.id}`}
                  className="faq-item"
                >
                  <div className="bg-white border border-gray-200 hover:border-gray-300 transition-colors duration-200 rounded-lg">
                    <AccordionItem
                      question={faq.question}
                      answer={faq.answer}
                      isOpen={hasMounted && openItem === faq.id}
                      onToggle={() => handleToggle(faq.id)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* No results state */}
        {hasMounted && filteredFAQs.length === 0 && searchDebounce && (
          <div className="text-center py-12">
            <p className="text-body-large text-neutral-4 mb-4">
              No questions found matching "{searchDebounce}"
            </p>
            <p className="text-body text-neutral-3 mb-6">
              Try searching for: sponsorship, students, payment, or booking
            </p>
            <button
              onClick={handleClearSearch}
              className={cn(
                "inline-flex items-center gap-2 px-6 py-3",
                "bg-primary-blue text-white rounded-lg",
                "hover:bg-primary-blue-dark transition-colors duration-200",
                "focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2"
              )}
            >
              Clear search
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 md:mt-20 text-center">
          <div className="bg-primary-blue/5 rounded-2xl p-8 md:p-12 max-w-3xl mx-auto">
            <h3 className="text-h3-mobile md:text-h3 text-brand-navy mb-4">
              Ready to book your spot?
            </h3>
            <p className="text-body md:text-body-large text-neutral-4 mb-6 md:mb-8">
              Book a time to speak with our partnership team.
            </p>
            <a
              href="https://tidycal.com/damianmatheson/career-launch"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center justify-center",
                "px-8 py-4 rounded-lg",
                "bg-primary-blue text-white font-medium",
                "hover:bg-primary-blue-dark transition-all duration-200",
                "focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2",
                "transform hover:scale-105"
              )}
            >
              Talk To Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}