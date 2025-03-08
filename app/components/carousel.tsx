"use client";

import React, { useState, ReactNode } from "react";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

export default function Carousel({
  contents,
  thumbs,
}: {
  contents: ReactNode;
  thumbs: ReactNode;
}) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="">
      <Swiper
        modules={[Autoplay, Thumbs]}
        spaceBetween={4}
        slidesPerView={1}
        thumbs={{ swiper: thumbsSwiper }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        autoplay={{ delay: 3000, disableOnInteraction: true }}
        className="rounded-lg shadow-lg mb-1"
      >
        {React.Children.map(contents, (child, index) => (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        modules={[Thumbs, FreeMode]}
        spaceBetween={4}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress
        onSwiper={setThumbsSwiper}
        className="cursor-pointer"
      >
        {React.Children.map(thumbs, (child, index) => (
          <SwiperSlide
            key={index}
            className={
              activeIndex === index
                ? "rounded-lg shadow-lg border-2 border-mine-8"
                : ""
            }
          >
            {child}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
