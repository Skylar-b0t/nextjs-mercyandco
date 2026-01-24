'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Lightbox from './Lightbox';

export interface Photo {
    src: string;
    alt: string;
    title: string;
    category: string;
    height?: 'tall' | 'normal';
}

interface InteractiveGalleryProps {
    photos: Photo[];
    categories: string[];
}

export default function InteractiveGallery({ photos, categories }: InteractiveGalleryProps) {
    const [activeCategory, setActiveCategory] = useState<string>('All');

    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    // Show only first 8 photos on homepage
    const displayPhotos = activeCategory === 'All'
        ? photos.slice(0, 8)
        : photos.filter((img) => img.category.toLowerCase() === activeCategory.toLowerCase()).slice(0, 8);

    const openLightbox = (index: number) => {
        setLightboxIndex(index);
        setLightboxOpen(true);
    };

    return (
        <section id="gallery" className="py-24 px-6 bg-[#0a0a0a]">
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
            >
                <span className="text-sm uppercase tracking-widest text-[#d4a574] mb-4 block">
                    Portfolio
                </span>
                <h2 className="heading-lg text-white mb-6">Featured Work</h2>
                <p className="text-body text-[#a0a0a0] max-w-2xl mx-auto">
                    A curated collection of moments captured through the lens,
                    each telling its own unique story
                </p>
            </motion.div>

            {/* Filter Buttons */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-wrap justify-center gap-4 mb-12"
            >
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                            ? 'bg-[#d4a574] text-[#0a0a0a]'
                            : 'bg-transparent border border-[#333] text-[#a0a0a0] hover:border-[#d4a574] hover:text-[#d4a574]'
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </motion.div>

            {/* Masonry Grid */}
            <motion.div
                layout
                className="columns-1 md:columns-2 lg:columns-3 gap-6 max-w-7xl mx-auto"
            >
                {displayPhotos.map((image, index) => (
                    <motion.div
                        key={image.src}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`relative mb-6 break-inside-avoid cursor-pointer group overflow-hidden rounded-lg ${image.height === 'tall' ? 'aspect-[3/4]' : 'aspect-[4/3]'
                            }`}
                        onClick={() => openLightbox(index)}
                    >
                        <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <h3 className="text-lg font-semibold text-white mb-1">{image.title}</h3>
                                <p className="text-sm text-[#d4a574] capitalize">{image.category}</p>
                            </div>

                            {/* View Icon */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-500">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* View All CTA */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center mt-12"
            >
                <Link href="/gallery" className="btn-primary">
                    View Full Portfolio
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </Link>
            </motion.div>

            {/* Lightbox */}
            {lightboxOpen && (
                <Lightbox
                    images={displayPhotos.map(p => ({ src: p.src, alt: p.alt, title: p.title, category: p.category }))}
                    initialIndex={lightboxIndex}
                    onClose={() => setLightboxOpen(false)}
                />
            )}
        </section>
    );
}
