"use client";

import React, { useState, ReactNode } from "react";
import { Swiper as SwiperType } from "swiper";
import { Swiper } from "swiper/react";
import { Navigation, Pagination, Autoplay, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

export default function Carousel({ children }: { children: ReactNode }) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <div className="bg-mine-2 rounded-lg shadow-lg p-1">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, Thumbs]}
        spaceBetween={4}
        slidesPerView={1}
        navigation
        thumbs={{ swiper: thumbsSwiper }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="rounded-lg shadow-lg mb-1"
      >
        {children}
      </Swiper>
      <Swiper
        modules={[Thumbs, Navigation]}
        spaceBetween={4}
        slidesPerView={5}
        watchSlidesProgress
        onSwiper={setThumbsSwiper}
        className="cursor-pointer"
      >
        {children}
      </Swiper>
    </div>
  );
}
