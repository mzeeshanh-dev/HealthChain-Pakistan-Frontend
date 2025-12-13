'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff, ChevronDown, ShieldCheck, UserPlus, HeartPulse, ArrowLeft } from "lucide-react";

import loginImage from "@/assets/login-image.jpg";

export default function SignUp() {
    const currentYear = new Date().getFullYear();
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        gender: "male",
        accountType: "patient",
        showPassword: false,
        showConfirm: false,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const togglePassword = (field) => {
        setFormData(prev => ({
            ...prev,
            [field === "password" ? "showPassword" : "showConfirm"]:
                !prev[field === "password" ? "showPassword" : "showConfirm"],
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        console.log("SignUp Data:", formData);
        // Handle signup logic here
    };

    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Left Side - Hero/Branding */}
            <div className="hidden md:flex w-1/2 relative flex-col justify-between p-12 text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={loginImage}
                        alt="Background"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-600/90 to-teal-800/90" />
                </div>

                <div className="relative z-10">
                    <div className="mb-8">
                        <Image
                            src="/logo.svg"
                            alt="HealthChain Logo"
                            width={120}
                            height={120}
                            className="w-44 h-auto brightness-0 invert"
                        />
                    </div>
                </div>

                <div className="relative z-10 mb-12">
                    <h2 className="text-4xl font-bold mb-6 leading-tight">
                        Join the Future of <br />
                        <span className="text-teal-200">Healthcare Management.</span>
                    </h2>
                    <p className="text-teal-100 text-lg max-w-md mb-8">
                        Create your account today to start managing your health records securely on the blockchain.
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-center gap-3 text-teal-50">
                            <UserPlus className="w-5 h-5 text-teal-300" />
                            <span>Easy Patient Registration</span>
                        </div>
                        <div className="flex items-center gap-3 text-teal-50">
                            <ShieldCheck className="w-5 h-5 text-teal-300" />
                            <span>HIPAA Compliant Security</span>
                        </div>
                        <div className="flex items-center gap-3 text-teal-50">
                            <HeartPulse className="w-5 h-5 text-teal-300" />
                            <span>Comprehensive Health Tracking</span>
                        </div>
                    </div>
                </div>

                <div className="text-teal-200 text-sm relative z-10">
                    © {currentYear} HealthChain Pakistan. All rights reserved.
                </div>
            </div>

            {/* Right Side - Sign Up Form */}
            <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6 md:p-12 bg-white overflow-y-auto">
                {/* Back to Home */}
                <div className="w-full max-w-md mb-4">
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-teal-600 hover:text-teal-700 hover:underline font-medium"
                    >
                        <ArrowLeft size={18} /> Back to Home
                    </Link>
                </div>

                <div className="md:hidden block mb-4">
                    <Image
                        src="/logo.svg"
                        alt="HealthChain Logo"
                        width={120}
                        height={120}
                        className="w-48 h-48"
                    />
                </div>

                <div className="w-full max-w-md space-y-6 my-auto">
                    <div className="text-center md:text-left">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h1>
                        <p className="text-gray-500">Fill in your details to get started.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Full Name */}
                        <div className="space-y-1.5">
                            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                placeholder="M. Zeeshan Haider"
                                required
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all duration-200"
                            />
                        </div>

                        {/* Email */}
                        <div className="space-y-1.5">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="you@example.com"
                                required
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all duration-200"
                            />
                        </div>

                        {/* Phone */}
                        <div className="space-y-1.5">
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="+92 300 1234567"
                                required
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all duration-200"
                            />
                        </div>

                        {/* Gender & Account Type */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Gender */}
                            <div className="space-y-1.5">
                                <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                                    Gender
                                </label>
                                <div className="relative">
                                    <select
                                        id="gender"
                                        name="gender"
                                        value={formData.gender}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all duration-200 appearance-none cursor-pointer"
                                    >
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                    <ChevronDown
                                        size={18}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                                    />
                                </div>
                            </div>

                            {/* Account Type */}
                            <div className="space-y-1.5">
                                <label htmlFor="accountType" className="block text-sm font-medium text-gray-700">
                                    Account Type
                                </label>
                                <div className="relative">
                                    <select
                                        id="accountType"
                                        name="accountType"
                                        value={formData.accountType}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all duration-200 appearance-none cursor-pointer"
                                    >
                                        <option value="patient">Patient</option>
                                        <option value="doctor">Doctor</option>
                                    </select>
                                    <ChevronDown
                                        size={18}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Password */}
                        <div className="space-y-1.5">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type={formData.showPassword ? "text" : "password"}
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="••••••••"
                                    required
                                    minLength={6}
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all duration-200 pr-12"
                                />
                                <button
                                    type="button"
                                    onClick={() => togglePassword("password")}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors p-1"
                                >
                                    {formData.showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        {/* Confirm Password */}
                        <div className="space-y-1.5">
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                                Confirm Password
                            </label>
                            <div className="relative">
                                <input
                                    type={formData.showConfirm ? "text" : "password"}
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    placeholder="••••••••"
                                    required
                                    minLength={6}
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all duration-200 pr-12"
                                />
                                <button
                                    type="button"
                                    onClick={() => togglePassword("confirm")}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors p-1"
                                >
                                    {formData.showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full py-3.5 bg-gradient-to-r from-teal-600 to-teal-500 text-white font-bold rounded-xl shadow-lg shadow-teal-500/20 hover:shadow-teal-500/30 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 mt-2"
                        >
                            Create Account
                        </button>
                    </form>

                    {/* Or sign up with */}
                    <div className="relative mt-4">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-200"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-4 bg-white text-gray-500">Or sign up with</span>
                        </div>
                    </div>

                    {/* Google Signup */}
                    <button
                        disabled
                        className="w-full py-3.5 border border-gray-200 rounded-xl flex items-center justify-center gap-3 bg-white text-gray-700 font-medium hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed mt-2"
                    >
                        <Image src="/google.png" alt="Google" width={20} height={20} />
                        <span>Sign up with Google</span>
                    </button>

                    <p className="text-center text-sm text-gray-600 pb-4">
                        Already have an account?{" "}
                        <Link
                            href="/auth/login"
                            className="font-semibold text-teal-600 hover:text-teal-700 hover:underline transition-all"
                        >
                            Sign In
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
