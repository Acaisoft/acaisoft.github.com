import { ReactNode } from "react";
import { Recruiter } from "./recruiters";

export const experienceLevels = [
  "Intern",
  "Junior",
  "Regular",
  "Senior",
  "Expert",
] as const;

export type ExperienceLevel = (typeof experienceLevels)[number];

export const getExperienceBadgeColor = (expLevel: ExperienceLevel): string => {
  switch (expLevel) {
    case "Intern":
      return "rgba(22, 192, 98, .94)";
    case "Junior":
      return "#16c080";
    case "Regular":
      return "#5323e5";
    case "Senior":
      return "#36198c";
    case "Expert":
      return "#c04316";

    default:
      return "#5323e5"; // Regular
  }
};

export const jobCategories = [
  "Other",
  "Programming",
  "Internship",
  "Project Management",
  "Technical Writer",
  "Mobile",
  "Data",
  "Fullstack",
  "Frontend",
  "Backend",
  "DevOps",
  "Design",
  "QA",
] as const;

export type JobCategory = (typeof jobCategories)[number];

export const locations = [
  "San Jose",
  "Gdańsk",
  "Gdynia",
  "Remote",
  "Białystok",
  "Warsaw",
] as const;

export type JobLocation = (typeof locations)[number];

export type Job = {
  title: string;
  slug: string;
  recruiter: Recruiter;
  category: JobCategory;
  technologies: string[];
  experienceLevel: ExperienceLevel;
  applyUrl: string;
  b2bSalary: string;
  uopSalary: string;
  locations: JobLocation[];
  description: ReactNode;
  requirements: ReactNode;
  responsibilities: ReactNode;
};
