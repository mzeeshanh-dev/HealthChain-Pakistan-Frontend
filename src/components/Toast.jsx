'use client'
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const Toast = ({ message, type = 'success', onClose }) => {
    const baseClasses = "flex items-center p-4 rounded-xl shadow-lg font-medium text-white max-w-xs";
    const typeClasses = {
        success: "bg-teal-600",
        error: "bg-red-600",
        info: "bg-blue-600",
    };
    const Icon = type === 'success' ? CheckCircle : type === 'error' ? CheckCircle : CheckCircle; // Using CheckCircle for success only

    return (
        <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.5 }}
            transition={{ duration: 0.3 }}
            className={`${baseClasses} ${typeClasses[type]}`}>
            <Icon className="w-5 h-5 mr-3" />
            <span>{message}</span>
        </motion.div>
    );
};

export default Toast;