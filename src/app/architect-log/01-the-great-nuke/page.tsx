import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { TerminalHeader } from "@/components/ui/TerminalHeader";
import { GlassCard } from "@/components/ui/GlassCard";

export const metadata: Metadata = {
    title: "The Great Nuke: Architect's Log 01 | Expansive Labs",
    description: "From O'Reilly Author & Intuit Cloud Instructor to Agentic Architect. How verified 1280x productivity gains led to the end of manual DevOps. Archiving the deterministic world.",
    openGraph: {
        title: "The Great Nuke: 1280x Productivity & The End of DevOps",
        description: "Author of 3 O'Reilly Books. Builder of Toyota's Lidar Pipeline. Now nuking it all for Agentic Systems. Read the manifesto.",
        type: "article",
    },
};

export default function TheGreatNukeLog() {
    return (
        <div className="min-h-screen relative overflow-hidden bg-[var(--background)]">
            <Navbar />

            <main className="container mx-auto px-4 pt-24 pb-12 relative z-10 max-w-4xl">
                <TerminalHeader
                    title="ARCHITECT'S_LOG_01"
                    subtitle="SUBJECT: THE_GREAT_NUKE // STATUS: EXECUTED"
                />

                <div className="space-y-12">
                    {/* INTRO */}
                    <section>
                        <div className="prose prose-invert prose-lg max-w-none text-gray-300 space-y-4 leading-relaxed font-sans border-l-2 border-[var(--accent)] pl-6">
                            <p className="font-mono text-[var(--accent)] mb-2 text-sm">&gt; SYSTEM_NOTE: ARCHIVING_DETERMINISTIC_WORLD...</p>
                            <p>
                                I have spent the last twelve years architecting the deterministic world. Today, I am archiving it.
                            </p>
                            <p>
                                The legacy Expansive Labs site—with its blogs on NGINX tuning and AWS Batch interfaces—represented a peak of human-led engineering.
                                It was the era of the "War Room," where we gathered experts to fight fires with manual scripts and rigid protocols.
                                But that era has hit its ceiling. I am nuking the old site because the "DevOps" I spent my career consulting on is no longer the solution;
                                it is the foundation for something much larger.
                            </p>
                        </div>
                    </section>

                    {/* THE FOUNDATION OF INTEGRITY */}
                    <section>
                        <h2 className="text-xl font-bold text-white mb-6 font-mono flex items-center gap-2">
                            <span className="text-[var(--accent)]">[01]</span> THE_FOUNDATION_OF_INTEGRITY
                        </h2>
                        <GlassCard className="p-8 space-y-6">
                            <p className="text-gray-300">
                                My move into Agentic Systems Architecture is built on a decade of high-stakes, "Scientific Excellence":
                            </p>

                            <div className="grid md:grid-cols-2 gap-6 pt-4">
                                <div className="space-y-2">
                                    <h3 className="text-[var(--accent)] font-bold font-mono text-sm">&gt; THE_CREDENTIALS</h3>
                                    <p className="text-sm text-gray-400">
                                        Authoring <em>The Complete NGINX Cookbook</em>, <em>Load Balancing in the Cloud</em>, and the <em>NGINX Unit Cookbook</em> for O'Reilly Media.
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-[var(--accent)] font-bold font-mono text-sm">&gt; THE_GLOBAL_SCALE</h3>
                                    <p className="text-sm text-gray-400">
                                        Developing and delivering in-person CloudFormation courses globally for Intuit, teaching the engineers of the world's most advanced software how to define infrastructure as code.
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-[var(--accent)] font-bold font-mono text-sm">&gt; THE_MISSION_CRITICAL</h3>
                                    <p className="text-sm text-gray-400">
                                        Building reliability testing pipelines for Toyota Research Institute to back-test Lidar data from self-driving cars in Ann Arbor.
                                    </p>
                                </div>
                            </div>

                            <p className="text-gray-300 italic border-l-2 border-gray-700 pl-4 mt-6">
                                I was the 23-year-old Principal Engineer walking into deals with S&P Global, Synchronoss, and Diebold Nixdorf to solve the "impossible" migrations of the early cloud era.
                                My approach was always rooted in <span className="text-white font-bold">Radical Transparency</span> and the belief that infrastructure should be treated as Cattle, not pets.
                            </p>
                        </GlassCard>
                    </section>

                    {/* THE 1280X MILESTONE */}
                    <section>
                        <h2 className="text-xl font-bold text-white mb-6 font-mono flex items-center gap-2">
                            <span className="text-[var(--accent)]">[02]</span> THE_1280X_MILESTONE
                        </h2>
                        <GlassCard className="p-8 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10 font-mono text-6xl font-bold text-[var(--accent)]">
                                1280x
                            </div>
                            <p className="text-gray-300 relative z-10">
                                In 2019, I stood on a stage and proved that my team could reduce a client’s environment build effort from <strong>8 weeks (2 FTE)</strong> to a <strong>30-minute Jenkins job</strong>.
                                That 1280x productivity boost was the magnum opus of the deterministic era. We optimized the "toil" out of existence, but we were still limited by the Human Will to execute.
                            </p>
                        </GlassCard>
                    </section>

                    {/* THE CATALYST */}
                    <section>
                        <h2 className="text-xl font-bold text-white mb-6 font-mono flex items-center gap-2">
                            <span className="text-[var(--accent)]">[03]</span> THE_CATALYST
                        </h2>
                        <div className="prose prose-invert prose-lg max-w-none text-gray-300 space-y-4 leading-relaxed font-sans pl-2">
                            <p>
                                For the last year, I fought the "vibe coding" trend. I watched junior engineers copy-paste ChatGPT code into projects without understanding the underlying logic, sacrificing maintainability for a shortcut.
                                I was a hater because I valued the <span className="text-white font-bold">Architectural Integrity</span> I had spent a decade defending.
                            </p>
                            <p className="text-xl text-[var(--accent)] font-mono py-4">
                                &gt; THEN_I_LEANED_INTO_ANTIGRAVITY.
                            </p>
                            <p>
                                By using an AI-first workflow with intention, I realized that the "Vibe" wasn't the enemy—the lack of computational leverage was.
                                Agile and traditional code management don't have a future because they are designed to manage human bottlenecks. Agentic workflows allow us to finally move from "How" to "Why."
                            </p>
                        </div>
                    </section>

                    {/* THE MICHIGAN PARADOX */}
                    <section>
                        <GlassCard className="p-8 border-[var(--accent)]/50 bg-[var(--accent)]/5">
                            <h2 className="text-xl font-bold text-white mb-4 font-mono">&gt; THE_MICHIGAN_PARADOX</h2>
                            <div className="space-y-4 text-gray-300">
                                <p>
                                    In South East Michigan, we are debating the evacuation of our freshwater resources to cool AI data centers. As a resident and an architect, I see the paradox:
                                    we are trading our water to power the only intelligence capable of solving the planetary risks we’ve been too "lazy" or cognitively limited to fix ourselves.
                                </p>
                                <p className="font-bold text-white">
                                    We are trading water for the computational leverage to solve cancer, fossil fuel dependency, and the survival of our species.
                                </p>
                            </div>
                        </GlassCard>
                    </section>
                </div>
            </main>
        </div>
    );
}
