import { Footer } from "@/components/shared/footer";
import { Navbar } from "@/components/shared/navbar";
import { Button } from "@/components/ui/button";
import Lottie from "lottie-react";
import { NextSeo } from "next-seo";
import Link from "next/link";
import animation from "../assets/lottie-404.json";

export default function NotFound() {
  return (
    <>
      <NextSeo title="Acaisoft - Not Found - Software Development in Poland" />
      <Navbar />
      <section className="container my-16 flex max-w-2xl flex-col items-center lg:my-32">
        <Lottie animationData={animation} className="mb-10" />
        <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
          Page Not Found
        </h2>
        <div className="mb-6 text-center text-xl text-slate-500">
          The page you&apos;re looking for isn&apos;t available. Try with
          another page or use the go home button below
        </div>
        <Button asChild variant="dark">
          <Link href="/">Home</Link>
        </Button>
      </section>
      <Footer />
    </>
  );
}
