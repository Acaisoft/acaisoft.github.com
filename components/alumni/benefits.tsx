import lightBulb from "../../public/images/icons/light-bulb.webp";

import Image from "next/image";
import React from "react";
import { Bell } from "../icons/bell";
import { Chat } from "../icons/chat";
import { Return } from "../icons/return";
import { SearchUser } from "../icons/search-user";
import { SectionHeader } from "../ui/section-header";

const benefits = [
  {
    name: "Stay up to date",
    description: "Receive the newsletter and find out what's going on with us",
    icon: <Bell />,
  },
  {
    name: "Network",
    description: "Keep in touch with Acaisoft colleagues",
    icon: <Chat />,
  },
  {
    name: "Learn",
    description: "Participate in our IT–related events",
    icon: <Image src={lightBulb} alt="" />,
  },
  {
    name: "Return",
    description:
      "Find out about new job openings and enjoy a shortened recruitment process",
    icon: <Return />,
  },
  {
    name: "Refer",
    description: "Recommend a friend to work in Acaisoft",
    icon: <SearchUser />,
  },
];

export interface BenefitsProps {}

export const Benefits: React.FC<BenefitsProps> = () => {
  return (
    <section className="bg-purple-gradient py-24 text-white">
      <div className="container">
        <SectionHeader>Alumni Program Benefits</SectionHeader>

        <div className="mt-20 flex flex-col gap-5 lg:flex-row">
          {benefits.map((b, i) => (
            <div
              key={b.name}
              className="flex flex-1 flex-col rounded-lg bg-[rgba(43,5,91,.2)] p-5 text-sm"
            >
              <div className="mb-4 font-bold">{b.name}</div>
              <div className="mb-10 text-white/60">{b.description}</div>
              <span className="mt-auto opacity-40">{b.icon}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
