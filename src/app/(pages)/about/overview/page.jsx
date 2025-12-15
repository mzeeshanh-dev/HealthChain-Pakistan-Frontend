import { ShieldCheck, ClipboardList, Zap, Database } from 'lucide-react';
import Navbar from '@/components/Navbar';

const overviewData = {
    title: 'STATE OF THE ART & LEADING EHR SERVICES',
    tagline: 'Secure, Transparent, Patient-Centric Medical Data Management.',
    heroImage: '/images/healthchain_hq_placeholder.webp',

    mainContent: {
        heading: 'HealthChain Pakistan: Making Health Records SAFE!',
        paragraphs: [
            'HealthChain Pakistan is spearheading the digital revolution in the nation\'s healthcare sector by establishing a Centralized and Secure Electronic Health Record (EHR) management system. Our foundation rests on cutting-edge blockchain technology, ensuring that every patient record is immutable, traceable, and highly protected against unauthorized access.',
            'We strictly enforce data integrity: medical records are exclusively generated and uploaded by **Verified Doctors** and Accredited **Labs**. This crucial step ensures the veracity of every piece of data stored in the system, eliminating risk associated with unverified sources. The Admin team maintains a manual, rigorous verification process for all healthcare providers.',
            'Our system is designed to place the patient at the center. Patients maintain read/download access to their entire record history and, crucially, possess full access to the **Audit Trail**. This transparency mechanism allows patients to see precisely which verified professional accessed their records, when, and for what purpose—a hallmark of true patient empowerment.',
        ],
    },

    pillars: [
        {
            icon: ShieldCheck,
            title: 'Impeccable Data Integrity',
            description: 'Only system-verified medical professionals and accredited labs are authorized to generate or update official records.',
        },
        {
            icon: ClipboardList,
            title: 'Full Audit Transparency',
            description: 'Patients receive a read-only Audit Trail, guaranteeing accountability for every data access or change.',
        },
        {
            icon: Zap,
            title: 'Time-Bound Access',
            description: 'Access is automatically granted and revoked based on Active Appointments, securing records outside the consultation window.',
        },
        {
            icon: Database,
            title: 'Secure & Centralized EHR',
            description: 'A single, secure source for all patient history, minimizing record fragmentation and loss across institutions.',
        },
    ],
};


export default function OverviewPage() {
    return (
        <main>
            <Navbar />
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

            {/* 2. Main Content & Circular Image Section (The KIH Layout) */}
            <section className="py-12 md:py-16 bg-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Background Graphic (Subtle, professional border design) */}
                    <div className="absolute inset-0 z-0 opacity-5">
                        {/* You can replace this with a geometric or blockchain-inspired SVG graphic */}
                        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <defs><linearGradient id="g1" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#87C4C5" /><stop offset="100%" stopColor="#ffffff" /></linearGradient></defs>
                            <path d="M 0 0 L 100 0 L 100 100 L 0 100 Z" fill="url(#g1)" />
                            <circle cx="20" cy="50" r="15" fill="#87C4C5" opacity="0.1" />
                            <circle cx="80" cy="50" r="10" fill="#0D9488" opacity="0.1" />
                        </svg>
                    </div>

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

                        {/* Image Column */}
                        <div className="lg:col-span-1 flex justify-center lg:justify-start">
                            <div className="relative w-72 h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white transform hover:scale-105 transition-transform duration-300">
                                {/* Placeholder for your project image */}
                                <img
                                    src={overviewData.heroImage}
                                    alt="HealthChain Headquarters"
                                    className="object-cover w-full h-full"
                                />
                                <div className="absolute inset-0 bg-black/10 flex items-end justify-center">
                                    <span className="text-white text-xl font-bold mb-4 bg-teal-600/80 px-4 py-1 rounded-t-lg">
                                        Making Records SAFE!
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Text Content Column */}
                        <div className="lg:col-span-2">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-teal-600 inline-block pb-1">
                                {overviewData.mainContent.heading}
                            </h2>
                            <div className="space-y-6 text-lg text-gray-700">
                                {overviewData.mainContent.paragraphs.map((p, index) => (
                                    <p key={index} className='text-justify'>
                                        {p}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Core Pillars/Values Section (Feature Cards - Same Clean Look) */}
            <section className="py-16 md:py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-teal-700 mb-12">
                        Our Guiding Principles
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {overviewData.pillars.map((pillar, index) => {
                            const Icon = pillar.icon; // Lucide icon
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
        </main>
    );
}

export const metadata = {
    title: 'Project Overview | HealthChain Pakistan',
    description: 'HealthChain: Transforming Pakistan\'s healthcare with a secure, transparent, and centralized Electronic Health Record system.',
};