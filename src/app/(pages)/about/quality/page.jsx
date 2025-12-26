import React from 'react';
import { Award, ShieldCheck, Activity, Users, CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Chatbot from '@/components/Chatbot';

const qualityStandards = [
    {
        icon: ShieldCheck,
        title: "Data Integrity & Encryption",
        description: "We adhere to international cryptographic standards to ensure every health record is tamper-proof and accessible only to authorized personnel."
    },
    {
        icon: Award,
        title: "Clinical Excellence",
        description: "Our platform undergoes regular audits to ensure compliance with national healthcare documentation protocols and professional standards."
    },
    {
        icon: Activity,
        title: "System Reliability",
        description: "HealthChain maintains a 99.9% uptime architecture, ensuring that life-critical medical data is available to doctors exactly when needed."
    },
    {
        icon: Users,
        title: "Patient-Centric Privacy",
        description: "We prioritize patient confidentiality through multi-factor authentication and strict institutional verification of all participating providers."
    }
];

export default function QualityPolicy() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-gradient-to-b from-teal-50 to-white">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                        Quality Policy
                    </h1>
                    <p className="text-xl text-teal-700 font-medium max-w-2xl mx-auto">
                        Commitment to Clinical Excellence and Uncompromising Data Security.
                    </p>
                </div>
            </section>

            {/* Core Statement */}
            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <div className="bg-white border border-teal-100 shadow-xl p-8 md:p-12 rounded-2xl relative">
                        <CheckCircle className="w-12 h-12 text-teal-500 mx-auto mb-6" />
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Institutional Commitment</h2>
                        <p className="text-lg text-gray-700 leading-relaxed text-justify md:text-center">
                            "HealthChain Pakistan is dedicated to providing a secure, centralized digital infrastructure
                            that serves as the single source of truth for medical records. Our mission is to eliminate
                            fragmentation in healthcare through rigorous verification, advanced encryption, and
                            continuous quality improvement in data management."
                        </p>
                    </div>
                </div>
            </section>

            {/* Quality Pillars Grid */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {qualityStandards.map((item, index) => (
                            <div key={index} className="flex gap-6 p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                                <div className="flex-shrink-0">
                                    <div className="p-3 bg-teal-100 rounded-lg text-teal-600">
                                        <item.icon className="w-8 h-8" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Compliance Footer */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-8">
                        Aligned with International Standards
                    </p>
                    <div className="flex flex-wrap justify-center gap-8 opacity-60 grayscale">
                        <span className="text-2xl font-bold">HIPAA Compliant</span>
                        <span className="text-2xl font-bold">ISO 27001</span>
                        <span className="text-2xl font-bold">HL7 Standards</span>
                    </div>
                </div>
            </section>
            <Chatbot />
        </main>
    );
}