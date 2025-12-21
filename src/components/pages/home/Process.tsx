
"use client";

import { cn } from "@/lib/utils";

const Process = () => {
    return (
        <section className="py-24 md:py-32 relative overflow-hidden bg-background border-t border-border/40" id="how-it-works">
            {/* Background Grid */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
            </div>

            <div className="w-[90.5%] xl:w-[73.5%] mx-auto mb-16 relative z-10 text-center md:text-left">
                <h2 className="text-3xl md:text-5xl font-medium tracking-tight leading-[1.1] mb-6">
                    How it works.
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
                    A streamlined process to match you with the perfect candidate in days, not months.
                </p>
            </div>

            <div className="w-[90.5%] xl:w-[73.5%] mx-auto relative z-10 flex flex-col gap-8">
                {content.map((item, index) => (
                    <div
                        key={index}
                        className="rounded-3xl border border-border/40 bg-background/40 backdrop-blur-md overflow-hidden"
                    >
                        {/* Header */}
                        <div className="px-8 py-6 border-b border-border/40 bg-muted/20">
                            <h3 className="text-xl font-mono uppercase tracking-wider text-muted-foreground">
                                {`// ${item.title}`}
                            </h3>
                        </div>

                        {/* Content Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border/40">
                            {item.details.map((detail, detailIndex) => (
                                <div key={detailIndex} className="p-8 hover:bg-muted/5 transition-colors">
                                    <div className="font-mono text-xs text-primary mb-4">
                                        (0{detailIndex + 1})
                                    </div>
                                    <h4 className="text-lg font-medium mb-3 text-foreground">
                                        {detail.heading}
                                    </h4>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        {detail.content}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Process;

const content: {
    title: string;
    details: {
        content: string;
        heading?: string;
    }[];
}[] = [
        {
            title: "For Companies",
            details: [
                {
                    heading: "Share Requirements",
                    content:
                        "Tell us the role, tech stack, and experience level. We handle the remote sourcing and screening.",
                },
                {
                    heading: "3-Day Matching",
                    content:
                        "Our AI + Human matching system identifies the best 3 remote candidates from our vetted pool in under 72 hours.",
                },
                {
                    heading: "Hire & Onboard",
                    content:
                        "Interview and hire with confidence. We handle contracts, global payroll, and compliance for your distributed team.",
                },
            ],
        },
        {
            title: "Our Vetting",
            details: [
                {
                    heading: "Code Challenge",
                    content: "Real-world engineering challenges to test problem-solving, code quality, and system design skills.",
                },
                {
                    heading: "Communication Check",
                    content: "English fluency and communication skills assessment to ensure seamless remote collaboration.",
                },
                {
                    heading: "Technical Deep Dive",
                    content: "1-hour rigorous technical interview with a Senior Engineer/CTO to validate depth of expertise.",
                },
            ],
        },
    ];

