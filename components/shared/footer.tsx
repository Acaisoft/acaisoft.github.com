import React from "react";
import { Logo } from "../icons/logo";
import Link from "next/link";
import { SiFacebook, SiInstagram, SiLinkedin } from "react-icons/si";

const offices = [
  {
    name: "San Jose Office",
    address1: "111 North Market Street",
    address2: "San Jose CA 95113",
    country: "United States",
  },
  {
    name: "Warsaw Office",
    address1: "Puławska 182 (IO Tower)",
    address2: "Warsaw 02-670",
    country: "Poland",
  },
  {
    name: "Białystok Office",
    address1: "Świętego Rocha 10/2",
    address2: "Białystok 15-879",
    country: "Poland",
  },
  {
    name: "Gdańsk Office",
    address1: "aleja Grunwaldzka 472B (Olivia Four)",
    address2: "Gdańsk 80-309",
    country: "Poland",
  },
];

export interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <div className="container py-16">
      <Logo width={150} height={undefined} className="mb-4" />
      <div className="mb-8 text-sm text-grey-500">
        Your success is our goal.
      </div>

      <ul className="mb-8 grid grid-cols-1 gap-5 text-sm sm:grid-cols-2 lg:grid-cols-4">
        {offices.map((o) => (
          <li key={o.name} className="text-grey-500">
            <strong className="text-slate-900">{o.name}</strong>
            <br />
            {o.address1}
            <br />
            {o.address2}
            <br />
            {o.country}
          </li>
        ))}
      </ul>

      <div className="mb-4 flex justify-center gap-5 border-t border-grey-200 px-4 py-2 pt-4 text-sm sm:justify-end">
        <Link href="/">Home</Link>
        <Link href="/about-us">About Us</Link>
        <Link href="/careers">Careers</Link>
      </div>

      <div className="flex flex-wrap-reverse items-center justify-center gap-10 gap-y-6 px-4 text-sm sm:justify-end">
        <div className="text-grey-500" suppressHydrationWarning>
          Acaisoft Inc. | All rights reserved © {new Date().getFullYear()}
        </div>

        <div className="flex gap-[inherit]">
          <Link href="/documents/AcaisoftPP.pdf">
            Privacy policy / Cookie policy
          </Link>

          <div className="flex gap-3 text-base lg:gap-5">
            <a
              href="https://www.facebook.com/Acaisoft-2203287679961974"
              target="_blank"
              rel="noreferrer"
            >
              <SiFacebook />
            </a>
            <a
              href="https://www.instagram.com/acaisoft_poland/"
              target="_blank"
              rel="noreferrer"
            >
              <SiInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/acaisoft"
              target="_blank"
              rel="noreferrer"
            >
              <SiLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
