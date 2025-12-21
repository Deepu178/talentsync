"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import NavLink from "@/components/links/NavLink";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const vh = Math.round(window.innerHeight / 100);
      if (window.scrollY > vh) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={cn(
        "border mx-auto gap-5 flex p-2 px-4 rounded-full bg-background/80 backdrop-blur w-max font-normal fixed transition-all left-1/2 -translate-x-1/2 z-[999]",
        isScrolled
          ? "opacity-100 bottom-5 translate-y-0"
          : "opacity-0 translate-y-full bottom-0"
      )}
    >
      {links.map((link) => (
        <NavLink href={link.href} key={link.name}>
          {link.name}
        </NavLink>
      ))}
    </div>
  );
};

export default Navbar;

const links = [
  {
    name: "Validate",
    href: "/#sec-validate",
  },
  {
    name: "MVP",
    href: "/#sec-build",
  },
  {
    name: "Market",
    href: "/#sec-market",
  },
  {
    name: "Scale",
    href: "/#sec-scale",
  },
];
