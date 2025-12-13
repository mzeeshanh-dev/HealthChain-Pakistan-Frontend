'use client';

import { Stethoscope, FileText, Activity } from 'lucide-react';

const features = [
    {
        icon: Stethoscope,
        title: 'Find a Doctor',
        description: 'Making Live Safe.',
    },
    {
        icon: FileText,
        title: 'Online Report',
        description: 'Offering online reports of Pathology, Radiology & Cardiology.',
    },
    {
        icon: Activity,
        title: 'Centers Of Excellence',
        description:
            'We offer a wide range of medical, interventional and diagnostic services.',
    },
];

export default function Features() {
    return (
        <section className="py-12 md:py-16 bg-white">
            <h1 className="text-center mb-12 text-3xl md:text-4xl font-bold">
                Features
            </h1>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {features.map((feature) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={feature.title}
                                className="group relative p-6 md:p-8 bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm transition-all duration-500 ease-in-out hover:shadow-lg hover:scale-105 hover:bg-teal-600 cursor-pointer"
                            >
                                {/* Gradient circles */}
                                <div className="absolute top-0 right-0 w-40 h-40 bg-teal-100 rounded-full -translate-y-20 translate-x-20 opacity-0 group-hover:opacity-70 transition-opacity duration-500 ease-in-out"></div>
                                <div className="absolute top-0 right-0 w-28 h-28 bg-teal-500/30 rounded-full -translate-y-16 translate-x-16 opacity-0 group-hover:opacity-70 transition-opacity duration-500 ease-in-out delay-75"></div>

                                {/* Icon */}
                                <div className="relative z-10 mb-4">
                                    <div className="inline-flex p-4 rounded-full shadow-md transition-all duration-500 ease-in-out bg-white group-hover:bg-white/20 group-hover:scale-110">
                                        <Icon className="h-9 w-9 text-teal-600 group-hover:text-white transition-colors duration-500 ease-in-out" />
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="relative z-10 text-lg md:text-xl font-bold mb-2 text-gray-900 group-hover:text-white transition-colors duration-500 ease-in-out">
                                    {feature.title}
                                </h3>

                                {/* Description */}
                                <p className="relative z-10 text-sm md:text-base text-gray-600 group-hover:text-white/90 transition-colors duration-500 ease-in-out">
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
