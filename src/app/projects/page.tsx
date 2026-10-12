import type { Metadata } from 'next'
import ProjectsPageClient from './ProjectsPageClient'

export const metadata: Metadata = {
  title: 'Our Projects | Completed & Ongoing Construction in Bangalore',
  description: 'Explore Shobha Ventures\u2019 portfolio of completed and ongoing residential and commercial construction projects across Bangalore.',
  alternates: { canonical: 'https://shobhaventures.com/projects' },
  openGraph: {
    title: 'Our Projects | Shobha Ventures',
    description: 'Browse completed and ongoing construction projects across Bangalore.',
    url: 'https://shobhaventures.com/projects',
  },
}

export default function ProjectsPage() {
  return <ProjectsPageClient />
}