
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import {
    LayoutDashboard,
    ClipboardList,
    User,
    Users,
    Settings,
    LogOut,
    Menu,
    X,
    FileSearch,
} from "lucide-react";

export default function DoctorSidebar() {
    const pathname = usePathname();
    const router = useRouter();
    const [open, setOpen] = useState(false);

    const menu = [
        { label: "Dashboard", icon: LayoutDashboard, href: "/doctor/dashboard" },
        { label: "Appointments", icon: ClipboardList, href: "/doctor/appointments" },
        { label: "My Patients", icon: Users, href: "/doctor/patients" },
        { label: "Records Review", icon: FileSearch, href: "/doctor/records-review" },
        { label: "My Profile", icon: User, href: "/doctor/profile" },
    ];

    const handleLogout = () => {
        localStorage.removeItem('healthchain-token');
        localStorage.removeItem('healthchain-user');
        localStorage.removeItem('healthchain-category');

        router.push('/auth/login');
    };

    return (
        <>
            <div className="mt-7">
                <button
                    onClick={() => setOpen(true)}
                    className="lg:hidden fixed top-4 left-4 z-50 bg-white/90 backdrop-blur-lg p-3 rounded-lg shadow-lg border"
                    aria-label="Open menu"
                >
                    <Menu className="h-6 w-6 text-gray-700" />
                </button>

                {open && (
                    <div
                        onClick={() => setOpen(false)}
                        className="lg:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
                    />
                )}

                <aside
                    className={`fixed lg:static top-0 left-0 h-full w-64 bg-white border-r border-gray-200 px-5 py-6 transform transition-transform duration-300 z-50 overflow-y-auto
          ${open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}>
                    <button
                        onClick={() => setOpen(false)}
                        className="lg:hidden absolute top-4 right-4 p-2 bg-gray-100 rounded-lg"
                        aria-label="Close menu"
                    >
                        <X className="h-5 w-5 text-gray-700" />
                    </button>

                    <div className="flex items-center gap-2 mb-8">
                        <h2 className="text-xl font-bold text-teal-700">Doctor Panel</h2>
                    </div>


                    <nav className="flex flex-col h-[calc(100vh-100px)] justify-between">
                        <div className="space-y-2">
                            {menu.map((item) => {
                                const Icon = item.icon;
                                const isActive = pathname.startsWith(item.href);

                                return (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        onClick={() => setOpen(false)}
                                        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition
                                      ${isActive
                                                ? "bg-teal-600 text-white shadow-md shadow-teal-500/20"
                                                : "text-gray-700 hover:bg-teal-50 hover:text-teal-700"
                                            }
                                    `}
                                    >
                                        <Icon className="h-5 w-5" />
                                        {item.label}
                                    </Link>
                                );
                            })}
                        </div>

                        {/* Logout Button */}
                        <button
                            onClick={handleLogout}
                            className="flex items-center gap-3 px-4 py-3 rounded-xl text-red-600 font-medium border border-red-300 hover:bg-red-50 transition w-full"
                        >
                            <LogOut className="h-5 w-5" />
                            Logout
                        </button>
                    </nav>
                </aside>
            </div>
        </>
    );
}