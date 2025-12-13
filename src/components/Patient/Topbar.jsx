"use client";

import { Upload } from "lucide-react";

export default function Topbar({ handleUpload }) {
    return (
        <header className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200">
            <h1 className="text-2xl font-semibold text-gray-800">My Medical Records</h1>

            <button
                onClick={handleUpload}
                className="px-5 py-2 bg-teal-600 text-white font-medium rounded-lg flex items-center gap-2 hover:bg-teal-700 transition"
            >
                <Upload className="h-5 w-5" />
                Upload Record
            </button>
        </header>
    );
}
