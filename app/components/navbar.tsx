import Link from "next/link";
import Navmenu from "./navmenu";
import {
  AcademicCapIcon,
  FaceSmileIcon,
  RectangleGroupIcon,
} from "@heroicons/react/24/solid";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-mine-3 sticky top-0 shadow-md z-50">
      <Link
        href="/"
        className="text-xl font-bold text-mine-5 p-4 hover:bg-mine-4 rounded-md transition duration-200 ease-in-out border border-mine-5"
      >
        Khoa Nguyen&apos;s Portfolio
      </Link>
      <div className="md:hidden">
        <Navmenu />
      </div>
      <div className="hidden md:flex flex-row items-center space-x-4 text-mine-5 text-lg">
        <Link href="/#about" className="flex p-2 font-semibold">
          <FaceSmileIcon className="w-6 h-6 mr-2" />
          About Me
        </Link>
        <Link href="/#showcase" className="flex p-2 font-semibold">
          <RectangleGroupIcon className="w-6 h-6 mr-2" />
          Showcases
        </Link>
        <Link
          href="https://docs.google.com/document/d/1MKQN3tC2TXtfTmUJtJJb2XXopP8bWXEDKyaKVfHPs-4/edit?usp=sharing"
          className="flex bg-gradient-to-b from-mine-5 hover:from-mine-6 text-mine-7 p-4 font-bold rounded-t-md"
          target="_blank"
        >
          <AcademicCapIcon className="w-6 h-6 mr-2" />
          Resume
        </Link>
      </div>
    </nav>
  );
}
