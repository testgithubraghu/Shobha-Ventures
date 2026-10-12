import { MetadataRoute } from 'next'
import { services } from '@/data/services'
import { projects } from '@/data/projects'

const baseUrl = 'https://shobhaventures.com'

// Update this manually when you redesign/rewrite core pages —
// gives Google a real signal instead of a fake "always just changed" stamp
const SITE_LAST_UPDATED = new Date('2026-07-28')

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: SITE_LAST_UPDATED, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/about/`, lastModified: SITE_LAST_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services/`, lastModified: SITE_LAST_UPDATED, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/gallery/`, lastModified: SITE_LAST_UPDATED, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/projects/`, lastModified: SITE_LAST_UPDATED, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/contact/`, lastModified: SITE_LAST_UPDATED, changeFrequency: 'monthly', priority: 0.7 },
  ]

  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}/`,
    lastModified: SITE_LAST_UPDATED,
    changeFrequency: 'monthly',
    priority: 0.75,
  }))

  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.id}/`,
    lastModified: SITE_LAST_UPDATED,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes]
}