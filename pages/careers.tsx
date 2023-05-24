import { Faq } from "@/components/careers/faq";
import { GotQuestions } from "@/components/careers/got-questions";
import { OurBenefits } from "@/components/shared/our-benefits";
import { OurEmployeesAboutUs } from "@/components/careers/our-employees-about-us";
import { OurValues } from "@/components/careers/our-values";
import { Possibilities } from "@/components/careers/possibilities";
import { Footer } from "@/components/shared/footer";
import { Navbar } from "@/components/shared/navbar";
import { OpenPositions } from "@/components/shared/open-positions";
import { NextSeo } from "next-seo";

export default function Careers() {
  return (
    <>
      <NextSeo title="Acaisoft - Careers - Software Development in Poland" />
      <Navbar />
      <OurValues />
      <OurEmployeesAboutUs />
      <OpenPositions />
      <Possibilities />
      <OurBenefits />
      <Faq />
      <GotQuestions />
      <Footer />
    </>
  );
}
