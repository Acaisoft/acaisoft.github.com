import React from "react";
import {
  MdOutlineEdit,
  MdOutlineForwardToInbox,
  MdOutlineQuestionAnswer,
} from "react-icons/md";
import { SectionHeader } from "../ui/section-header";
import { Card } from "../ui/card";

const steps = [
  {
    name: "Application",
    description:
      "After you apply, we will review your resume and get back to you. If your experience matches the requirements, we will schedule a quick screening call to get to know you.",
    icon: <MdOutlineEdit />,
  },
  {
    name: "Interview",
    description:
      "After successful screening, you will be invited to interview with one of our delivery managers alongside with software engineer who will ask you technical questions.",
    icon: <MdOutlineQuestionAnswer />,
  },
  {
    name: "Decision",
    description:
      "After the interviews, we will get back to you as soon as possible with a feedback and, if all goes well, job offer. The feedback process usually takes upmost to 5 business days.",
    icon: <MdOutlineForwardToInbox />,
  },
];

export interface RecruitmentProcessProps {}

export const RecruitmentProcess: React.FC<RecruitmentProcessProps> = () => {
  return (
    <section className="container py-24">
      <SectionHeader>Recruitment process</SectionHeader>

      <div className="flex flex-col gap-5 sm:mt-16 lg:flex-row">
        {steps.map((s, i) => (
          <Card
            key={s.name}
            overline={`STEP ${i + 1}`}
            title={s.name}
            content={s.description}
            icon={s.icon}
          />
        ))}
      </div>
    </section>
  );
};
