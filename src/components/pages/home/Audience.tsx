"use client";

import { Check, X } from "lucide-react";

const Audience = () => {
    return (
        <section className="py-24 md:py-32 border-t border-border/40 bg-background relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
            </div>

            <div className="container max-w-5xl relative z-10 px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4">
                        Is this for you?
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        We are a premium talent partner for high-growth companies.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                    {/* "For You" Column */}
                    <div className="group bg-background/50 rounded-3xl p-8 md:p-10 border border-border/50 hover:border-primary/20 transition-all duration-300">
                        <div className="flex items-center gap-4 mb-8">
                            <h3 className="text-2xl font-medium tracking-tight">
                                Who we help
                            </h3>
                            <div className="h-px bg-border/50 flex-1" />
                        </div>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <div className="mt-1 w-5 h-5 rounded-full border border-green-500/30 flex items-center justify-center shrink-0">
                                    <Check size={12} className="text-green-500" strokeWidth={3} />
                                </div>
                                <span className="text-foreground/90 font-medium">Startups needing senior engineering talent yesterday.</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="mt-1 w-5 h-5 rounded-full border border-green-500/30 flex items-center justify-center shrink-0">
                                    <Check size={12} className="text-green-500" strokeWidth={3} />
                                </div>
                                <span className="text-foreground/90 font-medium">Enterprise teams scaling their AI/Data capabilities.</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="mt-1 w-5 h-5 rounded-full border border-green-500/30 flex items-center justify-center shrink-0">
                                    <Check size={12} className="text-green-500" strokeWidth={3} />
                                </div>
                                <span className="text-foreground/90 font-medium">Founders who want to avoid the "bad hire" risk.</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="mt-1 w-5 h-5 rounded-full border border-green-500/30 flex items-center justify-center shrink-0">
                                    <Check size={12} className="text-green-500" strokeWidth={3} />
                                </div>
                                <span className="text-foreground/90 font-medium">Companies looking for global timezone coverage.</span>
                            </li>
                        </ul>
                    </div>

                    {/* "Not For You" Column */}
                    <div className="group bg-background/30 rounded-3xl p-8 md:p-10 border border-border/30 hover:border-red-500/20 transition-all duration-300 opacity-80 hover:opacity-100">
                        <div className="flex items-center gap-4 mb-8">
                            <h3 className="text-2xl font-medium tracking-tight text-muted-foreground">
                                Who we avoid
                            </h3>
                            <div className="h-px bg-border/50 flex-1" />
                        </div>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <div className="mt-1 w-5 h-5 rounded-full border border-red-500/20 flex items-center justify-center shrink-0">
                                    <X size={12} className="text-red-500/70" strokeWidth={3} />
                                </div>
                                <span className="text-muted-foreground">Teams looking for the absolute cheapest labor.</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="mt-1 w-5 h-5 rounded-full border border-red-500/20 flex items-center justify-center shrink-0">
                                    <X size={12} className="text-red-500/70" strokeWidth={3} />
                                </div>
                                <span className="text-muted-foreground">Short-term gigs (under 3 months).</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="mt-1 w-5 h-5 rounded-full border border-red-500/20 flex items-center justify-center shrink-0">
                                    <X size={12} className="text-red-500/70" strokeWidth={3} />
                                </div>
                                <span className="text-muted-foreground">Micromanagers who don't trust remote work.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Audience;
