"use client";

import { ArrowRight, Mail } from "lucide-react";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

import CalBtn from "@/components/CalBtn";
import { ICON_SIZE } from "@/constants/env";
import { cn } from "@/lib/utils";

const founders = [
  "https://res.cloudinary.com/pixelwand/image/upload/v1699691265/npmoxeap9s7vrhviwehw.png",
  "https://res.cloudinary.com/pixelwand/image/upload/v1754383040/sruthi_gwgond.webp",
  "https://res.cloudinary.com/pixelwand/image/upload/v1754378117/ajay_vpfhzz.jpg",
];

const Contact = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <section className="section py-24 md:py-32" id="contact">
      <div className="w-[90.5%] 2xl:w-[73.5%] mx-auto relative">
        {/* Background Grid - Consistent with Services.tsx */}
        <div className="absolute inset-0 -z-10 translate-y-12">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          ref={divRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="group relative border border-border/40 bg-background/60 backdrop-blur-xl overflow-hidden rounded-[2rem]"
        >

          {/* Spotlight Effect - Subtle */}
          <div
            className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0"
            style={{
              opacity: opacity,
              background: `radial-gradient(800px circle at ${position.x}px ${position.y}px, rgba(120, 113, 255, 0.1), transparent 40%)`,
            }}
          />

          {/* Header Bar */}
          <div className="px-4 md:px-8 py-4 md:py-6 border-b border-border/40 flex justify-between items-center relative z-10 bg-muted/5">
            <span className="font-mono text-xs md:text-sm tracking-wider uppercase text-primary">
              Start Hiring
            </span>
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-red-500/20 border border-red-500/50" />
              <div className="w-2 h-2 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
              <div className="w-2 h-2 rounded-full bg-green-500/20 border border-green-500/50" />
            </div>
          </div>

          <div className="relative z-10 p-8 md:p-16 lg:p-20 text-center">

            {/* Main Typo */}
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-8 text-foreground leading-[1.1]">
              Ready to scale your <br className="hidden md:block" />
              <span className="text-primary/90">team?</span>
            </h2>

            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12">
              Hire the world's best engineers, designers, and product leaders. <br className="hidden md:block" />
              We handle compliance, payroll, and vetting.
            </p>

            <div className="flex flex-col items-center gap-8">
              {/* Primary Action */}
              <div className="flex flex-col md:flex-row gap-4 w-full justify-center items-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group w-full md:w-auto"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full opacity-70 blur-md group-hover:opacity-100 transition duration-200" />
                  <CalBtn
                    variant="default"
                    size="lg"
                    className="relative px-8 h-14 rounded-full text-base font-medium bg-primary text-primary-foreground shadow-2xl hover:shadow-primary/50 transition-all w-full md:w-auto min-w-[200px]"
                  >
                    Start Hiring Now
                    <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </CalBtn>
                </motion.div>

                <motion.a
                  href="mailto:team@talentsync.work"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 h-14 rounded-full text-base font-medium border border-border bg-background hover:bg-muted/50 transition-all flex items-center justify-center gap-2 hover:border-foreground/20 w-full md:w-auto min-w-[200px]"
                >
                  <Mail size={18} />
                  team@talentsync.work
                </motion.a>
              </div>

              {/* Footer / Social Proof */}
              <div className="pt-8 mt-4 border-t border-border/20 w-full max-w-md flex flex-col items-center gap-3">
                <div className="flex -space-x-3">
                  {founders.map((img, i) => (
                    <motion.img
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      key={i}
                      src={img}
                      alt="Founder"
                      className="w-8 h-8 rounded-full border-2 border-background object-cover grayscale opacity-70 transition-all hover:grayscale-0 hover:opacity-100 hover:scale-110 hover:z-10 bg-muted"
                    />
                  ))}
                </div>
                <p className="text-xs font-mono text-muted-foreground uppercase tracking-wide">
                  Join 20+ Founders building with us
                </p>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
