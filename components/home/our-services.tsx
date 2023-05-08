import adobeIllustrator from "../../public/images/logos/adobe-illustrator.webp";
import angular from "../../public/images/logos/angular.webp";
import aws from "../../public/images/logos/aws.webp";
import cypress from "../../public/images/logos/cypress.webp";
import dotnet from "../../public/images/logos/dot-net.webp";
import fastlane from "../../public/images/logos/fastlane.webp";
import figma from "../../public/images/logos/figma.webp";
import flutter from "../../public/images/logos/flutter.webp";
import go from "../../public/images/logos/go.webp";
import analytics from "../../public/images/logos/google-analytics.webp";
import googleCloud from "../../public/images/logos/google-cloud.webp";
import hotjar from "../../public/images/logos/hotjar.webp";
import java from "../../public/images/logos/java.svg";
import js from "../../public/images/logos/javascript.webp";
import kubernetes from "../../public/images/logos/kubernetes.webp";
import azure from "../../public/images/logos/ms-azure.webp";
import node from "../../public/images/logos/node-js.svg";
import python from "../../public/images/logos/python.webp";
import reactNative from "../../public/images/logos/react-native.webp";
import react from "../../public/images/logos/react.webp";
import selenium from "../../public/images/logos/selenium.webp";
import sketch from "../../public/images/logos/sketch.webp";
import ts from "../../public/images/logos/typescript.webp";
import vue from "../../public/images/logos/vue.webp";

import Image from "next/image";
import React from "react";
import {
  MdOutlineAllInclusive,
  MdOutlineBugReport,
  MdOutlineCode,
  MdOutlineDesignServices,
  MdOutlineSettings,
  MdOutlineSettingsCell,
} from "react-icons/md";
import { Accordion } from "../ui/accordion";
import { Blockquote } from "../ui/blockquote";
import { SectionHeader } from "../ui/section-header";
import { Statement } from "../ui/statement";
import { TwoColumnLayout } from "../ui/two-column-layout";
import * as Tabs from "@radix-ui/react-tabs";

const services = [
  {
    icon: <MdOutlineAllInclusive />,
    title: "Infrastructure & DevOps",
    description:
      "We have a dedicated team of DevOps experts that is tasked with automating CI/CD using popular tools and methods. We ensure that all project environments are ready for Day-2 operations with backups, security, monitoring and alerting infrastructure.",
    tags: ["Scalability", "Cloud", "IaC", "On-Prem"],
    images: [
      { src: kubernetes, alt: "Kubernetes logo" },
      { src: googleCloud, alt: "Google Cloud logo" },
      { src: aws, alt: "Amazon Web Services logo" },
      { src: azure, alt: "Microsoft Azure logo" },
    ],
  },
  {
    icon: <MdOutlineSettings />,
    title: "Backend",
    description:
      "Our team of backend engineers specialize in multiple popular technologies - GoLang, Python, NodeJS, Java and .NET. Our decades of experience guide us in selecting the right tool for the job. We are fluent in microservices architectures and are experienced in building and maintaining systems with thousands of services.",
    tags: ["Scalability", "Microservices", "Reliability", "Automation"],
    images: [
      { src: go, alt: "Go logo" },
      { src: python, alt: "Python logo" },
      { src: node, alt: "NodeJS logo" },
      { src: java, alt: "Java logo" },
      { src: dotnet, alt: ".NET logo" },
    ],
  },
  {
    icon: <MdOutlineBugReport />,
    title: "QA",
    description:
      "Our QA team works closely with our engineers & product managers to create and document test scenarios, provide acceptance criteria for planned features and automate testing where possible. We know that having automated tests that run nightly ensures that products are functioning as expected and helps find any glitches quickly in a rapid development environment.",
    tags: ["Automation", "Test Scenarios", "Nightly tests", "Load testing"],
    images: [
      { src: python, alt: "Python logo" },
      { src: java, alt: "Java logo" },
      { src: cypress, alt: "Cypress logo" },
      { src: selenium, alt: "Selenium logo" },
    ],
  },
  {
    icon: <MdOutlineCode />,
    title: "Frontend",
    description:
      "Our team of frontend engineers is specialized in development in all of the well known JavaScript frameworks - ReactJS, Angular, VueJS, Jest, Mocha and Jasmine. With years of experience, we have created a set of reusable architecture patterns and libraries that allows us to bootstrap and implement main pieces of the system within days.",
    tags: ["Scalability", "Reusability", "Modularity", "Unit testing"],
    images: [
      { src: js, alt: "JavaScript logo" },
      { src: ts, alt: "Typescript logo" },
      { src: react, alt: "React logo" },
      { src: vue, alt: "Vue.js logo" },
      { src: angular, alt: "Angular logo" },
    ],
  },
  {
    icon: <MdOutlineSettingsCell />,
    title: "Mobile Development",
    description:
      "Our mobile development team focuses on working in hybrid mobile apps, created in Flutter and React Native. We use fully automated CI/CD pipelines for development and distribution of the apps using Fastlane.",
    tags: ["React Native", "Flutter", "Fastlane"],
    images: [
      { src: reactNative, alt: "React Native logo" },
      { src: flutter, alt: "Flutter logo" },
      { src: fastlane, alt: "Fastlane logo" },
    ],
  },
  {
    icon: <MdOutlineDesignServices />,
    title: "UI & UX",
    description:
      "Our team of UI & UX designers follow industry established design standards, workflows, and guidelines. We are experienced in conducting workshops, individual and group interviews, performing market research while at the same time working on high-fidelity mockups. Our designers work closely with our clients with tools such as Sketch, Figma, Invision, Adobe suite and others.",
    tags: ["UI", "UX", "Workshops", "Research"],
    images: [
      { src: figma, alt: "Figma logo" },
      { src: sketch, alt: "Sketch logo" },
      { src: analytics, alt: "Google Analytics logo" },
      { src: hotjar, alt: "Hotjar logo" },
      { src: adobeIllustrator, alt: "Adobe Illustrator logo" },
    ],
  },
];

export interface OurServicesProps {}

export const OurServices: React.FC<OurServicesProps> = () => {
  return (
    <section className="container py-24">
      <SectionHeader>Our services</SectionHeader>
      <TwoColumnLayout>
        <Blockquote>
          Improve time to market of your products by leveraging proven
          architecture, project management methodologies and software
          development tools.
        </Blockquote>

        <Statement>
          Acaisoft is a software development company that focuses on end-to-end
          delivery of cloud-based solutions. Since our founding in 2015, we have
          worked with start-ups, scale-ups and Fortune 500 companies. Our
          customers not only love us for our extraordinary software engineering
          skills but also for our focus on{" "}
          <strong>communication, proactiveness</strong> and{" "}
          <strong>attention to detail</strong>
          .
          <br />
          <br />
          We believe in automation of redundant tasks and have developed a{" "}
          <strong>set of tools</strong> and <strong>libraries</strong> that
          speed up <strong>bootstrapping and testing of products.</strong> Our
          focus on quality at all levels of software development ensures a high
          level of user satisfaction.
        </Statement>
      </TwoColumnLayout>

      <div className="mt-8">
        <Accordion type="single" collapsible className="w-full lg:hidden">
          {services.map((s) => (
            <Accordion.Item key={s.title} value={s.title}>
              <Accordion.Trigger>
                <span className="mr-4 p-2 text-lg text-grey-500">{s.icon}</span>
                {s.title}
              </Accordion.Trigger>
              <Accordion.Content>
                {s.description}
                <div className="flex flex-wrap items-center justify-center">
                  {s.images.map(({ src, alt }) => (
                    <Image
                      key={alt}
                      src={src}
                      alt={alt}
                      className="mx-8 mt-10 h-7 w-auto"
                    />
                  ))}
                </div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion>

        <Tabs.Root
          defaultValue={services[0].title}
          orientation="vertical"
          className="mt-32 hidden justify-center lg:flex"
        >
          <Tabs.List
            aria-label="Services"
            className="flex flex-1 flex-col border-r border-grey-200"
          >
            {services.map((s) => (
              <Tabs.Trigger
                key={s.title}
                value={s.title}
                className="group flex items-center gap-5 px-8 py-2 text-left"
              >
                <div className="grid h-10 w-10 place-items-center rounded-lg text-lg text-grey-500 group-data-[state=active]:bg-blue-900 group-data-[state=active]:text-white">
                  {s.icon}
                </div>
                {s.title}
              </Tabs.Trigger>
            ))}
          </Tabs.List>
          {services.map((s) => (
            <Tabs.Content
              key={s.title}
              value={s.title}
              className="flex-[2] pl-20"
            >
              <div className="text-sm text-grey-500">Our Services</div>
              <div className="mb-8 text-3xl font-bold">{s.title}</div>
              <div className="mb-6 flex gap-3">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-purple-900/5 px-6 py-2 text-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mb-10 text-grey-500">{s.description}</div>
              <div className="flex flex-wrap gap-8 gap-x-16">
                {s.images.map((s) => (
                  <Image
                    key={s.src.src}
                    src={s.src}
                    alt={s.alt}
                    className="h-8 w-auto"
                  />
                ))}
              </div>
            </Tabs.Content>
          ))}
        </Tabs.Root>
      </div>
    </section>
  );
};
