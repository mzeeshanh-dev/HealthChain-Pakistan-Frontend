
import React from 'react';
import Navbar from '@/components/Navbar';
import { Target, Lightbulb, Heart, Handshake, Shield, UserCheck } from 'lucide-react';
import Chatbot from '@/components/Chatbot';

const visionMissionValues = {
    title: 'Our Commitment to the Future of Healthcare',
    subtitle: 'Vision, Mission, and Core Values Driving HealthChain Pakistan',

    vision: {
        icon: Target,
        heading: 'Vision',
        content: 'To become the premier, most trusted, and widely adopted Electronic Health Record (EHR) platform in Pakistan, recognized globally for enhancing data security, transparency, and patient empowerment through blockchain technology.',
    },

    mission: {
        icon: Lightbulb,
        heading: 'Mission',
        content: 'To transform the current fragmented healthcare data landscape by providing a unified, centralized, and immutable EHR system. We aim to ensure that healthcare providers deliver high-quality, efficient, and transparent care, enabling patients to fully control and understand their medical history.',
    },

    values: [
        { icon: UserCheck, title: 'Patient Transparency', description: 'Empowering patients with clear read/download access and the audit trail of their records.' },
        { icon: Shield, title: 'Data Integrity First', description: 'Ensuring records are exclusively created and modified by fully verified and authorized healthcare professionals.' },
        { icon: Heart, title: 'Ethical Access', description: 'Implementing strict time-bound access control, ensuring patient privacy is respected during and after consultations.' },
        { icon: Handshake, title: 'Accountability & Trust', description: 'Maintaining a complete audit log to establish trust and accountability across all system interactions.' },
    ]
};

// --- Component ---
export default function VisionMissionValuesPage() {
    return (
        <main>
            <Navbar />

            <section className="bg-teal-50 pt-28 pb-10 md:pt-36 md:pb-16 border-b border-teal-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                        {visionMissionValues.title}
                    </h1>
                    <p className="mt-3 text-lg text-teal-600 font-medium">
                        {visionMissionValues.subtitle}
                    </p>
                </div>
            </section>

            {/* 2. Core Content Section: Vision and Mission (Vertical Stacked Layout - KIH Style) */}
            <section className="py-16 md:py-24 bg-white relative overflow-hidden">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                    {/* Background Hexagon Graphic - Matching KIH Aesthetic */}
                    <div className="absolute inset-0 z-0 opacity-10">
                        {/*  */}
                        {/* This will mimic the subtle, tech-focused background pattern from the inspiration image */}
                        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <pattern id="hex-pattern" x="0" y="0" width="10" height="17.32" patternUnits="userSpaceOnUse">
                                <path d="M5 0 L10 2.887 V8.66 L5 11.547 L0 8.66 V2.887 Z" stroke="#0D9488" strokeWidth="0.5" fill="none" />
                            </pattern>
                            <rect width="100%" height="100%" fill="url(#hex-pattern)" />
                        </svg>
                    </div>


                    {/* Vision Block */}
                    <div className="relative bg-white/90 p-8 md:p-12 rounded-xl shadow-xl border-t-4 border-teal-600 mb-16 hover:shadow-2xl transition-shadow duration-300">
                        <div className="flex items-start mb-4">
                            <visionMissionValues.vision.icon className="h-8 w-8 text-teal-600 mr-4 mt-1" />
                            <h2 className="text-4xl font-extrabold text-gray-900">
                                {visionMissionValues.vision.heading}
                            </h2>
                        </div>
                        <p className="text-xl text-gray-700 leading-relaxed pl-12">
                            {visionMissionValues.vision.content}
                        </p>
                    </div>

                    {/* Mission Block */}
                    <div className="relative bg-white/90 p-8 md:p-12 rounded-xl shadow-xl border-t-4 border-teal-600 hover:shadow-2xl transition-shadow duration-300">
                        <div className="flex items-start mb-4">
                            <visionMissionValues.mission.icon className="h-8 w-8 text-teal-600 mr-4 mt-1" />
                            <h2 className="text-4xl font-extrabold text-gray-900">
                                {visionMissionValues.mission.heading}
                            </h2>
                        </div>
                        <p className="text-xl text-gray-700 leading-relaxed pl-12">
                            {visionMissionValues.mission.content}
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. Core Values Section (Grid Layout) */}
            <section className="py-16 md:py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                        Our Core Values
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {visionMissionValues.values.map((value, index) => {
                            const Icon = value.icon; // Lucide icon
                            return (
                                <div
                                    key={index}
                                    className="p-6 bg-white rounded-xl shadow-md flex flex-col items-center text-center transition-transform duration-300 hover:scale-105"
                                >
                                    <div className="p-3 mb-4 rounded-full bg-teal-600 text-white shadow-lg">
                                        <Icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                                        {value.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        {value.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
            <Chatbot />
        </main>
    );
}

export const metadata = {
    title: 'Vision, Mission & Values | HealthChain',
    description: 'The core principles and long-term goals driving HealthChain Pakistan: security, transparency, and patient-centric healthcare.',
};