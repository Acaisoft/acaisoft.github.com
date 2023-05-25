import React from "react";
import { SectionHeader } from "../ui/section-header";
import { Button } from "../ui/button";
import Link from "next/link";

export interface SendYourRecommendationProps {}

export const SendYourRecommendation: React.FC<
  SendYourRecommendationProps
> = () => {
  return (
    <section className="container py-12 pb-24">
      <SectionHeader className="md:text-center">
        Send your recommendation
      </SectionHeader>
      <p className="mx-auto mb-10 max-w-2xl text-grey-500 md:text-center">
        Together with a friend, fill out the adequate referral form. We look
        forward to receiving your submissions!
      </p>
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
        <Button variant="dark" asChild>
          <a href="https://system.erecruiter.pl/FormTemplates/RecruitmentForm.aspx?WebID=cb38f4ccf9b94796891e2423384b1758">
            REFERRER
          </a>
        </Button>
        <Button variant="outlined" asChild>
          <a href="https://system.erecruiter.pl/FormTemplates/RecruitmentForm.aspx?WebID=12d7fbcd158045588d9b79527a384f8f">
            CANDIDATE
          </a>
        </Button>
      </div>
    </section>
  );
};
