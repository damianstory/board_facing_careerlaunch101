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
  const [openItems, setOpenItems] = useState<Set<string>>(new Set())

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

  // Group FAQs by category
  const groupedFAQs = useMemo(() => {
    const groups: Record<string, typeof faqs> = {
      'event-details': [],
      'sponsorship-process': []
    }

    filteredFAQs.forEach(faq => {
      const category = faq.category || 'event-details'
      if (groups[category]) {
        groups[category].push(faq)
      }
    })

    return Object.entries(groups).filter(([_, items]) => items.length > 0)
  }, [filteredFAQs])

  // Category labels
  const categoryLabels: Record<string, string> = {
    'event-details': 'Event Details',
    'sponsorship-process': 'Sponsorship Process'
  }

  const handleClearSearch = useCallback(() => {
    setSearchQuery('')
    const input = document.querySelector<HTMLInputElement>('#faq-search')
    if (input) input.focus()
  }, [])

  const handleToggle = useCallback((id: string) => {
    setOpenItems(prev => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
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
      <div className="container">

        {/* Search bar */}
        <div className="max-w-2xl mx-auto mb-8 md:mb-12">
          <div className="relative">
            <Search 
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" 
              aria-hidden="true"
            />
            <input
              id="faq-search"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search frequently asked questions..."
              className={cn(
                "w-full pl-12 pr-12 py-4 rounded-lg border border-gray-200",
                "bg-background-white text-black placeholder:text-gray-500",
                "focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-primary-blue",
                "transition-all duration-200",
                "text-base" // Prevents zoom on mobile
              )}
              aria-label="Search FAQs"
            />
            {searchQuery && (
              <button
                onClick={handleClearSearch}
                className={cn(
                  "absolute right-4 top-1/2 -translate-y-1/2",
                  "p-1 rounded hover:bg-background-light",
                  "transition-colors duration-150",
                  "focus:outline-none focus:ring-2 focus:ring-primary-blue"
                )}
                aria-label="Clear search"
              >
                <X className="w-4 h-4 text-gray-500" />
              </button>
            )}
          </div>
          
          {/* Search results count */}
          {searchDebounce && (
            <p className="mt-3 text-sm text-gray-700 text-center">
              {filteredFAQs.length === 0 ? (
                'No results found. Try different keywords or browse all questions below.'
              ) : (
                `Found ${filteredFAQs.length} result${filteredFAQs.length !== 1 ? 's' : ''}`
              )}
            </p>
          )}
        </div>

        {/* FAQ Categories */}
        <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
          {groupedFAQs.map(([category, items], categoryIndex) => (
            <div key={category} className="space-y-4 md:space-y-6">
              <h3 className="h3-mobile md:h3 text-black">
                {categoryLabels[category]} ({items.length})
              </h3>
              
              <div className="space-y-3 md:space-y-4">
                {items.map((faq, index) => (
                  <div
                    key={faq.id}
                    id={`faq-${faq.id}`}
                    className="faq-item"
                  >
                    <div className="bg-background-white border border-gray-200 hover:border-gray-300 transition-colors duration-200 rounded-lg">
                      <AccordionItem
                        question={faq.question}
                        answer={faq.answer}
                        isOpen={openItems.has(faq.id)}
                        onToggle={() => handleToggle(faq.id)}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* No results state */}
        {filteredFAQs.length === 0 && (
          <div className="text-center py-12">
            <p className="body-large text-gray-700 mb-4">
              No questions found matching "{searchDebounce}"
            </p>
            <p className="body text-gray-500 mb-6">
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
            <h3 className="h3-mobile md:h3 text-black mb-4">
              Still have questions?
            </h3>
            <p className="body md:body-large text-gray-700 mb-6 md:mb-8">
              Book a consultation to speak with our partnership team
            </p>
            <a
              href="#contact"
              className={cn(
                "inline-flex items-center justify-center",
                "px-8 py-4 rounded-lg",
                "bg-primary-blue text-white font-medium",
                "hover:bg-primary-blue-dark transition-all duration-200",
                "focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2",
                "transform hover:scale-105"
              )}
            >
              Book a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}