import Link from 'next/link';
import { Navbar } from "@/components/layout/Navbar";
import { TerminalHeader } from "@/components/ui/TerminalHeader";
import { GlassCard } from "@/components/ui/GlassCard";

export default function ArchitectLogIndex() {
    return (
        <div className="min-h-screen relative overflow-hidden bg-[var(--background)]">
            <Navbar />

            <main className="container mx-auto px-4 pt-24 pb-12 relative z-10 max-w-4xl">
                <TerminalHeader
                    title="ARCHITECT'S_LOG"
                    subtitle="SYSTEM_LOGS // ACCESS_LEVEL: PUBLIC"
                />

                <div className="space-y-6">
                    <Link href="/architect-log/01-the-great-nuke" className="block group">
                        <GlassCard className="p-6 transition-all duration-300 group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)]/5">
                            <div className="flex justify-between items-start mb-4">
                                <h2 className="text-xl font-bold text-white font-mono group-hover:text-[var(--accent)] transition-colors">
                                    &gt; LOG_01: THE_GREAT_NUKE
                                </h2>
                                <span className="text-xs font-mono text-gray-500 border border-gray-800 px-2 py-1 rounded">
                                    LATEST
                                </span>
                            </div>
                            <p className="text-gray-400 mb-4 line-clamp-2">
                                I have spent the last twelve years architecting the deterministic world. Today, I am archiving it. The legacy Expansive Labs site represented a peak of human-led engineering.
                            </p>
                            <div className="flex items-center text-sm text-[var(--accent)] font-mono">
                                READ_ENTRY &gt;&gt;
                            </div>
                        </GlassCard>
                    </Link>

                    <Link href="/architect-log/00-devops-is-dead" className="block group">
                        <GlassCard className="p-6 transition-all duration-300 group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)]/5">
                            <div className="flex justify-between items-start mb-4">
                                <h2 className="text-xl font-bold text-white font-mono group-hover:text-[var(--accent)] transition-colors">
                                    &gt; LOG_00: DEVOPS_IS_DEAD
                                </h2>
                                <span className="text-xs font-mono text-gray-500 border border-gray-800 px-2 py-1 rounded">
                                    ARCHIVED
                                </span>
                            </div>
                            <p className="text-gray-400 mb-4 line-clamp-2">
                                In 2013, I was a 23-year-old Principal Engineer walking into S&P Global to build disaster recovery for the financial backbone of the world. DevOps is dead. Long live intention.
                            </p>
                            <div className="flex items-center text-sm text-[var(--accent)] font-mono">
                                READ_ENTRY &gt;&gt;
                            </div>
                        </GlassCard>
                    </Link>
                </div>
            </main>
        </div>
    );
}
