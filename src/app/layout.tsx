import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'myBlueprint Career Launch',
  description: 'Partner with Ontario\'s largest virtual career fair. Connect with 50,000+ high school students on December 2, 2025. Explore sponsorship tiers.',
  openGraph: {
    title: 'Virtual Career Fair Sponsorship Opportunities',
    description: 'Connect with 50,000+ students through our virtual career fair sponsorship packages.',
    images: ['/images/og-image.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Virtual Career Fair Sponsorship Opportunities',
    description: 'Connect with 50,000+ students through our virtual career fair sponsorship packages.',
    images: ['/images/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
