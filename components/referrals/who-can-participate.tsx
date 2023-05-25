import React from "react";
import { PiggyBank } from "../icons/piggy-bank";
import Link from "next/link";
import { Rocket } from "../icons/rocket";

export interface WhoCanParticipateProps {}

export const WhoCanParticipate: React.FC<WhoCanParticipateProps> = () => {
  return (
    <section className="container relative max-w-5xl py-24 pb-12 md:text-center">
      <PiggyBank className="mb-4 text-blue-700 md:absolute md:right-4 md:top-1/2 md:rotate-12" />
      <Rocket className="absolute left-4 top-16 hidden rotate-[30deg] text-green-500 md:block" />

      <h2 className="mb-6 text-3xl text-slate-900 md:text-5xl md:leading-snug">
        Who can participate in our external recommendation program?{" "}
        <strong>Everyone!</strong>
      </h2>
      <div className="text-sm text-grey-500">
        Learn more about Recommendation Program here:{" "}
        <Link
          href="/documents/Regulamin_Zgłaszania_Poleceń-_Zewnętrznych.pdf"
          className="text-blue-600 underline"
        >
          Recommendation program regulations
        </Link>
      </div>
    </section>
  );
};
