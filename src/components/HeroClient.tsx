'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { siteConfig } from '@/data/config';

// Dynamically import ParticleBackground to avoid SSR issues with Three.js
const ParticleBackground = dynamic(() => import('./ParticleBackground'), {
    ssr: false,
});

interface HeroClientProps {
    title?: string;
    subtitle?: string;
    location?: string;
    heroImageSrc?: string;
}

export default function HeroClient({
    title = siteConfig.shortName,
    subtitle = "Photography",
    location = siteConfig.contact.location,
    heroImageSrc = "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070"
}: HeroClientProps) {
    const { scrollY } = useScroll();

    // Parallax transforms
    const y = useTransform(scrollY, [0, 500], [0, 150]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);
    const scale = useTransform(scrollY, [0, 500], [1, 1.1]);

    const titleWithCo = title.includes('& Co') ? title : `${title.split(' ')[0]} & Co`;
    const titleMain = title.split(' ')[0];
    const titleSuffix = "& Co"; // Hardcoded for now based on design, or we can make it dynamic if title prop changes deeply

    return (
        <section className="relative h-screen overflow-hidden gradient-bg">
            {/* Background Image with Parallax */}
            <motion.div
                className="absolute inset-0 z-0"
                style={{ y, scale }}
            >
                <Image
                    src={heroImageSrc}
                    alt="Photography Hero"
                    fill
                    className="object-cover"
                    priority
                    quality={90}
                    sizes="100vw"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
            </motion.div>

            {/* Particle Effect Layer */}
            <ParticleBackground />

            {/* Content */}
            <motion.div
                className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
                style={{ opacity }}
            >
                {/* Animated Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-8"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-accent-gold">
                        <span className="w-2 h-2 bg-[#d4a574] rounded-full animate-pulse" />
                        {location}
                    </span>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="heading-xl text-white mb-4"
                >
                    <span className="block">{title.includes('Mercy') ? 'Mercy' : title}</span>
                    <span className="block text-[#d4a574]">& Co</span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-sm uppercase tracking-[0.3em] text-[#a0a0a0] mb-6"
                >
                    {subtitle}
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="text-body text-[#a0a0a0] max-w-2xl mb-10"
                >
                    {siteConfig.description}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <Link href="/gallery" className="btn-primary">
                        View Portfolio
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                    <Link href="/contact" className="btn-secondary">
                        Get in Touch
                    </Link>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex flex-col items-center gap-2 text-[#666666]"
                >
                    <span className="text-xs uppercase tracking-widest">Scroll</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </motion.div>
            </motion.div>
        </section>
    );
}
