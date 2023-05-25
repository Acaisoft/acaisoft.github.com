import { Job } from "../other";
import { recruiters } from "../recruiters";

export const seniorAiMlEngineer: Job = {
  title: "Senior AI/ML Engineer",
  slug: "senior-ai-ml-engineer",
  recruiter: recruiters.nataliaPrzybyl,
  category: "Data",
  technologies: ["Python", "Machine Learning", "Artificial Intelligence"],
  experienceLevel: "Senior",
  applyUrl:
    "https://system.erecruiter.pl/FormTemplates/RecruitmentForm.aspx?WebID=6bc4fa7444a1449e8bd990a72db74633",
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
      <strong>Join us as an AI/ML Engineer and see for yourself!</strong>
    </>
  ),
  requirements: (
    <>
      <strong>This offer will be a perfect match for you if you have:</strong>
      <ul>
        <li>At least 3 years of relevant experience in a similar position.</li>
        <li>Very good knowledge of Python.</li>
        <li>Expertise in training AI models.</li>
        <li>
          Hands-on experience with machine learning, with a focus on neural
          networks, generative models, unsupervised learning, time series, and
          classification models.
        </li>
        <li>
          Practice in the realization of algorithms for artificial intelligence
          (deep learning is a plus).
        </li>
      </ul>
      <br />
      <strong>It would be nice if you have:</strong>
      <ul>
        <li>Big data experience.</li>
        <li>
          Understanding of Deep learning libraries (Keras, TensorFlow, Torch)
        </li>
      </ul>
    </>
  ),
  responsibilities: (
    <>
      <strong>Your main responsibilities for this position will be:</strong>
      <ul>
        <li>
          Researching, analyzing, training and developing AI algorithms by
          adjusting model parameters, validating, and testing model
          effectiveness.
        </li>
        <li>Creating scalable machine learning pipelines and workflows.</li>
        <li>
          Implementing best practices for machine learning models and
          infrastructure version control, testing, and monitoring.
        </li>
        <li>
          Identifying and fixing performance issues affecting system
          dependability and efficiency.
        </li>
        <li>
          Investigating and assessing new tools and technologies that can be
          used.
        </li>
      </ul>
    </>
  ),
};
