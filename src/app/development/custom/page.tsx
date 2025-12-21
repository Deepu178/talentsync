/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

import Logos from "@/components/pages/home/Logo";

import {
  CustomHero,
  Faqs,
  OtherServices,
  Process,
  Projects,
} from "./_components";
import GetQuoteForm from "./_components/get-quote-form";

const page = () => {
  return (
    <>
      <CustomHero />
      <div className="py-12 space-y-10">
        <h2 className="font-bold border-b-8 border-primary w-max mx-auto">
          OUR CLIENTS
        </h2>
        <Logos />
      </div>
      <Projects />
      <OtherServices content={content} />
      <section className="py-12 bg-foreground sm:py-16 lg:py-20 xl:py-24">
        <div className="layout">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mt-8 h1 text-background">
              Custom Web Development Process
            </h2>
            <p className="max-w-xl mx-auto mt-4 text-xl text-muted/80">
              Glimpse behind the curtain to discover Digital Silk’s custom web
              development process. Web
            </p>
          </div>
          <Process />
        </div>
      </section>
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="layout">
          <div className="grid grid-cols-1 md:items-center gap-y-8 md:grid-cols-2 md:gap-x-16">
            <div>
              <img
                className="w-full max-w-sm mx-auto"
                src="https://cdn.rareblocks.xyz/collection/clarity/images/features-v2/5/illustration.png"
                alt=""
              />
            </div>

            <div className="prose prose-p:my-3 prose-h2:font-semibold prose-ul:mt-0">
              <h2>What Is Custom Website Development?</h2>
              <p>
                Custom web development is the process of building your website
                or other digital solution from the ground up, specifically
                tailored to suit your business needs, serve your target audience
                and help you grow your brand online.
              </p>
              <p>It includes several stages:</p>
              <ul className="pl-0">
                {[
                  "Research and analysis",
                  "Strategy and planning",
                  "Information Architecture",
                  "Frontend design and development",
                  "Backend design and development",
                  "Quality assurance and testing",
                  "Optimization and maintenance",
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <svg
                      className="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="ml-3">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Faqs />
      <section className="py-12 bg-muted sm:py-16 lg:py-20 xl:py-24">
        <div className="layout">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-x-16 xl:gap-x-32">
            <div className="flex flex-col self-stretch justify-between">
              <div className="flex-1">
                <h2 className="h2">Love to hear from you, Get in touch 👋</h2>
                <p className="mt-4 font-normal leading-7 text-muted-foreground h4">
                  Clarity gives you the blocks & components you need to create a
                  truly professional website, landing page or admin panel for
                  your SaaS and gives the blocks.
                </p>
              </div>

              <div className="relative mt-10 overflow-hidden bg-primary lg:mt-0 rounded-3xl -rotate-3">
                <div className="absolute bottom-0 right-0 -mb-72 -mr-24 border-[6px] opacity-20 border-white rounded-full w-96 h-96"></div>

                <div className="relative p-6 sm:px-8 sm:py-9">
                  <div className="flex items-center">
                    <svg
                      className="w-6 h-6 text-yellow-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      className="w-6 h-6 text-yellow-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      className="w-6 h-6 text-yellow-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      className="w-6 h-6 text-yellow-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      className="w-6 h-6 text-yellow-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <blockquote className="mt-8">
                    <p className="text-xl font-normal text-background">
                      "We love Landingfolio! Our designers were using it for
                      their projects, so we already knew what kind of design
                      they want."
                    </p>
                  </blockquote>
                  <div className="flex items-center mt-6">
                    <img
                      className="object-cover rounded-full w-11 h-11 shrink-0"
                      src="https://landingfoliocom.imgix.net/store/collection/saasui/images/sign-in/3/avatar-male.png"
                      alt=""
                    />
                    <div className="ml-4">
                      <p className="text-base font-semibold text-background">
                        Devon Lane
                      </p>
                      <p className="text-sm font-normal text-muted">
                        Co-Founder, Design.co
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <GetQuoteForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default page;

const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-primary to-primary flex items-center justify-center text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-primary to-primary flex items-center justify-center text-white">
        Linear board demo
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-primary to-primary flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-primary to-primary flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
];
