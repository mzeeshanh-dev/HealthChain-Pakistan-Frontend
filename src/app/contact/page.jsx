import React from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Chatbot from '@/components/Chatbot';

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Header */}
            <section className="pt-32 pb-12 bg-teal-600 text-white">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Contact Us</h1>
                    <p className="text-teal-100 text-lg max-w-xl mx-auto">
                        Have questions about HealthChain? Our professional support team is here to assist doctors, labs, and patients.
                    </p>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* Column 1: Contact Info */}
                        <div className="space-y-12">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Institutional Support</h2>
                                <p className="text-gray-600 text-lg mb-8">
                                    For hospital onboarding, verification queries, or technical assistance,
                                    reach out through our official channels.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-teal-50 rounded-lg text-teal-600">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Headquarters</h4>
                                        <p className="text-gray-600">HealthChain Digital Plaza, Blue Area, Islamabad, Pakistan</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-teal-50 rounded-lg text-teal-600">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Phone</h4>
                                        <p className="text-gray-600">+92 (51) 123-4567</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-teal-50 rounded-lg text-teal-600">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Email</h4>
                                        <p className="text-gray-600">support@healthchain.pk</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-teal-50 rounded-lg text-teal-600">
                                        <Clock className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Business Hours</h4>
                                        <p className="text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Column 2: Contact Form */}
                        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-2xl border border-gray-100">
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                                        <input
                                            type="text"
                                            placeholder="Dr. Aman Ahmed"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                                        <input
                                            type="email"
                                            placeholder="name@institution.com"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                                    <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 outline-none appearance-none bg-white">
                                        <option>Institutional Verification</option>
                                        <option>Technical Support</option>
                                        <option>Partnership Inquiry</option>
                                        <option>General Feedback</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                                    <textarea
                                        rows="5"
                                        placeholder="How can we help you?"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 outline-none transition-all"
                                    ></textarea>
                                </div>

                                <button className="w-full bg-teal-600 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-teal-700 transition-colors shadow-lg hover:shadow-teal-200">
                                    <Send className="w-5 h-5" />
                                    Send Inquiry
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Chatbot />
        </main>
    );
}