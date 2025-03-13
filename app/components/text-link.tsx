import Link from "next/link";

export default function TextLink({
  text,
  href,
  className = "",
}: {
  text: string;
  href: string;
  className?: string;
}) {
  return (
    <>
      <Link
        href={href}
        className={`underline text-mine-6 hover:text-mine-5 focus:text-mine-3 ${className}`}
        target="_blank"
      >
        {text}
      </Link>
    </>
  );
}
