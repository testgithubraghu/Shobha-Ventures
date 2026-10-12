import type { Metadata } from 'next'
import { projects } from '@/data/projects'
import ProjectDetailClient from './ProjectDetailClient'

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}

type Props = {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return { title: 'Project Not Found' }
  }

  const title = `${project.title} | ${project.status} Project in ${project.location}`
  const description = project.description.length > 155
    ? `${project.description.slice(0, 155).trim()}...`
    : project.description

  return {
    title,
    description,
    alternates: {
      canonical: `https://shobhaventures.com/projects/${project.id}`,
    },
    openGraph: {
      title,
      description,
      url: `https://shobhaventures.com/projects/${project.id}`,
      images: [{ url: project.image, width: 1200, height: 630, alt: project.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [project.image],
    },
  }
}

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params
  return <ProjectDetailClient id={id} />
}