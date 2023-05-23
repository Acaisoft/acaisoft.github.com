import React from "react";
import { SectionHeader } from "../ui/section-header";
import { Accordion } from "../ui/accordion";

const questions = [
  {
    question: "Can I work remotely?",
    answer:
      "Currently, during the pandemic, everyone at Acaisoft has the option to work from home, office (where we strictly follow all safety procedures and recommendations), or in hybrid mode. Newly hired employees, who choose to work from home, receive all of the necessary equipment through delivery services.",
  },
  {
    question: "Is there any minimum required level of English at Acaisoft?",
    answer:
      "As we work with clients from all over the world on a daily basis, we are looking for candidates with minimum B2 English level. In some of the projects our internal communication is in English, as we do have some non-Polish speakers on board.",
  },
  {
    question: "Will I receive feedback after the recruitment process?",
    answer:
      "Absolutely! Regardless of the final decision, candidates receive information after completing the last stage of their recruitment process. We do our best to provide you with individualized feedback and give you a hint about what you could improve to succeed in our recruitment in the future.",
  },
  {
    question: "Do you accept IT graduates?",
    answer:
      "Yes, there are already such people working in the company. However, they had to prove their skills during the recruitment process. However, if you do not have any professional experience yet, do not hesitate to send us your CV. All applications are read by us. If not today, then maybe tomorrow we will want to employ you.",
  },
  {
    question: "What types of contracts are offered at Acaisoft?",
    answer:
      "At Acaisoft you can choose between a business (B2B), employment contract (UOP) or other preferable contracts.",
  },
  {
    question: "Is there any dress code at Acaisoft?",
    answer:
      "No, we do not have a dress code. Of course, you should dress appropriately for the situation, such as when you have a meeting with a business client scheduled for that day. In general, we believe in the principle that everyone dresses in what he or she feels best.",
  },
  {
    question: "Is it possible to change projects during the work?",
    answer:
      "Yes - in consultation with the Manager it is possible to move between projects to create the best conditions for you to work and develop.",
  },
  {
    question: "I haven't found a job offer that matches me. What's next?",
    answer: (
      <>
        Don&apos;t give up! Prepare your CV and contact one of our recruiters{" "}
        <a
          href="mailto:recruitment@acaisoft.com"
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 underline"
        >
          recruitment@acaisoft.com
        </a>
        . Our company is growing and we are still opening new projects. Even if
        there is no perfect job offer for you at the moment, we may soon be able
        to present it to you.
      </>
    ),
  },
];

export interface FaqProps {}

export const Faq: React.FC<FaqProps> = () => {
  return (
    <section className="container grid grid-cols-1 py-24 lg:grid-cols-3">
      <SectionHeader>Got a question?</SectionHeader>

      <Accordion type="single" collapsible className="lg:col-span-2">
        {questions.map(({ question, answer }) => (
          <Accordion.Item key={question} value={question}>
            <Accordion.Trigger>{question}</Accordion.Trigger>
            <Accordion.Content>{answer}</Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion>
    </section>
  );
};
