import Link from "next/link";
import React from "react";
import {
  MdOutlineEdit,
  MdOutlineForwardToInbox,
  MdOutlineLightbulb,
  MdOutlineQuestionAnswer,
} from "react-icons/md";
import { Card } from "../ui/card";
import { SectionHeader } from "../ui/section-header";
import { Statement } from "../ui/statement";
import { TwoColumnLayout } from "../ui/two-column-layout";

const steps = [
  {
    name: "Tell your friends about Acaisoft.",
    description:
      "Check our open positions and recommend them to your friend. Fill out the from available below for the Referrer.",
    icon: <MdOutlineQuestionAnswer />,
    iconColor: "#5424e5",
  },
  {
    name: "Send a friend the link to a form below for a Referred Candidate.",
    description:
      "Make sure your friend adds your data in the form and accepts the terms and conditions of our program.",
    icon: <MdOutlineEdit />,
    iconColor: "#16c080",
  },
  {
    name: "Wait for HR team to step into action.",
    description:
      "The recruiter responsible for the process will send you an e-mail confirming acceptance of the application.",
    icon: <MdOutlineLightbulb />,
    iconColor: "#3eb7f4",
  },
  {
    name: "Get a reward or support a charity initiative.",
    description:
      "After successful recruitment, we will reward you with a bonus or we will support a charity initiative of your choice - you decide!",
    icon: <MdOutlineForwardToInbox />,
  },
];

export interface ReferralProgramProps {}

export const ReferralProgram: React.FC<ReferralProgramProps> = () => {
  return (
    <section className="container py-12">
      <SectionHeader className="lg:w-1/2">
        Referral Program for Alumni Program Participants
      </SectionHeader>
      <TwoColumnLayout>
        <div />
        <Statement>
          Have you, on your career path, met a person who in your opinion would
          successfully fit into our organization? As an Acaisoft Alumn, you can{" "}
          <strong>recommend them</strong>! In return for hiring the recommended
          candidate, we will{" "}
          <strong>
            support one of the charities of your choice or we will reward you
            with a bonus up to 5000 PLN. It&apos;s up to you!
          </strong>
        </Statement>
      </TwoColumnLayout>

      <div className="mb-8 mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2 lg:flex-row xl:grid-cols-4">
        {steps.map((s, i) => (
          <Card
            key={s.name}
            overline={`STEP ${(i + 1).toString().padStart(2, "0")}`}
            title={s.name}
            content={s.description}
            icon={s.icon}
            iconColor={s.iconColor}
          />
        ))}
      </div>

      <div className="text-center text-grey-500">
        Learn more about Alumni Referral Program here:{" "}
        <Link
          className="underline"
          href="/documents/regulamin-poleceń---Alumni-Acaisoft.pdf"
        >
          Alumni Referral Program regulations
        </Link>
      </div>
    </section>
  );
};
