import type { Metadata } from 'next'
import ServicesPageClient from './ServicesPageClient'

export const metadata: Metadata = {
  title: 'Construction Services in Bangalore | Free Quote',
  description: 'Residential & commercial construction, interior design, renovation in Bangalore. 5.0 rated, 10+ years experience. Call +91 99459 49949 for a free consultation.',
  alternates: { canonical: 'https://shobhaventures.com/services' },
  openGraph: {
    title: 'Construction & Design Services | Shobha Ventures Bangalore',
    description: 'Trusted construction company in Bangalore. Get a free quote today.',
    url: 'https://shobhaventures.com/services',
  },
}

export default function ServicesPage() {
  return <ServicesPageClient />
}