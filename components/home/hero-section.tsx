import React from "react";
import { MdChevronRight } from "react-icons/md";
import { Button } from "../ui/button";
import { HomeVideoBackground } from "./home-video-background";
import { ContactUsButton } from "../contact-form";

export interface HeroSectionProps {}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <section className="relative h-[500px] lg:h-[550px] 2xl:h-[600px]">
      <HomeVideoBackground />

      <div className="absolute top-20 w-full text-white sm:top-32 lg:top-44">
        <div className="container">
          <h5 className="mb-1 text-sm">Welcome to Acaisoft</h5>
          <h1 className="mb-7 text-4xl font-bold md:text-6xl">
            From idea to production
          </h1>
          <h3 className="max-w-lg text-xl md:text-2xl">
            We are a solution company focusing on building cloud-based
            end-to-end SaaS platforms.
          </h3>
          <ContactUsButton variant="light" className="mt-10" />
        </div>
      </div>
    </section>
  );
};
