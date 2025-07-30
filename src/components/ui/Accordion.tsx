'use client'

import React, { useState } from 'react'
import { cn } from '@/lib/utils'

interface AccordionItemProps {
  question: string
  answer: string
  isOpen?: boolean
  onToggle?: () => void
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  question,
  answer,
  isOpen = false,
  onToggle,
}) => {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full py-5 px-6 flex items-center justify-between text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue focus-visible:ring-offset-2 rounded-lg"
        aria-expanded={isOpen}
      >
        <span className="text-body tablet:text-body-large font-medium text-black pr-4">
          {question}
        </span>
        <svg
          className={cn(
            'w-5 h-5 text-functional-neutral flex-shrink-0 transition-transform duration-standard ease-spring',
            isOpen && 'rotate-180'
          )}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={cn(
          'overflow-hidden transition-all duration-standard ease-spring',
          isOpen ? 'max-h-96' : 'max-h-0'
        )}
      >
        <div className="px-6 pb-5 pr-12 text-body text-black">
          {answer}
        </div>
      </div>
    </div>
  )
}

interface AccordionProps {
  items: Array<{
    id: string
    question: string
    answer: string
  }>
  allowMultiple?: boolean
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = true,
}) => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set())
  
  const handleToggle = (id: string) => {
    setOpenItems(prev => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        if (!allowMultiple) {
          newSet.clear()
        }
        newSet.add(id)
      }
      return newSet
    })
  }
  
  return (
    <div className="divide-y divide-gray-200">
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          question={item.question}
          answer={item.answer}
          isOpen={openItems.has(item.id)}
          onToggle={() => handleToggle(item.id)}
        />
      ))}
    </div>
  )
}