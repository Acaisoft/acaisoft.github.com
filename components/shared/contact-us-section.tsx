import React from "react";
import { TwoColumnLayout } from "../ui/two-column-layout";
import { SectionHeader } from "../ui/section-header";
import { Statement } from "../ui/statement";
import { Button } from "../ui/button";
import { MdChevronRight } from "react-icons/md";
import Image from "next/image";
import lines from "../../public/images/lines-1.svg";
import { ContactUsButton } from "../contact-form";

export interface ContactUsSectionProps {}

export const ContactUsSection: React.FC<ContactUsSectionProps> = () => {
  return (
    <div className="relative isolate overflow-hidden bg-purple-gradient py-24 text-white">
      <div className="container">
        <TwoColumnLayout>
          <SectionHeader>Contact us</SectionHeader>
          <div>
            <Statement variant="light" className="mb-5 max-w-lg lg:mb-10">
              <div className="text-2xl text-white">
                We can change your idea into a real product. Based on the needs
                of your business, we will create a product that users will love.
              </div>
            </Statement>

            <div className="mb-8 lg:mb-10">Interested? Contact us!</div>

            <ContactUsButton variant="light" />
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
