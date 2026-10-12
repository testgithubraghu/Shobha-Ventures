import type { Metadata } from 'next'
import AboutPageClient from './AboutPageClient'

export const metadata: Metadata = {
  title: 'About Us | Shobha Ventures - Design & Construction Bangalore',
  description: 'Founded in 2016 by civil engineer Manoj.N, Shobha Ventures is a trusted design and construction company in Bangalore with a 5.0 Google rating and projects across the city.',
  alternates: { canonical: 'https://shobhaventures.com/about' },
  openGraph: {
    title: 'About Shobha Ventures - Design & Construction Bangalore',
    description: 'Founded in 2016, Shobha Ventures has grown into one of Bangalore\u2019s most trusted design and construction companies.',
    url: 'https://shobhaventures.com/about',
  },
}

export default function AboutPage() {
  return <AboutPageClient />
}