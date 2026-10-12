import type { Metadata } from 'next'
import ContactPageClient from './ContactPageClient'

export const metadata: Metadata = {
  title: 'Contact Shobha Ventures | Free Consultation Bangalore',
  description: 'Get a free construction consultation in Bangalore. Call +91 99459 49949 or WhatsApp us. Serving Annapurneshwari Nagar, Nagarbhavi, Vijayanagar & nearby areas.',
  alternates: { canonical: 'https://shobhaventures.com/contact' },
  openGraph: {
    title: 'Contact Shobha Ventures - Bangalore',
    description: 'Reach out for a free consultation on your construction or design project.',
    url: 'https://shobhaventures.com/contact',
  },
}

export default function ContactPage() {
  return <ContactPageClient />
}