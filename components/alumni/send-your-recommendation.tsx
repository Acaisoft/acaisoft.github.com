import React from "react";
import { Button } from "../ui/button";
import { SectionHeader } from "../ui/section-header";

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
          <a href="https://system.erecruiter.pl/FormTemplates/RecruitmentForm.aspx?WebID=288511cb435c40e1912e9b26f9aa86cd">
            REFERRER
          </a>
        </Button>
        <Button variant="outlined" asChild>
          <a href="https://system.erecruiter.pl/FormTemplates/RecruitmentForm.aspx?WebID=5f951972d41746a1941d057580023612">
            CANDIDATE
          </a>
        </Button>
      </div>
    </section>
  );
};
