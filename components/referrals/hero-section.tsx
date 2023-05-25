import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import banner from "../../public/images/vr-banner.webp";
import { Button } from "../ui/button";

export interface HeroSectionProps {}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <section className="relative h-[550px] md:h-[600px]">
      <Image
        className="h-full w-full object-cover object-top"
        src={banner}
        alt=""
        priority
      />

      <div className="absolute top-20 w-full text-white sm:top-24 lg:top-44">
        <div className="container">
          <h5 className="mb-1 text-sm">Recommendation program</h5>
          <h1 className="mb-7 text-4xl font-bold md:text-6xl">
            Refer a friend, get rewarded.
            <br />
            Simple as that!
          </h1>
          <h3 className="max-w-3xl text-xl md:text-2xl">
            Do you have friends in the IT industry looking for new professional
            challenges? Recommend a candidate to us and scoop an attractive
            bonus up to 5000 PLN!
          </h3>
          <Button
            variant="light"
            className="mt-10"
            endIcon={<MdKeyboardArrowRight />}
            asChild
          >
            <Link href="/referrals#positions">REFER NOW</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
