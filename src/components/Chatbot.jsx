'use client';

import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, User, Bot } from 'lucide-react';

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, text: "Hello! I'm your HealthChain assistant. How can I help you today?", sender: 'bot' }
    ]);
    const [inputValue, setInputValue] = useState('');
    const scrollRef = useRef(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isOpen]);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        const userMsg = { id: Date.now(), text: inputValue, sender: 'user' };
        setMessages(prev => [...prev, userMsg]);
        setInputValue('');

        setTimeout(() => {
            const botMsg = {
                id: Date.now() + 1,
                text: "Hey! How can I assist you today?",
                sender: 'bot'
            };
            setMessages(prev => [...prev, botMsg]);
        }, 800);
    };

    return (
        <div className="fixed bottom-6 right-6 z-[9999]">
            {/* --- Chat Window --- */}
            {isOpen && (
                <div className="w-[350px] sm:w-[400px] h-[450px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden animate-in fade-in zoom-in duration-300">

                    {/* Header */}
                    <div className="bg-teal-600 p-4 text-white flex justify-between items-center shadow-md">
                        <div className="flex items-center gap-3">
                            <div className="bg-white/20 p-2 rounded-full">
                                <Bot className="w-5 h-5" /> {/* Increased size for visibility */}
                            </div>
                            <div>
                                <h3 className="font-bold text-sm leading-tight">HealthChain AI</h3>
                                <p className="text-[10px] opacity-80 flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                                    Online
                                </p>
                            </div>
                        </div>
                        {/* Close Button in Header */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="hover:bg-white/20 p-1.5 rounded-lg transition-colors outline-none"
                            aria-label="Close Chat"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Messages Area */}
                    <div
                        ref={scrollRef}
                        className="flex-1 overflow-y-auto p-4 space-y-2 bg-gray-50/50">
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div className={`flex items-end gap-2 max-w-[85%] ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                                    <div className={`p-1.5 rounded-full hidden sm:flex shrink-0 ${msg.sender === 'user' ? 'bg-teal-100 text-teal-600' : 'bg-gray-200 text-gray-600'}`}>
                                        {msg.sender === 'user' ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
                                    </div>
                                    <div className={`px-4 py-2.5 rounded-2xl text-sm shadow-sm leading-relaxed ${msg.sender === 'user'
                                        ? 'bg-teal-600 text-white rounded-br-none'
                                        : 'bg-white text-gray-800 border border-gray-100 rounded-bl-none'
                                        }`}>
                                        {msg.text}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Input Area */}
                    <form onSubmit={handleSendMessage} className="p-4 bg-white border-t flex gap-2 items-center">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Type a message..."
                            className="flex-1 bg-gray-100 border-none rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-teal-500 outline-none transition-all"
                        />
                        <button
                            type="submit"
                            className="bg-teal-600 text-white p-2.5 rounded-xl hover:bg-teal-700 transition-all active:scale-95 disabled:opacity-50"
                            disabled={!inputValue.trim()}
                        >
                            <Send className="w-5 h-5" />
                        </button>
                    </form>
                </div>
            )}

            {/* --- Floating Toggle Button (Hidden when isOpen is true) --- */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="p-4 bg-teal-600 text-white rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 flex items-center justify-center"
                >
                    <MessageCircle className="w-4 h-4" />
                </button>
            )}
        </div>
    );
}