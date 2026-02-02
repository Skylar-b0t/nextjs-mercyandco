'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import Lightbox from '@/components/Lightbox';
import { urlFor } from '@/lib/sanity';

interface GalleryContentProps {
    photos: Array<{
        image: any;
        alt: string;
        title: string;
        category: string;
        height?: 'tall' | 'normal';
    }>;
    categories: string[];
}

export default function GalleryContent({ photos, categories }: GalleryContentProps) {
    const searchParams = useSearchParams();
    const initialCategory = searchParams.get('category'); // Removed type assertion as Category type is removed

    const [activeCategory, setActiveCategory] = useState<string>(
        initialCategory ? (initialCategory.charAt(0).toUpperCase() + initialCategory.slice(1)) : 'All'
    );
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    const filteredPhotos = useMemo(() => {
        if (activeCategory === 'All') return photos;
        return photos.filter((photo) =>
            photo.category.toLowerCase() === activeCategory.toLowerCase()
        );
    }, [activeCategory]);

    const openLightbox = (index: number) => {
        setLightboxIndex(index);
        setLightboxOpen(true);
    };

    return (
        <main className="pt-24 pb-16 min-h-screen bg-[#0a0a0a]">
            {/* Header */}
            <section className="px-6 py-16 text-center">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-sm uppercase tracking-widest text-[#d4a574] mb-4 block"
                >
                    Our Work
                </motion.span>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="heading-lg text-white mb-6"
                >
                    Portfolio Gallery
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-body text-[#a0a0a0] max-w-2xl mx-auto"
                >
                    A curated collection of moments captured through the lens,
                    each telling its own unique story
                </motion.p>
            </section>

            {/* Filter Buttons */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap justify-center gap-4 mb-12 px-6"
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

            {/* Photo count */}
            <p className="text-center text-[#666666] text-sm mb-8">
                Showing {filteredPhotos.length} {filteredPhotos.length === 1 ? 'photo' : 'photos'}
            </p>

            {/* Masonry Grid */}
            <motion.div
                layout
                className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 max-w-7xl mx-auto px-6"
            >
                {filteredPhotos.map((photo, index) => (
                    <motion.div
                        key={index}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        className={`relative mb-4 break-inside-avoid cursor-pointer group overflow-hidden rounded-lg ${photo.height === 'tall' ? 'aspect-[3/4]' : 'aspect-[4/3]'
                            }`}
                        onClick={() => openLightbox(index)}
                    >
                        <Image
                            src={urlFor(photo.image).width(800).quality(75).url()}
                            alt={photo.alt}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                        />

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <h3 className="text-base font-semibold text-white mb-1">{photo.title}</h3>
                                <p className="text-xs text-[#d4a574] capitalize">{photo.category}</p>
                            </div>

                            {/* View Icon */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-500">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Lightbox */}
            {lightboxOpen && (
                <Lightbox
                    images={filteredPhotos.map(p => ({
                        src: urlFor(p.image).width(1600).quality(85).url(),
                        alt: p.alt,
                        title: p.title,
                        category: p.category
                    }))}
                    initialIndex={lightboxIndex}
                    onClose={() => setLightboxOpen(false)}
                />
            )}
        </main>
    );
}
