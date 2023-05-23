import { Job } from "../other";
import { recruiters } from "../recruiters";

export const midFullstackDeveloper: Job = {
  title: "Mid Fullstack Developer",
  slug: "mid-fullstack-developer",
  recruiter: recruiters.martynaIwaniuk,
  category: "Fullstack",
  technologies: [
    "Java",
    "React",
    "Microservices",
    "GraphQL",
    "AWS",
    "Docker",
    "Kubernetes",
  ],
  experienceLevel: "Regular",
  applyUrl:
    "https://system.erecruiter.pl/FormTemplates/RecruitmentForm.aspx?WebID=8facc681373649e7a2dcba24099af1ff",
  b2bSalary: "15 000 - 20 000 PLN",
  uopSalary: "12 500 - 16 500 PLN",
  locations: ["Remote", "Białystok", "Gdańsk", "Warsaw"],
  description: (
    <>
      Hi there! If you&apos;re looking for a high-impact position in an
      ambitious software house we&apos;ve got a match for you!
      <br />
      Right now we are looking for Fullstack Developer for features development
      for a Marketing platform built for enterprise SEO, Content, and Web teams.
      You&apos;ll be able to develop your skills across a wide range of problems
      to solve, on various technological levels.
      <br />
      Our Team is growing rapidly and always looking for new tech talents to
      welcome onboard. Are you the one?
      <br />
      Join the crew and become our next <strong>Fullstack Developer</strong>.
    </>
  ),
  requirements: (
    <>
      <ul>
        <li>
          Experience with Microservices (patterns and best practices), Java /
          Spring boot (+ spring security), Databases (relational and NoSQL), and
          understanding of sharding and geo partitioning from the app side.
        </li>
        <li>Experience with React, understanding of Graphql</li>
        <li>
          Experience with AWS (understanding of major AWS networking, security,
          and database services including Cognito). Understanding Docker and
          Kubernetes is also needed.
        </li>
      </ul>
    </>
  ),
  responsibilities: (
    <>
      <ul>
        <li>Developing new features and existing parts of the application.</li>
        <li>Reviewing pull requests (PRs).</li>
        <li>
          Providing feedback to ensure that changes meet coding standards.
        </li>
        <li>Optimizing existing code for performance and scalability.</li>
        <li>Refactoring code to improve its structure and readability.</li>
        <li>Collaborating with other teams.</li>
        <li>
          Attending meetings, creating documentation, and communicating through
          PRs.
        </li>
      </ul>
    </>
  ),
};
