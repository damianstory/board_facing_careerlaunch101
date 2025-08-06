import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'myBlueprint Career Launch Sponsorship Opportunities',
  description: 'Engage with thousands of Ontario high school students at this virtual career fair.',
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
