'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const lastScrollY = useRef(0);

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
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
                setIsScrolled(true);
            } else if (currentScrollY < lastScrollY.current) {
                setIsScrolled(false);
            }
            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed mb-10 inset-x-0 top-0 z-50 transition-transform duration-200 ease-out ${isScrolled ? '-translate-y-full' : 'translate-y-0'
                }`}
        >
            <nav className="flex items-center justify-between px-4 py-3 md:px-6 lg:px-8 h-16 md:h-18 bg-white/80 backdrop-blur-xl border-b border-teal-100/20 shadow-lg">
                <Link href="/" className="flex items-center">
                    <Image
                        src="/logo.svg"
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
                                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-teal-600 transition-all duration-200 hover:scale-105 cursor-pointer"
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
                                <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 hover:text-teal-600 transition-all duration-200">
                                    {item.label}
                                    <ChevronDown
                                        className={`h-4 w-4 transition-transform duration-200 ${openDropdown === item.label ? 'rotate-180' : ''
                                            }`}
                                    />
                                </button>

                                <div
                                    className={`absolute top-full left-1/2 -translate-x-1/2 mt-0 w-64 bg-white/95 backdrop-blur-xl rounded-xl shadow-xl border border-teal-100 p-2 transition-all duration-300 origin-top ${openDropdown === item.label
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

                {/* Desktop buttons */}
                <div className="hidden lg:flex items-center gap-3">
                    <Link
                        href="/auth/login"
                        className="px-5 py-2 text-sm font-medium text-gray-700 hover:text-teal-600 transition-all hover:scale-105 cursor-pointer"
                    >
                        Sign In
                    </Link>
                    <Link
                        href="/auth/signUp"
                        className="px-6 py-2 text-sm font-medium text-white bg-teal-700 rounded-lg shadow-md hover:bg-teal-700 hover:shadow-xl transition-all duration-200 hover:scale-105 cursor-pointer"
                    >
                        Get Started
                    </Link>
                </div>

                {/* Mobile menu button */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="lg:hidden p-2 rounded-lg hover:bg-teal-50 transition-all"
                >
                    {mobileOpen ? (
                        <X className="h-6 w-6 text-gray-700" />
                    ) : (
                        <Menu className="h-6 w-6 text-gray-700" />
                    )}
                </button>
            </nav>

            {/* Mobile menu */}
            {mobileOpen && (
                <div className="lg:hidden absolute top-16 inset-x-0 bg-white/95 backdrop-blur-xl shadow-xl border-t border-teal-100">
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
                                        <div className="pl-6 mt-1 space-y-1">
                                            {item.items.map((sub) => (
                                                <Link
                                                    key={sub.label}
                                                    href={sub.href}
                                                    onClick={handleLinkClick}
                                                    className="block px-4 py-2 text-sm text-gray-600 hover:text-teal-600 transition-all"
                                                >
                                                    {sub.label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )
                        )}

                        <div className="flex flex-col pt-4 border-t border-gray-200 space-y-3">
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
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
