import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Button } from "../ui/button";
import { SectionHeader } from "../ui/section-header";

export interface PossibilitiesProps {}

export const Possibilities: React.FC<PossibilitiesProps> = () => {
  const { copy, copied } = useCopyToClipboard();

  return (
    <section className="container py-12 pb-24">
      <SectionHeader className="md:text-center">
        Want to learn about other possibilities?
      </SectionHeader>
      <p className="mx-auto mb-10 max-w-2xl text-grey-500 md:text-center">
        Tell your friends to fill in the recruitment form and write in the
        comments the position they would like to work in. We will contact you as
        soon as something suitable pops up!
      </p>
      <div className="flex justify-center gap-2 sm:gap-4">
        <Button variant="dark" endIcon={<MdKeyboardArrowRight />}>
          GO TO FORM
        </Button>
        <Button
          className="w-44" // Prevent layout shifts
          variant="outlined"
          onClick={() =>
            copy(new URL("/careers", window.location.origin).toString())
          }
        >
          {copied ? "COPIED!" : "COPY LINK"}
        </Button>
      </div>
    </section>
  );
};
