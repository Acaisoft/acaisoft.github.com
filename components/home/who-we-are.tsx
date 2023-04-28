import React from "react";
import { Blockquote } from "../ui/blockquote";
import { SectionHeader } from "../ui/section-header";
import { Statement } from "../ui/statement";
import { TwoColumnLayout } from "../ui/two-column-layout";

export interface WhoWeAreProps {}

const data = [
  { label: "Clients around the world", value: "36+" },
  { label: "Projects released on production", value: "40+" },
  { label: "Specialists on board", value: "240+" },
  { label: "Delivery teams", value: "20+" },
];

export const WhoWeAre: React.FC<WhoWeAreProps> = () => {
  return (
    <section className="bg-purple-gradient py-24 text-white">
      <div className="container">
        <SectionHeader>Who we are</SectionHeader>

        <TwoColumnLayout>
          <Blockquote variant="light">
            We are a group of over 200 talented engineers, who focus on the full
            life cycle of software development.
          </Blockquote>

          <Statement variant="light">
            Our company has been delivering{" "}
            <strong>high quality software services</strong> based on Cloud
            Platform for <strong>7 years</strong>, acquiring many satisfied
            clients
          </Statement>
        </TwoColumnLayout>

        <ul className="mt-16 grid grid-cols-2 gap-x-5 gap-y-10 sm:mt-24 md:grid-cols-4">
          {data.map(({ label, value }) => (
            <li key={label}>
              <div className="mb-5 text-5xl font-bold text-white/40 sm:text-6xl">
                {value}
              </div>
              <div className="text-sm">{label}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
