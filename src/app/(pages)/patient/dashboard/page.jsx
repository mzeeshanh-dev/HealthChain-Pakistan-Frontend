"use client";

import Sidebar from "@/components/Patient/Sidebar";
import { FileText, Share2, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function DashboardPage() {
    return (
        <>
            <Navbar />
            <div className="flex min-h-screen bg-gray-50">
                <Sidebar />

                {/* Main Content */}
                <main className="flex-1 p-6">
                    <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white border border-gray-200 rounded-xl p-6">
                            <FileText className="h-10 w-10 text-teal-700 mb-3" />
                            <p className="text-gray-600">Total Records</p>
                            <p className="text-3xl font-bold text-teal-700">12</p>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-xl p-6">
                            <Share2 className="h-10 w-10 text-teal-700 mb-3" />
                            <p className="text-gray-600">Shared With</p>
                            <p className="text-3xl font-bold text-teal-700">4 Doctors</p>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-xl p-6">
                            <Shield className="h-10 w-10 text-teal-700 mb-3" />
                            <p className="text-gray-600">Data Security</p>
                            <p className="text-xl font-bold text-green-600">AES-256 Encrypted</p>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}
