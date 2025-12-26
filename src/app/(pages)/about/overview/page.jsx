import { ShieldCheck, ClipboardList, Lock, Database } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Chatbot from '@/components/Chatbot';

const overviewData = {
    title: 'STATE OF THE ART & LEADING EHR SERVICES',
    tagline: 'Secure, Encrypted, and Verified Medical Data Management.',
    heroImage: '/assets/images/healthchain_hq_placeholder.webp',

    mainContent: {
        heading: 'HealthChain Pakistan: Making Health Records SAFE!',
        paragraphs: [
            'HealthChain Pakistan is spearheading the modernization of the nation\'s healthcare by establishing a high-security, Centralized Electronic Health Record (EHR) framework. By leveraging enterprise-grade encrypted architecture, we ensure that every medical entry is protected by advanced cryptographic standards and resides within a highly resilient digital environment.',
            'We maintain a strictly professional ecosystem: records are exclusively generated and managed by **Verified Medical Practitioners** and **Accredited Diagnostic Labs**. This top-down verification model ensures the absolute veracity of clinical data, eliminating the risks associated with manual errors or unverified documentation. Our Admin department enforces a rigorous, multi-step authentication process for all participating healthcare institutions.',
            'The system is built on the principle of institutional accountability. Every interaction within the network is captured in a permanent, system-generated **Audit Trail**. This mechanism provides an unalterable history of data access, ensuring that professional standards are maintained and that healthcare providers operate within a transparent, high-integrity environment.',
        ],
    },

    pillars: [
        {
            icon: ShieldCheck,
            title: 'Verified Integrity',
            description: 'Strict authorization protocols ensure only credentialed doctors and labs can append data to the central health repository.',
        },
        {
            icon: ClipboardList,
            title: 'Professional Accountability',
            description: 'A permanent, system-wide Audit Trail tracks every data modification to ensure clinical and regulatory compliance.',
        },
        {
            icon: Lock,
            title: 'Security-Hardened Architecture',
            description: 'Advanced encryption and multi-layered security prevent unauthorized tampering, making records a reliable source of truth.',
        },
        {
            icon: Database,
            title: 'Consolidated EHR',
            description: 'A centralized architectural approach that eliminates data silos and record fragmentation across provincial institutions.',
        },
    ],
};

export default function OverviewPage() {
    return (
        <main>
            <Navbar />

            {/* 1. Hero Header */}
            <section className="bg-white pt-28 pb-10 md:pt-36 md:pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 leading-tight">
                        {overviewData.title}
                    </h1>
                    <p className="mt-2 text-xl text-center text-teal-600 font-medium tracking-wide">
                        {overviewData.tagline}
                    </p>
                </div>
            </section>

            {/* 2. Main Content & Circular Image Section */}
            <section className="py-12 md:py-16 bg-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Background Graphic */}
                    <div className="absolute inset-0 z-0 opacity-5">
                        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <defs>
                                <linearGradient id="g1" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="#87C4C5" />
                                    <stop offset="100%" stopColor="#ffffff" />
                                </linearGradient>
                            </defs>
                            <path d="M 0 0 L 100 0 L 100 100 L 0 100 Z" fill="url(#g1)" />
                            <circle cx="20" cy="50" r="15" fill="#87C4C5" opacity="0.1" />
                            <circle cx="80" cy="50" r="10" fill="#0D9488" opacity="0.1" />
                        </svg>
                    </div>

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

                        {/* Image Column */}
                        <div className="lg:col-span-1 flex justify-center lg:justify-start">
                            <div className="relative w-72 h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white transform hover:scale-105 transition-transform duration-300">
                                <img
                                    src={overviewData.heroImage}
                                    alt="HealthChain Infrastructure"
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        </div>

                        {/* Text Content Column */}
                        <div className="lg:col-span-2">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-teal-600 inline-block pb-1">
                                {overviewData.mainContent.heading}
                            </h2>
                            <div className="space-y-6 text-lg text-gray-700">
                                {overviewData.mainContent.paragraphs.map((p, index) => (
                                    <p key={index} className="text-justify">
                                        {p}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Core Pillars Section */}
            <section className="py-16 md:py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-teal-700 mb-12">
                        Institutional Standards
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {overviewData.pillars.map((pillar, index) => {
                            const Icon = pillar.icon;
                            return (
                                <div
                                    key={index}
                                    className="bg-white p-6 rounded-xl shadow-lg transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl hover:border-b-4 hover:border-b-teal-600 flex flex-col items-start"
                                >
                                    <div className="p-3 mb-4 rounded-full bg-teal-100 text-teal-600">
                                        <Icon className="h-7 w-7" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                        {pillar.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        {pillar.description}
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
    title: 'Professional Infrastructure | HealthChain Pakistan',
    description: 'HealthChain: A professional, secure, and centralized digital Electronic Health Record system for verified healthcare providers.',
};