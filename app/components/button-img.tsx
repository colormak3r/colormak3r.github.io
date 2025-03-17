import Link from "next/link";
import Image from "next/image";

export default function ImageButton({
  src,
  alt,
  link,
  newtab = true,
}: {
  src: string;
  alt: string;
  link: string;
  newtab?: boolean;
}) {
  return (
    <Link
      href={link}
      className="relative aspect-square bg-mine-4 hover:scale-110 transition duration-150 ease-in-out rounded-md p-4 min-w-15"
      target={newtab ? "_blank" : ""}
    >
      <Image src={src} alt={alt} fill className="object-fill p-3 rounded-md" />
    </Link>
  );
}
