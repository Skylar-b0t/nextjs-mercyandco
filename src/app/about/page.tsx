'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { siteConfig } from '@/data/config';

export default function AboutPage() {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

    const stats = [
        { number: siteConfig.stats.yearsExperience, label: 'Years Experience' },
        { number: siteConfig.stats.happyClients, label: 'Happy Clients' },
        { number: siteConfig.stats.photosDelivered, label: 'Photos Delivered' },
        { number: siteConfig.stats.awardsWon, label: 'Awards Won' },
    ];

    const timeline = [
        { year: '2014', title: 'The Beginning', description: 'Started my photography journey in Dundee with a passion for capturing authentic moments.' },
        { year: '2016', title: 'First Wedding', description: 'Shot my first wedding and discovered my love for documenting love stories.' },
        { year: '2018', title: 'Studio Opening', description: 'Opened Mercy & Co Photography studio in the heart of Dundee.' },
        { year: '2020', title: 'Award Recognition', description: 'Received Scottish Wedding Photographer of the Year nomination.' },
        { year: '2024', title: '500+ Weddings', description: 'Celebrated capturing over 500 weddings and countless precious moments.' },
    ];

    return (
        <>
            <Navigation />
            <main className="pt-24 min-h-screen bg-[#0a0a0a]">
                {/* Hero Section */}
                <section className="px-6 py-20 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-sm uppercase tracking-widest text-[#d4a574] mb-4 block"
                    >
                        About {siteConfig.shortName}
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="heading-lg text-white mb-6"
                    >
                        The Story Behind <span className="text-[#d4a574]">the Lens</span>
                    </motion.h1>
                </section>

                {/* Main Content */}
                <section
                    ref={sectionRef}
                    className="relative py-20 overflow-hidden"
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
                            className="object-cover opacity-20 blur-sm"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/90 to-[#0a0a0a]/70" />
                    </motion.div>

                    {/* Content */}
                    <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left: Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1493863641943-9b68992a8d07?q=80&w=2058"
                                    alt={siteConfig.founder.name}
                                    fill
                                    className="object-cover"
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
                                <span className="text-4xl font-bold text-white">{siteConfig.founder.since}</span>
                            </motion.div>
                        </motion.div>

                        {/* Right: Text content */}
                        <div>
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="text-sm uppercase tracking-widest text-[#d4a574] mb-4 block"
                            >
                                Meet {siteConfig.founder.name}
                            </motion.span>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="heading-md text-white mb-6"
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
                                <p>{siteConfig.founder.bio}</p>
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
                                className="grid grid-cols-2 gap-6 pt-8 border-t border-[#333]"
                            >
                                {stats.map((stat, index) => (
                                    <motion.div
                                        key={stat.label}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                                    >
                                        <span className="text-3xl font-bold text-[#d4a574] block">{stat.number}</span>
                                        <span className="text-sm text-[#666666]">{stat.label}</span>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Timeline Section */}
                <section className="py-24 px-6 gradient-bg">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <span className="text-sm uppercase tracking-widest text-[#d4a574] mb-4 block">
                                Our Journey
                            </span>
                            <h2 className="heading-md text-white">A Decade of Memories</h2>
                        </motion.div>

                        <div className="relative">
                            {/* Timeline line */}
                            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-[#333]" />

                            {timeline.map((item, index) => (
                                <motion.div
                                    key={item.year}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className={`relative flex items-center gap-8 mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                        }`}
                                >
                                    {/* Year bubble */}
                                    <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-[#d4a574] flex items-center justify-center z-10">
                                        <span className="text-sm font-bold text-[#0a0a0a]">{item.year}</span>
                                    </div>

                                    {/* Content */}
                                    <div className={`ml-24 md:ml-0 md:w-[45%] ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                                        <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                                        <p className="text-[#a0a0a0]">{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 px-6 bg-[#0a0a0a] text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-2xl mx-auto"
                    >
                        <h2 className="heading-md text-white mb-6">
                            Ready to Create Something <span className="text-[#d4a574]">Beautiful</span>?
                        </h2>
                        <p className="text-body text-[#a0a0a0] mb-8">
                            Let&apos;s capture your special moments together. Get in touch to discuss your photography needs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="btn-primary">
                                Book a Session
                            </Link>
                            <Link href="/gallery" className="btn-secondary">
                                View Portfolio
                            </Link>
                        </div>
                    </motion.div>
                </section>
            </main>
            <Footer />
        </>
    );
}
