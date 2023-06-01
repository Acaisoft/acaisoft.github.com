import { Benefits } from "@/components/alumni/benefits";
import { GotQuestions } from "@/components/alumni/got-questions";
import { HeroSection } from "@/components/alumni/hero-section";
import { JoinAlumni } from "@/components/alumni/join-alumni";
import { LeftAndReturned } from "@/components/alumni/left-and-returned";
import { LetsStayInTouch } from "@/components/alumni/lets-stay-in-touch";
import { ReferralProgram } from "@/components/alumni/referral-program";
import { SendYourRecommendation } from "@/components/alumni/send-your-recommendation";
import { Footer } from "@/components/shared/footer";
import { Navbar } from "@/components/shared/navbar";
import { OpenPositions } from "@/components/shared/open-positions";
import { NextSeo } from "next-seo";

export default function Alumni() {
  return (
    <>
      <NextSeo title="Acaisoft - Alumni - Software Development in Poland" />
      <Navbar />
      <HeroSection />
      <LetsStayInTouch />
      <Benefits />
      <JoinAlumni />
      <ReferralProgram />
      <OpenPositions limited />
      <SendYourRecommendation />
      <LeftAndReturned />
      <GotQuestions />
      <Footer />
    </>
  );
}
