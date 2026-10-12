import type { Metadata } from 'next'
import GalleryPageClient from './GalleryPageClient'

export const metadata: Metadata = {
  title: 'Project Gallery | Shobha Ventures - Bangalore',
  description: 'Browse photos and site videos from Shobha Ventures\u2019 completed and ongoing residential and commercial construction projects across Bangalore.',
  alternates: { canonical: 'https://shobhaventures.com/gallery' },
  openGraph: {
    title: 'Photo & Video Gallery | Shobha Ventures',
    description: 'Real construction sites, real progress — see our completed and ongoing projects in Bangalore.',
    url: 'https://shobhaventures.com/gallery',
  },
}

export default function GalleryPage() {
  return <GalleryPageClient />
}