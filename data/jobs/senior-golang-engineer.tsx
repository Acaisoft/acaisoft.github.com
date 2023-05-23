import { Job } from "../other";
import { recruiters } from "../recruiters";

export const seniorGolangEngineer: Job = {
  title: "Senior Golang Engineer",
  slug: "senior-golang-engineer",
  recruiter: recruiters.nataliaPrzybyl,
  category: "Backend",
  technologies: ["Golang"],
  experienceLevel: "Senior",
  applyUrl:
    "https://system.erecruiter.pl/FormTemplates/RecruitmentForm.aspx?WebID=a8833689c71b4eeda65b2e27fff5016b",
  b2bSalary: "23 000 - 29 000 PLN",
  uopSalary: "20 000 - 25 500 PLN",
  locations: ["Remote", "Białystok", "Gdańsk", "Warsaw"],
  description: (
    <>
      Hi, there! If you&apos;re looking for a high-impact position in an
      ambitious software house we&apos;ve got a match for you!
      <br />
      We are looking for a diligent Specialist to join us and engage in one of
      our few projects.
      <br />
      First one is for our Nordic client (FinTech startup). The company
      developed a financial solution that offers real-time salaries and that
      provides accessible tools for the personal economy.
      <br />
      In the second project we are helping our USA customer in developing a
      social media platform and microblogging site.
    </>
  ),
  requirements: (
    <>
      <ul>
        <li>At least 5 years of overall practice as a Software Engineer</li>
        <li>Min. 3 years commercial experience with Golang</li>
        <li>Excellent written and verbal communication skills</li>
        <li>Good English skills (min. B2+)</li>
      </ul>
      <br />
      <strong>Nice to have:</strong>
      <ul>
        <li>Experience in working with Cloud technologies</li>
        <li>BSc in Computer Science or related field</li>
        <li>Knowledge of AWS, Docker and Kubernetes</li>
      </ul>
    </>
  ),
  responsibilities: (
    <>
      <ul>
        <li>Designing, developing, and implementing solutions</li>
        <li>Writing reusable, testable, and efficient Golang code</li>
        <li>Covering the source code with unit tests</li>
        <li>Contact with the client</li>
        <li>
          Participating in the requirement discussion meetings, providing
          feedback on inconsistencies
        </li>
      </ul>
    </>
  ),
};
