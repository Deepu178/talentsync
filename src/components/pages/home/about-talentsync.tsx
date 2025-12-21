"use client";

import { cn } from "@/lib/utils";

const AboutTalentSync = () => {
  return (
    <section className="section" id="about-us">
      <h2 className="heading font-medium g-text tracking-tighter leading-[1.3]">
        Why TalentSync?
      </h2>
      <div className="mt-2 w-[90.5%] xl:w-[73.5%] mx-auto border-l border-t border-b px-4">
        <div className="grid-cols-7 hidden md:grid">
          <div
            className={cn(
              miniSectionClassName,
              miniSectionStartClassName,
              "text-sm text-left font-mono"
            )}
          ></div>
          <div className={cn(miniSectionClassName, "font-mono text-sm px-4")}>
            (01)
          </div>
          <div className={cn(miniSectionClassName, "font-mono text-sm px-4")}>
            (02)
          </div>
          <div className={cn(miniSectionClassName, "font-mono text-sm px-4")}>
            (03)
          </div>
        </div>
        {content.map((item, index) => (
          <div key={index} className="grid-cols-6 md:grid-cols-7 grid">
            <h3
              className={cn(
                miniSectionClassName,
                miniSectionStartClassName,
                "text-sm text-left font-mono px-4"
              )}
            >
              {item.title}
            </h3>
            {item.details.map((detail, detailIndex) => (
              <div className={cn(miniSectionClassName)} key={detailIndex}>
                <p className="px-4">{detail?.heading}</p>
                <span className="font-mono text-xs md:hidden">
                  ({detailIndex})
                </span>
                {detail?.type === "metrics" ? (
                  <h4 className="text-xl md:text-3xl font-semibold font-mono px-4">
                    {detail.content}
                  </h4>
                ) : (
                  <p className="text-sm px-4">{detail.content}</p>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutTalentSync;

const miniSectionClassName =
  "border-r pl-0 pr-5 col-span-2 md:col-span-2 py-2 md:py-14 ";
const miniSectionStartClassName =
  "col-span-6 md:col-span-1 text-foreground border-b md:border-b-0 border-t-0 first:border-t md:first:border-t-0";

const content: {
  title: string;
  details: {
    content: string;
    heading?: string;
    type?: "metrics";
  }[];
}[] = [
    {
      title: "Our Story",
      details: [
        {
          content:
            "We are builders at heart. We started TalentSync not just to help others, but to build our own products. We use the same team, tools, and passion for our internal ventures as we do for our clients.",
        },
        {
          content:
            "We partner with ambitious founders to build scalable products—treating your startup with the same care and urgency as our own.",
        },
        {
          content:
            "Whether validating a new internal idea or scaling a client's specific vision, we stay lean, fast, and focused on real market impact.",
        },
      ],
    },
    {
      title: "Our Process",
      details: [
        {
          content: "We understand your idea, users, and goals.",
        },
        {
          content: "We build fast, scalable, and beautiful SaaS products.",
        },
        {
          content: "We deploy, maintain, and evolve your product.",
        },
      ],
    },
    {
      title: "Client Outcomes",
      details: [
        {
          heading: "Total funding raised",
          content: "2M$+",
          type: "metrics",
        },
        {
          heading: "Total users",
          content: "500k+",
          type: "metrics",
        },
        {
          heading: "Money saved",
          content: "400k$+",
          type: "metrics",
        },
      ],
    },
  ];
