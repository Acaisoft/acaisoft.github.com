import abhijitDinkar from "../../public/images/people/abhi-dinkar.webp";
import adamNowaczyk from "../../public/images/people/adam-nowaczyk.webp";
import maciejBiernacki from "../../public/images/people/maciej-biernacki.webp";
import pawelNicer from "../../public/images/people/paweł-nicer.webp";
import team from "../../public/images/team.webp";

import Image from "next/image";
import React from "react";
import { SectionHeader } from "../ui/section-header";
import { Statement } from "../ui/statement";
import { TwoColumnLayout } from "../ui/two-column-layout";
import { SiLinkedin } from "react-icons/si";
import { MdMail, MdOutlineMail } from "react-icons/md";

const people = [
  {
    name: "Adam Nowaczyk",
    role: "CEO",
    photo: adamNowaczyk,
    linkedIn: "https://www.linkedin.com/in/adamnowaczyk/",
    email: "adam.nowaczyk@acaisoft.com",
  },
  {
    name: "Abhijit Dinkar",
    role: "President",
    photo: abhijitDinkar,
    linkedIn: "https://www.linkedin.com/in/abhijitdinkar/",
    email: "abhijit.dinkar@acaisoft.com",
  },
  {
    name: "Maciej Biernacki",
    role: "VP of Delivery",
    photo: maciejBiernacki,
    linkedIn: "https://www.linkedin.com/in/maciej-biernacki-2546001/",
    email: "maciej.biernacki@acaisoft.com",
  },
  {
    name: "Paweł Nicer",
    role: "Director of Engineering",
    photo: pawelNicer,
    linkedIn: "https://www.linkedin.com/in/pawe%C5%82-nicer-244a554a/",
    email: "pawel.nicer@acaisoft.com",
  },
];

export interface PeopleThatShapedUsProps {}

export const PeopleThatShapedUs: React.FC<PeopleThatShapedUsProps> = () => {
  return (
    <section className="container pb-24 pt-12">
      <SectionHeader>People that shaped us</SectionHeader>

      <TwoColumnLayout>
        <div />
        <Statement>
          Our team accommodates the{" "}
          <strong>best specialists in the field</strong>, passionates of the
          newest technology, cherishing innovative and{" "}
          <strong>flexible approach</strong> to implementing programming
          projects. We’re a <strong>collective of diverse talents</strong> from
          around the world, all sharing the same enthusiasm for solving problems
          in an ever-changing world. With a{" "}
          <strong>multidisciplinary approach</strong>, we use design and
          technology to tell stories that touch the hearts of many and leave
          long-lasting impressions.
        </Statement>
      </TwoColumnLayout>

      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-4 md:gap-0 xl:mt-20 2xl:grid-cols-5">
        <Image
          src={team}
          alt="Acaisoft team"
          className="h-full max-h-full object-cover md:col-span-2 md:row-span-2 2xl:col-span-3"
        />

        {people.map((p) => (
          <div key={p.name} className="relative">
            <Image src={p.photo} alt={p.name} className="w-full" />
            <div className="absolute bottom-0 flex h-[60px] w-full items-center gap-2 bg-blue-950 px-5 text-white/50 md:h-[50px] md:px-2 lg:h-[60px] lg:gap-5 lg:px-4">
              <div className="mr-auto">
                <div className="text-sm font-bold text-white">{p.name}</div>
                <div className="text-xs">{p.role}</div>
              </div>

              <a href={p.linkedIn} target="_blank" rel="noreferrer">
                <SiLinkedin />
              </a>
              <a href={`mailto:${p.email}`} target="_blank" rel="noreferrer">
                <MdOutlineMail className="text-lg" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
