"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Circle } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";


function ElegantShape({
    className,
    delay = 0,
    width = 400,
    height = 100,
    rotate = 0,
    gradient = "from-white/[0.08]",
}: {
    className?: string;
    delay?: number;
    width?: number;
    height?: number;
    rotate?: number;
    gradient?: string;
}) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: -150,
                rotate: rotate - 15,
            }}
            animate={{
                opacity: 1,
                y: 0,
                rotate: rotate,
            }}
            transition={{
                duration: 2.4,
                delay,
                ease: [0.23, 0.86, 0.39, 0.96],
                opacity: { duration: 1.2 },
            }}
            className={cn("absolute", className)}
        >
            <motion.div
                animate={{
                    y: [0, 15, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
                style={{
                    width,
                    height,
                }}
                className="relative"
            >
                <div
                    className={cn(
                        "absolute inset-0 rounded-full",
                        "bg-gradient-to-r to-transparent",
                        gradient,
                        "backdrop-blur-[2px] border-2 border-white/[0.15]",
                        "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
                        "after:absolute after:inset-0 after:rounded-full",
                        "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
                    )}
                />
            </motion.div>
        </motion.div>
    );
}

function HeroGeometric({
    // badge = "الرفاعي جروب",
    title1 = "نحول رؤيتك إلى",
    title2 = "نجاح رقمي ملموس",
    subtitle = "من تطوير استراتيجية المحتوى إلى حملات الإعلانات المدفوعة وتحسين محركات البحث، نقدم حلول تسويقية متكاملة تضمن لك التفوق في السوق.",
    ctaPrimary = "ابدأ رحلتك معنا",
    ctaSecondary = "استكشف خدماتنا",
    stats = {
        clients: "+500 عميل راضي",
        projects: "+1000 مشروع ناجح",
        experience: "7 سنوات خبرة"
    }
}: {
    badge?: string;
    title1?: string;
    title2?: string;
    subtitle?: string;
    ctaPrimary?: string;
    ctaSecondary?: string;
    stats?: {
        clients: string;
        projects: string;
        experience: string;
    };
}) {
    const fadeUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.5 + i * 0.2,
                ease: "easeOut" as const,
            },
        }),
    };

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden hero-bg">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00B5AD]/[0.08] via-transparent to-[#FFC300]/[0.05] blur-3xl" />

            <div className="absolute inset-0 overflow-hidden">
                <ElegantShape
                    delay={0.3}
                    width={600}
                    height={140}
                    rotate={12}
                    gradient="from-[#00B5AD]/[0.2]"
                    className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
                />

                <ElegantShape
                    delay={0.5}
                    width={500}
                    height={120}
                    rotate={-15}
                    gradient="from-[#FFC300]/[0.2]"
                    className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
                />

                <ElegantShape
                    delay={0.4}
                    width={300}
                    height={80}
                    rotate={-8}
                    gradient="from-[#00B5AD]/[0.15]"
                    className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
                />

                <ElegantShape
                    delay={0.6}
                    width={200}
                    height={60}
                    rotate={20}
                    gradient="from-[#FFC300]/[0.18]"
                    className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
                />

                <ElegantShape
                    delay={0.7}
                    width={150}
                    height={40}
                    rotate={-25}
                    gradient="from-[#00B5AD]/[0.15]"
                    className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
                />
            </div>

            <div className="relative z-10 container mx-auto px-5 md:px-6">
                <div className="max-w-5xl mx-auto text-center">
                    

                    <motion.div
                        custom={1}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <h1 className="hero-title text-4xl sm:text-6xl md:text-7xl mb-6 md:mb-8 tracking-tight">
                            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/90">
                                {title1}
                            </span>
                            <br />
                            <span
                                className={cn(
                                    "bg-clip-text text-transparent bg-gradient-to-r from-[#FFC300] via-white to-[#00B5AD]"
                                )}
                            >
                                {title2}
                            </span>
                        </h1>
                    </motion.div>

                    <motion.div
                        custom={2}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <p className="hero-subtitle text-base sm:text-lg md:text-xl text-white/70 mb-10 leading-relaxed max-w-3xl mx-auto px-4">
                            {subtitle}
                        </p>
                    </motion.div>

                    <motion.div
                        custom={3}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <button className="cta-button button-text px-8 py-4 text-lg min-w-[200px]">
                            {ctaPrimary}
                        </button>
                        <button className="button-text px-8 py-4 text-lg text-white border-2 border-[#00B5AD] rounded-lg hover:bg-[#00B5AD]/10 transition-all duration-300 min-w-[200px]">
                            {ctaSecondary}
                        </button>
                    </motion.div>

                    <motion.div
                        custom={4}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className="mt-12 flex justify-center items-center gap-8 text-white/60 text-sm font-cairo"
                    >
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#FFC300] rounded-full"></div>
                            <span>{stats.clients}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#00B5AD] rounded-full"></div>
                            <span>{stats.projects}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#FFC300] rounded-full"></div>
                            <span>{stats.experience}</span>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-[#1F3A44] via-transparent to-[#1F3A44]/80 pointer-events-none" />
        </div>
    );
}

export { HeroGeometric }
