import { Job } from "../other";
import { recruiters } from "../recruiters";

export const dataEngineerTechLead: Job = {
  title: "Data Engineer - Tech Lead",
  slug: "data-engineer-tech-lead",
  recruiter: recruiters.nataliaPrzybyl,
  category: "Data",
  technologies: ["Python", "AWS", "Snowflake"],
  experienceLevel: "Expert",
  applyUrl:
    "https://system.erecruiter.pl/FormTemplates/RecruitmentForm.aspx?WebID=ef0f20fa33d841a9a35934416166bea5",
  b2bSalary: "31 000 - 38 000 PLN",
  uopSalary: "28 000 - 34 000 PLN",
  locations: ["Remote", "Białystok", "Gdańsk", "Warsaw"],
  description: (
    <>
      Hi, there! If you&apos;re looking for a high-impact position in an
      ambitious software house we&apos;ve got a match for you!
      <br />
      We&apos;re looking for Data Engineer who enjoys working in a fast-paced
      environment.
      <br />
      We are currently working on a project for one of the largest property
      management insurance companies in the United States. We create desktop and
      mobile applications that support the selection and purchase of insurance.
      <br />
      <strong>Working hours</strong>: minimum to 8 pm (polish timezone)
    </>
  ),
  requirements: (
    <>
      <ul>
        <li>Supporting/leading the rest of the Data Engineer&apos;s team.</li>
        <li>
          Applying dimensional modeling to design tables and views that map
          business processes into an enterprise data model.
        </li>
        <li>
          Taking care of database architecture by trading off storage and
          computation to achieve low cost and high performance.
        </li>
        <li>
          Interacting face-to-face with business stakeholders, developing
          cooperative relationships, and acquiring domain knowledge of the
          business.
        </li>
      </ul>
    </>
  ),
  responsibilities: (
    <>
      <ul>
        <li>At least 5 years of experience working as a Data Engineer.</li>
        <li>Knowledge of Snowflake and AWS.</li>
        <li>High-level knowledge of Python.</li>
        <li>Proficiency in Spark, SQL and big data platforms.</li>
      </ul>
      <br />
      <strong>Nice to have:</strong>
      <ul>
        <li>Experience in being a Leader/Manager for teams of Engineers.</li>
      </ul>
    </>
  ),
};
