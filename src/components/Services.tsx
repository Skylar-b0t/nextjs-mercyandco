'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/data/config';

const serviceImages: Record<string, string> = {
    'Wedding Photography': 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070',
    'Portrait Sessions': 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964',
    'Family Portraits': 'https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=2070',
    'Event Coverage': 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070',
};

export default function Services() {
    return (
        <section id="services" className="py-24 px-6 gradient-bg">
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
            >
                <span className="text-sm uppercase tracking-widest text-[#d4a574] mb-4 block">
                    Services
                </span>
                <h2 className="heading-lg text-white mb-6">What We Offer</h2>
                <p className="text-body text-[#a0a0a0] max-w-2xl mx-auto">
                    Professional photography services tailored to capture your unique story
                </p>
            </motion.div>

            {/* Services Grid */}
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
                {siteConfig.services.map((service, index) => (
                    <motion.div
                        key={service.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="group relative overflow-hidden rounded-xl cursor-pointer"
                    >
                        {/* Background Image */}
                        <div className="relative aspect-[16/10] overflow-hidden">
                            <Image
                                src={serviceImages[service.title] || 'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?q=80&w=2070'}
                                alt={service.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                        </div>

                        {/* Content */}
                        <div className="absolute bottom-0 left-0 right-0 p-8">
                            <div className="flex items-start justify-between mb-2">
                                <h3 className="text-2xl font-semibold text-white group-hover:text-[#d4a574] transition-colors">
                                    {service.title}
                                </h3>
                                <span className="text-sm font-medium text-[#d4a574]">
                                    From {service.startingPrice}
                                </span>
                            </div>
                            <p className="text-[#a0a0a0] mb-4 line-clamp-2">{service.description}</p>

                            {/* Features */}
                            <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                {service.features.map((feature) => (
                                    <span
                                        key={feature}
                                        className="px-3 py-1 text-xs rounded-full bg-[#d4a574]/20 text-[#d4a574] border border-[#d4a574]/30"
                                    >
                                        {feature}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Hover Border Effect */}
                        <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#d4a574]/30 rounded-xl transition-colors duration-500" />
                    </motion.div>
                ))}
            </div>

            {/* CTA */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center mt-16"
            >
                <Link href="/services" className="btn-secondary mr-4">
                    View All Services
                </Link>
                <Link href="/contact" className="btn-primary">
                    Book a Session
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </Link>
            </motion.div>
        </section>
    );
}
