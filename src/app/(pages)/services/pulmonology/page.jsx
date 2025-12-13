'use client';

import Navbar from '@/components/Navbar';
import ServiceSidebar from '@/components/Services/ServiceSidebar';

export default function Pulmonology() {
    return (
        <>
            <Navbar />
            <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
                <div className="flex flex-col lg:flex-row gap-8">
                    <ServiceSidebar activeSlug="pulmonology" />

                    <main className="flex-1 bg-white p-6 lg:p-8 rounded-2xl shadow-md space-y-6">
                        <h1 className="text-3xl font-bold">Pulmonology</h1>

                        <p className="text-gray-700 text-justify">
                            Diagnosis and treatment of lung and respiratory diseases including asthma,
                            COPD, and infections.
                        </p>

                        <ul className="list-disc pl-5 text-gray-700 space-y-1">
                            <li>Asthma Management</li>
                            <li>COPD Care</li>
                            <li>Bronchoscopy</li>
                            <li>Pulmonary Rehab</li>
                        </ul>
                    </main>
                </div>
            </div>
        </>
    );
}
