'use client';

import Navbar from '@/components/Navbar';
import ServiceSidebar from '@/components/Services/ServiceSidebar';

export default function CardiacSurgery() {
    return (
        <>
            <Navbar />
            <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
                <div className="flex flex-col lg:flex-row gap-8">
                    <ServiceSidebar activeSlug="cardiac-surgery" />

                    <main className="flex-1 bg-white p-6 lg:p-8 rounded-2xl shadow-md space-y-6">
                        <h1 className="text-3xl font-bold">Cardiac Surgery</h1>

                        <p className="text-gray-700 text-justify">
                            Advanced surgical procedures for complex heart diseases using modern
                            techniques and experienced cardiac surgeons.
                        </p>

                        <ul className="list-disc pl-5 text-gray-700 space-y-1">
                            <li>CABG</li>
                            <li>Valve Replacement</li>
                            <li>Congenital Surgery</li>
                            <li>Minimally Invasive Surgery</li>
                        </ul>
                    </main>
                </div>
            </div>
        </>
    );
}
