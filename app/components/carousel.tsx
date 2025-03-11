"use client";

import { ReactNode, useRef, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export interface CarouselItem {
  main: ReactNode;
  thumb: ReactNode;
}

interface ThumbCarouselProps {
  items: CarouselItem[];
}

const mainBk = {
  default: { breakpoint: { max: 9999, min: 0 }, items: 1 },
};

const thumbBk = {
  desktop: { breakpoint: { max: 9999, min: 768 }, items: 5 },
  mobile: { breakpoint: { max: 768, min: 0 }, items: 2 },
};

export default function ThumbCarousel({ items }: ThumbCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const mainRef = useRef<Carousel>(null);
  const thumbRef = useRef<Carousel>(null);

  const handleThumbClick = (index: number) => {
    setCurrentIndex(index);
    if (mainRef.current) {
      mainRef.current.goToSlide(index);
    }
  };

  return (
    <>
      <Carousel
        ref={mainRef}
        responsive={mainBk}
        swipeable={true}
        beforeChange={(nextSlide, state) => {
          console.log("beforeChange next:", state);
          setCurrentIndex(nextSlide);
          thumbRef.current?.goToSlide(nextSlide);
        }}
        className="mb-2"
      >
        {items.map((item, idx) => (
          <div key={idx}>{item.main}</div>
        ))}
      </Carousel>

      <Carousel
        ref={thumbRef}
        responsive={thumbBk}
        swipeable={true}
        arrows={false}
        centerMode={true}
        className=""
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            onClick={() => {
              handleThumbClick(idx);
            }}
            className={`cursor-pointer border-2 rounded-md ${
              idx === currentIndex ? "border-mine-7" : "border-transparent"
            }`}
          >
            {item.thumb}
          </div>
        ))}
        {/* Extra button slide */}
        <div
          onClick={() => handleThumbClick(0)}
          className="cursor-pointer rounded-md border-2 border-mine-4 h-full transition duration-150 flex items-center justify-center ml-1 text-2xl bg-mine-3 hover:bg-mine-5"
        >
          🔙
        </div>
      </Carousel>
    </>
  );
}
