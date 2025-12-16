"use client";

import { useState, useEffect } from 'react';
import DoctorSidebar from "@/components/Doctor/DoctorSidebar"; // Adjust path as needed
import { User, Mail, Stethoscope, Phone, MapPin, Loader2, XCircle, Award, Calendar } from "lucide-react";
import Navbar from '@/components/Navbar';

export default function DoctorProfilePage() {
    const [userProfile, setUserProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadProfile = () => {
            const userData = localStorage.getItem('healthchain-user');

            if (userData) {
                try {
                    const parsedData = JSON.parse(userData);
                    setUserProfile({
                        ...parsedData,
                        phone: '0345-7890123',
                        specialty: 'Cardiology',
                        licence: 'PK-4598-AB',
                        hospital: 'Islamabad General Hospital',
                        memberSince: '2015-05-10',
                    });
                    setLoading(false);
                } catch (e) {
                    setError("Error parsing user data. Please log in again.");
                    setLoading(false);
                }
            } else {
                setError("Doctor data not found. Please log in.");
                setLoading(false);
            }
        };

        loadProfile();
    }, []);


    if (loading) {
        return (
            <ProfileLayout>
                <div className="flex items-center justify-center h-48">
                    <Loader2 className="w-8 h-8 animate-spin text-teal-600" />
                    <p className="ml-3 text-gray-600">Loading doctor profile...</p>
                </div>
            </ProfileLayout>
        );
    }

    if (error || !userProfile) {
        return (
            <ProfileLayout>
                <div className="flex items-center justify-center h-48 p-6 bg-red-50 border border-red-200 rounded-xl text-red-700">
                    <XCircle className="w-6 h-6 mr-3" />
                    <p className="font-medium">{error || "Profile could not be loaded."}</p>
                </div>
            </ProfileLayout>
        );
    }

    const getInitials = (name) => {
        if (!name) return 'DR';
        const parts = name.split(' ');
        if (parts.length >= 2) {
            return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
        }
        return name[0]?.toUpperCase() || 'DR';
    };


    return (
        <>
            <Navbar />
            <ProfileLayout>
                <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-100">

                    {/* Header: Avatar and Name */}
                    <div className="flex items-center gap-6 border-b pb-6 mb-6">
                        <div className="w-20 h-20 rounded-full bg-indigo-600 text-white flex items-center justify-center text-3xl font-bold flex-shrink-0">
                            {getInitials(userProfile.name)}
                        </div>
                        <div>
                            <h1 className="text-3xl font-extrabold text-gray-900">{userProfile.name}</h1>
                            <p className="text-lg text-gray-500">{userProfile.specialty || 'Medical Professional'}</p>
                        </div>
                    </div>

                    {/* Profile Details Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                        <ProfileItem icon={Mail} label="Email Address" value={userProfile.email} />
                        <ProfileItem icon={Phone} label="Contact Number" value={userProfile.phone || 'N/A'} />
                        <ProfileItem icon={Stethoscope} label="Specialty" value={userProfile.specialty || 'N/A'} />
                        <ProfileItem icon={Award} label="Medical Licence No." value={userProfile.licence || 'N/A'} />
                        <ProfileItem icon={MapPin} label="Primary Hospital" value={userProfile.hospital || 'N/A'} />
                        <ProfileItem icon={Calendar} label="Practicing Since" value={userProfile.memberSince || 'N/A'} />
                    </div>

                    {/* Action Button */}
                    <div className="mt-8 pt-6 border-t">
                        <button
                            className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700 transition"
                            onClick={() => alert("Simulating edit profile...")}
                        >
                            Update Credentials
                        </button>
                    </div>
                </div>
            </ProfileLayout>
        </>
    );
}


// Layout wrapper to keep the sidebar context clean
const ProfileLayout = ({ children }) => (
    <div className="flex min-h-screen bg-gray-50 mt-12">
        <DoctorSidebar />
        <main className="flex-1 lg:ml-64 p-4 sm:p-6 lg:p-8 pt-20 lg:pt-8">
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
                <p className="text-gray-500">View and update your professional and personal information.</p>
            </header>
            {children}
        </main>
    </div>
);

// Helper component for detail items
const ProfileItem = ({ icon: Icon, label, value }) => (
    <div className="flex flex-col">
        <div className="flex items-center text-sm font-medium text-gray-500 mb-1">
            <Icon className="w-4 h-4 mr-2 text-teal-600" />
            {label}
        </div>
        <p className="text-gray-800 font-semibold">{value}</p>
    </div>
);