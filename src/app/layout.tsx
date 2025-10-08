import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'myBlueprint Career Launch Sponsorship Opportunities',
  description: 'Engage with thousands of Ontario high school students at this virtual career fair.',
  openGraph: {
    title: 'Attend Ontario\'s Largest Student Career Fair',
    description: 'Ontario employers supporting Ontario students. Join us at the 2025 myBlueprint Career Launch.',
    images: ['/images/og-image.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Attend Ontario\'s Largest Student Career Fair',
    description: 'Ontario employers supporting Ontario students. Join us at the 2025 myBlueprint Career Launch.',
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
