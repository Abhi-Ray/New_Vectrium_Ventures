"use client";
import { useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Vercel-inspired Tool Card component - Dark mode only
export function ToolCard({
    icon,
    title,
    description,
    features = [],
    gradient = "from-blue-500 to-cyan-500",
    delay = 0
}) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: delay * 0.1, ease: "easeOut" }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative"
        >
            <div className={cn(
                "relative overflow-hidden rounded-2xl h-full",
                "bg-neutral-950",
                "border border-neutral-800",
                "transition-all duration-300 ease-out",
                "hover:border-neutral-600",
                "hover:shadow-2xl hover:shadow-black/20"
            )}>
                {/* Gradient glow effect on hover */}
                <div className={cn(
                    "absolute inset-0 opacity-0 transition-opacity duration-500",
                    "group-hover:opacity-100",
                    `bg-gradient-to-br ${gradient}`,
                    "blur-3xl -z-10 scale-150"
                )} style={{ opacity: isHovered ? 0.1 : 0 }} />

                {/* Top gradient border */}
                <div className={cn(
                    "absolute top-0 left-0 right-0 h-px",
                    `bg-gradient-to-r ${gradient}`,
                    "opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                )} />

                <div className="p-6 md:p-8">
                    {/* Icon */}
                    <div className={cn(
                        "w-12 h-12 rounded-xl flex items-center justify-center mb-6",
                        "bg-gradient-to-br",
                        gradient,
                        "shadow-lg"
                    )}>
                        <span className="text-2xl">{icon}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-neutral-400 transition-all duration-300">
                        {title}
                    </h3>

                    {/* Description */}
                    <p className="text-neutral-400 text-sm md:text-base leading-relaxed mb-6">
                        {description}
                    </p>

                    {/* Features list */}
                    {features.length > 0 && (
                        <ul className="space-y-2 mb-6">
                            {features.map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-2 text-sm">
                                    <svg className="w-4 h-4 flex-shrink-0 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-neutral-400">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    )}

                    {/* Demo Button */}
                    <Link
                        href="/contact"
                        className={cn(
                            "inline-flex items-center gap-2 px-5 py-2.5 rounded-lg",
                            "text-sm font-medium",
                            "bg-white text-black",
                            "hover:bg-neutral-200",
                            "transition-all duration-200",
                            "group/btn"
                        )}
                    >
                        Request Demo
                        <svg
                            className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>

                {/* Corner decoration */}
                <div className={cn(
                    "absolute -bottom-20 -right-20 w-40 h-40 rounded-full",
                    `bg-gradient-to-br ${gradient}`,
                    "opacity-5 group-hover:opacity-10 transition-opacity duration-500"
                )} />
            </div>
        </motion.div>
    );
}

// Tools Grid Section component - Dark mode only
export function ToolsGrid({ title, subtitle, tools }) {
    return (
        <section className="py-20 md:py-32 bg-black">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
                    >
                        {title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-neutral-400 text-lg max-w-2xl mx-auto"
                    >
                        {subtitle}
                    </motion.p>
                </div>

                {/* Tools Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {tools.map((tool, idx) => (
                        <ToolCard
                            key={tool.title}
                            icon={tool.icon}
                            title={tool.title}
                            description={tool.description}
                            features={tool.features}
                            gradient={tool.gradient}
                            delay={idx}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
