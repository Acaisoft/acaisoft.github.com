import React from "react";
import { Blockquote } from "../ui/blockquote";
import { SectionHeader } from "../ui/section-header";
import { Statement } from "../ui/statement";
import { TwoColumnLayout } from "../ui/two-column-layout";
import { Idea } from "../icons/idea";
import { Chat } from "../icons/chat";
import { Crosshair } from "../icons/crosshair";

const cards = [
  {
    icon: <Idea />,
    color: "#4e25cc",
    title: "Proactiveness",
    content: (
      <>
        We are always looking ahead for any hurdles that may disturb seamless
        project delivery, and them on with list of{" "}
        <strong>possible solutions</strong>.
      </>
    ),
  },
  {
    icon: <Chat />,
    color: "#3eb7f4",
    title: "Communication",
    content: (
      <>
        We know that in all phases of software development, the key to success
        is seamless and continuous <strong>communication</strong> between the
        delivery team and the customer.
      </>
    ),
  },
  {
    icon: <Crosshair />,
    color: "#16c080",
    title: "Business Focus",
    content: (
      <>
        We feel the need to deeply understand the business behind the{" "}
        <strong>assignment</strong>, in order to become valuable partner that
        will be able to share additional point of views on the manner.
      </>
    ),
  },
];

export interface WhyChooseUsProps {}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = () => {
  return (
    <section className="container py-12">
      <SectionHeader>Why choose us</SectionHeader>
      <TwoColumnLayout>
        <Blockquote>
          Improve time to market of your products by leveraging proven
          architecture, project management methodologies and software
          development tools.
        </Blockquote>

        <Statement>
          With multiple years of experience, we were able to identify the common
          problems in software development life-cycle. We have created a{" "}
          <strong>set of internal tools</strong> and libraries to speed up{" "}
          <strong>bootstrapping of the projects</strong> using Infrastructure as
          a Code across all of public cloud providers, as well as{" "}
          <strong>run load tests at a scale</strong> before release to
          production.
          <br />
          <br />
          Our engineers are working exclusively on selected assignments, under
          internal supervision of Delivery Managers and Senior Delivery
          Managers. Using this scalable structure, we are sure that the values
          we respect are also applied across the company.
        </Statement>
      </TwoColumnLayout>

      <div className="mt-20 flex flex-col gap-5 lg:flex-row">
        {cards.map((c) => (
          <div
            key={c.title}
            className="flex-1 rounded-lg border border-grey-300 p-8"
          >
            <div className="mb-6 flex items-center gap-4 lg:mb-10">
              <div
                className="grid h-10 w-10 place-items-center rounded-lg text-white"
                style={{ backgroundColor: c.color }}
              >
                {c.icon}
              </div>
              <h4 className="text-lg font-bold text-grey-600 lg:text-2xl">
                {c.title}
              </h4>
            </div>

            <div className="text-sm leading-relaxed text-grey-500 lg:text-base [&>strong]:text-slate-900">
              {c.content}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
