import { StaticImageData } from "next/image";
import React, { ReactNode } from "react";
import { Blockquote } from "./blockquote";
import { Carousel } from "./carousel";
import { Person } from "./person";

export type Testimonial = {
  content: ReactNode;
  name: string;
  role: string;
  extra?: string;
  photo?: StaticImageData;
};

export interface TestimonialCarouselProps {
  data: Testimonial[];
  className?: string;
}

export const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({
  data,
  className,
}) => {
  return (
    <Carousel className={className}>
      {data.map((d) => (
        <Carousel.Slide key={d.name}>
          <div className="flex h-full flex-col lg:px-16">
            <Blockquote responsive={false}>{d.content}</Blockquote>

            <Person
              className="mt-auto"
              photo={d.photo}
              name={d.name}
              role={d.role}
              extra={d.extra}
            />
          </div>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};
