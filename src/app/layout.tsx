// src/app/layout.tsx
import type { Metadata, Viewport } from 'next'
// Suppress TS error for side-effect CSS import when no type declarations are present
// @ts-ignore
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import LoadingScreen from '@/components/LoadingScreen'
import StructuredData from '@/components/StructuredData'
import GoogleAnalytics from '@/components/GoogleAnalytics'

export const metadata: Metadata = {
  metadataBase: new URL('https://shobhaventures.com'),
  title: {
    default: 'Shobha Ventures - Design & Constructions | Bangalore',
    template: '%s | Shobha Ventures',
  },
  description: 'Shobha Ventures - Premier Design & Construction company in Bangalore. Building dreams with excellence since inception. Residential, Commercial, Interior Design & Renovation services.',
  keywords: 'construction company bangalore, civil engineer bangalore, home construction, interior design, renovation, Shobha Ventures',
  authors: [{ name: 'Shobha Ventures' }],
  creator: 'Shobha Ventures',
  publisher: 'Shobha Ventures',
  category: 'Construction & Real Estate',

  alternates: {
    canonical: 'https://shobhaventures.com',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  openGraph: {
    title: 'Shobha Ventures - Design & Constructions',
    description: 'Premier Design & Construction company in Bangalore',
    url: 'https://shobhaventures.com',
    siteName: 'Shobha Ventures',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Shobha Ventures - Design & Construction Bangalore',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Shobha Ventures - Design & Constructions',
    description: 'Premier Design & Construction company in Bangalore',
    images: ['/og-image.jpg'],
  },

  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/android-chrome-192x192.png', type: 'image/png', sizes: '192x192' },
      { url: '/android-chrome-512x512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',

  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },

verification: {
  google: '29BbBkB3f8oQW3-G9N5blFVW7TB18uLTG5Tg5uJkzcg',
},
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a0a0a', // match your dark-900 brand color
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
     <body className="font-body antialiased">
  <GoogleAnalytics />
  <StructuredData />
  <LoadingScreen />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}