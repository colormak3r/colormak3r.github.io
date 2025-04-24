// // components/CarouselImage.tsx
"use client";

import { useState } from "react";
import ImageModal from "./modal-image";
import Image from "next/image";

export default function CarouselImage({
  src,
  alt,
  clickable = true,
  forcedCover = false,
}: {
  src: string;
  alt: string;
  clickable?: boolean;
  forcedCover?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* thumbnail / inline */}
      <div
        className="w-full aspect-video relative cursor-pointer bg-mine-1/50"
        onClick={() => clickable && setIsOpen(true)}
      >
        <Image
          src={src}
          alt={alt}
          fill
          style={{ objectFit: forcedCover ? "cover" : "contain" }}
        />
      </div>

      {/* lightbox modal */}
      {clickable && (
        <>
          <ImageModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <Image
              src={src}
              alt={alt}
              width={1600}
              height={900}
              style={{
                maxHeight: "90vh",
                maxWidth: "83vw",
                objectFit: "contain",
              }}
            />
          </ImageModal>
        </>
      )}
    </>
  );
}
