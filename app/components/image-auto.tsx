import ImageAspect from "./image-aspect";
import Accordion from "./accordion";

export default function ImageAuto({
  src,
  aspectRatio,
  alt,
  className = "",
  imageStyles = "",
  pilled = false,
}: {
  src: string;
  aspectRatio: string;
  alt: string;
  className?: string;
  imageStyles?: string;
  pilled?: boolean;
}) {
  return (
    <>
      <ImageAspect
        src={src}
        aspectRatio={aspectRatio}
        alt={alt}
        className={`hidden md:block ${className}`}
        imageStyles={imageStyles}
        pilled={pilled}
      />
      <Accordion
        className="md:hidden"
        isOpen={false}
        title="Show My Photo"
        content={
          <>
            <ImageAspect
              src={src}
              aspectRatio={aspectRatio}
              alt={alt}
              className={className}
              imageStyles={imageStyles}
              pilled={pilled}
            />
          </>
        }
      />
    </>
  );
}
