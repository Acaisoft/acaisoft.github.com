import { GotQuestions } from "@/components/job/got-questions";
import { JobDetails } from "@/components/job/job-details";
import { RecruitmentProcess } from "@/components/job/recruitment-process";
import { SimilarJobs } from "@/components/job/similar-jobs";
import { Footer } from "@/components/shared/footer";
import { Navbar } from "@/components/shared/navbar";
import { OurBenefits } from "@/components/shared/our-benefits";
import { jobs } from "@/data";
import { GetStaticPaths, GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

export const getStaticPaths: GetStaticPaths = () => ({
  paths: jobs.map((j) => ({ params: { slug: j.slug } })),
  fallback: false,
});

// It is needed for `getStaticPaths` to work.
// However it cannot return job data directly because JSX is not serializable.
// So currently it does nothing, in the future it could be used to return data only for specific job offer.
export const getStaticProps: GetStaticProps = () => {
  return { props: {} };
};

export default function JobPage() {
  const router = useRouter();
  const job = jobs.find((j) => j.slug === router.query?.slug)!; // It's safe thanks to `getStaticPaths`

  return (
    <>
      <NextSeo title={`Acaisoft - ${job.title} Open Position`} />
      <Navbar />
      <JobDetails job={job} />
      <OurBenefits />
      <RecruitmentProcess />
      <SimilarJobs job={job} />
      <GotQuestions recruiter={job.recruiter} />
      <Footer />
    </>
  );
}
