import { Job } from "../other";
import { recruiters } from "../recruiters";

export const midDeliveryManager: Job = {
  title: "Mid Delivery Manager",
  slug: "mid-delivery-manager",
  recruiter: recruiters.nataliaPrzybyl,
  category: "Project Management",
  technologies: ["Scrum", "Jira"],
  experienceLevel: "Regular",
  applyUrl:
    "https://system.erecruiter.pl/FormTemplates/RecruitmentForm.aspx?WebID=339a4985b9e84d759a11f4cb947aeefc",
  b2bSalary: "10 000 - 17 000 PLN",
  uopSalary: "8 000 - 14 500 PLN",
  locations: ["Warsaw"],
  description: (
    <>
      Hi there! If you&apos;re looking for a high-impact position in an
      ambitious software house we&apos;ve got a match for you!
      <br />
      Acaisoft is a place where amazing people (like you) work together to
      create a productive and fun environment. With us, you&apos;ll get the
      space to develop yourself further and deepen your knowledge of new
      technologies with exciting projects from such fields as IoT and Big Data.
      <br />
      Your work will have a significant impact on the product and the way all
      Acaisoft teams operate.The main focus is on automating the processes of
      Continuous Integration, Deployment, and Promotion, as well as creating
      monitoring and alerts for processes and environments.
      <br />
      Depending on the needs, we use Docker, Kubernetes, Jenkins, Ansible,
      Puppet, Azure, AWS, GCP, and more.
      <br />
      Our Team is growing rapidly and always looking for new tech talents to
      welcome onboard. Are you the one?
      <br />
      Join the crew and become our next <strong>Delivery Manager</strong>!
    </>
  ),
  requirements: (
    <>
      <ul>
        <li>At least 2 years of experience in leading IT projects.</li>
        <li>Experience of working using Scrum/Kanban.</li>
        <li>Understanding the stages of software development.</li>
        <li>Excellent written and verbal communication skills.</li>
        <li>Very good English skills (min. B2).</li>
      </ul>
      <strong>Nice to have:</strong>
      <ul>
        <li>
          Technical background (Python or Javascript experience preferred).
        </li>
      </ul>
    </>
  ),
  responsibilities: (
    <>
      <ul>
        <li>Managing the Team and making sure to deliver the defined scope.</li>
        <li>
          Coordinating work of Dev, QA, UX team (ceremonies: daily and weekly
          meetings, sprint planning and show & tell sessions).
        </li>
        <li>
          Analyzing, planning and developing requirements and standards in
          reference to scheduled projects.
        </li>
        <li>
          Involving in project discussions, providing insights, ideas and
          potential solutions.
        </li>
        <li>Working with multiple customers.</li>
        <li>Working on defining new features with clients.</li>
        <li>Preparing the road map and timelines with customers.</li>
      </ul>
    </>
  ),
};
