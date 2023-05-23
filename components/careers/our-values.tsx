import rollup from "../../public/images/acaisoft-rollup.webp";
import vr from "../../public/images/vr.webp";
import conference from "../../public/images/conference-talk.webp";
import office from "../../public/images/office-2.webp";

import Image from "next/image";
import React from "react";
import { SectionHeader } from "../ui/section-header";
import { Statement } from "../ui/statement";
import { TwoColumnLayout } from "../ui/two-column-layout";

const photos = [rollup, vr, conference, office];

export interface OurValuesProps {}

export const OurValues: React.FC<OurValuesProps> = () => {
  return (
    <section className="container py-12">
      <SectionHeader>Our values</SectionHeader>

      <TwoColumnLayout>
        <div />
        <Statement>
          Our team accommodates the{" "}
          <strong>best specialists in the field</strong>, passionates of the
          newest technology, cherishing innovative and{" "}
          <strong>flexible approach</strong> to implementing programming
          projects. We&apos;re a <strong>collective of diverse talents</strong>{" "}
          from around the world, all sharing the same enthusiasm for solving
          problems in an ever-changing world. With a{" "}
          <strong>multidisciplinary approach</strong>, we use design and
          technology to tell stories that touch the hearts of many and leave
          long-lasting impressions.
        </Statement>
      </TwoColumnLayout>

      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-4 md:gap-0 xl:mt-20 2xl:grid-cols-5">
        <Image
          src={photos[0]}
          alt=""
          className="h-full max-h-full object-cover md:col-span-2 md:row-span-2 2xl:col-span-3"
          priority
        />

        {photos.slice(1).map((p) => (
          <div key={p.src} className="relative">
            <Image src={p} alt="" className="w-full" />
          </div>
        ))}
      </div>
    </section>
  );
};
