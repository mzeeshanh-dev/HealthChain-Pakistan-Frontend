
import DoctorSidebar from "@/components/Doctor/DoctorSidebar";
import { Calendar, Clock, User, ListFilter, Search } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function DoctorAppointmentsPage() {
    // Dummy Data for Appointments
    const appointments = [
        { id: 1, name: "Muhammad Zeeshan", time: "09:00 AM", date: "Today", reason: "Follow-up", status: "Confirmed" },
        { id: 2, name: "Fatima Ahmed", time: "10:00 AM", date: "Today", reason: "New Consultation", status: "Confirmed" },
        { id: 3, name: "Ali Hassan", time: "11:00 AM", date: "Tomorrow", reason: "Blood Report Review", status: "Confirmed" },
        { id: 4, name: "Sana Tariq", time: "02:30 PM", date: "Tomorrow", reason: "General Checkup", status: "Pending" },
        { id: 5, name: "Usman Khan", time: "03:00 PM", date: "2025-12-20", reason: "Chronic Care", status: "Confirmed" },
    ];

    return (
        <>
            <Navbar />
            <div className="flex min-h-screen bg-gray-50 mt-12">
                <DoctorSidebar />
                <main className="flex-1 lg:ml-64 p-4 sm:p-6 lg:p-8 pt-20 lg:pt-8">
                    <header className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 flex items-center">
                            <Calendar className="w-8 h-8 mr-3 text-teal-600" />
                            Appointment Schedule
                        </h1>
                        <p className="text-gray-500">Manage your current and upcoming patient appointments.</p>
                    </header>

                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                        {/* Filters and Search */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-6">
                            <div className="relative flex-grow">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search appointments by patient name..."
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                                />
                            </div>
                            <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg border hover:bg-gray-200 transition">
                                <ListFilter className="w-4 h-4" /> Filter
                            </button>
                        </div>

                        {/* Appointments List */}
                        <div className="space-y-4">
                            {appointments.map(appt => (
                                <AppointmentCard key={appt.id} appt={appt} />
                            ))}
                            {appointments.length === 0 && (
                                <p className="text-center text-gray-500 py-10">No appointments scheduled.</p>
                            )}
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}

// Helper component for Appointment Card
const AppointmentCard = ({ appt }) => {
    let statusClass = appt.status === 'Confirmed' ? 'text-green-600 bg-green-50 border-green-200' : 'text-yellow-600 bg-yellow-50 border-yellow-200';

    return (
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 border border-gray-200 rounded-xl hover:shadow-md transition bg-white">
            <div className="flex items-center gap-4 mb-3 sm:mb-0">
                <div className="p-3 bg-teal-50 rounded-full">
                    <User className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                    <p className="font-semibold text-gray-900">{appt.name}</p>
                    <p className="text-sm text-gray-500">{appt.reason}</p>
                </div>
            </div>

            <div className="flex items-center gap-4 text-sm text-gray-600">
                <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1 text-teal-500" /> {appt.date}
                </span>
                <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1 text-teal-500" /> {appt.time}
                </span>
                <span className={`px-3 py-1 text-xs font-medium rounded-full ${statusClass}`}>
                    {appt.status}
                </span>
            </div>

            <button className="px-3 py-1 text-sm text-white bg-teal-600 rounded-lg hover:bg-teal-700 transition mt-3 sm:mt-0">
                Start Call
            </button>
        </div>
    );
};