import { StaticImageData } from "next/image";
import nataliaPrzybyl from "../public/images/people/natalia-przybył.webp";
import martynaIwaniuk from "../public/images/people/martyna-iwaniuk.webp";
import gabrielaStradowska from "../public/images/people/gabriela-stradowska.webp";

export type Recruiter = {
  name: string;
  slug: string;
  title: string;
  photo: StaticImageData;
  linkedIn: string;
  email: string;
  quote: string;
};

export const recruiters = {
  nataliaPrzybyl: {
    name: "Natalia Przybył",
    slug: "natalia-przybyl",
    title: "IT Recruiter",
    photo: nataliaPrzybyl,
    linkedIn: "https://www.linkedin.com/in/natalia-przyby%C5%82-5819b3168/",
    email: "natalia.przybyl@acaisoft.com",
    quote: "Join Acaisoft & let's start our adventure together!",
  },
  martynaIwaniuk: {
    name: "Martyna Iwaniuk",
    slug: "martyna-iwaniuk",
    title: "IT Recruiter",
    photo: martynaIwaniuk,
    linkedIn: "https://www.linkedin.com/in/martyna-iwaniuk-536745183/",
    email: "martyna.iwaniuk@acaisoft.com",
    quote: "Let's turn a contact into a contract.",
  },
  gabrielaStradowska: {
    name: "Gabriela Stradowska",
    slug: "gabriela-stradowska",
    title: "IT Recruiter",
    photo: gabrielaStradowska,
    linkedIn: "https://www.linkedin.com/in/gabriela-stradowska-b6aa9b1b9/",
    email: "gabriela.stradowska@acaisoft.com",
    quote:
      "I believe there's no more important value than people. I'm a proactive listener, focusing on candidates' needs. Let's get to know each other and find a perfect match for you!",
  },
} satisfies Record<string, Recruiter>;
