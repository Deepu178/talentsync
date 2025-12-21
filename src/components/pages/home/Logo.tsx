"use client";

import { motion } from "framer-motion";
import React from "react";

const Logos = () => {
  // Duplicate companies to ensure seamless loop
  const marqueeCompanies = [...companies, ...companies, ...companies];

  return (
    <div className="w-full py-10 border-b border-border/40 bg-background/50 backdrop-blur-sm overflow-hidden">
      <div className="container max-w-[1100px] px-4 flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-12">
        <div className="shrink-0 max-md:text-center">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/50">
            Trusted by high-growth global teams
          </p>
        </div>

        {/* Marquee Container with Gradient Masks */}
        <div className="relative flex-1 w-full overflow-hidden mask-linear-fade">
          <div className="absolute inset-y-0 left-0 w-8 sm:w-20 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-8 sm:w-20 bg-gradient-to-l from-background to-transparent z-10" />

          <motion.div
            className="flex items-center gap-12 sm:gap-16 w-max"
            animate={{ x: [0, -1035] }} // Approximate width of one set. Ideally calculated dynamically, but fixed is reliable for small sets.
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 25, // Adjust speed here
            }}
          >
            {marqueeCompanies.map((company, index) => (
              <div
                key={`${company.name}-${index}`}
                className="group relative flex items-center justify-center shrink-0 px-6 py-4 border border-border/50 bg-background/50 rounded-2xl min-w-[160px] h-24 transition-all duration-300 hover:border-primary/20 hover:bg-primary/5 hover:shadow-lg hover:shadow-primary/5"
              >
                {company.logo ? (
                  <img
                    className="h-8 md:h-10 w-auto object-contain opacity-70 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                    src={company.logo}
                    alt={company.name}
                  />
                ) : (
                  <span className="text-lg font-bold text-foreground/80 whitespace-nowrap transition-colors duration-300 group-hover:text-primary">
                    {company.name}
                  </span>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Logos;

const companies = [
  {
    name: "Persuva",
    logo: "https://cdn.prod.website-files.com/64f8a28e10398d0db63dffb8/65b3b6364867eae91ce39595_Artboard%201.svg",
    alt: "Persuva",
  },
  {
    name: "Valuemetrix",
    logo: "/companies/valuemetrix.png",
    alt: "Valuemetrix",
  },
  {
    name: "FreightBooking",
    logo: "/companies/freightbookingcy.png",
    alt: "FreightBooking",
  },
  {
    name: "GreekKonnect",
    logo: "/companies/greekkonnect.png",
    alt: "GreekKonnect",
  },
  {
    name: "Drafton",
    logo: "/companies/drafton.png",
    alt: "Drafton",
  },
  {
    name: "Stealth Enabler",
    logo: "/companies/logo_1.png",
    alt: "Stealth Enabler",
  },
  {
    name: "Tezwealth",
    logo: "",
    alt: "Tezwealth",
  },
];
