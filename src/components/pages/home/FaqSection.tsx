
"use client";

import { ArrowRight, Mail, Calendar } from "lucide-react";

import CalBtn from "@/components/CalBtn";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { ICON_SIZE } from "@/constants/env";
import { faqs } from "@/content/faq";

const BookAndFaqSection = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-background border-t border-border/40" id="faq">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
      </div>

      <div className="container px-4 md:px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

        {/* Left Col: Booking Card */}
        <div className="h-full">
          <div className="sticky top-24 rounded-3xl border border-border/40 bg-background/40 backdrop-blur-md p-8 md:p-10 flex flex-col items-start shadow-sm">
            <div className="w-16 h-16 rounded-2xl bg-muted/20 border border-border/40 flex items-center justify-center mb-6">
              <Calendar size={24} className="text-primary" />
            </div>

            <h3 className="text-2xl md:text-3xl font-medium tracking-tight mb-4">
              Talent Consultation
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Let's discuss your hiring needs. We'll help you define the role and match you with the perfect candidate.
            </p>

            <CalBtn
              variant="default"
              size="lg"
              className="w-full md:w-auto rounded-full px-8 py-6 text-base font-medium group"
            >
              Book Hiring Call
              <ArrowRight
                size={16}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </CalBtn>

            <div className="flex flex-col gap-2 mt-8 pt-8 border-t border-border/40 w-full">
              <span className="text-xs uppercase tracking-wider font-mono text-muted-foreground">Alternatively</span>
              <a href="mailto:team@talentsync.work" className="flex items-center gap-3 text-sm font-medium hover:text-primary transition-colors">
                <Mail size={16} className="text-primary hidden sm:block" />
                team@talentsync.work
              </a>
            </div>
          </div>
        </div>

        {/* Right Col: FAQ */}
        <div className="flex flex-col justify-center">
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
              Answers to common questions
            </h2>
            <p className="text-muted-foreground">
              Everything you need to know about our process and model.
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((item, i) => (
              <AccordionItem
                key={item.id}
                value={`${item.id}`}
                className="border-b border-border/40 last:border-0 mb-4"
              >
                <AccordionTrigger className="hover:no-underline py-4 md:py-6 group">
                  <div className="flex items-start text-left gap-4">
                    <span className="font-mono text-sm text-primary/50 group-hover:text-primary transition-colors pt-1">
                      0{i + 1}
                    </span>
                    <span className="text-lg font-medium text-foreground/90 group-hover:text-primary transition-colors">
                      {item.q}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-10 md:pl-10 pb-6">
                  <p className="text-muted-foreground text-base leading-relaxed max-w-[90%]">
                    {item.a}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default BookAndFaqSection;
