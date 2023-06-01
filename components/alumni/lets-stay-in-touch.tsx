import React from "react";
import { SectionHeader } from "../ui/section-header";
import { TwoColumnLayout } from "../ui/two-column-layout";
import { Statement } from "../ui/statement";
import { Testimonial, TestimonialCarousel } from "../ui/testimonial-carousel";

const testimonials: Testimonial[] = [
  {
    content:
      "The company is generally open to the needs of employees and listens carefully to them and the plus side is the modern technology stack used - the work is simply interesting and keeps up with the latest market trends. It's a great place for rapid professional development, including in the long term. I don't rule out that we will meet again at Acaisoft someday.",
    name: "Marcin Wasiucionek",
    role: "DevOps Engineer",
  },
  {
    content:
      "I will associate working at Acaisoft with the wide-ranging support of more experienced colleagues and ease of decision-making at the level of code development or technology choices. My time at Acaisoft has developed me more than in any previous job, but the support and openness of my colleagues are the main reason for coming here.",
    name: "Bartosz Mielczarek",
    role: "Data Engineer",
  },
  {
    content:
      "What sets the company apart from others is its strong focus on DevOps solutions. The company is focused on innovation, while not sacrificing security and service availability. DevOps team members discuss and support each other in case of any difficulties, the people who make up this company are its greatest asset.",
    name: "Damian Seredyn",
    role: "DevOps Engineer",
  },
];

export interface LetsStayInTouchProps {}

export const LetsStayInTouch: React.FC<LetsStayInTouchProps> = () => {
  return (
    <section className="container py-24">
      <SectionHeader>Let&apos; stay in touch</SectionHeader>
      <TwoColumnLayout className="mb-20">
        <p className="text-xl lg:text-2xl">
          Acaisoft Alumni Program is a place for those who have chosen a
          different career path
        </p>
        <Statement>
          People are the greatest value for our organization. We cherish all
          those who have contributed to the development of our company,
          regardless of whether they are still present within the Acaisoft
          structure. The Acaisoft Alumni Program was created for our former
          employees to help us stay in touch.
        </Statement>
      </TwoColumnLayout>

      <TestimonialCarousel data={testimonials} />
    </section>
  );
};
