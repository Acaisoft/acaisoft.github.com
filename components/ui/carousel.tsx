import clsx from "clsx";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import React, { ReactNode, useEffect, useState } from "react";

export interface CarouselProps {
  children?: ReactNode;
  className?: string;
}

const Root: React.FC<CarouselProps> = ({ children, className }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      slidesToScroll: 1,
      align: "start",
      containScroll: "keepSnaps",
    },
    [Autoplay({ delay: 4000 })]
  );
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) {
      return;
    }

    const handler = () => {
      setScrollSnaps(emblaApi.scrollSnapList());
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    handler();

    emblaApi.on("select", handler);
    emblaApi.on("reInit", handler);

    return () => {
      emblaApi.off("select", handler);
      emblaApi.off("reInit", handler);
    };
  }, [emblaApi]);

  return (
    <div ref={emblaRef} className={clsx("overflow-hidden", className)}>
      <div className="flex">{children}</div>

      <div className="mt-24 flex justify-center gap-2">
        {scrollSnaps
          .filter((s) => !Number.isNaN(s)) // It happens when using `containScroll: "keepSnaps"`
          .map((s, i) => (
            <button
              key={s}
              className={clsx(
                "h-2 w-2 rounded-full",
                i === selectedIndex ? "bg-grey-700" : "bg-grey-500"
              )}
              onClick={() => emblaApi?.scrollTo(i)}
            />
          ))}
      </div>
    </div>
  );
};

Root.displayName = "Carousel";

export interface SlideProps {
  children?: ReactNode;
}

const Slide: React.FC<SlideProps> = ({ children }) => {
  return (
    <div className="min-w-0 flex-shrink-0 basis-full px-2 lg:basis-1/2">
      {children}
    </div>
  );
};

export const Carousel = Object.assign(Root, { Slide });
