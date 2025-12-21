"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const stories = [
  {
    company: "FintechCo",
    role: "Senior Go Engineer",
    hiredIn: "4 Days",
    summary: "FintechCo needed a backend expert with high-concurrency experience. We matched them with a former Uber engineer in 48 hours.",
    tag: "Fintech"
  },
  {
    company: "HealthAI",
    role: "Lead Data Scientist",
    hiredIn: "1 Week",
    summary: "Scaled their data science team from 1 to 4 in one month to accelerate their FDA approval pipeline.",
    tag: "HealthTech"
  },
  {
    company: "LogisticsNow",
    role: "Full Stack Team (3)",
    hiredIn: "2 Weeks",
    summary: "Built a complete remote engineering pod to rewrite their legacy logistics core. 40% cost reduction vs US hires.",
    tag: "Logistics"
  },
  {
    company: "ChainProtocol",
    role: "Rust Protocol Engineer",
    hiredIn: "5 Days",
    summary: "Sourced a niche Rust expert with cryptography background for their L1 blockchain mainnet launch.",
    tag: "Web3"
  }
];

const OurWork = () => {
  return (
    <section id="success-stories" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-x-0 top-0 h-[500px] bg-gradient-to-b from-background via-background to-transparent z-0 pointer-events-none" />

      <div className="container px-4 md:px-6 relative z-10 text-center">
        <div className="mb-16 flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6 leading-[1.1]">
            Success Stories
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
            How innovative companies are scaling with TalentSync Talent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {stories.map((item, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col items-start text-left rounded-3xl border border-border/40 bg-background/50 hover:bg-muted/10 transition-all duration-300 p-8 hover:border-primary/20"
            >
              <div className="mb-6 w-full flex justify-between items-start">
                <div className="px-3 py-1 rounded-md border border-border/40 bg-background/50 text-xs uppercase tracking-wider font-mono text-muted-foreground">
                  {item.tag}
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider mb-1">Hired In</p>
                  <p className="font-semibold text-primary">{item.hiredIn}</p>
                </div>
              </div>

              <h3 className="text-2xl font-medium mb-3 group-hover:text-primary transition-colors">
                {item.company} hired a {item.role}
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed mb-6">
                {item.summary}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWork;
