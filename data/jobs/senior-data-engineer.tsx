import { Job } from "../other";
import { recruiters } from "../recruiters";

export const seniorDataEngineer: Job = {
  title: "Senior Data Engineer",
  slug: "senior-data-engineer",
  recruiter: recruiters.nataliaPrzybyl,
  category: "Data",
  technologies: [
    "Python",
    "SQL",
    "AWS",
    "Airflow",
    "Snowflake",
    "Data Modeling",
    "dbt",
    "Docker",
  ],
  experienceLevel: "Senior",
  applyUrl:
    "https://system.erecruiter.pl/FormTemplates/RecruitmentForm.aspx?WebID=4140988390fb498495ac34f4d2899d39",
  b2bSalary: "20 000 - 30 000 PLN",
  uopSalary: "17 000 - 26 500 PLN",
  locations: ["Remote", "Białystok", "Gdańsk", "Warsaw"],
  description: (
    <>
      Hi there! If you&apos;re looking for a high-impact position in an
      ambitious software house we&apos;ve got a match for you!
      <br />
      We&apos;re a solution company focusing on building cloud-based end-to-end
      SaaS platforms. We&apos;re a squad of outstanding people creating a
      productive & fun environment. As our teammate, you&apos;ll get the space
      to develop yourself further & deepen your knowledge of new technologies
      with exciting projects.
      <br />
      Our Team is growing rapidly and always looks for new tech talents to
      welcome onboard. Are you the one?
      <br />
      Join the crew and become our next <strong>Senior Data Engineer</strong>!
    </>
  ),
  requirements: (
    <>
      <ul>
        <li>4+ years of experience working in a similar position.</li>
        <li>Proficiency in Python, SQL and AWS.</li>
        <li>Knowledge of Snowflake.</li>
        <li>Ability to work until 8pm (GMT+1).</li>
        <li>Fluent English (min. B2).</li>
      </ul>
    </>
  ),
  responsibilities: (
    <>
      <ul>
        <li>
          Building and maintaining scalable data pipelines for both batch and
          stream processing in a cloud-computing environment.
        </li>
        <li>
          Applying dimensional modelling to design tables and views that map
          business processes into an enterprise data model.
        </li>
        <li>
          Optimizing database architecture by trading off storage and
          computation to achieve low cost and high performance.
        </li>
        <li>
          Building and supporting complex ETL infrastructure to deliver clean
          and reliable data to the organization.
        </li>
        <li>
          Supporting the development of new products and services via ingestion,
          processing, and formatting data for reporting and analytics.
        </li>
        <li>
          Interacting face-to-face with business stakeholders, developing
          cooperative relationships and acquiring domain knowledge of the
          business.
        </li>
        <li>
          Proactively automating manual processes throughout the business for
          higher efficiency, robustness, and speed.
        </li>
        <li>
          Enforcing production standards and governing best practices in the
          management of enterprise-level data, metrics, and reports.
        </li>
      </ul>
    </>
  ),
};
