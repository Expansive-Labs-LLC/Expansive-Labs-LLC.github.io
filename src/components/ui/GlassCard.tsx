"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
    children: React.ReactNode;
    className?: string;
    animate?: boolean;
}

export function GlassCard({ children, className, animate = true }: GlassCardProps) {
    const Wrapper = animate ? motion.div : "div";

    return (
        <Wrapper
            initial={animate ? { opacity: 0, y: 10 } : undefined}
            animate={animate ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.4 }}
            className={cn(
                "relative overflow-hidden rounded-xl border border-[var(--glass-border)] bg-gray-900/40 backdrop-blur-md shadow-xl",
                "before:absolute before:inset-0 before:z-0 before:bg-gradient-to-br before:from-white/5 before:to-transparent before:opacity-20",
                className
            )}
        >
            <div className="relative z-10">{children}</div>
        </Wrapper>
    );
}
