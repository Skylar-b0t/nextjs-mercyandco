'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { siteConfig } from '@/data/config';

export interface Testimonial {
    name: string;
    quote: string;
    event: string;
    image: string;
}

interface TestimonialsClientProps {
    testimonials?: Testimonial[];
}

export default function TestimonialsClient({
    testimonials = siteConfig.testimonials
}: TestimonialsClientProps) {
    return (
        <section id="testimonials" className="py-24 px-6 gradient-bg overflow-hidden">
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-20"
            >
                <span className="text-sm uppercase tracking-widest text-[#d4a574] mb-4 block">
                    Testimonials
                </span>
                <h2 className="heading-lg text-white mb-6">What Clients Say</h2>
                <p className="text-body text-[#a0a0a0] max-w-2xl mx-auto">
                    The best reward is knowing that my work helps people treasure their most important memories
                </p>
            </motion.div>

            {/* Polaroid-style Testimonials */}
            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 lg:gap-12">
                {testimonials.map((testimonial, index) => {
                    const rotations = [-3, 2, -2];
                    const rotation = rotations[index % 3];

                    return (
                        <motion.div
                            key={testimonial.name}
                            initial={{ opacity: 0, y: 50, rotate: rotation * 2 }}
                            whileInView={{ opacity: 1, y: 0, rotate: rotation }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: index * 0.2 }}
                            whileHover={{
                                rotate: 0,
                                scale: 1.05,
                                y: -10,
                                transition: { duration: 0.3 }
                            }}
                            className="group cursor-pointer"
                        >
                            {/* Polaroid Card */}
                            <div className="bg-white rounded-sm p-4 shadow-2xl shadow-black/50">
                                {/* Image */}
                                <div className="relative aspect-square mb-4 overflow-hidden">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        fill
                                        className="object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                </div>

                                {/* Content */}
                                <div className="space-y-3 pb-2">
                                    <p className="text-sm text-gray-700 italic leading-relaxed">
                                        &ldquo;{testimonial.quote}&rdquo;
                                    </p>
                                    <div className="pt-2 border-t border-gray-100">
                                        <p className="font-semibold text-gray-900">{testimonial.name}</p>
                                        <p className="text-xs text-[#d4a574] uppercase tracking-wide">
                                            {testimonial.event}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Shadow effect */}
                            <div className="h-2 w-[90%] mx-auto bg-black/20 blur-xl -mt-2" />
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
