'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { siteConfig } from '@/data/config';

const serviceImages: Record<string, string> = {
    'Wedding Photography': 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070',
    'Portrait Sessions': 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964',
    'Family Portraits': 'https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=2070',
    'Event Coverage': 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070',
};

export default function ServicesPage() {
    return (
        <>
            <Navigation />
            <main className="pt-24 min-h-screen bg-[#0a0a0a]">
                {/* Header */}
                <section className="px-6 py-20 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-sm uppercase tracking-widest text-[#d4a574] mb-4 block"
                    >
                        What We Offer
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="heading-lg text-white mb-6"
                    >
                        Photography Services
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-body text-[#a0a0a0] max-w-2xl mx-auto"
                    >
                        Professional photography services tailored to capture your unique story.
                        Based in {siteConfig.contact.location}, available throughout Scotland.
                    </motion.p>
                </section>

                {/* Services Grid */}
                <section className="px-6 pb-24">
                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
                        {siteConfig.services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group relative overflow-hidden rounded-xl"
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
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                                </div>

                                {/* Content */}
                                <div className="absolute bottom-0 left-0 right-0 p-8">
                                    <h3 className="text-2xl font-semibold text-white group-hover:text-[#d4a574] transition-colors mb-4">
                                        {service.title}
                                    </h3>
                                    <p className="text-[#a0a0a0] mb-4">{service.description}</p>

                                    {/* Features */}
                                    <div className="flex flex-wrap gap-2">
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
                </section>

                {/* Process Section */}
                <section className="py-24 px-6 gradient-bg">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <span className="text-sm uppercase tracking-widest text-[#d4a574] mb-4 block">
                                How It Works
                            </span>
                            <h2 className="heading-md text-white">Your Photography Journey</h2>
                        </motion.div>

                        <div className="grid md:grid-cols-4 gap-8">
                            {[
                                { step: '01', title: 'Consultation', description: 'Let us discuss your vision, preferences, and what matters most to you.' },
                                { step: '02', title: 'Planning', description: 'We will create a detailed plan including locations, timeline, and shot list.' },
                                { step: '03', title: 'The Shoot', description: 'Relax and be yourself while I capture authentic moments and emotions.' },
                                { step: '04', title: 'Delivery', description: 'Receive your beautifully edited photos in a private online gallery.' },
                            ].map((item, index) => (
                                <motion.div
                                    key={item.step}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="text-center"
                                >
                                    <div className="text-5xl font-bold text-[#d4a574]/20 mb-4">{item.step}</div>
                                    <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                                    <p className="text-[#a0a0a0] text-sm">{item.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-24 px-6 bg-[#0a0a0a]">
                    <div className="max-w-3xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <span className="text-sm uppercase tracking-widest text-[#d4a574] mb-4 block">
                                FAQ
                            </span>
                            <h2 className="heading-md text-white">Common Questions</h2>
                        </motion.div>

                        <div className="space-y-6">
                            {[
                                { q: 'What\'s included in your packages?', a: 'Each package includes professional editing, an online gallery, and high-resolution digital files. Premium packages also include prints and albums.' },
                                { q: 'How far in advance should I book?', a: 'For weddings, I recommend booking 3-4 months ahead. Portrait sessions can often be scheduled within 2-4 weeks.' },
                                { q: 'Do you travel for shoots?', a: 'Yes! I\'m based in Dundee but regularly travel throughout Scotland and beyond. Travel fees may apply for locations outside the local area.' },
                                { q: 'What\'s your editing process?', a: 'I carefully edit each photo to enhance its natural beauty while maintaining authenticity. You\'ll receive your gallery within 2-4 weeks of your session.' },
                            ].map((faq, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="card p-6"
                                >
                                    <h3 className="text-lg font-semibold text-white mb-2">{faq.q}</h3>
                                    <p className="text-[#a0a0a0]">{faq.a}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 px-6 gradient-bg text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-2xl mx-auto"
                    >
                        <h2 className="heading-md text-white mb-6">
                            Ready to Book Your <span className="text-[#d4a574]">Session</span>?
                        </h2>
                        <p className="text-body text-[#a0a0a0] mb-8">
                            Let&apos;s discuss your photography needs and create something beautiful together.
                        </p>
                        <Link href="/contact" className="btn-primary">
                            Get in Touch
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </motion.div>
                </section>
            </main>
            <Footer />
        </>
    );
}
