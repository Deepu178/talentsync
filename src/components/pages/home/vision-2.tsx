import Image from "next/image";
import React from "react";

import Marquee from "@/components/marquee";

const Vision = () => {
  return (
    <section id="vision" className="py-24 md:py-32 relative overflow-hidden bg-background border-t border-border/40">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
      </div>

      <div className="w-[90.5%] xl:w-[73.5%] mx-auto relative z-10">
        <h2 className="h0 mx-auto text-center text-[5vw] md:text-[3.5vw] leading-[1.2] font-medium text-foreground tracking-tight max-w-5xl">
          Connecting the world's best talent with the{" "}
          <span className="text-primary italic font-secondary">world's best companies</span>.

          <br className="hidden md:block my-6" />

          <span className="text-[3vw] md:text-[2vw] text-muted-foreground font-normal block mt-6 max-w-4xl mx-auto leading-relaxed">
            We believe geography should not dictate opportunity. We are building the infrastructure for the global remote workforce.
          </span>
        </h2>
      </div>

      <div className="mt-24 relative z-10 border-y border-border/40 bg-background/40 backdrop-blur-sm py-6">
        <Marquee />
      </div>
    </section>
  );
};

export default Vision;
