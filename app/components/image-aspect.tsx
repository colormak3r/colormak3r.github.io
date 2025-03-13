import Image from "next/image";

export default function ImageAspect({
  src,
  alt,
  aspectRatio,
  imageStyles = "",
  className = "",
  pilled = false,
}: {
  src: string;
  alt: string;
  aspectRatio: string;
  imageStyles?: string;
  className?: string;
  pilled?: boolean;
}) {
  return (
    <div
      className={`relative ${className}`}
      style={{ aspectRatio: aspectRatio }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className={`${
          pilled ? `rounded-full` : `rounded-md`
        } object-cover ${imageStyles}`}
      />
    </div>
  );
}
