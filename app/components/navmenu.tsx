import Link from "next/link";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import {
  AcademicCapIcon,
  FaceSmileIcon,
  RectangleGroupIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";

export default function Navmenu() {
  return (
    <Menu>
      <MenuButton className="p-3 hover:bg-mine-4 text-mine-5 data-[open]:text-mine-7 data-[open]:bg-mine-5 data-[open]:border-mine-7 rounded-md transition duration-200 ease-in-out border border-mine-5">
        <Bars3Icon className="w-8 h-8" />
      </MenuButton>
      <MenuItems
        anchor="bottom end"
        transition={true}
        className="flex flex-col mt-2 p-2 z-50 text-mine-7 transition duration-200 ease-in-out bg-gradient-to-b from-mine-2 to-mine-3 shadow-lg rounded-md data-[closed]:-translate-y-1 data-[closed]:opacity-0"
      >
        <MenuItem>
          <Link
            href="https://docs.google.com/document/d/1MKQN3tC2TXtfTmUJtJJb2XXopP8bWXEDKyaKVfHPs-4/edit?usp=sharing"
            className="flex border-b-1 bg-gradient-to-b from-mine-5 border-mine-4 px-4 py-2 font-bold rounded-t-md"
            target="_blank"
          >
            <AcademicCapIcon className="w-6 h-6 mr-2" />
            Resume
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            href="/#about"
            className="flex border-b-1 border-mine-4 px-4 py-2 font-semibold"
          >
            <FaceSmileIcon className="w-6 h-6 mr-2" />
            About Me
          </Link>
        </MenuItem>
        <MenuItem>
          <Link href="/#showcase" className="flex px-4 py-2 font-semibold">
            <RectangleGroupIcon className="w-6 h-6 mr-2" />
            Showcases
          </Link>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
}
