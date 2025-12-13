'use client';

import Navbar from '@/components/Navbar';
import ServiceSidebar from '@/components/Services/ServiceSidebar';

export default function PathologyLab() {
    return (
        <>
            <Navbar />
            <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
                <div className="flex flex-col lg:flex-row gap-8">
                    <ServiceSidebar activeSlug="pathology-lab" />

                    <main className="flex-1 bg-white p-6 lg:p-8 rounded-2xl shadow-md space-y-6">
                        <h1 className="text-3xl font-bold">Pathology & Lab</h1>

                        <ul className="list-disc pl-5 text-gray-700 space-y-1">
                            <li>Blood Tests</li>
                            <li>Histopathology</li>
                            <li>Microbiology</li>
                            <li>Clinical Diagnostics</li>
                        </ul>
                    </main>
                </div>
            </div>
        </>
    );
}
