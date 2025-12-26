
import DoctorSidebar from "@/components/Doctor/DoctorSidebar";
import Link from "next/link";
import { Calendar, User, Clock, CheckCircle, Users } from "lucide-react";
import Navbar from "@/components/Navbar";


export default function DoctorDashboardPage() {
    return (
        <>
            <Navbar />
            <div className="flex min-h-screen bg-gray-50 mt-12">
                {/* Sidebar */}
                <DoctorSidebar />

                {/* Main Content Area */}
                <main className="flex-1  lg:ml-64 p-4 sm:p-6 lg:p-8 pt-20 lg:pt-8">
                    <header className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900">Physician Dashboard</h1>
                        <p className="text-gray-500">Overview of your practice and upcoming schedule.</p>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        {/* Stat Card 1: Total Patients */}
                        <StatCard
                            icon={Users}
                            title="Total Active Patients"
                            value="85"
                            bgColor="bg-teal-600"
                        />
                        {/* Stat Card 2: Today's Appointments */}
                        <StatCard
                            icon={Calendar}
                            title="Appointments Today"
                            value="7"
                            bgColor="bg-indigo-600"
                        />
                        {/* Stat Card 3: Pending Tasks (e.g., Records to Review) */}
                        <StatCard
                            icon={CheckCircle}
                            title="Pending Reviews"
                            value="4"
                            bgColor="bg-amber-600"
                        />
                        {/* Stat Card 4: Next Appointment Time */}
                        <StatCard
                            icon={Clock}
                            title="Next Appointment"
                            value="9:30 AM"
                            bgColor="bg-rose-600"
                        />
                    </div>

                    {/* Main Content Sections */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Upcoming Appointments (2/3 width) */}
                        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex justify-between items-center">
                                Upcoming Appointments
                                <Link href="/doctor/appointments" className="text-sm text-teal-600 hover:text-teal-700">View All</Link>
                            </h2>
                            <ul className="space-y-3">
                                <AppointmentItem patientName="Muhammad Zeeshan Haider" time="9:30 AM" reason="Follow-up checkup" />
                                <AppointmentItem patientName="Fatima Ahmed" time="10:00 AM" reason="New patient consultation" />
                                <AppointmentItem patientName="Ali Hassan" time="10:45 AM" reason="Blood test review" />
                            </ul>
                        </div>

                        {/* New Patient Requests/Alerts (1/3 width) */}
                        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">Patient Alerts & Requests</h2>
                            <div className="space-y-4">
                                <AlertItem title="New Patient Record Access" detail="Requested by Jane Doe" type="access" />
                                <AlertItem title="Urgent Message" detail="From Hospital Admin" type="message" />
                                <AlertItem title="Consultation Request" detail="New inquiry from Patient ID 456" type="request" />
                            </div>
                            <div className="mt-6 text-center">
                                <Link href="/doctor/patients" className="text-teal-600 font-medium hover:text-teal-700 transition">
                                    Manage Patients →
                                </Link>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}

// --- Helper Components ---

const StatCard = ({ icon: Icon, title, value, bgColor }) => (
    <div className={`p-5 rounded-xl text-white shadow-xl ${bgColor}`}>
        <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium opacity-80">{title}</h3>
            <Icon className="w-6 h-6 opacity-80" />
        </div>
        <p className="text-3xl font-bold mt-2">{value}</p>
    </div>
);

const AppointmentItem = ({ patientName, time, reason }) => (
    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg border border-gray-100">
        <div className="flex flex-col">
            <span className="font-medium text-gray-800">{patientName}</span>
            <span className="text-xs text-gray-500">{reason}</span>
        </div>
        <span className="text-sm font-semibold text-teal-600 flex items-center">
            <Clock className="w-4 h-4 mr-1" /> {time}
        </span>
    </div>
);

const AlertItem = ({ title, detail, type }) => {
    let typeClass = "text-yellow-600 bg-yellow-50 border-yellow-200";
    if (type === 'message') typeClass = "text-blue-600 bg-blue-50 border-blue-200";
    if (type === 'access') typeClass = "text-purple-600 bg-purple-50 border-purple-200";

    return (
        <div className={`p-3 rounded-lg border ${typeClass}`}>
            <p className="font-medium text-sm">{title}</p>
            <p className="text-xs opacity-80 mt-1">{detail}</p>
        </div>
    );
};