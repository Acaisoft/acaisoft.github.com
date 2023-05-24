import Image from "next/image";
import React from "react";
import lines from "../../public/images/lines-1.svg";
import { Blockquote } from "../ui/blockquote";
import { Person } from "../ui/person";
import { SectionHeader } from "../ui/section-header";
import { TwoColumnLayout } from "../ui/two-column-layout";
import { SiLinkedin } from "react-icons/si";
import { MdOutlineMail } from "react-icons/md";
import { Recruiter } from "@/data";

export interface GotQuestionsProps {
  recruiter: Recruiter;
}

export const GotQuestions: React.FC<GotQuestionsProps> = ({ recruiter }) => {
  return (
    <div className="relative isolate overflow-hidden bg-purple-gradient py-24 text-white">
      <div className="container">
        <TwoColumnLayout>
          <SectionHeader>Got a question?</SectionHeader>
          <div>
            <Blockquote
              variant="light"
              responsive={false}
              className="mb-5 max-w-lg lg:mb-10"
            >
              {recruiter.quote}
            </Blockquote>

            <Person
              variant="light"
              photo={recruiter.photo}
              name={recruiter.name}
              role={recruiter.title}
              extra={
                <div className="mt-1 flex items-center gap-4">
                  <a href={recruiter.linkedIn} target="_blank" rel="noreferrer">
                    <SiLinkedin className="text-lg" />
                  </a>
                  <a href={recruiter.email} target="_blank" rel="noreferrer">
                    <MdOutlineMail className="text-2xl" />
                  </a>
                </div>
              }
            />
          </div>
        </TwoColumnLayout>
      </div>

      <Image
        src={lines}
        alt=""
        className="absolute -bottom-32 left-0 -z-10 lg:bottom-0"
      />
    </div>
  );
};
