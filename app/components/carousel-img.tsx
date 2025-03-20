"use client";

import ImageAspect from "./image-aspect";

export default function CarouselImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <>
      <ImageAspect src={src} alt={alt} aspectRatio="16/9" />
    </>
  );
}
