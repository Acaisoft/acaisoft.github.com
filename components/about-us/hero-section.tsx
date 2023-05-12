import Image from "next/image";
import React from "react";
import bg from "../../public/images/office-chairs.webp";
import cropped from "../../public/images/office-chairs-cropped.webp";
import lines from "../../public/images/lines-2.svg";

export interface HeroSectionProps {}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <section className="relative h-[480px] bg-blue-900 text-white lg:bg-purple-900">
      {/* Mobile image */}
      <Image
        className="h-full w-full object-cover opacity-75 brightness-[60%] lg:hidden"
        src={bg}
        alt=""
        priority
      />

      {/* Desktop images */}
      <Image
        className="absolute right-0 hidden lg:inline-block"
        src={cropped}
        alt=""
        priority
      />
      <Image
        className="absolute right-5 hidden lg:inline-block"
        src={lines}
        alt=""
        priority
      />

      <div className="absolute inset-0">
        <div className="container flex h-full flex-col justify-center">
          <h1 className="mb-7 text-4xl font-bold sm:text-6xl">
            Software development
            <br />
            at scale
          </h1>
          <h3 className="max-w-lg text-xl sm:text-2xl">
            Specializing in producing premium software, offering its services
            since 2015.
          </h3>
        </div>
      </div>
    </section>
  );
};
