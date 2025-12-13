import React from 'react';
import Image from 'next/image';
import services from '@/app/data/services.json';
import ServicesSidebar from '@/components/Services/ServicesSidebar';

export default function ServiceDetail({ params }) {
    const service = services.find((s) => s.slug === params.slug);

    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center gap-8">
                <ServicesSidebar />
                <h1 className="text-2xl font-bold">Service not found</h1>
            </div>
        );
    }

    return (
        <div className="flex flex-col lg:flex-row max-w-7xl mx-auto py-12 px-4 gap-8">
            {/* Sidebar */}
            <div className="w-full lg:w-1/4">
                <ServicesSidebar />
            </div>

            {/* Main content */}
            <div className="w-full lg:w-3/4 bg-white p-6 rounded-2xl shadow-md">
                <div className="relative w-full h-64 mb-6">
                    <Image
                        src={service.imageSrc}
                        alt={service.title}
                        fill
                        className="object-cover rounded-2xl" />
                </div>
                <h1 className="text-3xl font-bold mb-4">{service.title}</h1>
                <p className="text-gray-700 text-justify">{service.description}</p>
            </div>
        </div>
    );
}
