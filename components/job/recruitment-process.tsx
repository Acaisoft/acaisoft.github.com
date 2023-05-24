import React from "react";
import {
  MdOutlineEdit,
  MdOutlineForwardToInbox,
  MdOutlineQuestionAnswer,
} from "react-icons/md";
import { SectionHeader } from "../ui/section-header";

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
          <div
            key={s.name}
            className="flex flex-1 flex-col rounded-lg border border-grey-300 p-5 sm:p-8"
          >
            <div className="mb-2 text-sm text-grey-500">STEP {i + 1}</div>
            <h4 className="mb-4 text-lg font-bold text-grey-600 lg:text-2xl">
              {s.name}
            </h4>
            <div className="mb-6 text-sm leading-relaxed text-grey-500 lg:text-base [&>strong]:text-slate-900">
              {s.description}
            </div>
            <div className="mt-auto grid h-10 w-10 place-items-center rounded-lg bg-blue-800 text-xl text-white">
              {s.icon}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
