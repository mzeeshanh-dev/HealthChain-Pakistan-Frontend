'use client'
import Link from 'next/link';
import { TriangleAlert, Home } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Chatbot from '@/components/Chatbot';

export default function NotFound() {
    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center mt-12 justify-center min-h-screen bg-gray-50 text-center px-4">
                <div className="p-5 rounded-full bg-red-100 text-red-600 mb-8 shadow-md">
                    <TriangleAlert className="h-12 w-12 md:h-16 md:w-16" />
                </div>

                <h1 className="text-6xl md:text-9xl font-extrabold text-gray-900 tracking-wider mb-2">
                    404
                </h1>

                <h2 className="text-2xl md:text-3xl font-semibold text-teal-700 mb-6">
                    Page Not Found
                </h2>

                <p className="text-lg text-gray-600 max-w-md mb-7">
                    We apologize, but the page you are looking for does not exist on our system or its link has been moved.</p>

                <Link
                    href="/"
                    className="inline-flex items-center justify-center -translate-y-2.5 px-8 py-3 text-base font-medium text-white bg-teal-600 rounded-lg shadow-lg hover:bg-teal-700 transition-all duration-300 transform hover:scale-105">
                    <Home className="h-5 w-5 mr-2" /> Go Back to Home
                </Link>

            </div>
            <Chatbot />
        </>
    );
}