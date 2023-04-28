import customerMap from "../../public/images/customer-map.svg";
import Image from "next/image";
import React from "react";
import { Blockquote } from "../ui/blockquote";
import { SectionHeader } from "../ui/section-header";
import { Statement } from "../ui/statement";
import { TwoColumnLayout } from "../ui/two-column-layout";

export interface WeOperateGloballyProps {}

export const WeOperateGlobally: React.FC<WeOperateGloballyProps> = () => {
  return (
    <section className="container pb-5 pt-24">
      <SectionHeader>We operate globally</SectionHeader>

      <TwoColumnLayout className="mb-24">
        <Blockquote>
          We are proud of acquiring the trust of our clientele as we expand
          globally, offering top talent from all over the world in
          follow-the-sun development model.
        </Blockquote>

        <Statement>
          Through the years of being in the market both our{" "}
          <strong>technologies and expertise have advanced</strong> and our
          offerings have been appreciated by our end users from the{" "}
          <strong>USA</strong> and the <strong>EU</strong>. We partner with
          inventive start-ups and technological giants from the Silicon Valley
          and Europe. The <strong>satisfaction</strong> and{" "}
          <strong>contentment</strong> from the partnership with our company is
          a substantial aspect for us, that we work for every day.
        </Statement>
      </TwoColumnLayout>

      <Image src={customerMap} alt="Customers Map" className="mx-auto" />
    </section>
  );
};
