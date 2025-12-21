"use client";

import { Brain, LayoutGrid, Terminal } from "lucide-react";
import React from "react";

const content = [
    {
        icon: Terminal,
        title: "Engineering",
        description: "Senior Full Stack, Backend, and Frontend engineers who have built scalable systems at top tech companies.",
        tags: ["React/Next.js", "Node.js/Go", "Python/Rust"],
    },
    {
        icon: Brain,
        title: "AI & Data",
        description: "Machine Learning engineers and Data Scientists capable of building and deploying production-grade AI models.",
        tags: ["LLMs/RAG", "Computer Vision", "Data Engineers"],
    },
    {
        icon: LayoutGrid,
        title: "Product & Design",
        description: "Product Designers and Managers who own the outcome, creating intuitive and beautiful user experiences.",
        tags: ["UI/UX", "Product Strategy", "User Research"],
    }
];

const Services = () => {
    return (
        <section id="find-talent" className="relative py-24 md:py-32 overflow-hidden bg-background">
            {/* Background Grid */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-50" />
            </div>

            <div className="container px-4 md:px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 border-b border-border/40 pb-8">
                    <div className="max-w-2xl">
                        <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block">
                            {"// Vetted Talent"}
                        </span>
                        <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4 leading-[1.1]">
                            Roles we place.
                        </h2>
                        <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
                            We specialize in placing top 1% remote talent across three core disciplines. Every candidate is rigorously vetted for technical excellence and remote-readiness.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {content.map((item, idx) => (
                        <div key={idx} className="group relative flex flex-col h-full bg-background/50 border-l border-border/40 pl-8 transition-all duration-300 hover:border-l-primary hover:bg-muted/5">
                            <div className="mb-6">
                                <div className="w-12 h-12 rounded-lg bg-foreground/5 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                                    <item.icon className="w-6 h-6 text-foreground/80 group-hover:text-primary transition-colors" />
                                </div>
                                <h3 className="text-2xl font-medium mb-3 tracking-tight">{item.title}</h3>
                                <p className="text-muted-foreground leading-relaxed mb-6 group-hover:text-foreground/80 transition-colors">
                                    {item.description}
                                </p>
                            </div>

                            <div className="mt-auto">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {item.tags.map(tag => (
                                        <span key={tag} className="text-xs font-mono font-medium text-muted-foreground group-hover:text-primary transition-colors">
                                            [{tag}]
                                        </span>
                                    ))}
                                </div>
                                <div className="w-full h-px bg-border/40 group-hover:bg-primary/20 transition-colors" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
