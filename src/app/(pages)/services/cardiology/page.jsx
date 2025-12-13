'use client';

import Navbar from '@/components/Navbar';
import ServiceSidebar from '@/components/Services/ServiceSidebar';

export default function Cardiology() {
    return (
        <>
            <Navbar />
            <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
                <div className="flex flex-col lg:flex-row gap-8">
                    <ServiceSidebar activeSlug="cardiology" />

                    <main className="flex-1 bg-white p-6 lg:p-8 rounded-2xl shadow-md space-y-6">
                        <h1 className="text-3xl font-bold">Cardiology</h1>

                        <p className="text-gray-700">
                            Comprehensive heart care focusing on prevention, diagnosis,
                            and advanced cardiac treatments.
                        </p>

                        <ul className="list-disc pl-5 text-gray-700 space-y-1">
                            <li>Heart Diagnostics</li>
                            <li>Cardiac Surgery</li>
                            <li>Heart Failure Management</li>
                            <li>Cardiac Rehabilitation</li>
                        </ul>
                    </main>
                </div>
            </div>
        </>
    );
}
