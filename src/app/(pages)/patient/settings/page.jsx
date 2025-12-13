"use client";

import Sidebar from "@/components/Patient/Sidebar";

export default function SettingsPage() {
    return (
        <div className="flex min-h-screen bg-gray-50">
            <Sidebar />
            <main className="flex-1 p-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">Settings</h1>

                <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-6">
                    <div>
                        <p className="font-medium text-gray-700">Name</p>
                        <input type="text" className="mt-2 w-full px-4 py-2 border rounded-lg" defaultValue="Muhammad Zeeshan Haider" />
                    </div>

                    <div>
                        <p className="font-medium text-gray-700">Email</p>
                        <input type="email" className="mt-2 w-full px-4 py-2 border rounded-lg" defaultValue="zh012948@gmail.com" />
                    </div>

                    <button className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition">
                        Save Changes
                    </button>
                </div>
            </main>
        </div>
    );
}
