import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import banner from "../../public/images/group-photo.webp";
import { Button } from "../ui/button";

export interface HeroSectionProps {}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <section className="relative h-[500px] sm:h-[450px] md:h-[550px]">
      <Image
        className="h-full w-full object-cover object-top"
        src={banner}
        alt=""
        priority
      />

      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(148,143,138,.48),rgba(30,7,58,.48)),linear-gradient(90deg,rgba(30,7,58,.73),rgba(30,7,58,0) 64.29%)",
        }}
      />

      <div className="absolute top-20 w-full text-white sm:top-24 lg:top-24">
        <div className="container">
          <h5 className="mb-1 text-sm">Former employee program</h5>
          <h1 className="mb-7 max-w-md text-4xl font-bold md:text-6xl">
            Acaisoft Alumni Program
          </h1>
          <h3 className="max-w-lg text-xl md:text-2xl">
            Join the Alumni Program, keep in touch with Acaisoft colleagues and
            grow with us
          </h3>
          <Button
            variant="light"
            className="mt-10"
            endIcon={<MdKeyboardArrowRight />}
            asChild
          >
            <Link href="/alumni#alumni-form">JOIN</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
