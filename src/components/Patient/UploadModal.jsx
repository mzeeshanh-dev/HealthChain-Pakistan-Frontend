"use client";

import { X } from "lucide-react";

export default function UploadModal({ open, close }) {
    if (!open) return null;

    return (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white w-full max-w-md rounded-xl p-6 relative shadow-lg">

                <button
                    onClick={close}
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
                >
                    <X />
                </button>

                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    Upload Medical Record
                </h2>

                <div className="border-2 border-dashed border-gray-300 bg-gray-50 rounded-lg h-40 flex flex-col items-center justify-center cursor-pointer hover:border-teal-500 transition">
                    <p className="text-gray-600">Drop your file here</p>
                    <p className="text-xs text-gray-400">PDF, JPG, PNG allowed</p>
                </div>

                <button className="w-full mt-6 bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition">
                    Upload
                </button>
            </div>
        </div>
    );
}
