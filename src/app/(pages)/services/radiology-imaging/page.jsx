'use client';

import Navbar from '@/components/Navbar';
import ServiceSidebar from '@/components/Services/ServiceSidebar';

export default function RadiologyImaging() {
    return (
        <>
            <Navbar />
            <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
                <div className="flex flex-col lg:flex-row gap-8">
                    <ServiceSidebar activeSlug="radiology-imaging" />

                    <main className="flex-1 bg-white p-6 lg:p-8 rounded-2xl shadow-md space-y-6">
                        <h1 className="text-3xl font-bold">Radiology & Imaging</h1>

                        <ul className="list-disc pl-5 text-gray-700 space-y-1">
                            <li>X-Ray</li>
                            <li>CT Scan</li>
                            <li>MRI</li>
                            <li>Ultrasound</li>
                        </ul>
                    </main>
                </div>
            </div>
        </>
    );
}
