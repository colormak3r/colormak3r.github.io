import Image from "next/image";

export default function ImageAspect({
  src,
  alt,
  aspectRatio,
  imageStyles = "",
  className = "",
  pilled = false,
  contain = false,
}: {
  src: string;
  alt: string;
  aspectRatio: string;
  imageStyles?: string;
  className?: string;
  pilled?: boolean;
  contain?: boolean;
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
        } ${contain?`object-contain`:`object-cover`} ${imageStyles} bg-radial from-mine-4 to-mine-2`}
      />
    </div>
  );
}
