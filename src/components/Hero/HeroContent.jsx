'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const container = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

export default function HeroContent() {
    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="absolute inset-0 flex items-center justify-center text-center px-4"
        >
            <div className="max-w-4xl">
                <motion.h1
                    variants={item}
                    className="text-4xl md:text-6xl font-bold text-white mb-4">
                    Revolutionizing Healthcare in Pakistan
                </motion.h1>
                <motion.p
                    variants={item}
                    className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto"
                >
                    Secure medical records, instant doctor access, and transparent care — all on blockchain.
                </motion.p>
                <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/auth/signup"
                        className="px-8 py-3 bg-teal-600 text-white font-semibold rounded-lg shadow-lg hover:bg-teal-700 transition"
                    >
                        Get Started
                    </Link>
                    <Link
                        href="/patients/doctors"
                        className="px-8 py-3 bg-white/20 backdrop-blur text-white font-semibold rounded-lg border border-white/30 hover:bg-white/30 transition"
                    >
                        Find a Doctor
                    </Link>
                </motion.div>
            </div>
        </motion.div>
    );
}