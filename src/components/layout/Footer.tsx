"use client";
import { PiLinkedinLogo, PiXLogoLight } from "react-icons/pi";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { ICON_SIZE } from "@/constants/env";

import UnstyledLink from "../links/UnstyledLink";
import { Button } from "../ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

const legals = [
  { name: "Terms", href: "/legal/terms" },
  { name: "Privacy", href: "/legal/privacy" },
];

const navigation = {
  explore: [
    { name: "Find Talent", href: "/#find-talent" },
    { name: "Find Work", href: "/#find-work" },
    { name: "How it Works", href: "/#how-it-works" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Success Stories", href: "/#success-stories" },
    { name: "Contact", href: "/#contact" },
  ],
};

const Footer = () => {
  return (
    <footer className="relative pt-24 pb-12 overflow-hidden border-t border-white/5 bg-background">
      {/* Background Gradient */}
      <div className="absolute inset-x-0 bottom-0 h-[600px] bg-gradient-to-t from-indigo-950/20 via-background to-background z-0 pointer-events-none" />

      {/* Main Grid */}
      <div className="container px-4 md:px-6 relative z-20 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-12">

        {/* Brand / Left - Spans 5 cols */}
        <div className="md:col-span-5 flex flex-col items-start text-left">
          <span className="font-mono text-sm uppercase tracking-widest text-primary/80 mb-6 block">
            TalentSync
          </span>
          <h3 className="text-3xl font-medium tracking-tight mb-6">
            Hire the top 1% of <br /> global talent today.
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-sm text-lg">
            We help high-growth companies build world-class distributed teams in days, not months.
          </p>
          <div className="flex gap-3 mb-8">
            {socialIcons.map((icon) => {
              const IconComponent = icon.icon;
              return (
                <Tooltip key={icon.name}>
                  <TooltipTrigger asChild>
                    <a
                      href={icon.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center rounded-full w-12 h-12 border border-border/40 bg-muted/20 hover:bg-muted/40 hover:border-primary/50 hover:text-primary transition-all text-muted-foreground"
                    >
                      <IconComponent size={20} />
                      <span className="sr-only">{icon.name}</span>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>{icon.name}</TooltipContent>
                </Tooltip>
              );
            })}
          </div>
          <a href="mailto:team@talentsync.work" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-0.5">
            team@talentsync.work
          </a>
        </div>

        {/* Spacer - Spans 3 cols */}
        <div className="hidden md:block md:col-span-3" />

        {/* Navigation Grid - Spans 4 cols (2 cols internal) */}
        <div className="md:col-span-4 grid grid-cols-2 gap-8">
          <div>
            <h4 className="font-mono text-xs uppercase text-primary/60 mb-8 tracking-wider">Platform</h4>
            <ul className="space-y-4">
              {navigation.explore.map((link) => (
                <li key={link.name}>
                  <UnstyledLink
                    href={link.href}
                    className="text-base text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 group"
                  >
                    {link.name}
                  </UnstyledLink>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-mono text-xs uppercase text-primary/60 mb-8 tracking-wider">Company</h4>
            <ul className="space-y-4">
              {navigation.company.map((link) => (
                <li key={link.name}>
                  <UnstyledLink
                    href={link.href}
                    className="text-base text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 group"
                  >
                    {link.name}
                  </UnstyledLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Utility Bar */}
      <div className="container px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground relative z-20">
        <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/5">
        </div>

        <div className="flex items-center gap-8 font-medium">
          <p>© {new Date().getFullYear()} TalentSync.</p>
          <div className="flex gap-6">
            {legals.map((legal) => (
              <UnstyledLink key={legal.name} href={legal.href} className="hover:text-indigo-400 transition-colors">
                {legal.name}
              </UnstyledLink>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

const socialIcons = [
  {
    name: "X",
    href: "https://x.com/talentteamsync",
    icon: PiXLogoLight,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/syncingtalent/",
    icon: PiLinkedinLogo,
  },
];
