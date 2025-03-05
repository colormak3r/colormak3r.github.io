import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-mine-3 sticky top-0 shadow-md z-50">
      <div className="text-xl font-bold text-mine-5 border rounded-md p-4">
        Khoa Nguyen&apos;s Portfolio
      </div>
      <div className="flex flex-row space-x-4">
        <Link
          href="/"
          className="text-mine-5 font-semibold hover:text-stone-900"
        >
          About Me
        </Link>
        <p className="text-mine-5 font-semibold">•</p>
        <Link
          href="/about"
          className="text-mine-5 font-semibold hover:text-stone-900"
        >
          Showcases
        </Link>
        <p className="text-mine-5 font-semibold">•</p>
        <Link
          href="https://docs.google.com/document/d/1MKQN3tC2TXtfTmUJtJJb2XXopP8bWXEDKyaKVfHPs-4/edit?usp=sharing"
          className="text-mine-5 font-semibold hover:text-stone-900"
        >
          Resume
        </Link>
      </div>
    </nav>
  );
}
