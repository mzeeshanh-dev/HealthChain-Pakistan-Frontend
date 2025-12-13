'use client';

import Link from 'next/link';
import services from '@/app/data/services.json';

export default function ServicesSidebar() {
    return (
        <aside className="w-full md:w-64 bg-white shadow-lg rounded-xl p-6 sticky top-24 h-fit">
            <h3 className="text-xl font-bold mb-4">All Services</h3>

            <ul className="space-y-3">
                {services.map((svc) => (
                    <li key={svc.slug}>
                        <Link
                            href={`/services/${svc.slug}`}
                            className="block px-3 py-2 rounded-lg hover:bg-teal-50 hover:text-teal-700 transition"
                        >
                            {svc.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </aside>
    );
}
