

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Linkedin, Terminal, User } from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | TalentSync",
  description: "Meet the team behind TalentSync. We enable high-growth companies to hire the top 1% of global talent.",
};

export default function About() {
  return (
    <main className="relative text-foreground overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 w-[90.5%] 2xl:w-[73.5%] mx-auto">
        <div className="max-w-4xl">
          <span className="font-mono text-xs uppercase tracking-wider text-primary mb-6 block">
            {"// About The Studio"}
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.1] mb-8">
            We are builders, <br />
            <span className="text-muted-foreground">not account managers.</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
            TalentSync is a premium global talent partner. We replace the bloated agency model with a curated network of top 1% engineers who care about the outcome.
          </p>
        </div>
      </section>

      {/* Meet the Builders Section */}
      <section className="py-24 border-t border-border/40 bg-background/50 backdrop-blur-sm">
        <div className="w-[90.5%] 2xl:w-[73.5%] mx-auto">
          <div className="mb-16 max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-wider text-primary mb-4 block">
              {"// The Team"}
            </span>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">
              Meet the Builders.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We are a small, tight-knit team of engineers and designers. No middle management. Just builders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-muted/30 border-none">
              <CardHeader className="flex flex-col md:flex-row gap-4 items-start md:items-center">
                <div className="w-16 h-16 border rounded-xl relative overflow-hidden">
                  <Image
                    className="object-cover"
                    src="https://crm.talentsync.work/images/founders/deependra.png"
                    alt="Deependra Kumar"
                    fill
                  />
                </div>
                <div>
                  <CardTitle className="text-xl font-medium font-serif">
                    Deependra Kumar
                  </CardTitle>
                  <p className="text-sm text-muted-foreground font-mono">
                    Founder & CEO
                  </p>
                </div>
              </CardHeader>
              <CardContent className="font-sans text-muted-foreground leading-relaxed">
                "We built TalentSync because we were tired of the agency
                model—slow, bloated, and misaligned. We wanted to build a studio
                that operates with the speed and ownership of a co-founder."
              </CardContent>
              <CardFooter>
                <div className="flex gap-4">
                  <Link
                    href="https://www.linkedin.com/in/deependra-kumar-23bc/"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </Link>
                </div>
              </CardFooter>
            </Card>

            <Card className="bg-muted/30 border-none">
              <CardHeader className="flex flex-col md:flex-row gap-4 items-start md:items-center">
                <div className="w-16 h-16 border rounded-xl relative overflow-hidden">
                  <Image
                    className="object-cover"
                    src="https://crm.talentsync.work/images/founders/chandra.png"
                    alt="Chandra Shekhar"
                    fill
                  />
                </div>
                <div>
                  <CardTitle className="text-xl font-medium font-serif">
                    Chandra Shekhar
                  </CardTitle>
                  <p className="text-sm text-muted-foreground font-mono">
                    Co-founder & CTO
                  </p>
                </div>
              </CardHeader>
              <CardContent className="font-sans text-muted-foreground leading-relaxed">
                "Great products aren't just built; they are engineered for scale.
                At TalentSync, we combine deep technical expertise with product
                intuition to ship software that lasts."
              </CardContent>
              <CardFooter>
                <div className="flex gap-4">
                  <Link
                    href="https://www.linkedin.com/in/chandra-shekhar-2016/"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </Link>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Philosophy Grid */}
      <section className="py-24 w-[90.5%] 2xl:w-[73.5%] mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl font-medium tracking-tight mb-4">Our Methodology</h2>
          <div className="h-1 w-24 bg-primary rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {philosophy.map((item, idx) => (
            <div key={idx} className="group p-8 border border-border/40 bg-background/40 hover:bg-muted/5 transition-colors rounded-2xl">
              <div className="w-12 h-12 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-105 transition-transform">
                <item.icon size={24} />
              </div>
              <h3 className="text-xl font-medium mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Join Section */}
      <section className="py-24 border-t px-6">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-medium font-serif">
            Join the Studio
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
            We are always looking for exceptional engineers, designers, and
            product thinkers who want to build the future of software. If you're
            obsessed with quality and speed, you belong here.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/careers">
              <Button size="lg" className="rounded-full px-8 font-medium">
                View Open Roles
              </Button>
            </Link>
            <Link
              href="https://wellfound.com/company/talentsync"
              target="_blank"
              className="inline-flex h-12 items-center justify-center rounded-full border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              View Openings
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}

const philosophy = [
  {
    title: "Ownership",
    description: "We don't wait for tickets. We identify problems and solve them. We treat your product like it's our own equity.",
    icon: User
  },
  {
    title: "Velocity",
    description: "Speed is a feature. We ship weekly, iterate daily, and avoid over-engineering until scale demands it.",
    icon: ArrowUpRight
  },
  {
    title: "Technical Truth",
    description: "We don't hide complexities. If a feature is risky or expensive, we tell you upfront. Radical transparency saves months.",
    icon: Terminal
  }
];
