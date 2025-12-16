"use client";

import Sidebar from "@/components/Patient/Sidebar";
import { Share2, User } from "lucide-react";
import Navbar from "@/components/Navbar";

const doctors = [
    { id: 1, name: "Dr. Ahmed Khan", specialty: "Cardiologist" },
    { id: 2, name: "Dr. Sara Ali", specialty: "General Physician" }
];

export default function AccessPage() {
    return (
        <>
            <Navbar />
            <div className="flex min-h-screen bg-gray-50">
                <Sidebar />
                <main className="flex-1 p-6">
                    <h1 className="text-2xl font-bold text-gray-800 mb-6">Share Access</h1>

                    <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
                        <h2 className="text-lg font-semibold text-gray-700 mb-3">Share Records with a Doctor</h2>
                        <button className="bg-teal-600 text-white px-5 py-3 rounded-lg hover:bg-teal-700 transition flex items-center">
                            <Share2 className="h-5 w-5 mr-2" />
                            Share New Access
                        </button>
                    </div>

                    <h2 className="text-lg font-semibold text-gray-700 mb-3">Doctors with Access</h2>
                    <div className="bg-white border border-gray-200 rounded-xl divide-y">
                        {doctors.map((doc) => (
                            <div key={doc.id} className="p-5 flex items-center justify-between hover:bg-gray-50 transition">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                                        <User className="h-6 w-6 text-teal-700" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-800">{doc.name}</p>
                                        <p className="text-sm text-gray-500">{doc.specialty}</p>
                                    </div>
                                </div>
                                <button className="text-red-600 hover:text-red-700 text-sm font-medium">Remove</button>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </>
    );
}
