import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

import UnstyledLink from "@/components/links/UnstyledLink";
import { Button } from "@/components/ui/button";

const Projects = () => {
  return (
    <section className="py-10 sm:py-16 lg:py-24">
      <div className="layout max-w-2xl text-center">
        <h2 className="font-bold border-b-8 border-primary w-max mx-auto">
          OUR WORK
        </h2>
        <p className="max-w-xl mx-auto mt-4 text-xl text-muted-foreground">
          Custom B2C, B2B and eCommerce solutions optimized for traffic,
          engagement and conversion.
        </p>

        <Button className="mt-6 py-6" size="lg">
          Request Quote
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
      <div className="layout grid mt-6 grid-cols-2 gap-6">
        {portfolio.map((project) => (
          <div key={project.id}>
            <PortfolioCard {...project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

const portfolio = [
  {
    id: "drafton",
    title: "Drafton",
    description: "Smart proposal builder, made for Marketing & Sales Teams.",
    image: "/portfolio/drafton.png",
    images: [
      "/portfolio/draftondashboard.png",
      "/portfolio/draftonproposal.png",
    ],
    link: "https://drafton.io/",
    tag: "Proposal Automation",
  },
  {
    id: "valuemetrix",
    title: "Valuemetrix",
    description: "AI Investment Platform for Stock Market Investors.",
    image: "/portfolio/valuemetrix.png",
    images: ["/portfolio/valuemetrixdashboard.png"],
    link: "https://valuemetrix.io/",
  },
  {
    id: "housepersqft",
    title: "HousePerSqft",
    description:
      "India's best property company in Real State industry relevant properties.",
    image: "/portfolio/Housepersqft.png",
    images: ["/portfolio/housepersqft-1.png", "/portfolio/housepersqft-2.png"],
    link: "https://housepersqft.com/",
  },
  {
    id: "integra",
    title: "Integra",
    description: "Integra is our cutting-edge lead generation software.",
    image: "/portfolio/integra.png",
    images: ["/portfolio/integra.png"],
    link: "https://www.integraleads.xyz",
  },
];

type PortfolioCardProps = (typeof portfolio)[number];

const PortfolioCard = ({
  id,
  title,
  description,
  image,
}: PortfolioCardProps) => {
  return (
    <div className="relative aspect-[512/280] bg-card shadow-[2px_4px_16px_0px_hsl(var(--muted-foreground)/.3)_inset] group h-full overflow-hidden rounded-2xl">
      <div className="overflow-hidden rounded-lg aspect-h-1 absolute inset-0">
        <Image
          width={512}
          height={288}
          className="object-cover w-full h-full"
          src={image}
          alt=""
        />
      </div>
      <div className="flex absolute inset-0 z-10 justify-between space-x-4 bg-foreground/40 p-6 items-end">
        <div>
          <h3 className="font-bold text-background h2">
            <UnstyledLink href={`/projects/${id}`}>{title}</UnstyledLink>
          </h3>
          <h4 className="mt-1 font-normal text-muted sm:text-sm md:text-base">
            {description}
          </h4>
        </div>
      </div>
    </div>
  );
};
