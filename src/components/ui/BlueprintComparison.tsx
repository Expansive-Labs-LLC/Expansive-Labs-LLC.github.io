"use client";

import { motion } from "framer-motion";

export function BlueprintComparison() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
            {/* LEFT: The Legacy Pipeline */}
            <div className="border border-white/10 rounded-xl p-6 bg-black/40 backdrop-blur-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-2 text-[10px] uppercase tracking-widest text-red-500 font-bold bg-red-950/30 rounded-bl-xl border-b border-l border-red-900/50">
                    [DEPRECATED: LINEAR]
                </div>
                <h3 className="text-[var(--foreground)] font-mono text-sm mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    legacy_pipeline.yaml
                </h3>

                <svg viewBox="0 0 300 150" className="w-full h-auto opacity-70">
                    {/* Broken Linear Chain */}
                    <line x1="20" y1="75" x2="60" y2="75" stroke="gray" strokeWidth="2" strokeDasharray="4 4" />
                    <rect x="60" y="60" width="40" height="30" rx="2" stroke="gray" fill="none" />
                    <text x="80" y="80" textAnchor="middle" fill="gray" fontSize="8" fontFamily="monospace">BUILD</text>

                    <line x1="100" y1="75" x2="140" y2="75" stroke="gray" strokeWidth="2" />
                    <rect x="140" y="60" width="40" height="30" rx="2" stroke="gray" fill="none" />
                    <text x="160" y="80" textAnchor="middle" fill="gray" fontSize="8" fontFamily="monospace">TEST</text>

                    <line x1="180" y1="75" x2="220" y2="75" stroke="red" strokeWidth="2" />
                    <path d="M 215 70 L 225 80 M 215 80 L 225 70" stroke="red" strokeWidth="2" /> {/* Failure X */}
                    <rect x="220" y="60" width="40" height="30" rx="2" stroke="red" fill="none" strokeDasharray="2 2" />
                    <text x="240" y="80" textAnchor="middle" fill="red" fontSize="8" fontFamily="monospace">DEPLOY</text>

                    <text x="150" y="120" textAnchor="middle" fill="#ef4444" fontSize="10" fontFamily="monospace" letterSpacing="2">
                        &gt;&gt; ERROR: BRITTLE_FAILURE
                    </text>
                </svg>
            </div>

            {/* RIGHT: The Antigenic Loop */}
            <div className="border border-[var(--accent)]/30 rounded-xl p-6 bg-[var(--accent)]/5 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-2 text-[10px] uppercase tracking-widest text-[var(--accent)] font-bold bg-[var(--accent)]/10 rounded-bl-xl border-b border-l border-[var(--accent)]/20">
                    [ACTIVE: AGENTIC]
                </div>
                <h3 className="text-[var(--accent)] font-mono text-sm mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[var(--accent)] rounded-full animate-pulse"></span>
                    goal_realization_loop.ts
                </h3>

                <svg viewBox="0 0 300 150" className="w-full h-auto">
                    {/* Circular Flow */}
                    <motion.circle
                        cx="150" cy="75" r="50"
                        stroke="var(--accent)" strokeWidth="1" fill="none" strokeOpacity="0.3"
                    />
                    <motion.circle
                        cx="150" cy="75" r="50"
                        stroke="var(--accent)" strokeWidth="2" fill="none" strokeDasharray="10 60"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    />

                    {/* Nodes */}
                    <g transform="translate(150, 25)">
                        <circle r="4" fill="var(--accent)" />
                        <text y="-10" textAnchor="middle" fill="var(--accent)" fontSize="8" fontFamily="monospace">INTENT</text>
                    </g>
                    <g transform="translate(200, 75)">
                        <circle r="4" fill="var(--accent)" />
                        <text x="10" y="4" textAnchor="start" fill="var(--accent)" fontSize="8" fontFamily="monospace">ACT</text>
                    </g>
                    <g transform="translate(150, 125)">
                        <circle r="4" fill="var(--accent)" />
                        <text y="15" textAnchor="middle" fill="var(--accent)" fontSize="8" fontFamily="monospace">SENSE</text>
                    </g>
                    <g transform="translate(100, 75)">
                        <circle r="4" fill="var(--accent)" />
                        <text x="-10" y="4" textAnchor="end" fill="var(--accent)" fontSize="8" fontFamily="monospace">ADAPT</text>
                    </g>

                    {/* Core Logic */}
                    <text x="150" y="78" textAnchor="middle" fill="white" fontSize="12" fontFamily="monospace" fontWeight="bold">
                        GOAL
                    </text>
                </svg>
            </div>
        </div>
    );
}
