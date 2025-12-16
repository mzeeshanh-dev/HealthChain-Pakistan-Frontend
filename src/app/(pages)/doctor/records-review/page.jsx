
import DoctorSidebar from "@/components/Doctor/DoctorSidebar";
import { FileSearch, Clock, AlertTriangle, FileText } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function DoctorRecordsReviewPage() {
    const pendingRecords = [
        { id: 'R-789', patient: "Sana Tariq", type: "New Lab Results", date: "2025-12-15", urgency: "High" },
        { id: 'R-790', patient: "Usman Khan", type: "Discharge Summary", date: "2025-12-14", urgency: "Medium" },
        { id: 'R-791', patient: "Ali Hassan", type: "Consultation Note", date: "2025-12-10", urgency: "Low" },
    ];

    return (
        <>
            <Navbar />
            <div className="flex min-h-screen bg-gray-50">
                <DoctorSidebar />
                <main className="flex-1 lg:ml-64 p-4 sm:p-6 lg:p-8 pt-20 lg:pt-8">
                    <header className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 flex items-center">
                            <FileSearch className="w-8 h-8 mr-3 text-teal-600" />
                            Health Records Review
                        </h1>
                        <p className="text-gray-500">Review patient records requiring your attention or sign-off.</p>
                    </header>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Pending Records List (2/3 width) */}
                        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">Pending Review Queue</h2>
                            <div className="space-y-4">
                                {pendingRecords.map(record => (
                                    <RecordReviewCard key={record.id} record={record} />
                                ))}
                                {pendingRecords.length === 0 && (
                                    <p className="text-center text-gray-500 py-10">All records are up-to-date. Well done!</p>
                                )}
                            </div>
                        </div>

                        {/* Quick Stats / Actions (1/3 width) */}
                        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">Record Status</h2>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex justify-between items-center py-2 border-b">
                                    <span className="flex items-center"><Clock className="w-4 h-4 mr-2 text-indigo-500" /> Average Review Time:</span>
                                    <span className="font-semibold">2 hours</span>
                                </li>
                                <li className="flex justify-between items-center py-2 border-b">
                                    <span className="flex items-center"><AlertTriangle className="w-4 h-4 mr-2 text-red-500" /> Critical Records:</span>
                                    <span className="font-semibold text-red-600">1</span>
                                </li>
                                <li className="pt-2">
                                    <button className="w-full mt-4 px-4 py-3 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition">
                                        Search All Records
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}

// Helper component for Record Review Card
const RecordReviewCard = ({ record }) => {
    let urgencyClass = record.urgency === 'High' ? 'text-red-600 bg-red-50 border-red-200' : 'text-yellow-600 bg-yellow-50 border-yellow-200';

    return (
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 border border-gray-200 rounded-xl bg-gray-50 hover:bg-white transition">
            <div className="flex items-center gap-4 mb-3 sm:mb-0">
                <div className="p-3 bg-indigo-50 rounded-full">
                    <FileText className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                    <p className="font-semibold text-gray-900">{record.patient}</p>
                    <p className="text-sm text-gray-500">{record.type} (ID: {record.id})</p>
                </div>
            </div>

            <div className="flex items-center gap-4 text-sm text-gray-600">
                <span className={`px-3 py-1 text-xs font-medium rounded-full ${urgencyClass}`}>
                    Urgency: {record.urgency}
                </span>
            </div>

            <button className="px-3 py-1 text-sm text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition mt-3 sm:mt-0">
                Open for Review
            </button>
        </div>
    );
};