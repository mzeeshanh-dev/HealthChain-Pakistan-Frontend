"use client"
import Hero from '@/components/Hero/Hero';
import Features from '@/components/Hero/Features';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Services from '@/components/Hero/Services';
import Loader from '@/components/Loader';
import Chatbot from '@/components/Chatbot';
import { useEffect, useState } from 'react';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [])

  if (loading) {
    return (
      <Loader />
    )
  }
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Services />
      <Chatbot />
      <Footer />
    </>
  );
}