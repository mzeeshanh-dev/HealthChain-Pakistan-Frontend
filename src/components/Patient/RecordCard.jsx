"use client";
import { FileText } from "lucide-react";

export default function RecordCard({ rec }) {
    return (
        <div className="bg-white p-5 rounded-xl border shadow-sm hover:shadow-md transition cursor-pointer">
            <div className="flex items-center gap-4">
                <div className="p-3 bg-teal-50 rounded-full">
                    <FileText className="h-6 w-6 text-teal-600" />
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-gray-800">{rec.title}</h3>
                    <p className="text-sm text-gray-500">{rec.type}</p>
                    <p className="text-xs text-gray-400 mt-1">Uploaded: {rec.date}</p>
                </div>
            </div>
        </div>
    );
}
