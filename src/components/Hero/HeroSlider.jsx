'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import img1 from '@/assets/images/Slider/slider1.webp'
import img2 from '@/assets/images/Slider/slider2.webp'
import img3 from '@/assets/images/Slider/slider3.webp'


const slides = [
    {
        url: img1,
        title: 'Blockchain‑Powered Healthcare',
        subtitle: 'Secure, transparent, patient‑centric',
    },
    {
        url: img2,
        title: 'Your Health Records, Your Control',
        subtitle: 'Access anytime, anywhere',
    },
    {
        url: img3,
        title: 'Connect with Top Doctors',
        subtitle: 'Book appointments in seconds',
    },
];

export default function HeroSlider() {
    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            loop
            className="h-full mt-17"
        >
            {slides.map((slide, i) => (
                <SwiperSlide key={i}>
                    <div className="relative h-full">
                        <Image
                            src={slide.url}
                            alt={slide.title}
                            fill
                            className="object-cover"
                            priority={i === 0}
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}