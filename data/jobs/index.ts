import { Job } from "../other";
import { dataEngineerTechLead } from "./data-engineer-tech-lead";
import { marketingAnalystWithGoogleAnalytics } from "./marketing-analyst-with-google-analytics";
import { midDeliveryManager } from "./mid-delivery-manager";
import { midFullstackDeveloper } from "./mid-fullstack-developer";
import { midGolangEngineer } from "./mid-golang-engineer";
import { seniorAiMlEngineer } from "./senior-ai-ml-engineer";
import { seniorDataEngineer } from "./senior-data-engineer";
import { seniorGolangEngineer } from "./senior-golang-engineer";
import { seniorMlopsEngineer } from "./senior-mlops-engineer";
import { seniorReactNativeEngineer } from "./senior-react-native-engineer";

export const jobs = [
  seniorAiMlEngineer,
  seniorMlopsEngineer,
  marketingAnalystWithGoogleAnalytics,
  dataEngineerTechLead,
  midFullstackDeveloper,
  seniorDataEngineer,
  midDeliveryManager,
  seniorGolangEngineer,
  midGolangEngineer,
  seniorReactNativeEngineer,
];

export const getSimilarJobs = (job: Job) =>
  jobs.filter(
    (j) =>
      j.slug !== job.slug &&
      j.technologies.some((t) => job.technologies.includes(t))
  );
