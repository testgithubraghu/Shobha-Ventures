import { services } from '@/data/services'
import ServiceDetailClient from './ServiceDetailClient'

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

type Props = {
  params: Promise<{ slug: string }>
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params
  return <ServiceDetailClient slug={slug} />
}