'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { siteConfig } from '@/data/config';

interface AboutSectionClientProps {
    founderName?: string;
    aboutText?: string;
    founderImageSrc?: string;
    stats?: {
        yearsExperience: string;
        happyClients: string;
        photosDelivered?: string;
        awardsWon?: string;
    };
    since?: string | number;
}

export default function AboutSectionClient({
    founderName = siteConfig.founder.name,
    aboutText = siteConfig.founder.bio,
    founderImageSrc = "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?q=80&w=2058",
    stats = {
        yearsExperience: siteConfig.stats.yearsExperience,
        happyClients: siteConfig.stats.happyClients,
        photosDelivered: siteConfig.stats.photosDelivered,
        awardsWon: siteConfig.stats.awardsWon
    },
    since = siteConfig.founder.since
}: AboutSectionClientProps) {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
    const textOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

    const displayStats = [
        { number: stats.yearsExperience, label: 'Years Experience' },
        { number: stats.happyClients, label: 'Happy Clients' },
        ...(stats.photosDelivered ? [{ number: stats.photosDelivered, label: 'Photos Delivered' }] : []),
        ...(stats.awardsWon ? [{ number: stats.awardsWon, label: 'Awards Won' }] : []),
    ];

    return (
        <section
            ref={sectionRef}
            id="about"
            className="relative py-32 overflow-hidden"
        >
            {/* Background Image with Parallax */}
            <motion.div
                className="absolute inset-0 z-0"
                style={{ y: backgroundY }}
            >
                <Image
                    src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?q=80&w=2070"
                    alt="Photography studio"
                    fill
                    className="object-cover opacity-30 blur-sm"
                    sizes="100vw"
                    loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/90 to-[#0a0a0a]/70" />
            </motion.div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                {/* Left: Image with floating effect */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
                        <Image
                            src={founderImageSrc}
                            alt={founderName}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        {/* Decorative frame */}
                        <div className="absolute inset-4 border-2 border-[#d4a574]/30 rounded-lg pointer-events-none" />
                    </div>

                    {/* Floating badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="absolute -bottom-8 -right-8 md:bottom-8 md:-right-12 glass rounded-lg p-6 max-w-[200px]"
                    >
                        <span className="text-3xl font-bold text-[#d4a574] block">Since</span>
                        <span className="text-4xl font-bold text-white">{since}</span>
                    </motion.div>
                </motion.div>

                {/* Right: Text content */}
                <motion.div style={{ opacity: textOpacity }}>
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-sm uppercase tracking-widest text-[#d4a574] mb-4 block"
                    >
                        About {siteConfig.shortName}
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="heading-lg text-white mb-6"
                    >
                        Telling Stories Through
                        <span className="text-[#d4a574]"> Light</span>
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-4 text-body text-[#a0a0a0] mb-8"
                    >
                        <p>{aboutText}</p>
                        <p>
                            My approach combines technical precision with artistic intuition, ensuring
                            every image carries emotional depth and timeless elegance. I believe
                            photography is not just about documenting moments—it&apos;s about preserving
                            feelings.
                        </p>
                    </motion.div>

                    {/* Stats Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-[#333]"
                    >
                        {displayStats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                                className="text-center md:text-left"
                            >
                                <span className="text-3xl font-bold text-[#d4a574] block">{stat.number}</span>
                                <span className="text-sm text-[#666666]">{stat.label}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
