import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { useEventCallback, useEventListener } from "usehooks-ts";
import { Logo } from "../icons/logo";

export interface NavbarProps {
  transparent?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ transparent }) => {
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <header
      className={clsx(
        "top-0 z-30 w-full transition-colors duration-200",
        "sticky bg-white"
        // transparent && !isScrolled ? "text-white" : "bg-white",
        // transparent ? "fixed" : "sticky"
      )}
    >
      <div className="container flex h-16 items-center">
        <Logo />
      </div>
    </header>
  );
};
