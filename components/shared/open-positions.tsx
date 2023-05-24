import {
  JobLocation,
  experienceLevels,
  jobCategories,
  jobs,
  locations,
} from "@/data";
import { useRouter } from "next/router";
import React from "react";
import { FilterSelect } from "../ui/filter-select";
import { JobList } from "../ui/job-list";
import { SectionHeader } from "../ui/section-header";
import { Statement } from "../ui/statement";
import { TwoColumnLayout } from "../ui/two-column-layout";

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

      <JobList jobs={filteredJobs} />
    </section>
  );
};
