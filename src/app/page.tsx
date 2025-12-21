import Contact from "@/components/pages/home/Contact";
import BookAndFaqSection from "@/components/pages/home/FaqSection";
import Hero from "@/components/pages/home/Hero";
import OurWork from "@/components/pages/home/Portfolio";
import Services from "@/components/pages/home/Services";
import Process from "@/components/pages/home/Process";
import Audience from "@/components/pages/home/Audience";
import Impact from "@/components/pages/home/Impact";

import type { Metadata } from "next";

export const revalidate = 3600 * 24 * 7; // revalidate this page every week

export const metadata: Metadata = {
  title: "TalentSync - Hire the Top 1% of Global Talent.",
  description: "TalentSync sources, vets, and matches you with world-class engineers, designers, and product experts in days, not months.",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Impact />
      <Services />
      <Process />
      <Audience />
      <OurWork />
      <BookAndFaqSection />
      <Contact />
    </main>
  );
}
