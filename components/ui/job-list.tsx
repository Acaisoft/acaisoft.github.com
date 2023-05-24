import { Job, getExperienceBadgeColor } from "@/data";
import Link from "next/link";
import React from "react";
import { MdOutlineLocationOn, MdKeyboardArrowRight } from "react-icons/md";
import { Button } from "./button";

export interface JobListProps {
  jobs: Job[];
}

export const JobList: React.FC<JobListProps> = ({ jobs }) => {
  return (
    <div className="flex flex-col gap-2">
      {jobs.map((job) => (
        <div
          key={job.slug}
          className="grid grid-cols-1 gap-5 rounded-lg border border-grey-300 p-3 transition-shadow duration-300 ease-in hover:shadow-[0_0_30px_rgba(0,0,0,.1)] sm:grid-cols-2 sm:gap-6 sm:px-10 sm:py-5 sm:pb-6 lg:grid-cols-[1fr,1fr,auto] lg:pb-5 xl:grid-cols-[2fr,2fr,1fr,auto]"
        >
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-1 flex items-center justify-between gap-2 sm:mb-1.5 lg:items-start lg:justify-start">
              <h4 className="text-lg font-bold text-blue-950 sm:text-2xl lg:leading-7">
                {job.title}
              </h4>
              <div
                className="h-6 rounded-full px-2.5 text-sm leading-6 text-white lg:mt-1"
                style={{
                  backgroundColor: getExperienceBadgeColor(job.experienceLevel),
                }}
              >
                {job.experienceLevel}
              </div>
            </div>
            <div className="flex items-center text-sm text-grey-500">
              <MdOutlineLocationOn className="-ml-0.5 mr-1" />{" "}
              {[...job.locations].sort().join(", ")}
              <span className="ml-1 hidden sm:inline">• {job.category}</span>
            </div>
          </div>

          <div className="lg:mt-2">
            <div className="mb-2 flex flex-col lg:flex-row lg:items-center lg:gap-2">
              <div className="font-bold text-blue-950">{job.b2bSalary}</div>
              <div className="text-sm text-grey-500">Net (B2B)</div>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-2">
              <div className="font-bold text-blue-950">{job.uopSalary}</div>
              <div className="text-sm text-grey-500">
                Gross (Permanent Contract)
              </div>
            </div>
          </div>

          <div className="mt-2 hidden flex-wrap items-start justify-start gap-1.5 xl:flex">
            {job.technologies.slice(0, 4).map((t) => (
              <div
                key={t}
                className="rounded-full border border-grey-300 px-2.5 text-sm leading-6 text-grey-500"
              >
                {t}
              </div>
            ))}
          </div>

          <div className="flex items-end justify-end lg:items-center">
            <Button asChild variant="dark" endIcon={<MdKeyboardArrowRight />}>
              <Link href={`/job/${job.slug}`}>Apply</Link>
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};
