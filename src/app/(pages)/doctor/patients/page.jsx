
import DoctorSidebar from "@/components/Doctor/DoctorSidebar";
import { Users, Search, Folder, MessageSquare, ClipboardList } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function DoctorPatientsPage() {
    // Dummy Data for Patients
    const patients = [
        { id: 101, name: "Muhammad Zeeshan", age: 35, lastVisit: "1 week ago", recordCount: 12 },
        { id: 102, name: "Fatima Ahmed", age: 52, lastVisit: "3 days ago", recordCount: 8 },
        { id: 103, name: "Ali Hassan", age: 28, lastVisit: "1 month ago", recordCount: 5 },
        { id: 104, name: "Sana Tariq", age: 44, lastVisit: "2 weeks ago", recordCount: 15 },
        { id: 105, name: "Usman Khan", age: 60, lastVisit: "2 days ago", recordCount: 18 },
    ];

    return (
        <>
            <Navbar />
            <div className="flex min-h-screen bg-gray-50 mt-12">
                <DoctorSidebar />
                <main className="flex-1 lg:ml-64 p-4 sm:p-6 lg:p-8 pt-20 lg:pt-8">
                    <header className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 flex items-center">
                            <Users className="w-8 h-8 mr-3 text-teal-600" />
                            My Patient List
                        </h1>
                        <p className="text-gray-500">Quickly access and manage the profiles of your connected patients.</p>
                    </header>

                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                        {/* Search Bar */}
                        <div className="relative mb-6">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search patients..."
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                            />
                        </div>

                        {/* Patient Table Header */}
                        <div className="hidden sm:grid grid-cols-6 gap-4 py-3 px-4 text-sm font-semibold text-gray-600 border-b border-gray-200">
                            <div className="col-span-2">Patient Name</div>
                            <div>ID</div>
                            <div>Age</div>
                            <div>Last Visit</div>
                            <div>Actions</div>
                        </div>

                        {/* Patient List */}
                        <div className="space-y-3 mt-3">
                            {patients.map(patient => (
                                <PatientRow key={patient.id} patient={patient} />
                            ))}
                            {patients.length === 0 && (
                                <p className="text-center text-gray-500 py-10">No patients found.</p>
                            )}
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}

// Helper component for Patient Table Row/Card
const PatientRow = ({ patient }) => (
    <div className="grid grid-cols-1 sm:grid-cols-6 gap-3 sm:gap-4 items-center p-4 bg-gray-50 rounded-xl border border-gray-100 hover:bg-gray-100 transition">

        {/* Patient Name (Col 1-2 on desktop) */}
        <div className="col-span-2 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center font-medium">
                {patient.name[0]}
            </div>
            <span className="font-semibold text-gray-900">{patient.name}</span>
        </div>

        {/* Details (Col 3-5 on desktop) */}
        <div className="text-sm text-gray-600 hidden sm:block">#{patient.id}</div>
        <div className="text-sm text-gray-600 hidden sm:block">{patient.age}</div>
        <div className="text-sm text-gray-600 hidden sm:block">{patient.lastVisit}</div>

        {/* Actions (Col 6 on desktop) */}
        <div className="col-span-1 flex gap-2 pt-2 sm:pt-0">
            <button title="View Records" className="p-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition">
                <Folder className="w-5 h-5" />
            </button>
            <button title="Schedule Appointment" className="p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
                <ClipboardList className="w-5 h-5" />
            </button>
            <button title="Send Message" className="p-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition">
                <MessageSquare className="w-5 h-5" />
            </button>
        </div>
    </div>
);