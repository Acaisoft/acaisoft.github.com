import { ContactUsSection } from "@/components/home/contact-us-section";
import { HeroSection } from "@/components/home/hero-section";
import { OurServices } from "@/components/home/our-services";
import { Testimonials } from "@/components/home/testimonials";
import { WeOperateGlobally } from "@/components/home/we-operate-globally";
import { WhoWeAre } from "@/components/home/who-we-are";
import { Footer } from "@/components/shared/footer";
import { Navbar } from "@/components/shared/navbar";

export default function Home() {
  return (
    <>
      <Navbar transparent />
      <HeroSection />
      <OurServices />
      <WhoWeAre />
      <WeOperateGlobally />
      <Testimonials />
      <ContactUsSection />
      <Footer />
    </>
  );
}
