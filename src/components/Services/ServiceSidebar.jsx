'use client';

import Link from 'next/link';

const services = [
    { title: 'Cardiology', slug: 'cardiology' },
    { title: 'Cardiac Surgery', slug: 'cardiac-surgery' },
    { title: 'Pulmonology', slug: 'pulmonology' },
    { title: 'Orthopedics', slug: 'orthopedics' },
    { title: 'General Surgery', slug: 'general-surgery' },
    { title: 'Pathology & Lab', slug: 'pathology-lab' },
    { title: 'Radiology & Imaging', slug: 'radiology-imaging' },
    { title: 'Spinal Surgery', slug: 'spinal-surgery' },
];

export default function ServiceSidebar({ activeSlug }) {
    return (
        <div className="w-full lg:w-70 shrink-0 mt-5">
            <aside className="bg-white p-5 rounded-2xl shadow-md lg:sticky lg:top-28">
                <h2 className="text-lg font-semibold mb-4 text-center">All Services</h2>

                <ul className="space-y-2">
                    {services.map(svc => (
                        <li key={svc.slug}>
                            <Link
                                href={`/services/${svc.slug}`}
                                className={`block px-4 py-2 rounded-lg font-medium transition
                                    ${svc.slug === activeSlug
                                        ? 'bg-teal-600 text-white'
                                        : 'text-gray-700 hover:bg-teal-50 hover:text-teal-700'}
                                `}
                            >
                                {svc.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </aside>
        </div>
    );
}
