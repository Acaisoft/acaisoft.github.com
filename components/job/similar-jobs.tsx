import React from "react";
import { SectionHeader } from "../ui/section-header";
import { Job, getSimilarJobs } from "@/data";
import { JobList } from "../ui/job-list";
import { TwoColumnLayout } from "../ui/two-column-layout";
import { Statement } from "../ui/statement";

export interface SimilarJobsProps {
  job: Job;
}

export const SimilarJobs: React.FC<SimilarJobsProps> = ({ job }) => {
  const jobs = getSimilarJobs(job);

  return jobs.length > 0 ? (
    <section className="container pb-24">
      <SectionHeader>See similar jobs</SectionHeader>
      <TwoColumnLayout className="mb-10">
        <div />
        <Statement>
          We are constantly seeking for top talent all over the world. If you
          did not found the job position that suits your skills and experience,
          do not hesitate to contact us directly - we will be happy to talk to
          you about your future with us.
        </Statement>
      </TwoColumnLayout>
      <JobList jobs={jobs} />
    </section>
  ) : null;
};
