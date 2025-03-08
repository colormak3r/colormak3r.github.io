import Image from "next/image";

export default function ImageAspect({
  src,
  alt,
  aspectRatio,
  imageStyles = "",
  frameStyle = "",
}: {
  src: string;
  alt: string;
  aspectRatio: string;
  imageStyles?: string;
  frameStyle?: string;
}) {
  return (
    <div className={`relative aspect-${aspectRatio}  ${frameStyle}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className={`rounded-md object-cover ${imageStyles}`}
      />
    </div>
  );
}
