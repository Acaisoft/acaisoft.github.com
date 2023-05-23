import espenEinn from "../../public/images/people/espen-einn.webp";
import pabloVerano from "../../public/images/people/pablo-verano.webp";
import rolandLee from "../../public/images/people/roland-lee.webp";

import React from "react";
import { SectionHeader } from "../ui/section-header";
import { Statement } from "../ui/statement";
import { TestimonialCarousel } from "../ui/testimonial-carousel";
import { TwoColumnLayout } from "../ui/two-column-layout";

const reviews = [
  {
    content:
      "Acaisoft is something as unique as a Silicon Valley working culture in Poland. They had an impressive range of smart, dedicated, funny, and life-loving people. This is a perfect match for us.",
    name: "Espen Einn",
    role: "CEO",
    company: "RightPerson",
    photo: espenEinn,
    reviewId: "1817864",
  },
  {
    content:
      "Since working with Acaisoft, our delivery velocity has increased at least 20 times. In the past months, we’ve done more developments than what had been done in the last four years in our company.",
    name: "Pablo Verano",
    role: "Head of Product",
    company: "Scoopr",
    photo: pabloVerano,
    reviewId: "1820127",
  },
  {
    content:
      "Agile and reliable, Acaisoft has provided cost-effective and high-quality work on time, ensuring each project's success. They're flexible in the face of difficulty, establishing them as a trustworthy team.",
    name: "Roland Lee",
    role: "VP of Product",
    company: "Heimdall Data",
    photo: rolandLee,
    reviewId: "1823304",
  },
];

export interface TestimonialsProps {}

export const Testimonials: React.FC<TestimonialsProps> = () => {
  return (
    <section className="container pb-24 pt-5">
      <SectionHeader>Testimonials</SectionHeader>

      <TwoColumnLayout className="mb-10">
        <script
          type="text/javascript"
          src="https://widget.clutch.co/static/js/widget.js"
          async
        />
        <Statement className="lg:order-1">
          We are proud to share thoughts of our customers on our delivery
          experience, who in total contributed to NPS of <strong>97</strong>.
        </Statement>
        <div
          className="clutch-widget mx-auto lg:mx-0 lg:px-16"
          data-url="https://widget.clutch.co"
          data-widget-type="2"
          data-height="60"
          data-clutchcompany-id="1427348"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: "" }}
        />
      </TwoColumnLayout>

      <TestimonialCarousel
        data={reviews.map((r) => ({
          ...r,
          extra: r.company,
          content: (
            <>
              {r.content}
              <a
                href={`https://clutch.co/profile/acaisoft#review-${r.reviewId}`}
                target="_blank"
                rel="noreferrer"
                className="mt-10 block text-sm italic"
              >
                Read full review on Clutch
              </a>
            </>
          ),
        }))}
      />
    </section>
  );
};
