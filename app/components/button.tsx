import Link from "next/link";

export default function Button({ href, text }: { href: string; text: string }) {
  return (
    <Link
      href={href}
      className="bg-mine-5 rounded-md p-4 font-semibold text-lg hover:scale-110 transition duration-150 ease-in-out"
      target="_blank"
    >
      {text}
    </Link>
  );
}
