'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, LogOut, User as UserIcon, Settings } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Navbar() {
    const router = useRouter();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [openUserDropdown, setOpenUserDropdown] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const lastScrollY = useRef(0);

    const [user, setUser] = useState(null);
    const isLoggedIn = !!user;

    const getInitials = (name) => {
        if (!name) return 'HC';
        const parts = name.split(' ');
        if (parts.length >= 2) {
            return (parts[0][0] + parts[1][0]).toUpperCase();
        }
        return name[0]?.toUpperCase() || 'HC';
    };

    useEffect(() => {
        const token = localStorage.getItem('healthchain-token');
        const userData = localStorage.getItem('healthchain-user');

        if (token && userData) {
            try {
                const parsedUser = JSON.parse(userData);
                const initials = getInitials(parsedUser.name);
                setUser({
                    ...parsedUser,
                    initials: initials,
                });
            } catch (e) {
                console.error("Failed to parse user data from localStorage:", e);
                localStorage.removeItem('healthchain-token');
                localStorage.removeItem('healthchain-user');
                setUser(null);
            }
        }
    }, []);

    const navItems = [
        { label: 'Home', href: '/' },
        {
            label: 'About Us',
            items: [
                { label: 'Overview', href: '/about/overview' },
                { label: 'Vision, Mission and Values', href: '/about/vision' },
                { label: 'Quality Policy', href: '/about/quality' },
            ],
        },
        {
            label: 'Patients',
            items: [
                { label: 'Doctors', href: '/patients/doctors' },
                { label: 'Doctor TimeTable', href: '/patients/timetable' },
                { label: 'Our Services', href: '/patients/services' },
                { label: 'How to Reach Us', href: '/patients/reach' },
            ],
        },
        {
            label: 'Health Info',
            items: [
                { label: 'Blogs', href: '/health/blogs' },
                { label: 'Newsletter', href: '/health/newsletter' },
                { label: 'Brochure', href: '/health/brochure' },
            ],
        },
        { label: 'Contact', href: '/contact' },
    ];

    const handleLinkClick = () => {
        setMobileOpen(false);
        setOpenDropdown(null);
        setOpenUserDropdown(false);
    };

    const handleLogout = () => {
        localStorage.removeItem('healthchain-token');
        localStorage.removeItem('healthchain-user');

        setUser(null); // Reset user state
        setOpenUserDropdown(false);
        router.push('/auth/login'); // Redirect to login page
    };


    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            // The logic below ensures the navbar hides when scrolling down rapidly past 50px
            // and reappears when scrolling up, or if the user is at the very top.
            if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
                setIsScrolled(true);
            } else if (currentScrollY < lastScrollY.current || currentScrollY <= 50) {
                setIsScrolled(false);
            }
            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Helper component for the round user icon/avatar
    const UserAvatar = () => (
        <button
            onClick={() => setOpenUserDropdown(prev => !prev)}
            className="w-10 h-10 rounded-full bg-teal-500 text-white flex items-center justify-center font-semibold text-sm shadow-md hover:ring-2 ring-teal-300 transition-all duration-200"
            aria-label="User Profile"
        >
            {user?.initials || <UserIcon className="w-5 h-5" />}
        </button>
    );

    // Helper component for the user profile dropdown menu
    const UserProfileDropdown = () => (
        <div
            className={`absolute right-0 top-full mt-4 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 p-2 transition-all duration-300 origin-top-right ${openUserDropdown
                ? 'opacity-100 scale-100 translate-y-0'
                : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                }`}
        >
            <div className="p-3 border-b border-gray-100 mb-2">
                <p className="text-sm font-semibold text-gray-900 truncate">{user?.name || 'Loading...'}</p>
                <p className="text-xs text-gray-500 truncate">{user?.email || 'N/A'}</p>
            </div>

            {/* Dashboard Link */}
            <Link
                href="/dashboard"
                onClick={handleLinkClick}
                className="flex items-center gap-2 w-full px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-teal-50 hover:text-teal-600 transition-colors"
            >
                <Settings className="w-4 h-4" /> Dashboard
            </Link>

            {/* Profile Link */}
            <Link
                href="/dashboard/profile"
                onClick={handleLinkClick}
                className="flex items-center gap-2 w-full px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-teal-50 hover:text-teal-600 transition-colors"
            >
                <UserIcon className="w-4 h-4" /> View Profile
            </Link>

            {/* Logout Button */}
            <button
                onClick={handleLogout}
                className="flex items-center gap-2 w-full px-3 py-2 text-sm text-red-600 rounded-lg hover:bg-red-50 mt-1 transition-colors"
            >
                <LogOut className="w-4 h-4" /> Log Out
            </button>
        </div>
    );

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-transform duration-300 ease-in-out ${isScrolled ? '-translate-y-full' : 'translate-y-0'
                }`}
        >
            <nav className="flex items-center justify-between px-4 py-3 md:px-6 lg:px-8 h-16 md:h-18 bg-white/90 backdrop-blur-xl border-b border-gray-200 shadow-md">
                <Link href="/" className="flex items-center">
                    <Image
                        src="/logo.svg" // Assuming you have a logo.svg in your public folder
                        alt="HealthChain Pakistan"
                        width={48}
                        height={48}
                        className="h-10 w-auto md:h-12 transition-transform hover:scale-105"
                    />
                </Link>

                {/* Desktop menu */}
                <div className="hidden lg:flex flex-1 justify-center items-center gap-1">
                    {navItems.map((item) =>
                        !item.items ? (
                            <Link
                                key={item.label}
                                href={item.href}
                                onClick={handleLinkClick}
                                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-teal-600 transition-all duration-200 hover:bg-teal-50/50 rounded-lg cursor-pointer"
                            >
                                {item.label}
                            </Link>
                        ) : (
                            <div
                                key={item.label}
                                className="relative group"
                                onMouseEnter={() => setOpenDropdown(item.label)}
                                onMouseLeave={() => setOpenDropdown(null)}
                            >
                                <button className={`flex items-center gap-1 px-4 py-2 text-sm font-medium ${openDropdown === item.label ? 'text-teal-600 bg-teal-50/50 rounded-lg' : 'text-gray-700 hover:text-teal-600 transition-all duration-200'}`}>
                                    {item.label}
                                    <ChevronDown
                                        className={`h-4 w-4 transition-transform duration-200 ${openDropdown === item.label ? 'rotate-180 text-teal-600' : 'text-gray-500'}`}
                                    />
                                </button>

                                <div
                                    className={`absolute top-full left-1/2 -translate-x-1/2 mt-0 w-64 bg-white/95 backdrop-blur-xl rounded-xl shadow-xl border border-gray-100 p-2 transition-all duration-300 origin-top ${openDropdown === item.label
                                        ? 'opacity-100 scale-100 translate-y-0'
                                        : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                                        }`}
                                >
                                    {item.items.map((sub) => (
                                        <Link
                                            key={sub.label}
                                            href={sub.href}
                                            onClick={handleLinkClick}
                                            className="block px-4 py-2.5 text-sm text-gray-700 rounded-lg hover:bg-teal-50 hover:text-teal-600 transition-all duration-200"
                                        >
                                            {sub.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )
                    )}
                </div>

                {/* Desktop AUTH buttons - CONDITIONAL RENDERING */}
                <div className="hidden lg:flex items-center gap-4 relative">
                    {isLoggedIn ? (
                        <>
                            <UserAvatar />
                            <UserProfileDropdown />
                        </>
                    ) : (
                        <>
                            <Link
                                href="/auth/login"
                                className="px-5 py-2 text-sm font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-100 rounded-lg transition-all cursor-pointer">
                                Sign In
                            </Link>
                            <Link
                                href="/auth/signUp"
                                className="px-6 py-2 text-sm font-semibold text-white bg-teal-600 rounded-lg shadow-md hover:bg-teal-700 hover:shadow-lg transition-all duration-200 cursor-pointer">
                                Get Started
                            </Link>
                        </>
                    )}
                </div>

                {/* Mobile menu button */}
                <div className="flex items-center gap-3 lg:hidden">
                    {/* Display avatar/initials on mobile if logged in */}
                    {isLoggedIn && <UserAvatar />}

                    <button
                        onClick={() => { setMobileOpen(!mobileOpen); setOpenUserDropdown(false); }} // Close user dropdown when opening mobile menu
                        className="p-2 rounded-lg hover:bg-teal-50 transition-all">
                        {mobileOpen ? (
                            <X className="h-6 w-6 text-gray-700" />
                        ) : (
                            <Menu className="h-6 w-6 text-gray-700" />
                        )}
                    </button>
                </div>
            </nav>

            {/* Mobile menu */}
            {mobileOpen && (
                <div className="lg:hidden absolute top-16 inset-x-0 bg-white/95 backdrop-blur-xl shadow-xl border-t border-gray-200 max-h-[85vh] overflow-y-auto">
                    <div className="px-4 py-6 space-y-3">
                        {navItems.map((item) =>
                            !item.items ? (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    onClick={handleLinkClick}
                                    className="block px-4 py-3 text-base font-medium text-gray-800 hover:bg-teal-50 hover:text-teal-600 rounded-lg transition-all"
                                >
                                    {item.label}
                                </Link>
                            ) : (
                                <div key={item.label}>
                                    <button
                                        onClick={() =>
                                            setOpenDropdown(openDropdown === item.label ? null : item.label)
                                        }
                                        className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-gray-800 hover:bg-teal-50 hover:text-teal-600 rounded-lg transition-all"
                                    >
                                        {item.label}
                                        <ChevronDown
                                            className={`h-5 w-5 transition-transform duration-200 ${openDropdown === item.label ? 'rotate-180' : ''
                                                }`}
                                        />
                                    </button>
                                    {openDropdown === item.label && (
                                        <div className="pl-6 mt-1 space-y-1 bg-gray-50 rounded-lg border border-gray-100 p-2">
                                            {item.items.map((sub) => (
                                                <Link
                                                    key={sub.label}
                                                    href={sub.href}
                                                    onClick={handleLinkClick}
                                                    className="block px-4 py-2 text-sm text-gray-600 hover:text-teal-600 hover:bg-white rounded-md transition-all"
                                                >
                                                    {sub.label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )
                        )}

                        <div className="flex flex-col pt-4 border-t border-gray-200 space-y-3 mt-4">
                            {isLoggedIn ? (
                                <>
                                    <p className="text-sm px-4 text-gray-500">Logged in as: <span className="font-semibold text-gray-700">{user?.name}</span></p>

                                    <Link
                                        href="/dashboard"
                                        onClick={handleLinkClick}
                                        className="w-full px-4 py-3 text-base text-center font-medium text-gray-700 bg-teal-50 hover:bg-teal-100 hover:text-teal-700 rounded-lg transition-all"
                                    >
                                        Go to Dashboard
                                    </Link>
                                    <button
                                        onClick={() => { handleLogout(); setMobileOpen(false); }}
                                        className="w-full px-4 py-3 text-base font-medium text-center text-red-600 border border-red-500 rounded-lg hover:bg-red-50 transition-all"
                                    >
                                        Log Out
                                    </button>
                                </>
                            ) : (
                                <>
                                    <Link
                                        href="/auth/login"
                                        onClick={handleLinkClick}
                                        className="w-full px-4 py-3 text-base text-center font-medium text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-lg transition-all"
                                    >
                                        Sign In
                                    </Link>
                                    <Link
                                        href="/auth/signUp"
                                        onClick={handleLinkClick}
                                        className="w-full px-4 py-3 text-base font-medium text-center text-white bg-teal-600 rounded-lg shadow-md hover:bg-teal-700 transition-all"
                                    >
                                        Get Started
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}
            {isLoggedIn && <div className="hidden lg:block absolute right-4 top-16 z-60"><UserProfileDropdown /></div>}
        </header>
    );
}