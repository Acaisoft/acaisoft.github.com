import { HeroSection } from "@/components/about-us/hero-section";
import { PeopleThatShapedUs } from "@/components/about-us/people-that-shaped-us";
import { WhoWeAre } from "@/components/about-us/who-we-are";
import { WhyChooseUs } from "@/components/about-us/why-choose-us";
import { ContactUsSection } from "@/components/shared/contact-us-section";
import { Footer } from "@/components/shared/footer";
import { Navbar } from "@/components/shared/navbar";
import { NextSeo } from "next-seo";

export default function AboutUs() {
  return (
    <>
      <NextSeo title="Acaisoft - About Us - Software Development in Poland" />
      <Navbar transparent />
      <HeroSection />
      <WhoWeAre />
      <WhyChooseUs />
      <PeopleThatShapedUs />
      <ContactUsSection />
      <Footer />
    </>
  );
}
