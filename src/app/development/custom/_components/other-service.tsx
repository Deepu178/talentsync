"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion";
import * as React from "react";

import { cn } from "@/lib/utils";

export const OtherServices = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);

  return (
    <div className="flex justify-center relative items-stretch gap-10 rounded-md layout py-10">
      <div className="flex-1 flex-col relative flex items-start">
        <h2 className="font-semibold text-foreground">
          Custom Web Development Services
        </h2>
        <p className="mt-10 max-w-sm">
          Our certified developers and award-winning experts will help you build
          your website from scratch and grow your brand online. Explore our
          website development services.
        </p>
        {content.map((item, index) => (
          <div
            key={item.title + index}
            className={cn(
              "py-2 border-b relative w-full last:border-b-0",
              activeCard === index && "z-10",
              index === 0 && "mt-10",
            )}
            onMouseEnter={() => setActiveCard(index)}
          >
            <motion.h2
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: activeCard === index ? 1 : 0.8,
              }}
              className="font-semibold text-foreground"
            >
              {item.title}
            </motion.h2>
            <motion.p
              initial={{
                height: 0,
                opacity: 0,
                marginTop: 0,
              }}
              animate={{
                height: activeCard === index ? "max-content" : 0,
                opacity: activeCard === index ? 1 : 0,
                marginTop: activeCard === index ? 20 : 0,
              }}
              className="text-muted-foreground max-w-sm"
            >
              {item.description}
            </motion.p>
          </div>
        ))}
      </div>
      <div
        className={cn(
          "hidden lg:block flex-1 w-full rounded-md overflow-hidden text-foreground",
          contentClassName,
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </div>
  );
};
