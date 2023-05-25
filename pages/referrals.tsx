import { HeroSection } from "@/components/referrals/hero-section";
import { SendYourRecommendation } from "@/components/referrals/send-your-recommendation";
import { SimpleSteps } from "@/components/referrals/simple-steps";
import { WhoCanParticipate } from "@/components/referrals/who-can-participate";
import { Footer } from "@/components/shared/footer";
import { Navbar } from "@/components/shared/navbar";
import { OpenPositions } from "@/components/shared/open-positions";
import { NextSeo } from "next-seo";

export default function Page() {
  return (
    <>
      <NextSeo title="Acaisoft - Referrals - Software Development in Poland" />
      <Navbar transparent />
      <HeroSection />
      <WhoCanParticipate />
      <SimpleSteps />
      <OpenPositions limited />
      <SendYourRecommendation />
      <Footer />
    </>
  );
}
