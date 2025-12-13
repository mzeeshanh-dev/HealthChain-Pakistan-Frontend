'use client';

import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const currentYear = new Date().getFullYear();

export default function Footer() {
    const quickLinks = [
        { label: 'Home', href: '/' },
        { label: 'About Us', href: '/about' },
        { label: 'Patients', href: '/patients' },
        { label: 'Health Info', href: '/health' },
        { label: 'Contact', href: '/contact' },
    ];

    const socialLinks = [
        { icon: Facebook, href: '#', label: 'Facebook' },
        { icon: Twitter, href: '#', label: 'Twitter' },
        { icon: Linkedin, href: '#', label: 'LinkedIn' },
        { icon: Instagram, href: '#', label: 'Instagram' },
    ];

    return (
        <footer className="bg-teal-600 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Quick Links</h3>
                        <div className="grid grid-cols-2 gap-y-2 text-sm">
                            {quickLinks.map((link, i) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="text-white/80 hover:text-white transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Contact Us</h3>
                        <ul className="space-y-2 text-sm text-white/80">
                            <li className="flex items-center gap-2">
                                <Mail className="h-4 w-4" />
                                <a href="mailto:info@healthchain.pk" className="hover:text-white transition-colors">
                                    info@healthchain.pk
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone className="h-4 w-4" />
                                <a href="tel:+923446864785" className="hover:text-white transition-colors">
                                    +92 344 686 4785
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <MapPin className="h-4 w-4" />
                                <span>Rawalpindi, Pakistan</span>
                            </li>
                        </ul>
                    </div>

                    <div className="md:col-start-1 md:col-span-3 lg:col-start-auto lg:col-span-1">
                        <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white/80 hover:text-white transition-colors"
                                        aria-label={social.label}
                                    >
                                        <Icon className="h-5 w-5" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-teal-700 py-3">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-xs text-white/90">
                        © {currentYear} HealthChain Pakistan. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}