'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface LightboxProps {
    images: { src: string; alt: string; title?: string; category?: string }[];
    initialIndex: number;
    onClose: () => void;
}

export default function Lightbox({ images, initialIndex, onClose }: LightboxProps) {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);

    const handlePrevious = useCallback(() => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    }, [images.length]);

    const handleNext = useCallback(() => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, [images.length]);

    // Keyboard navigation
    const handleKeyDown = useCallback(
        (e: React.KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowLeft') handlePrevious();
            if (e.key === 'ArrowRight') handleNext();
        },
        [onClose, handlePrevious, handleNext]
    );

    const currentImage = images[currentIndex];

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
                onClick={onClose}
                onKeyDown={handleKeyDown}
                tabIndex={0}
                role="dialog"
                aria-modal="true"
                aria-label="Image lightbox"
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 z-50 p-3 rounded-full glass text-white hover:text-[#d4a574] transition-colors"
                    aria-label="Close lightbox"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Previous Button */}
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        handlePrevious();
                    }}
                    className="absolute left-4 md:left-8 z-50 p-3 rounded-full glass text-white hover:text-[#d4a574] transition-colors"
                    aria-label="Previous image"
                >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                {/* Next Button */}
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        handleNext();
                    }}
                    className="absolute right-4 md:right-8 z-50 p-3 rounded-full glass text-white hover:text-[#d4a574] transition-colors"
                    aria-label="Next image"
                >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                {/* Image Container */}
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-full max-w-5xl h-[80vh] mx-4"
                    onClick={(e) => e.stopPropagation()}
                >
                    <Image
                        src={currentImage.src}
                        alt={currentImage.alt}
                        fill
                        className="object-contain"
                        quality={95}
                        priority
                    />

                    {/* Image Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent"
                    >
                        {currentImage.title && (
                            <h3 className="text-xl font-semibold text-white mb-1">{currentImage.title}</h3>
                        )}
                        {currentImage.category && (
                            <p className="text-sm text-[#d4a574]">{currentImage.category}</p>
                        )}
                        <p className="text-sm text-[#666666] mt-2">
                            {currentIndex + 1} / {images.length}
                        </p>
                    </motion.div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
