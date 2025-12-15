'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff, ChevronDown, CheckCircle2, Loader2, XCircle } from "lucide-react";
import { useRouter } from 'next/navigation';

import loginImage from "@/assets/login-image.jpg";

const API_URL = `${process.env.NEXT_PUBLIC_BACKEND_URI}/api/auth/login`;

export default function Login() {
    const router = useRouter();
    const currentYear = new Date().getFullYear();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [toastMessage, setToastMessage] = useState(null);
    const [toastType, setToastType] = useState('success');

    const showLocalToast = (message, type = 'success', duration = 3000) => {
        setToastMessage(message);
        setToastType(type);
        setTimeout(() => {
            setToastMessage(null);
        }, duration);
    };

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        category: "patient",
        remember: false,
        showPassword: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
        if (error) setError(null);
        if (toastMessage) setToastMessage(null);
    };

    const togglePassword = () => {
        setFormData((prev) => ({ ...prev, showPassword: !prev.showPassword }));
    };

    const clearFormFields = () => {
        setFormData(prev => ({
            ...prev,
            email: "",
            password: "",
            remember: false,
            showPassword: false,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setToastMessage(null);
        setIsLoading(true);

        const payload = {
            email: formData.email,
            password: formData.password,
            loginAs: formData.category,
        };

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            const data = await response.json();

            if (!response.ok || !data.success) {
                const msg = data.message || "Login failed. Invalid credentials or server error.";
                setError(msg);
                showLocalToast(msg, 'error', 5000);
                return;
            }

            localStorage.setItem('healthchain-token', data.token);
            clearFormFields();
            showLocalToast("Login successful! ", 'success');

        } catch (err) {
            const msg = "A network error occurred. Please check your connection or API_URL.";
            setError(msg);
            showLocalToast(msg, 'error', 5000);
        } finally {
            setIsLoading(false);
        }
    };

    const ToastDisplay = () => {
        if (!toastMessage) return null;

        const isSuccess = toastType === 'success';
        const Icon = isSuccess ? CheckCircle2 : XCircle;
        const colorClass = isSuccess ? "bg-teal-600" : "bg-red-600";

        return (
            <div
                className={`fixed bottom-6 right-6 z-1000 transition-opacity duration-300 ${toastMessage ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            >
                <div className={`flex items-center p-4 rounded-xl shadow-2xl font-medium text-white max-w-xs ${colorClass}`}>
                    <Icon className="w-5 h-5 mr-3" />
                    <span>{toastMessage}</span>
                </div>
            </div>
        );
    };

    return (
        <div className="flex min-h-screen bg-gray-50">
            <ToastDisplay />

            <div className="hidden md:flex w-1/2 relative flex-col justify-between p-12 text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={loginImage}
                        alt="Background"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-linear-to-br from-teal-600/90 to-teal-800/90" />
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
                        Welcome Back to <br />
                        <span className="text-teal-200">HealthChain.</span>
                    </h2>
                    <p className="text-teal-100 text-lg max-w-md mb-8">
                        Access your secure health records and manage your medical profile with ease.
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-center gap-3 text-teal-50">
                            <CheckCircle2 className="w-5 h-5 text-teal-300" />
                            <span>Secure Access</span>
                        </div>
                        <div className="flex items-center gap-3 text-teal-50">
                            <CheckCircle2 className="w-5 h-5 text-teal-300" />
                            <span>24/7 Availability</span>
                        </div>
                        <div className="flex items-center gap-3 text-teal-50">
                            <CheckCircle2 className="w-5 h-5 text-teal-300" />
                            <span>Real-time Updates</span>
                        </div>
                    </div>
                </div>

                <div className="text-teal-200 text-sm relative z-10">
                    © {currentYear} HealthChain Pakistan. All rights reserved.
                </div>
            </div>

            <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6 md:p-12 bg-white overflow-y-auto">
                <div className="w-full max-w-md mb-4">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-gray-600 hover:text-teal-600 font-medium transition-colors"
                    >
                        ← Back to Home
                    </Link>
                </div>

                <div className="md:hidden block">
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
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
                        <p className="text-gray-500">Please enter your details to sign in.</p>
                    </div>

                    {error && (
                        <div className="p-3 text-sm font-medium text-red-700 bg-red-50 border border-red-200 rounded-lg">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5">
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
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all duration-200 pr-12"
                                />
                                <button
                                    type="button"
                                    onClick={togglePassword}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors p-1"
                                >
                                    {formData.showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                                Login as
                            </label>
                            <div className="relative">
                                <select
                                    id="category"
                                    name="category"
                                    value={formData.category}
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

                        <div className="flex justify-between items-center">
                            <label className="flex items-center gap-2 cursor-pointer group">
                                <div className="relative flex items-center">
                                    <input
                                        type="checkbox"
                                        name="remember"
                                        checked={formData.remember}
                                        onChange={handleChange}
                                        className="peer sr-only"
                                    />
                                    <div className="w-5 h-5 border-2 border-gray-300 rounded transition-colors peer-checked:bg-teal-600 peer-checked:border-teal-600 peer-focus:ring-2 peer-focus:ring-teal-500/20"></div>
                                    <svg
                                        className="absolute w-3 h-3 text-white left-1 top-1 opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="3"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">Remember me</span>
                            </label>
                            <Link
                                href="/auth/forgot-password"
                                className="text-sm font-medium text-teal-600 hover:text-teal-700 hover:underline transition-all"
                            >
                                Forgot Password?
                            </Link>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full py-3.5 bg-linear-to-r from-teal-600 to-teal-500 text-white font-bold rounded-xl shadow-lg shadow-teal-500/20 hover:shadow-teal-500/30 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {isLoading && <Loader2 className="w-5 h-5 animate-spin" />}
                            {isLoading ? "Signing In..." : "Sign In"}
                        </button>
                    </form>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-200"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-4 bg-white text-gray-500">Or continue with</span>
                        </div>
                    </div>

                    <button
                        disabled
                        className="w-full py-3.5 border border-gray-200 rounded-xl flex items-center justify-center gap-3 bg-white text-gray-700 font-medium hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                        <Image src="/google.png" alt="Google" width={20} height={20} />
                        <span>Sign in with Google</span>
                    </button>

                    <p className="text-center text-sm text-gray-600">
                        Don't have an account?{" "}
                        <Link
                            href="/auth/signUp"
                            className="font-semibold text-teal-600 hover:text-teal-700 hover:underline transition-all"
                        >
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}