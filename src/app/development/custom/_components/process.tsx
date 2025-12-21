"use client";
import Image from "next/image";
import { useState } from "react";

import { cn } from "@/lib/utils";

const content = [
  {
    id: 0,
    img: "/roadmap/1.avif",
    title: "Web Strategy",
    description: (
      <>
        <p>
          We analyze your brand, industry and competitors to come with a custom,
          research-backed strategy that fits your goals. By understanding what
          makes you unique, we differentiate you from your competitors and make
          you stand out from the crowd.
        </p>
        <p>During this stage, we:</p>
        <ul>
          <li>Define your business goals</li>
          <li>Determine your unique value proposition (UVP)</li>
          <li>Conduct target audience analysis</li>
        </ul>
      </>
    ),
  },
  {
    id: 1,
    img: "/roadmap/2.jpg",
    title: "Planning &amp; Information Architecture",
    description:
      "Based on the information gathered during Project Requirements, We'll develop a Timeline for your SaaS based on complexity, including a detailed project scope, timelines, and budget.",
  },
  {
    id: 2,
    img: "/roadmap/3.jpg",
    title: "Design &amp; Development",
    description:
      "Our team of designers and developers will work together to create visually stunning, highly functional MVP of your SaaS and optimized that meets the needs of your business and your target audience.",
  },
  {
    id: 3,
    img: "/roadmap/5.jpg",
    title: "Quality Assurance (QA)",
    description:
      "We'll start with community building after launching MVP so it will be easy to get feedback from the users and make the product more user friendly.",
  },
  {
    id: 4,
    img: "/roadmap/4.jpg",
    title: "Launch &amp; Optimization",
    description:
      "After launching MVP into production, we'll conduct thorough testing to ensure that it is free of bugs and that it functions properly on all devices and browsers. We'll start scaling the development of SaaS after early traction of users.",
  },
];

const Process = () => {
  const [selected, setSelected] = useState(0);
  return (
    <div className="grid mt-10 overflow-hidden border border-muted-foreground rounded-lg lg:grid-cols-5">
      <div className="divide-y lg:col-span-3 divide-muted-foreground">
        {content.map((item) => (
          <ListItem
            {...item}
            key={item.title}
            selected={selected === item.id}
            setSelected={setSelected}
          />
        ))}
      </div>

      <div className="relative hidden lg:block lg:col-span-2 lg:border-l">
        <div className="absolute inset-0">
          <Image
            width={600}
            height={600}
            className="object-cover w-full h-full"
            src={content[selected].img}
            alt={content[selected].title}
          />
        </div>
        <div className="absolute inset-0 bg-foreground/50"></div>
        <div className="relative flex flex-col justify-end prose prose-invert prose-p:my-3 prose-ul:mt-0 h-full px-12 py-10">
          {content[selected].description}
        </div>
      </div>
    </div>
  );
};

export default Process;

type ListItemProps = (typeof content)[number] & {
  selected?: boolean;
  setSelected: (value: number) => void;
};

const ListItem = ({
  id,
  title,
  description,
  selected,
  setSelected,
  img,
}: ListItemProps) => {
  return (
    <>
      <li
        tabIndex={1}
        onClick={() => {
          setSelected(id);
        }}
        className={cn(
          "relative flex flex-col items-start w-full px-6 transition-all duration-300 sm:flex-row",
          selected
            ? "py-12 bg-muted"
            : "py-8 hover:bg-muted group cursor-pointer",
        )}
      >
        <div
          className={cn(
            "inline-flex items-center justify-center flex-shrink-0 w-8 h-8 font-sans text-sm font-normal transition-all duration-200 border-muted rounded-full text-background",
            !selected &&
              "group-hover:text-background group-hover:border-primary group-hover:bg-primary",
            selected && "bg-primary text-background",
          )}
        >
          {id + 1}
        </div>
        <span
          className={cn(
            "font-sans font-normal text-background transition-all duration-200",
            selected
              ? "text-3xl mt-2 sm:mt-auto sm:ml-4 text-secondary-foreground"
              : "text-xl mt-2 sm:mt-auto sm:ml-4 group-hover:text-secondary-foreground",
          )}
        >
          {title}
        </span>

        <div
          className={cn(
            "absolute z-10 w-8 h-8 rotate-45 bg-muted left-8 bottom-4 lg:left-auto lg:top-1/2 lg:-translate-y-1/2 lg:-right-0 transition-all duration-300 opacity-0",
            selected
              ? "lg:-right-4 opacity-100 -bottom-4"
              : "group-hover:bg-muted",
          )}
        ></div>
      </li>
      <div className={cn("relative lg:hidden hidden", selected && "block")}>
        <div className="absolute inset-0">
          <Image
            width={600}
            height={600}
            className="object-cover w-full h-full"
            src={img}
            alt={title}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent"></div>
        <div className="relative flex flex-col prose prose-p:my-3 prose-ul:mt-0 justify-end h-full px-6 pb-10 pt-80">
          {description}
        </div>
      </div>
    </>
  );
};
