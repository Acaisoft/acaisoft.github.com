import React from "react";
import { SectionHeader } from "../ui/section-header";
import { TwoColumnLayout } from "../ui/two-column-layout";
import { Statement } from "../ui/statement";
import { Testimonial, TestimonialCarousel } from "../ui/testimonial-carousel";

const testimonials: Testimonial[] = [
  {
    content:
      "The company has a great family atmosphere. The greatest value has been the total freedom to approach problem-solving. I was free to test the latest technology solutions without long corporate meetings. When I started working at Acaisoft it was the only company in Poland using React Native in production. It’s definitely an innovative company.",
    name: "Mikołaj Adamowicz",
    role: "React Native/SWIFT Engineer",
  },
  {
    content:
      "One of the reasons I returned to Acaisoft is the technical aspect of my job. With all confidence, I can call this company an innovative one because it relies on new technologies and solutions. Another reason why I came back, besides the fantastic atmosphere, is the development aspect. There are a lot of challenges on the way & you never get bored!",
    name: "Łukasz Skwara",
    role: "Full-Stack Engineer",
  },
];

export interface LeftAndReturnedProps {}

export const LeftAndReturned: React.FC<LeftAndReturnedProps> = () => {
  return (
    <section className="container py-24">
      <SectionHeader>Left and returned</SectionHeader>
      <TwoColumnLayout className="mb-20">
        <div />
        <Statement>
          Is it worth giving second chances? Of course! Discover the stories of
          the employees who left Acaisoft and returned after a while and see for
          yourself why it&apos;s worth to give Acaisoft another shot!
        </Statement>
      </TwoColumnLayout>

      <TestimonialCarousel data={testimonials} />
    </section>
  );
};
