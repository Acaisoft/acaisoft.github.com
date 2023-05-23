import award from "../../public/images/icons/award.webp";
import lightBulb from "../../public/images/icons/light-bulb.webp";
import shield from "../../public/images/icons/shield.webp";
import tennis from "../../public/images/icons/tennis.webp";

import React from "react";
import { SectionHeader } from "../ui/section-header";
import Image from "next/image";

const benefits = [
  {
    name: "Multisport",
    description:
      'As we believe in polish saying "clean body, clean soul", we want to provide you with access to sport facilities that you prefer.',
    icon: tennis,
  },
  {
    name: "Private healthcare insurance",
    description:
      "As you join Acaisoft, you will be granted private insurance. If you have a family or a spouse - we can enable the private insurance for them as well.",
    icon: shield,
  },
  {
    name: "Internal initiatives",
    description:
      "In Acaisoft, we regular organize internal events such as game or movie nights, bar-hopping or sports.",
    icon: lightBulb,
  },
  {
    name: "Top class equipment",
    description:
      'Before your first day at work, our team will send you all of the equipment you will need. Our standard equipment includes MacBook Pro 16" with keyboard, mouse, headphones and external monitor(s).',
    icon: award,
  },
];

export interface OurBenefitsProps {}

export const OurBenefits: React.FC<OurBenefitsProps> = () => {
  return (
    <section className="bg-purple-gradient py-24 text-white">
      <div className="container">
        <SectionHeader>Our benefits</SectionHeader>

        <div className="mt-20 flex flex-col gap-5 lg:flex-row">
          {benefits.map((b, i) => (
            <div
              key={b.name}
              className="flex flex-1 flex-col rounded-lg bg-[rgba(43,5,91,.2)] p-5 text-sm"
            >
              <div className="mb-2 text-white/40">
                {i.toString().padStart(2, "0")}.
              </div>
              <div className="mb-4 font-bold">{b.name}</div>
              <div className="mb-10 text-white/60">{b.description}</div>
              <Image src={b.icon} alt="" className="mt-auto opacity-40" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
