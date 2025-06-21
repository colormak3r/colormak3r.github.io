import Link from "next/link";

export default function Button({
  href,
  text,
  style = "",
}: {
  href: string;
  text: string;
  style?: string;
}) {
  return (
    <Link
      href={href}
      className={`bg-mine-5 rounded-md p-4 font-semibold text-lg hover:scale-110 transition duration-150 ease-in-out flex items-center justify-center ${style}`}
      target="_blank"
    >
      {text}
    </Link>
  );
}
