import { Job, getExperienceBadgeColor } from "@/data";
import Link from "next/link";
import React from "react";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdOutlineMail,
  MdOutlineShare,
} from "react-icons/md";
import { Button } from "../ui/button";
import bg from "../../public/images/whiteboard.webp";
import Image from "next/image";
import { Person } from "../ui/person";
import { SiLinkedin } from "react-icons/si";
import { LocationPin } from "../icons/location-pin";
import { StudentHat } from "../icons/student-hat";
import { Statement } from "../ui/statement";

export interface JobDetailsProps {
  job: Job;
}

export const JobDetails: React.FC<JobDetailsProps> = ({ job }) => {
  const { recruiter } = job;

  return (
    <section className="container pb-24">
      <Link
        href="/careers#positions"
        className="mb-5 flex items-center gap-3 text-sm text-grey-500"
      >
        <MdKeyboardArrowLeft className="-ml-1 text-base" />
        Back to job offers
      </Link>

      <div className="grid gap-x-16 gap-y-4 lg:grid-cols-3 lg:grid-rows-[auto,minmax(0,1fr)]">
        {/* Title section */}
        <div className="lg:col-span-2">
          <div className="relative p-5 text-white sm:p-10">
            <Image
              src={bg}
              alt=""
              className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
              priority
            />

            <div className="mb-2 flex items-center justify-between">
              <div
                className="inline-block rounded-full px-2.5 text-sm leading-6"
                style={{
                  backgroundColor: getExperienceBadgeColor(job.experienceLevel),
                }}
              >
                {job.experienceLevel}
              </div>

              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                  process.env.NEXT_PUBLIC_URL!
                )}&t=${encodeURIComponent(process.env.NEXT_PUBLIC_URL!)}`}
                target="_blank"
                rel="noreferrer"
                className="h-10 w-10 rounded-full border-2 p-1.5"
              >
                <MdOutlineShare className="-ml-px text-2xl" />
              </a>
            </div>

            <h2 className="mb-16 text-3xl font-bold sm:mb-20 sm:text-5xl xl:mb-32">
              {job.title}
            </h2>

            <div className="flex flex-wrap items-start justify-start gap-1.5">
              {job.technologies.slice(0, 4).map((t) => (
                <div
                  key={t}
                  className="rounded-full border border-grey-300 px-2.5 text-sm leading-6"
                >
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Apply section */}
        <div className="lg:col-start-3 lg:row-span-full">
          {/* Sticky part */}
          <div className="sticky top-20">
            {/* Floating part */}
            <div className="fixed bottom-0 left-0 right-0 z-10 border-t border-grey-200 bg-white p-4 lg:static lg:border-0 lg:p-0 lg:pt-2">
              <div className="mx-auto flex max-w-xl items-end gap-2 lg:flex-col lg:items-start lg:gap-10">
                <div className="flex-1">
                  <div className="mb-4">
                    <div className="font-black text-slate-900 lg:mb-1 lg:text-2xl xl:text-3xl">
                      {job.b2bSalary}
                    </div>
                    <div className="text-xs text-grey-500 lg:text-sm xl:text-base">
                      net per month - <span className="text-grey-600">B2B</span>
                    </div>
                  </div>
                  <div>
                    <div className="font-black text-slate-900 lg:mb-1 lg:text-2xl xl:text-3xl">
                      {job.uopSalary}
                    </div>
                    <div className="text-xs text-grey-500 lg:text-sm xl:text-base">
                      gross per month -{" "}
                      <span className="text-grey-600">Employment Contract</span>
                    </div>
                  </div>
                </div>
                <Button
                  variant="dark"
                  endIcon={<MdKeyboardArrowRight />}
                  asChild
                >
                  <a href={job.applyUrl} target="_blank" rel="noreferrer">
                    APPLY NOW
                  </a>
                </Button>
              </div>
            </div>
            <div className="mt-2 border-t border-grey-200 pt-3 lg:mt-10 lg:pt-5">
              <Person
                photo={recruiter.photo}
                name={recruiter.name}
                role={recruiter.title}
                extra={
                  <div className="mt-1 flex items-center gap-4 text-grey-700">
                    <a
                      href={recruiter.linkedIn}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <SiLinkedin className="text-lg text-[#0077B5]" />
                    </a>
                    <a href={recruiter.email} target="_blank" rel="noreferrer">
                      <MdOutlineMail className="text-2xl" />
                    </a>
                  </div>
                }
              />
            </div>
          </div>
        </div>

        {/* Details section */}
        <div className="lg:col-span-2">
          <div className="mb-10 mt-5 flex flex-col gap-3 lg:mt-2 lg:flex-row">
            <div className="flex flex-1 items-center gap-3">
              <div className="flex w-10 justify-center">
                <LocationPin className="text-grey-500" />
              </div>
              <div>
                <div className="text-sm text-grey-500">Location</div>
                <div>{[...job.locations].sort().join(", ")}</div>
              </div>
            </div>
            <div className="flex flex-1 items-center gap-3">
              <div className="flex w-10 justify-center">
                <StudentHat className="text-grey-500" />
              </div>
              <div>
                <div className="text-sm text-grey-500">Experience</div>
                <div>{job.experienceLevel}</div>
              </div>
            </div>
          </div>

          <Statement className="mb-14 leading-relaxed">
            {job.description}
          </Statement>

          <h3 className="mb-5 text-xl font-bold">
            What will be your responsibilities?
          </h3>
          <div className="mb-14 leading-relaxed text-grey-500 [&_strong]:text-slate-900 [&_ul]:list-outside [&_ul]:list-image-circle-green [&_ul]:pl-5">
            {job.responsibilities}
          </div>

          <h3 className="mb-5 text-xl font-bold">Requirements</h3>
          <div className="mb-14 leading-relaxed text-grey-500 [&_strong]:text-slate-900 [&_ul]:list-outside [&_ul]:list-image-circle-purple [&_ul]:pl-5">
            {job.requirements}
          </div>
        </div>
      </div>
    </section>
  );
};
