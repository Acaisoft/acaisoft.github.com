import { Menu } from "@headlessui/react";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { Fragment, useEffect, useState } from "react";
import { MdClose, MdKeyboardArrowRight, MdMenu } from "react-icons/md";
import { useEventCallback, useEventListener } from "usehooks-ts";
import { Logo } from "../icons/logo";
import { Button } from "../ui/button";
import { MobileMenu } from "./mobile-menu";
import { MenuItem } from "./types";

const menuItems: MenuItem[] = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about-us" },
  {
    label: "Careers",
    children: [
      { label: "Open Positions", href: "/careers#positions" },
      { label: "Referral Program", href: "/referrals" },
      { label: "Alumni Program", href: "/alumni" },
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
      <div className="container flex h-[60px] items-center lg:h-20">
        <Link href="/" className="mr-auto">
          <Logo className="h-[18px] w-auto" />
        </Link>

        <nav className="mr-20 hidden lg:flex">
          {menuItems.map((item) => (
            <Fragment key={item.label}>
              {"href" in item ? (
                <Link
                  href={item.href}
                  data-active={item.href === router.pathname || undefined}
                  className="p-5 transition-transform hover:scale-110 data-[active]:font-bold"
                >
                  {item.label}
                </Link>
              ) : (
                <Menu as="div" className="relative">
                  <Menu.Button className="p-5 transition-transform hover:scale-110">
                    {item.label}
                  </Menu.Button>
                  <Menu.Items className="absolute left-0 z-40 flex flex-col gap-1 rounded-xl border border-grey-200 bg-white px-6 py-5 pr-14">
                    {item.children.map((subItem) => (
                      <Menu.Item key={subItem.label}>
                        <Link
                          href={subItem.href}
                          data-active={
                            subItem.href === router.pathname || undefined
                          }
                          className="origin-left whitespace-nowrap rounded-lg px-4 py-1 transition-transform hover:scale-110 data-[active]:font-bold ui-active:bg-purple-900/5"
                        >
                          {subItem.label}
                        </Link>
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </Menu>
              )}
            </Fragment>
          ))}
        </nav>

        <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <MdClose className="h-10 w-10" />
          ) : (
            <MdMenu className="h-10 w-10" />
          )}
        </button>
        <Button
          variant="dark"
          className="hidden lg:inline-block"
          endIcon={<MdKeyboardArrowRight />}
        >
          CONTACT US
        </Button>
      </div>
      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        items={menuItems}
      />
    </header>
  );
};
