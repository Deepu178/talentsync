"use client";

import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Calendar, Lightbulb, Target, ArrowRight } from "lucide-react";
import { useRef } from "react";

// Define the type based on the structure we know
type Project = {
    id: string;
    title: string;
    description: string;
    techstack?: string[];
    service: string;
    image: string;
    images: string[];
    link: string;
    tag: string;
    about?: string[];
    challenges?: string[];
    objectives?: string[];
    opportunity?: string[];
    solutions?: string[];
    results?: string[];
    roadmap?: string[];
    client?: string[];
    faqs?: { id: number; q: string; a: string }[];
    type: "internal" | "client";
    acquired?: boolean;
};

export default function CaseStudyView({ project, nextProject }: { project: Project; nextProject: Project }) {
    const containerRef = useRef<HTMLDivElement>(null);
    useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Parallax logic for Hero Image - REMOVED (using natural height now)
    // const heroRef = useRef(null);
    // const { scrollYProgress: heroScroll } = useScroll({
    //     target: heroRef,
    //     offset: ["start start", "end start"]
    // });
    // const heroImageY = useTransform(heroScroll, [0, 1], [0, 100]);
    // const heroImageScale = useTransform(heroScroll, [0, 1], [1, 1.05]);

    return (
        <main ref={containerRef} className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
            {/* Navigation Bar */}
            <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 pointer-events-none">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <Link
                        href="/#portfolio"
                        className="pointer-events-auto group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-background/80 backdrop-blur-xl border border-border/40 text-sm font-medium text-muted-foreground hover:text-foreground hover:border-border/80 transition-all shadow-sm"
                    >
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Work
                    </Link>

                    {project.link && (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="pointer-events-auto group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-all shadow-lg shadow-foreground/5"
                        >
                            Visit Live Site
                            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                    )}
                </div>
            </nav>

            {/* 1. Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 overflow-hidden">
                {/* Ambient Background */}
                <div className="absolute inset-0 z-0">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        transition={{ duration: 1.5 }}
                        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40" />
                </div>

                <div className="container max-w-6xl relative z-10">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start mb-16">
                        <div className="flex-1 space-y-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="flex flex-wrap gap-3"
                            >
                                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-mono uppercase tracking-wider">
                                    {project.type === "internal" ? "Internal Venture" : "Client Success Story"}
                                </span>
                                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/40 bg-muted/20 text-muted-foreground text-xs font-mono uppercase tracking-wider">
                                    {project.tag}
                                </span>
                                {project.acquired && (
                                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-600 text-xs font-mono uppercase tracking-wider font-bold">
                                        Acquired
                                    </span>
                                )}
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.05]"
                            >
                                {project.title}
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl"
                            >
                                {project.description}
                            </motion.p>
                        </div>

                        {/* Quick Stats Grid */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="w-full lg:w-72 grid gap-6"
                        >
                            <div className="p-6 rounded-3xl border border-border/40 bg-background/50 backdrop-blur-sm shadow-sm hover:border-primary/20 transition-colors">
                                <div className="text-xs font-mono uppercase text-muted-foreground mb-3 tracking-wider">Services Delivered</div>
                                <div className="font-medium text-lg leading-snug">
                                    {project.service.split(',').slice(0, 3).join(', ')}
                                </div>
                            </div>
                            <div className="p-6 rounded-3xl border border-border/40 bg-background/50 backdrop-blur-sm shadow-sm hover:border-primary/20 transition-colors">
                                <div className="text-xs font-mono uppercase text-muted-foreground mb-3 tracking-wider">Tech Stack</div>
                                <div className="flex flex-wrap gap-2">
                                    {project.techstack?.slice(0, 4).map(tech => (
                                        <span key={tech} className="px-2 py-1 bg-muted/50 rounded text-xs font-medium text-foreground/80">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Hero Image - Natural Aspect Ratio */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="relative rounded-3xl overflow-hidden border border-border/40 shadow-2xl bg-muted/20"
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-auto object-cover"
                        />
                        {/* Overlay gradient to blend bottom */}
                        <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent pointer-events-none" />
                    </motion.div>
                </div>
            </section>

            {/* 2. Deep Dive: Challenges & Story */}
            <section className="py-24 md:py-32 border-t border-border/40">
                <div className="container max-w-6xl px-4">
                    <div className="grid md:grid-cols-12 gap-12 lg:gap-24">
                        <div className="md:col-span-4 lg:col-span-3">
                            <motion.div
                                className="sticky top-32"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <span className="font-mono text-xs uppercase tracking-wider text-primary mb-6 block">
                                    CONTEXT
                                </span>
                                <h3 className="text-2xl font-medium tracking-tight mb-4">The Challenge</h3>
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: 48 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    className="h-1 bg-primary rounded-full mb-8"
                                />
                            </motion.div>
                        </div>
                        <div className="md:col-span-8 lg:col-span-9 space-y-12">
                            {/* Objectives */}
                            {project.objectives && (
                                <div className="grid sm:grid-cols-2 gap-6 mb-12">
                                    {project.objectives.map((obj, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.1 }}
                                            className="p-6 rounded-2xl bg-muted/5 border border-border/40 hover:bg-muted/10 transition-colors"
                                        >
                                            <Target className="w-8 h-8 text-primary mb-4" />
                                            <p className="text-foreground/80 leading-relaxed font-medium">
                                                {obj}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>
                            )}

                            {/* Challenges Text */}
                            <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none">
                                {project.about?.map((p, i) => (
                                    <motion.p
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.1 }}
                                        className="text-muted-foreground leading-relaxed text-lg"
                                    >
                                        {p}
                                    </motion.p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Image Gallery */}
            {project.images && project.images.length > 1 && (
                <section className="py-24 bg-foreground/5 border-y border-border/40">
                    <div className="container max-w-7xl px-4">
                        <div className="text-center mb-16">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-3xl font-medium tracking-tight mb-4"
                            >
                                Visual Journey
                            </motion.h2>
                            <p className="text-muted-foreground">Snapshots of the interface and user experience.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Gallery Images as full elements */}
                            {project.images.slice(0, 4).map((img, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="group relative rounded-3xl overflow-hidden border border-border/40 shadow-sm bg-background/50 hover:shadow-md transition-all"
                                >
                                    <img
                                        src={img}
                                        alt=""
                                        className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* 4. Solution & Results */}
            <section className="py-24 md:py-32">
                <div className="container max-w-6xl px-4">
                    <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
                        {/* Solutions */}
                        <div>
                            <span className="font-mono text-xs uppercase tracking-wider text-primary mb-6 block">
                                {"// Execution"}
                            </span>
                            <h3 className="text-3xl font-medium tracking-tight mb-8">The Solution</h3>
                            <div className="space-y-6">
                                {project.solutions?.map((sol, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex gap-4 group"
                                    >
                                        <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-colors">
                                            <CheckCircle2 size={14} />
                                        </div>
                                        <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                                            {sol}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Results */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-muted/5 rounded-3xl p-8 lg:p-12 border border-border/40 hover:bg-muted/10 transition-colors"
                        >
                            <h3 className="text-2xl font-medium tracking-tight mb-8">Impact Delivered</h3>
                            <div className="space-y-8">
                                {project.results?.map((res, i) => (
                                    <div key={i} className="flex items-start gap-4">
                                        <div className="text-4xl font-light text-primary/40 font-serif">
                                            0{i + 1}
                                        </div>
                                        <div>
                                            <p className="text-lg font-medium text-foreground">{res}</p>
                                        </div>
                                    </div>
                                ))}
                                {!project.results && <p className="text-muted-foreground italic">Results confidential or pending launch.</p>}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 5. Roadmap & FAQs */}
            {(project.roadmap || (project.faqs && project.faqs.length > 0)) && (
                <section className="py-24 border-t border-border/40 bg-background">
                    <div className="container max-w-6xl px-4">
                        <div className="grid lg:grid-cols-2 gap-16">
                            {/* Roadmap */}
                            {project.roadmap && (
                                <div>
                                    <h3 className="text-2xl font-medium tracking-tight mb-8 flex items-center gap-3">
                                        <Calendar className="w-6 h-6 text-primary" />
                                        Future Roadmap
                                    </h3>
                                    <div className="space-y-0 relative border-l border-border/60 ml-3">
                                        {project.roadmap.map((item, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, x: 20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: i * 0.1 }}
                                                className="pl-8 pb-10 relative last:pb-0"
                                            >
                                                <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-background border-2 border-primary" />
                                                <p className="text-muted-foreground leading-relaxed">{item}</p>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* FAQs */}
                            {project.faqs && project.faqs.length > 0 && (
                                <div>
                                    <h3 className="text-2xl font-medium tracking-tight mb-8 flex items-center gap-3">
                                        <Lightbulb className="w-6 h-6 text-primary" />
                                        Project Q&A
                                    </h3>
                                    <div className="grid gap-6">
                                        {project.faqs.slice(0, 3).map((faq, i) => (
                                            <motion.div
                                                key={faq.id}
                                                initial={{ opacity: 0, y: 10 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: i * 0.1 }}
                                                className="p-6 rounded-2xl bg-muted/5 border border-border/40 hover:border-border/80 transition-colors"
                                            >
                                                <h4 className="font-medium text-foreground mb-3">{faq.q}</h4>
                                                <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            )}


            {/* 6. Footer Navigation: Next Case Study */}
            <section className="border-t border-border/40">
                <Link
                    href={`/work/${nextProject.id}`}
                    className="group relative block w-full py-32 overflow-hidden"
                >
                    <div className="absolute inset-0 bg-muted/5 transition-colors duration-500 group-hover:bg-primary/5" />

                    <div className="container max-w-4xl relative z-10 text-center">
                        <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-4 block group-hover:text-primary transition-colors">
                            Next Case Study
                        </span>
                        <motion.h2
                            initial={{ scale: 0.9 }}
                            whileInView={{ scale: 1 }}
                            className="text-4xl md:text-7xl font-medium tracking-tight mb-6 group-hover:scale-105 transition-transform duration-500"
                        >
                            {nextProject.title.split(':')[0]}
                        </motion.h2>
                        <div className="inline-flex items-center gap-2 text-muted-foreground group-hover:text-primary transition-colors">
                            View Case Study <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                        </div>
                    </div>
                </Link>
            </section>
        </main>
    );
}
