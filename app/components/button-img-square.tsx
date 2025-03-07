import Link from "next/link";
import Image from "next/image";

interface SquareImageButtonProps {
    src: string;
    alt: string;
    link: string;
}

export default function SquareImageButton({ src, alt, link }: SquareImageButtonProps) {
    return (
        <Link href={link} className="relative aspect-square bg-mine-4 hover:bg-mine-3 text-mine-8 rounded-md p-8">
            <Image
                src={src}
                alt={alt}
                fill
                className="object-cover p-3"
            />
        </Link>
    )
}
