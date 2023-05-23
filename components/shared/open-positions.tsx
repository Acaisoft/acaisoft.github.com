import {
  JobLocation,
  experienceLevels,
  getExperienceBadgeColor,
  jobCategories,
  jobs,
  locations,
} from "@/data";
import Link from "next/link";
import React from "react";
import { MdKeyboardArrowRight, MdOutlineLocationOn } from "react-icons/md";
import { Button } from "../ui/button";
import { SectionHeader } from "../ui/section-header";
import { Statement } from "../ui/statement";
import { TwoColumnLayout } from "../ui/two-column-layout";
import { FilterSelect } from "../ui/filter-select";
import { useRouter } from "next/router";

const removeUndefinedProperties = <T extends { [key: string]: any }>(
  obj: T
): T => {
  const copy = { ...obj };
  Object.keys(copy).forEach(
    (key) => copy[key] === undefined && delete copy[key]
  );
  return copy;
};

const coerceValue = (value: string) => (value === "All" ? undefined : value);

export interface OpenPositionsProps {}

export const OpenPositions: React.FC<OpenPositionsProps> = () => {
  const router = useRouter();
  const { category, experience, location } = router.query as Record<
    string,
    string | undefined
  >;

  const filteredJobs = jobs
    .filter((j) => (category ? j.category === category : true))
    .filter((j) => (experience ? j.experienceLevel === experience : true))
    .filter((j) =>
      location ? j.locations.includes(location as JobLocation) : true
    );

  const updateFilters = (filters: {
    category?: string;
    experience?: string;
    location?: string;
  }) => {
    router.replace(
      { query: removeUndefinedProperties({ ...router.query, ...filters }) },
      undefined,
      { scroll: false }
    );
  };

  return (
    <section className="container scroll-m-10 py-12" id="positions">
      <SectionHeader>Open positions</SectionHeader>
      <TwoColumnLayout className="mb-10">
        <div />
        <Statement>
          We are constantly seeking for top talent all over the world. If you
          did not found the job position that suits your skills and experience,
          do not hesitate to contact us directly - we will be happy to talk to
          you about your future with us.
        </Statement>
      </TwoColumnLayout>

      <div className="mb-2 text-lg font-medium text-blue-950">Filter by:</div>

      <div className="mb-8 flex flex-wrap gap-3">
        <FilterSelect
          value={category || "All"}
          onChange={(e) =>
            updateFilters({ category: coerceValue(e.target.value)! })
          }
          options={[
            { label: "All job categories", value: "All" },
            ...jobCategories.map((c) => ({ label: c, value: c })),
          ]}
        />
        <FilterSelect
          value={experience || "All"}
          onChange={(e) =>
            updateFilters({ experience: coerceValue(e.target.value)! })
          }
          options={[
            { label: "All experience levels", value: "All" },
            ...experienceLevels.map((e) => ({ label: e, value: e })),
          ]}
        />
        <FilterSelect
          value={location || "All"}
          onChange={(e) =>
            updateFilters({ location: coerceValue(e.target.value)! })
          }
          options={[
            { label: "All locations", value: "All" },
            ...locations.map((e) => ({ label: e, value: e })),
          ]}
        />
      </div>

      <div className="flex flex-col gap-2">
        {filteredJobs.map((job) => (
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
                    backgroundColor: getExperienceBadgeColor(
                      job.experienceLevel
                    ),
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
    </section>
  );
};
