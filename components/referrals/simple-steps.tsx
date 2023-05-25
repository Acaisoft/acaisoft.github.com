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
    name: "After successful recruitment you will receive a bonus.",
    description:
      "Our HR team will contact you to determine the details of payment.",
    icon: <MdOutlineForwardToInbox />,
  },
];

export interface SimpleStepsProps {}

export const SimpleSteps: React.FC<SimpleStepsProps> = () => {
  return (
    <section className="container py-12">
      <SectionHeader>4 Simple steps</SectionHeader>
      <TwoColumnLayout>
        <div />
        <Statement>
          Just refer your friend and we will take care of the rest! For
          employing the candidate recommended by you we will reward you with up
          to <strong>5 000 PLN</strong>.
        </Statement>
      </TwoColumnLayout>

      <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2 lg:flex-row xl:grid-cols-4">
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
    </section>
  );
};
