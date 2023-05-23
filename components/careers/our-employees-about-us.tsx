import agataHolowienko from "../../public/images/people/agata-hołowienko.webp";
import jakubBoguski from "../../public/images/people/jakub-boguski.webp";
import jakubButkiewicz from "../../public/images/people/jakub-butkiewicz.webp";
import maciejSasinowski from "../../public/images/people/maciej-sasinowski.webp";

import React from "react";
import { SectionHeader } from "../ui/section-header";
import { TestimonialCarousel } from "../ui/testimonial-carousel";

export interface OurEmployeesAboutUsProps {}

export const OurEmployeesAboutUs: React.FC<OurEmployeesAboutUsProps> = () => {
  return (
    <section className="container py-12">
      <SectionHeader>Our employees about us</SectionHeader>
      <TestimonialCarousel
        className="sm:mt-20"
        data={[
          {
            photo: jakubButkiewicz,
            name: "Jakub Butkiewicz",
            role: "Software Engineer",
            extra: "Gdańsk",
            content:
              "I started working here in Acaisoft two years ago, in that time I met not only great professionals from whom I learned so much but also great people who have become my friends.",
          },
          {
            photo: agataHolowienko,
            name: "Agata Hołowienko",
            role: "Head of UI/UX",
            extra: "Białystok",
            content:
              "I love being in a place where there are interesting people and a pleasant atmosphere. Acaisoft is aware that behind the success of the company stand people, happy and positively motivated, so it cares about the development and needs of all employees.",
          },
          {
            photo: jakubBoguski,
            name: "Jakub Boguski",
            role: "Delivery Manager",
            extra: "Białystok",
            content:
              "When I joined Acaisoft, I did not expect to stay with the company for so long. During the past four years, my development was well planned and I was able to learn from the professionals. Today, I share best practices with my team to ensure customer success.",
          },
          {
            photo: maciejSasinowski,
            name: "Maciej Sasinowski",
            role: "Head of Frontend",
            extra: "Białystok",
            content:
              "Acaisoft supports its employees in the development of their skills as well as their career advancements.  After proving my abilities working as a software developer, I was given the opportunity to take the position of the Head of Frontend.",
          },
        ]}
      />
    </section>
  );
};
