import Image from "next/image";
import Link from "next/link";

export default function GridCard({
  link,
  name,
  src,
}: {
  link: string;
  name: string;
  src: string;
}) {
  return (
    <Link href={link} className="flex flex-col text-mine-8 rounded-md hover:">
      <div className="relative aspect-square">
        <Image
          src={src}
          alt={name}
          fill
          className="object-cover rounded-t-md"
        />
      </div>
      <div className="text-center text-lg font-semibold p-4 border-b-2 border-mine-2 rounded-b-md bg-gradient-to-b from-mine-4 to-mine-2">
        <div className="line-clamp-1">{name}</div>
      </div>
    </Link>
  );
}
