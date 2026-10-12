// src/app/gallery/page.tsx
'use client'
import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollReveal from '@/components/ScrollReveal'
import CTASection from '@/components/CTASection'
import { projects } from '@/data/projects'
import { FiX, FiChevronLeft, FiChevronRight, FiPlay } from 'react-icons/fi'

interface GalleryItem {
  type: 'image' | 'video'
  src: string
  poster?: string
  title: string
  projectTitle?: string
  status?: 'Completed' | 'Ongoing'
  location?: string
  category: 'project' | 'interior'
}

/**
 * Video clips per project. These file paths are a placeholder convention —
 * drop the actual files into /public/videos/ and update the paths below
 * (or the filenames) to match what you have.
 */
const projectVideos: Record<string, string[]> = {
  '1': ['/videos/visvesvaraya-layout-residence-1.mp4'],
  '2': [
    '/videos/upkar-layout-1.mp4',
    '/videos/upkar-layout-2.mp4',
    '/videos/upkar-layout-3.mp4',
    '/videos/upkar-layout-4.mp4',
    '/videos/upkar-layout-5.mp4',
  ],
  '3': [
    '/videos/kengeri-residency-1.mp4',
  ],
}

/**
 * Standalone interior photos — not tied to any specific project.
 * Placeholder paths: drop your 20 images into /public/images/interior/
 * named interior-1.jpg through interior-20.jpg, or update the paths below
 * to match your actual filenames.
 */
const interiorImages: GalleryItem[] = Array.from({ length: 20 }, (_, i) => ({
  type: 'image',
  src: `/images/interior-project-1/interior-${i + 1}.jpeg`,
  title: 'Interior Design',
  category: 'interior',
}))

// Build the gallery straight from real project data instead of stock photos
function buildGalleryItems(): GalleryItem[] {
  const items: GalleryItem[] = []

  for (const project of projects) {
    // De-duplicate the main image against the gallery array
    const images = Array.from(new Set([project.image, ...project.gallery]))

    images.forEach((src) => {
      items.push({
        type: 'image',
        src,
        title: project.title,
        projectTitle: project.title,
        status: project.status,
        location: project.location,
        category: 'project',
      })
    })

    const videos = projectVideos[project.id] ?? []
    videos.forEach((src, i) => {
      items.push({
        type: 'video',
        src,
        poster: project.image,
        title: videos.length > 1 ? `${project.title} — Site Video ${i + 1}` : `${project.title} — Site Video`,
        projectTitle: project.title,
        status: project.status,
        location: project.location,
        category: 'project',
      })
    })
  }

  items.push(...interiorImages)

  return items
}

const galleryItems = buildGalleryItems()

const categories = ['All', 'Completed', 'Ongoing', 'Interior', 'Videos']

export default function GalleryPageClient() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const filteredImages = useMemo(() => {
    if (activeCategory === 'All') return galleryItems
    if (activeCategory === 'Videos') return galleryItems.filter((item) => item.type === 'video')
    if (activeCategory === 'Interior') return galleryItems.filter((item) => item.category === 'interior')
    return galleryItems.filter((item) => item.status === activeCategory)
  }, [activeCategory])

  const handlePrev = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1)
    }
  }

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === filteredImages.length - 1 ? 0 : selectedImage + 1)
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1920&q=80)' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900/95 via-dark-900/80 to-dark-900/60" />

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute bottom-0 left-0 w-1/2 h-1 bg-gradient-to-r from-gold to-transparent origin-left"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-subheading">Our Work</span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-4">
              Photo <span className="text-gold italic">Gallery</span>
            </h1>
            <div className="gold-line mb-4" />
            <p className="text-white/70 text-lg max-w-xl">
              Real sites, real progress — browse photos and walkthroughs from our completed and ongoing projects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* Filter */}
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2.5 rounded-full font-accent text-sm font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-gold text-white shadow-lg shadow-gold/30'
                      : 'bg-gray-100 text-gray-600 hover:bg-gold/10 hover:text-gold'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Gallery Grid - Masonry Style */}
          <motion.div layout className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            <AnimatePresence>
              {filteredImages.map((item, index) => (
                <motion.div
                  key={`${item.src}-${index}`}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="break-inside-avoid cursor-pointer group"
                  onClick={() => setSelectedImage(index)}
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                    <div className={`bg-gray-200 ${index % 3 === 0 ? 'h-80' : index % 3 === 1 ? 'h-64' : 'h-80'}`}>
                      <img
                        src={item.type === 'video' ? item.poster : item.src}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>

                    {item.type === 'video' && (
                      <div className="absolute inset-0 flex items-center justify-center bg-dark-900/25">
                        <span className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 group-hover:bg-gold transition-all duration-300">
                          <FiPlay className="text-dark-900 group-hover:text-white translate-x-0.5" size={22} />
                        </span>
                      </div>
                    )}

                    <div className="absolute inset-0 bg-dark-900/0 group-hover:bg-dark-900/60 transition-colors duration-500 flex items-end">
                      <div className="p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <span className="text-gold text-xs font-accent uppercase tracking-wider">
                          {item.category === 'interior' ? 'Interior' : item.status}
                          {item.type === 'video' ? ' · Video' : ''}
                        </span>
                        <h3 className="text-white font-heading font-bold text-lg">{item.title}</h3>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-dark-900/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors z-10"
            >
              <FiX size={28} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); handlePrev() }}
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors z-10 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center"
            >
              <FiChevronLeft size={24} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); handleNext() }}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors z-10 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center"
            >
              <FiChevronRight size={24} />
            </button>

            <motion.div
              key={selectedImage}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="flex flex-col items-center max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {filteredImages[selectedImage].type === 'video' ? (
                <video
                  key={filteredImages[selectedImage].src}
                  src={filteredImages[selectedImage].src}
                  poster={filteredImages[selectedImage].poster}
                  controls
                  autoPlay
                  className="max-w-full max-h-[75vh] w-auto h-auto rounded-t-2xl bg-black"
                />
              ) : (
                <img
                  src={filteredImages[selectedImage].src}
                  alt={filteredImages[selectedImage].title}
                  className="max-w-full max-h-[75vh] w-auto h-auto object-contain rounded-t-2xl"
                />
              )}
              <div className="bg-dark-900 p-4 text-center rounded-b-2xl w-full">
                <h3 className="text-white font-heading font-bold">{filteredImages[selectedImage].title}</h3>
                <p className="text-gold text-sm">
                  {filteredImages[selectedImage].category === 'interior' ? 'Interior' : filteredImages[selectedImage].status}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <CTASection />
    </>
  )
}