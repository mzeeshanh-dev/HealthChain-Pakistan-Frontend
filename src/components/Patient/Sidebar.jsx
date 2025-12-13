"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
    LayoutDashboard,
    Folder,
    Share2,
    Settings,
    LogOut,
    Menu,
    X
} from "lucide-react";

export default function Sidebar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    const menu = [
        { label: "Dashboard", icon: LayoutDashboard, href: "/patient/dashboard" },
        { label: "My Records", icon: Folder, href: "/patient/records" },
        { label: "Share Access", icon: Share2, href: "/patient/access" },
        { label: "Settings", icon: Settings, href: "/patient/settings" },
    ];

    const handleLogout = () => {
        // TODO: Add your actual logout logic
        console.log("Logging out...");
    };

    return (
        <>
            {/* Mobile Toggle Button */}
            <button
                onClick={() => setOpen(true)}
                className="md:hidden fixed top-4 left-4 z-50 bg-white/90 backdrop-blur-lg p-3 rounded-lg shadow-lg border"
            >
                <Menu className="h-6 w-6 text-gray-700" />
            </button>

            {/* Overlay for Mobile */}
            {open && (
                <div
                    onClick={() => setOpen(false)}
                    className="md:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
                />
            )}

            {/* Sidebar */}
            <aside
                className={`fixed md:static top-0 left-0 h-full w-64 bg-white border-r border-gray-200 px-5 py-6 transform transition-transform duration-300 z-50
          ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
            >
                {/* Close Button (Mobile) */}
                <button
                    onClick={() => setOpen(false)}
                    className="md:hidden absolute top-4 right-4 p-2 bg-gray-100 rounded-lg"
                >
                    <X className="h-5 w-5 text-gray-700" />
                </button>

                <h2 className="text-xl font-bold text-teal-700 mb-8">Patient Panel</h2>

                <nav className="space-y-2">
                    {menu.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.href;

                        return (
                            <Link
                                key={item.label}
                                href={item.href}
                                onClick={() => setOpen(false)}
                                className={`flex items-center gap-3 px-4 py-2 rounded-lg transition
                  ${isActive
                                        ? "bg-teal-600 text-white shadow-md"
                                        : "text-gray-700 hover:bg-teal-50 hover:text-teal-700"
                                    }
                `}
                            >
                                <Icon className="h-5 w-5" />
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>

                {/* Logout Button */}
                <button
                    onClick={handleLogout}
                    className="mt-40 flex items-center gap-3 px-4 py-2 rounded-lg text-red-600 border border-red-300 hover:bg-red-50 transition w-full"
                >
                    <LogOut className="h-5 w-5" />
                    Logout
                </button>
            </aside>
        </>
    );
}
