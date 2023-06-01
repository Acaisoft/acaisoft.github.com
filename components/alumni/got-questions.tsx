import Image from "next/image";
import React from "react";
import lines from "../../public/images/lines-1.svg";
import elizaSepiol from "../../public/images/people/eliza-sepiol.webp";
import { Blockquote } from "../ui/blockquote";
import { Person } from "../ui/person";
import { SectionHeader } from "../ui/section-header";
import { TwoColumnLayout } from "../ui/two-column-layout";
import { SiLinkedin } from "react-icons/si";
import { MdOutlineMail } from "react-icons/md";

export interface GotQuestionsProps {}

export const GotQuestions: React.FC<GotQuestionsProps> = () => {
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
              We are constantly looking for the top talent to join our teams. If
              you would like to ask any questions - feel free to reach out!
            </Blockquote>

            <Person
              variant="light"
              photo={elizaSepiol}
              name="Eliza Sepiół"
              role="Head of Talent Acquisition"
              extra={
                <div className="mt-1 flex items-center gap-4">
                  <a
                    href="https://www.linkedin.com/in/eliza-sepi%C3%B3%C5%82-66ab4590/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <SiLinkedin className="text-lg" />
                  </a>
                  <a
                    href="mailto:eliza.sepiol@acaisoft.com"
                    target="_blank"
                    rel="noreferrer"
                  >
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
