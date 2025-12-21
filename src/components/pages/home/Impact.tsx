"use client";

import { useInView, motion, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const Counter = ({ value, suffix = "", prefix = "" }: { value: number, suffix?: string, prefix?: string }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
    const display = useTransform(spring, (current) => Math.round(current).toLocaleString());

    useEffect(() => {
        if (isInView) {
            spring.set(value);
        }
    }, [isInView, value, spring]);

    return (
        <span className="flex items-baseline">
            {prefix}
            <motion.span ref={ref}>{display}</motion.span>
            {suffix}
        </span>
    );
};

const ImpactCard = ({
    value,
    label,
    prefix,
    suffix,
    highlight = false
}: {
    value: number,
    label: string,
    prefix?: string,
    suffix?: string,
    highlight?: boolean
}) => {
    return (
        <div className={cn(
            "relative flex flex-col items-center justify-center text-center p-6 md:p-8 rounded-3xl border transition-all duration-300 group",
            highlight
                ? "bg-primary/5 border-primary/20 shadow-xl shadow-primary/5"
                : "bg-background/40 border-border/40 hover:bg-background/60 hover:border-border/60"
        )}>
            {highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full whitespace-nowrap">
                    The Metric That Matters
                </div>
            )}
            <span className={cn(
                "text-4xl md:text-5xl font-semibold tracking-tighter mb-2 flex items-baseline",
                highlight ? "text-primary" : "text-foreground"
            )}>
                <Counter value={value} prefix={prefix} suffix={suffix} />
            </span>
            <span className="text-sm md:text-base text-muted-foreground uppercase tracking-wide font-mono font-medium">
                {label}
            </span>
        </div>
    );
}

const Impact = () => {
    return (
        <section className="relative py-24 md:py-32 border-b border-border/40 overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-50" />
            </div>

            <div className="container px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, staggerChildren: 0.1 }}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8"
                >
                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                        <ImpactCard value={2500} suffix="+" label="Vetted Remote Engineers" />
                    </motion.div>
                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                        <ImpactCard value={50} suffix="%" label="Avg. Salary Savings" />
                    </motion.div>
                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                        <ImpactCard value={72} suffix="h" label="Avg. Time to Match" />
                    </motion.div>
                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                        <ImpactCard value={98} suffix="%" label="Retention Rate" highlight={true} />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Impact;
