import React from "react";
const faqList = [
  {
    id: 0,
    q: "What is TalentSync?",
    a: "TalentSync is SaaS building company which helps SaaS founders to build SaaS products.",
  },
  {
    id: 1,
    q: "What service do we provide?",
    a: "We specialized in building SaaS products, Business Development, Marketing and building community around the SaaS product. Our team of passionate designer & Developers, Business Developer and Marketing experts will help you to build your SaaS product from scratch.",
  },
  {
    id: 2,
    q: "What makes us different?",
    a: "We prioritize working with clients who value their time and product as much as we do. unlike agencies that offer unlimited services with a cookie-cutter approach, we focus on delivering quality and unique SaaS solutions that align with your business goals.",
  },
  {
    id: 3,
    q: "How can I get started with TalentSync?",
    a: "We offer range of SaaS development services, including Business development, Marketing and Community building for SaaS product with tested methods. We work closely with clients to understand their specific requirements and provide a custom solution.",
  },
  {
    id: 4,
    q: "What is the process of working with you",
    a: "Our process typically involves an initial consultation to gather project details and understand your goals. we then proceed to research, ideation, and iterations, working closely with you for feedback and approvals. our aim is to ensure a collaborative and transparent process throughout the project's lifecycle.",
  },
  {
    id: 5,
    q: "Do you offer ongoing support after project completions?",
    a: "yes, we value long-term relationships with our clients and offer post-project support and maintenance services. whether you need assistance with updates, troubleshooting, or further enhancements, we are here to support you beyond the project's completion.",
  },
];
const Faqs = () => {
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="layout">
        <div className="text-center">
          <h2 className="font-bold">Helpful Faqs</h2>
        </div>

        <div className="grid w-full grid-cols-1 mx-auto mt-10 sm:mt-20 md:grid-cols-2 md:gap-x-16 gap-y-8 md:gap-y-12">
          {faqList.map((faq) => (
            <div key={faq.id}>
              <p className="text-xl font-semibold text-foreground sm:text-2xl">
                {faq.q}
              </p>
              <p className="mt-3 text-base font-normal text-muted-foreground sm:mt-6 sm:text-lg">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
