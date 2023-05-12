import React from "react";
import { Blockquote } from "../ui/blockquote";
import { SectionHeader } from "../ui/section-header";
import { Statement } from "../ui/statement";
import { TwoColumnLayout } from "../ui/two-column-layout";

export interface WhoWeAreProps {}

export const WhoWeAre: React.FC<WhoWeAreProps> = () => {
  return (
    <section className="container pb-12 pt-24">
      <SectionHeader>Who we are</SectionHeader>
      <TwoColumnLayout>
        <div>
          <Blockquote>
            Acaisoft is a company that focuses on cloud-native managed services.
            We are a group of over 200 talented engineers, who focuses on the
            full life-cycle of software development.
          </Blockquote>

          <Statement className="mt-10">
            Over the years of our cooperation with start-ups, scale-ups, and
            corporations, we have learned what it takes to{" "}
            <strong>deliver</strong>. Our engineers are top class specialists in
            frontend, mobile and backend development, as well as infrastructure
            architects. We know that delivery is not just about software
            development - it is about{" "}
            <strong>proactiveness, business-focus and open-mindedness</strong>,
            which are the values we seek for in our multi-staged recruitment
            process.
          </Statement>
        </div>

        <iframe
          className="aspect-video w-full lg:pl-10"
          src="https://www.youtube.com/embed/9DwOmdjHPCI"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </TwoColumnLayout>
    </section>
  );
};
