"use client";

import Sidebar from "@/components/Patient/Sidebar";
import { FileText } from "lucide-react";

const mockRecords = [
    { id: 1, name: "Blood Test Report", date: "10 Dec 2025" },
    { id: 2, name: "X-Ray Chest", date: "05 Dec 2025" },
    { id: 3, name: "Prescription - Hypertension", date: "08 Dec 2025" }
];

export default function RecordsPage() {
    return (
        <div className="flex min-h-screen bg-gray-50">
            <Sidebar />
            <main className="flex-1 p-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">My Medical Records</h1>

                <div className="bg-white border border-gray-200 rounded-xl divide-y">
                    {mockRecords.map((record) => (
                        <div key={record.id} className="p-5 flex items-center justify-between hover:bg-gray-50 transition">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                                    <FileText className="h-6 w-6 text-teal-700" />
                                </div>
                                <div>
                                    <p className="font-medium text-gray-800">{record.name}</p>
                                    <p className="text-sm text-gray-500">{record.date}</p>
                                </div>
                            </div>
                            <button className="text-teal-600 hover:text-teal-700 text-sm font-medium">View</button>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
