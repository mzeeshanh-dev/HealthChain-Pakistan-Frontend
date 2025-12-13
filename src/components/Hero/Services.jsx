'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import services from '@/data/services.json';

export default function ServicesPage() {
    return (
        <section className="py-12 md:py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:4xl font-bold text-center mb-12">
                    Our Services
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {services.map((svc) => (
                        <div
                            key={svc.slug}
                            className="group relative overflow-hidden rounded-2xl bg-white shadow-md p-6 text-center transition-transform duration-500 ease-out hover:-translate-y-6 hover:shadow-2xl hover:border-b-4 hover:border-b-teal-600"
                        >
                            <div className="flex justify-center mb-4">
                                <div className="relative w-28 h-28 rounded-full overflow-hidden bg-teal-50 transition-all duration-500 ease-out group-hover:scale-105">
                                    <Image
                                        src={svc.imageSrc}
                                        alt={svc.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            {/* TITLE = CLICKABLE */}
                            <Link
                                href={`/services/${svc.slug}`}
                                className="text-xl font-semibold mb-2 text-gray-900 transition-colors duration-500 ease-out group-hover:text-teal-600 block"
                            >
                                {svc.title}
                            </Link>

                            <p className="text-gray-600 transition-colors duration-500 ease-out group-hover:text-gray-800 text-justify">
                                {svc.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
