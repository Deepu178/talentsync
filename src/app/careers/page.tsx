

import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import openings from "@/content/openings";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join our team in Noida. We hire builders who want to share in the upside.",
};

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Grids */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40" />
      </div>

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-24 w-[90.5%] 2xl:w-[73.5%] mx-auto text-center md:text-left">
        <div className="max-w-4xl">
          <span className="font-mono text-xs uppercase tracking-wider text-primary mb-6 block">
            {/* Careers */}
          </span>
          <h1 className="text-4xl md:text-7xl font-medium tracking-tight leading-[1.1] mb-8">
            Do the best work <br />
            <span className="text-muted-foreground">of your career.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
            We are a product studio, not a body shop. We hire builders who want to own their work, ship daily, and share in the upside.
          </p>
        </div>
      </section>

      {/* Culture / Benefits */}
      <section className="py-12 border-y border-border/40 bg-background/50 backdrop-blur-sm">
        <div className="w-[90.5%] 2xl:w-[73.5%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "In-Person (Noida)", desc: "We believe in high-bandwidth collaboration. We work together from our studio in Noida." },
            { title: "Profit Sharing", desc: "We share 10% of studio profits with the team. When we win, you win." },
            { title: "Zero Bureaucracy", desc: "No middle management. No useless meetings. Just direct collaboration." }
          ].map((item, i) => (
            <div key={i} className="flex gap-4">
              <div className="mt-1">
                <CheckCircle2 className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Open Roles */}
      <section className="py-24 w-[90.5%] 2xl:w-[73.5%] mx-auto">
        <h2 className="text-3xl font-medium tracking-tight mb-12">Open Positions</h2>

        <div className="grid gap-6">
          {openings.map((role) => (
            <div key={role.id} className="group relative border border-border/40 bg-background/40 hover:bg-muted/5 transition-colors rounded-2xl p-8 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
              <div className="space-y-4 max-w-3xl">
                <h3 className="text-2xl font-medium flex items-center gap-3">
                  {role.q}
                  <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20">
                    Onsite
                  </span>
                </h3>
                <p className="text-muted-foreground leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all">
                  {role.a}
                </p>
              </div>
              <div className="flex-shrink-0">
                <Link
                  href={`mailto:contact@talentsync.work?subject=Application for ${role.q}`}
                  className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
                >
                  Apply Now
                  <ArrowUpRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-2xl border border-dashed border-border/60 bg-muted/5 text-center max-w-2xl mx-auto">
          <h3 className="text-lg font-medium mb-2">Don't see your role?</h3>
          <p className="text-muted-foreground mb-6">
            We are always open to meeting exceptional engineers and designers.
          </p>
          <Link
            href="mailto:contact@talentsync.work?subject=General Application"
            className="text-primary hover:underline underline-offset-4 font-mono text-sm"
          >
            Email us explicitly →
          </Link>
        </div>
      </section>
    </main>
  );
}
