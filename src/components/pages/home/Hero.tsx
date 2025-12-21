"use client";

import createGlobe from "cobe";
import { ArrowRight, Check, Code2, Globe, Sparkles, Terminal } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import CalBtn from "@/components/CalBtn";

// Hypothetical Talent Data for Animation
const talentProfiles = [
  {
    id: 1,
    name: "Sarah J.",
    role: "Senior React Engineer",
    tech: "Next.js, TypeScript, AWS",
    loc: "São Paulo, BR",
    rate: "$65/hr",
    status: "Vetted",
    avatar: "https://i.pravatar.cc/150?u=sarah",
  },
  {
    id: 2,
    name: "David K.",
    role: "Go Backend Expert",
    tech: "Go, Kubernetes, gRPC",
    loc: "Warsaw, PL",
    rate: "$95/hr",
    status: "Top 1%",
    avatar: "https://i.pravatar.cc/150?u=david",
  },
  {
    id: 3,
    name: "Elena R.",
    role: "AI/ML Scientist",
    tech: "Python, PyTorch, LLMs",
    loc: "Bucharest, RO",
    rate: "$125/hr",
    status: "Vetted",
    avatar: "https://i.pravatar.cc/150?u=elena",
  },
];

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const [activeProfile, setActiveProfile] = useState(0);

  // Globe Animation
  useEffect(() => {
    let phi = 0;
    let width = 0;
    const onResize = () => canvasRef.current && (width = canvasRef.current.offsetWidth)
    window.addEventListener('resize', onResize)
    onResize()
    const globe = createGlobe(canvasRef.current!, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.3,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.6],
      markerColor: [0.1, 0.8, 1],
      glowColor: [0.5, 0.5, 1],
      opacity: 1,
      offset: [0, 0],
      markers: [
        // key tech hubs
        { location: [37.7595, -122.4367], size: 0.1 }, // SF
        { location: [40.7128, -74.0060], size: 0.05 }, // NYC
        { location: [52.5200, 13.4050], size: 0.05 }, // Berlin
        { location: [51.5074, -0.1278], size: 0.05 }, // London
        { location: [35.6762, 139.6503], size: 0.05 }, // Tokyo
        { location: [-33.8688, 151.2093], size: 0.05 }, // Sydney
        { location: [30.2672, -97.7431], size: 0.05 }, // Austin
        { location: [12.9716, 77.5946], size: 0.05 }, // Bangalore
        { location: [-23.5505, -46.6333], size: 0.05 }, // Sao Paulo
        { location: [1.3521, 103.8198], size: 0.05 }, // Singapore
      ],
      onRender: (state) => {
        // Drag logic
        if (!pointerInteracting.current) {
          phi += 0.005;
        }
        state.phi = phi + pointerInteractionMovement.current;
        state.width = width * 2
        state.height = width * 2
      }
    })
    setTimeout(() => {
      if (canvasRef.current) {
        canvasRef.current.style.opacity = '1'
      }
    })
    return () => {
      globe.destroy()
      window.removeEventListener('resize', onResize)
    }
  }, []);

  // Rotate through profiles
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProfile((prev) => (prev + 1) % talentProfiles.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden bg-background">

      {/* Background Grid & Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 mix-blend-screen" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 mix-blend-screen" />
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

          {/* Left Column: Copy */}
          <div className="flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-8"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
              </span>
              Waitlist Skipped: Global Talent Pool Live
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-6"
            >
              Hire the Top 1% of <br /> Remote Talent. <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600">Earn Global Pay.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground leading-relaxed max-w-xl mb-10"
            >
              The innovative marketplace connecting high-growth companies with verified remote experts. <br className="hidden md:block" />
              <span className="text-foreground font-medium">Vetted Talent. global Teams. Fair Compensation.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group w-full sm:w-auto"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full opacity-70 blur-md group-hover:opacity-100 transition duration-200" />
                <CalBtn
                  variant="default"
                  size="lg"
                  className="relative h-14 px-8 text-lg rounded-full bg-primary text-primary-foreground shadow-xl hover:shadow-primary/30 transition-all font-medium w-full sm:w-auto"
                >
                  Start Hiring Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </CalBtn>
              </motion.div>

              <Link href="/how-it-works" className="h-14 px-8 inline-flex items-center justify-center rounded-full border border-border bg-background/50 hover:bg-muted/50 text-lg font-medium transition-colors w-full sm:w-auto">
                <Sparkles className="mr-2 w-4 h-4 text-primary" />
                How it Works
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 flex items-center gap-6 text-sm text-muted-foreground"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-muted flex items-center justify-center overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                  </div>
                ))}
              </div>
              <p>Trusted by 50+ Modern Teams</p>
            </motion.div>
          </div>

          {/* Right Column: Globe Animation + Cards */}
          <div className="relative h-[600px] w-full hidden lg:flex items-center justify-center perspective-[2000px]">

            {/* Cobe Globe */}
            <div className="absolute inset-0 flex items-center justify-center -z-10 opacity-75">
              <canvas
                ref={canvasRef}
                style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
                onPointerDown={(e) => {
                  pointerInteracting.current = e.clientX - pointerInteractionMovement.current;
                }}
                onPointerUp={() => {
                  pointerInteracting.current = null;
                }}
                onPointerOut={() => {
                  pointerInteracting.current = null;
                }}
                onMouseMove={(e) => {
                  if (pointerInteracting.current !== null) {
                    const delta = e.clientX - pointerInteracting.current;
                    pointerInteractionMovement.current = delta / 200;
                  }
                }}
                onTouchMove={(e) => {
                  if (pointerInteracting.current !== null && e.touches[0]) {
                    const delta = e.touches[0].clientX - pointerInteracting.current;
                    pointerInteractionMovement.current = delta / 200;
                  }
                }}
              />
            </div>


            {/* Floating Cards - Overlaying Globe */}
            <AnimatePresence mode="popLayout">
              {talentProfiles.map((profile, index) => {
                const isActive = index === activeProfile;
                if (!isActive) return null;

                return (
                  <motion.div
                    key={profile.id}
                    initial={{ opacity: 0, scale: 0.8, y: 100, rotateX: -20 }}
                    animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -100, rotateX: 20 }}
                    transition={{ type: "spring", bounce: 0.4 }}
                    className="relative z-10 w-[380px] bg-background/80 backdrop-blur-2xl border border-indigo-500/20 rounded-3xl p-6 shadow-2xl shadow-indigo-500/10"
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-2xl bg-muted overflow-hidden relative border border-border">
                          <img src={profile.avatar} alt={profile.name} className="object-cover w-full h-full" />
                          <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-tl-lg" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{profile.name}</h3>
                          <div className="flex items-center gap-1.5 text-primary text-sm font-medium">
                            <Check size={14} strokeWidth={3} />
                            {profile.status}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold font-mono">{profile.rate}</div>
                        <div className="text-xs text-muted-foreground">Hourly</div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/30 border border-border/50">
                        <Code2 className="text-primary w-5 h-5" />
                        <div className="flex-1">
                          <div className="text-xs text-muted-foreground uppercase tracking-wider">Role</div>
                          <div className="font-medium text-sm">{profile.role}</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/30 border border-border/50">
                        <Terminal className="text-blue-500 w-5 h-5" />
                        <div className="flex-1">
                          <div className="text-xs text-muted-foreground uppercase tracking-wider">Tech Stack</div>
                          <div className="font-medium text-sm">{profile.tech}</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/30 border border-border/50">
                        <Globe className="text-indigo-500 w-5 h-5" />
                        <div className="flex-1">
                          <div className="text-xs text-muted-foreground uppercase tracking-wider">Location</div>
                          <div className="font-medium text-sm">{profile.loc}</div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-border/50 flex gap-3">
                      <button className="flex-1 py-3 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:brightness-110 transition-all">
                        Interview Now
                      </button>
                      <button className="p-3 rounded-xl border border-border hover:bg-muted transition-colors">
                        <ArrowRight size={20} />
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
