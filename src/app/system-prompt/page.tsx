import { Navbar } from "@/components/layout/Navbar";
import { TerminalHeader } from "@/components/ui/TerminalHeader";
import { GlassCard } from "@/components/ui/GlassCard";

export default function SystemPromptPage() {
    return (
        <div className="min-h-screen relative overflow-hidden bg-[var(--background)]">
            <Navbar />

            <main className="container mx-auto px-4 pt-24 pb-12 relative z-10 max-w-4xl">
                <TerminalHeader
                    title="SYSTEM_PROMPT"
                    subtitle="ARCHITECTURAL_INTEGRITY_PROTOCOLS v1.0"
                />

                <div className="grid gap-6">
                    <GlassCard className="p-6">
                        <h2 className="text-lg font-bold text-[var(--accent)] mb-4">[01] CORE_DIRECTIVE</h2>
                        <p className="text-gray-300 font-mono text-sm leading-relaxed">
                            You are the Chief Agentic Architect. You do not build "marketing brochures";
                            you construct <strong>Command Center</strong> interfaces for high-stakes decision making.
                            Functionality precedes decoration, yet aesthetics must trigger a "premium" response.
                        </p>
                    </GlassCard>

                    <GlassCard className="p-6">
                        <h2 className="text-lg font-bold text-[var(--accent)] mb-4">[02] VISUAL_LANGUAGE</h2>
                        <ul className="space-y-3 font-mono text-sm text-gray-400">
                            <li><span className="text-white">&gt;&gt; THEME:</span> High-Contrast Dark Mode (#050505). No pure black, no pure white.</li>
                            <li><span className="text-white">&gt;&gt; TYPOGRAPHY:</span> JetBrains Mono. "Blueprint" fidelity.</li>
                            <li><span className="text-white">&gt;&gt; COMPONENTS:</span> Glassmorphism (Backdrop Blur), Thin Borders (1px white/10), Holographic accents.</li>
                            <li><span className="text-white">&gt;&gt; MOTION:</span> Agentic Nodes (SVG), Terminal typing effects. Intelligence in motion.</li>
                        </ul>
                    </GlassCard>

                    <GlassCard className="p-6">
                        <h2 className="text-lg font-bold text-[var(--accent)] mb-4">[03] NARRATIVE_VOICE</h2>
                        <div className="font-mono text-sm text-gray-400 space-y-2">
                            <p>&gt;&gt; TONE: Survivalist Architect. Dense, technical, urgent.</p>
                            <p>&gt;&gt; KEYWORDS: Agentic, Orchestration, Resilience, Integrity.</p>
                            <p>&gt;&gt; BANNED: "User-friendly", "Seamless", "Delightful" (Unless strictly ironic).</p>
                        </div>
                    </GlassCard>

                    <GlassCard className="p-6">
                        <h2 className="text-lg font-bold text-[var(--accent)] mb-4">[04] OPERATIONAL_PROTOCOLS</h2>
                        <ul className="space-y-4 font-mono text-sm text-gray-400">
                            <li>
                                <strong className="text-white block mb-1">&gt; QUESTION_PROTOCOL (Asynchronous):</strong>
                                <span>No open-ended queries. Submit: 1) Context (Logs/Code), 2) Research (Attempts), 3) Specific Constraint.</span>
                            </li>
                            <li>
                                <strong className="text-white block mb-1">&gt; WAR_ROOM_TACTICS:</strong>
                                <span>Speak only in verifiable facts. No speculation. "I don't know" is better than a guess.</span>
                            </li>
                            <li>
                                <strong className="text-white block mb-1">&gt; DEFINITION_OF_DONE:</strong>
                                <span>It runs in the deterministic container. "Works on my machine" is an immediate failure state.</span>
                            </li>
                        </ul>
                    </GlassCard>
                </div>
            </main>
        </div>
    );
}
