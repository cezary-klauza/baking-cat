"use client";

import { navbarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { MenuIcon } from "lucide-react";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const NavLink = ({
  link,
  title,
  isActive,
}: {
  link: string;
  title: string;
  isActive: boolean;
}) => (
  <Link href={link}>
    <li
      className={clsx(
        "text-gray-1 hover:text-gray-2 font-medium transition-all duration-200 max-md:text-xl",
        { "text-gray-2": isActive }
      )}
    >
      {title}
    </li>
  </Link>
);

const Navbar = () => {
  const pathname = usePathname();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <nav className="flex w-full justify-between items-center py-3">
      <Image
        src="/logo-large.png"
        alt="logo"
        width={140}
        height={140}
        className="md:block hidden"
      />
      <Image
        src="/logo-small.png"
        alt="logo"
        width={40}
        height={40}
        className="md:hidden block"
      />

      <ul className="flex justify-center items-center gap-12 max-md:hidden">
        {navbarLinks.map(({ link, title }) => (
          <NavLink link={link} title={title} isActive={pathname === link} />
        ))}
      </ul>

      <Sheet>
        <SheetTrigger className="md:hidden">
          <MenuIcon size={30} className="cursor-pointer text-black-1" />
        </SheetTrigger>
        <SheetContent className="w-[400px] sm:w-[540px] bg-[#fcfcfc]">
          <ul className="flex justify-center items-center flex-col gap-12 md:hidden mt-8">
            {navbarLinks.map(({ link, title }) => (
              <NavLink link={link} title={title} isActive={pathname === link} />
            ))}
          </ul>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default Navbar;
