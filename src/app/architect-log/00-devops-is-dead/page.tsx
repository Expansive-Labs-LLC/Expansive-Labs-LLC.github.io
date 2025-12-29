import { Navbar } from "@/components/layout/Navbar";
import { TerminalHeader } from "@/components/ui/TerminalHeader";
import { GlassCard } from "@/components/ui/GlassCard";

export default function DevOpsIsDeadLog() {
    return (
        <div className="min-h-screen relative overflow-hidden bg-[var(--background)]">
            <Navbar />

            <main className="container mx-auto px-4 pt-24 pb-12 relative z-10 max-w-4xl">
                <TerminalHeader
                    title="ARCHITECT'S_LOG"
                    subtitle="ENTRY_ID: 0xDEV_OPS_DEAD // AUTHOR: DEREK_DEJONGHE"
                />

                <div className="space-y-12">
                    {/* THE AHA MOMENT */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6 font-mono">&gt; DEVOPS_IS_DEAD. LONG_LIVE_INTENTION.</h2>
                        <div className="prose prose-invert prose-lg max-w-none text-gray-300 space-y-4 leading-relaxed font-sans border-l-2 border-[var(--accent)] pl-6">
                            <p>
                                In 2013, I was a 23-year-old Principal Engineer walking into <strong>S&P Global</strong> to build disaster recovery
                                for the financial backbone of the world. I spent the next decade teaching thousands of engineers at <strong>Intuit</strong>
                                how to write CloudFormation. I wrote books on NGINX and Load Balancing for O'Reilly because I believed in
                                <strong>Scientific Excellence</strong>.
                            </p>
                            <p>
                                We optimized "toil." We achieved a <strong>1280x productivity gain</strong>, shrinking 8-week manual build cycles
                                for <strong>Diebold Nixdorf's ATM platforms</strong> down to 30-minute automated jobs. We built the pipelines.
                                We managed the state. We fought juniors over "copy-pasting" code because reality (physics) demands
                                <strong>Radical Transparency</strong>.
                            </p>
                            <p className="text-[var(--accent)] font-bold">
                                But we hit a ceiling: our own bandwidth and will.
                            </p>
                            <p>
                                The "Aha!" moment didn't come from another YAML file. It came when I realized I was using AI to
                                automate the <em>intention</em>, not just the syntax. We are now trading freshwater cooling for the
                                computational leverage required to solve problems humanity has been too "lazy" or cognitively limited to fix:
                                cancer, fossil fuel dependency, and planetary survival.
                            </p>
                        </div>
                    </section>

                    {/* WAR STORIES */}
                    <section className="grid md:grid-cols-2 gap-6">
                        <GlassCard className="p-6">
                            <h3 className="text-[var(--accent)] font-bold font-mono text-sm mb-2">[LOG: TOYOTA_RESEARCH_INSTITUTE]</h3>
                            <p className="text-sm text-gray-400">
                                Architected Lidar back-testing infrastructure. We didn't just "run code"; we simulated millions of miles
                                of autonomous driving scenarios to validate safety-critical systems before they touched asphalt.
                            </p>
                        </GlassCard>
                        <GlassCard className="p-6">
                            <h3 className="text-[var(--accent)] font-bold font-mono text-sm mb-2">[LOG: INTUIT_PLATFORM]</h3>
                            <p className="text-sm text-gray-400">
                                Led the internal revolution for Infrastructure as Code (IaC). It wasn't about the tools; it was about
                                standardizing "The Way" for thousands of engineers to deploy without setting the data center on fire.
                            </p>
                        </GlassCard>
                    </section>

                    {/* THE PIVOT */}
                    <GlassCard className="p-8 border-[var(--accent)]/50 bg-[var(--accent)]/5">
                        <h2 className="text-xl font-bold text-white mb-4 font-mono">&gt; THE_NEW_TRINITY</h2>
                        <ul className="space-y-4 font-mono text-gray-300">
                            <li className="flex gap-4">
                                <span className="text-[var(--accent)]">[01]</span>
                                <div>
                                    <strong className="text-white block">ORCHESTRATION (ex-Project Management)</strong>
                                    Autonomous execution loops that replace Agile ceremony with real-time Goal Realization.
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <span className="text-[var(--accent)]">[02]</span>
                                <div>
                                    <strong className="text-white block">RESILIENCE (ex-SRE)</strong>
                                    "Antigenic" immune systems that detect and resolve incidents before they trigger a human War Room.
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <span className="text-[var(--accent)]">[03]</span>
                                <div>
                                    <strong className="text-white block">INTEGRITY (ex-Compliance)</strong>
                                    Autonomous compliance where security is a System Prompt, not a manual audit.
                                </div>
                            </li>
                        </ul>
                    </GlassCard>
                </div>
            </main>
        </div>
    );
}
