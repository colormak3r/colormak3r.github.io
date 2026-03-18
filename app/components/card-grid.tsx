import Image from "next/image";
import Link from "next/link";

export default function GridCard({
  link,
  name,
  src,
  newTab = false,
}: {
  link: string;
  name: string;
  src: string;
  newTab?: boolean;
}) {
  return (
    <Link
      href={link}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noopener noreferrer" : undefined}
      className="flex flex-col rounded-md hover:scale-105 transition duration-150 ease-in-out"
    >
      <div className="relative aspect-square">
        <Image
          src={src}
          alt={name}
          fill
          className="object-cover rounded-t-md"
        />
      </div>
      <div className="text-center text-lg font-semibold p-4 border-b-2 border-mine-2 rounded-b-md bg-gradient-to-b from-mine-4 to-mine-3">
        <div className="line-clamp-1">{name}</div>
      </div>
    </Link>
  );
}