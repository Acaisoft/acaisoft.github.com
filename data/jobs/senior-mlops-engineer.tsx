import { Job } from "../other";
import { recruiters } from "../recruiters";

export const seniorMlopsEngineer: Job = {
  title: "Senior MLOps Engineer",
  slug: "senior-mlops-engineer",
  recruiter: recruiters.nataliaPrzybyl,
  category: "Data",
  technologies: ["Python", "GCP", "Docker"],
  experienceLevel: "Senior",
  applyUrl:
    "https://system.erecruiter.pl/FormTemplates/RecruitmentForm.aspx?WebID=08f99fcf52e84130b8aa071138c132a0",
  b2bSalary: "20 000 - 25 000 PLN",
  uopSalary: "16 500 - 21 500 PLN",
  locations: ["Remote", "Białystok", "Gdańsk", "Warsaw"],
  description: (
    <>
      Acaisoft specializes in creating, deploying, and managing cloud-based
      applications & transforming legacy solutions into native cloud
      environments.
      <br />
      We collaborate with both startups and large corporate clients from the USA
      and Europe.
      <br />
      <br />
      Partnership in relationships, equal opportunities for development, and a
      friendly working environment are the values that guide us every day in our
      organization. Our team is a fantastic mix of personalities. Anyone who has
      an idea is welcomed with open arms and supported, and asking questions is
      never a bad idea!
      <br />
      <br />
      <strong>Join us as an MLOps Engineer and see for yourself!</strong>
    </>
  ),
  requirements: (
    <>
      <strong>This offer will be a perfect match for you if you have:</strong>
      <ul>
        <li>At least 3 years of relevant experience in a similar position.</li>
        <li>Very good knowledge of Python.</li>
        <li>Understanding of ML practices on GCP.</li>
        <li>
          Practice with containerization tools like Kubernetes, and Docker.
        </li>
        <li>Experience with DevOps and CI/CD practices.‍</li>
      </ul>
      <br />
      <strong>It would be nice if you have:</strong>
      <ul>
        <li>Familiarity with AI and NLP concepts and technologies.</li>
        <li>
          Prior End-to-end involvement in Data Science projects from an
          engineering perspective.
        </li>
      </ul>
    </>
  ),
  responsibilities: (
    <>
      <strong>Your main responsibilities for this position will be:</strong>
      <ul>
        <li>
          Designing cloud infrastructure required for developing and deploying
          AI-driven applications.
        </li>
        <li>
          Developing MLOps workflows for data preparation, deployment,
          monitoring, and retraining.
        </li>
        <li>
          Improving ML models&apos; reproducibility, auditing, and performance
          capabilities.
        </li>
        <li>
          Translating business problems into ML ones and creating ML solutions
          to produce desired customer business outcomes.
        </li>
        <li>Contributing to the organization&apos;s knowledge database.</li>
      </ul>
    </>
  ),
};
