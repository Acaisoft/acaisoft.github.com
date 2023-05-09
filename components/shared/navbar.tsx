import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { useEventCallback, useEventListener } from "usehooks-ts";
import { Logo } from "../icons/logo";
import Link from "next/link";
import { MdClose, MdMenu } from "react-icons/md";
import { MobileMenu } from "./mobile-menu";
import { MenuItem } from "./types";
import { useRouter } from "next/router";

const menuItems: MenuItem[] = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about-us" },
  {
    label: "Careers",
    children: [
      { label: "Open Positions", href: "/careers#positions" },
      { label: "Referral Program", href: "/referrals" },
    ],
  },
];

export interface NavbarProps {
  transparent?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ transparent }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const updateIsScrolled = useEventCallback(() => {
    const scrolled = window.scrollY > 50;
    if (scrolled !== isScrolled) {
      setIsScrolled(scrolled);
    }
  });

  useEventListener("scroll", updateIsScrolled);

  useEffect(() => {
    updateIsScrolled();
  }, [updateIsScrolled]);

  useEffect(() => {
    setMenuOpen(false);
  }, [router.pathname]);

  return (
    <header
      className={clsx(
        "top-0 z-30 w-full transition-colors duration-200",
        "sticky bg-white"
        // transparent && !isScrolled ? "text-white" : "bg-white",
        // transparent ? "fixed" : "sticky"
      )}
    >
      <div className="container flex h-[60px] items-center">
        <Link href="/" className="mr-auto">
          <Logo className="h-[18px] w-auto" />
        </Link>

        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <MdClose className="h-10 w-10" />
          ) : (
            <MdMenu className="h-10 w-10" />
          )}
        </button>
      </div>
      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        items={menuItems}
      />
    </header>
  );
};
