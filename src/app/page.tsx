import { Navbar } from "@/components/layout/Navbar";
import { TerminalHeader } from "@/components/ui/TerminalHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { AgenticNodes } from "@/components/ui/AgenticNodes";
import { BlueprintComparison } from "@/components/ui/BlueprintComparison";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <Navbar />
      <AgenticNodes />

      <main className="container mx-auto px-4 pt-24 pb-12 relative z-10">
        <section className="mb-24">
          <TerminalHeader
            title="THE_MICHIGAN_MANIFESTO"
            subtitle="Current_Location: Michigan // Resource: Freshwater_Cooling // Objective: Planetary_Survival"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <GlassCard className="p-8">
              <h2 className="text-xl font-bold mb-4 text-[var(--accent)]">&gt; THE_PARADOX</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We are standing on the edge of the largest freshwater system on Earth.
                But we are trading this local resource for <strong>computational leverage</strong>.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Why? To solve problems humanity has been too "lazy" or cognitively limited to fix:
                cancer, fossil fuel dependency, and planetary survival.
              </p>
            </GlassCard>

            <GlassCard className="p-8" animate={true}>
              <h2 className="text-xl font-bold mb-4 text-[var(--accent)]">&gt; THE_SOLUTION</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                We don't build "pipelines"; we architect <strong>Agentic Goal Achievement</strong>.
              </p>
              <div className="flex flex-col gap-4">
                <Link href="/architect-log" className="group flex items-center gap-2 text-sm font-mono text-white hover:text-[var(--accent)] transition-colors">
                  <span>&gt; READ_LOG: THE_GREAT_NUKE</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/intent" className="group flex items-center gap-2 text-sm font-mono text-white hover:text-[var(--accent)] transition-colors">
                  <span>&gt; INITIATE_INTENT: START_PROJECT</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </GlassCard>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold text-center mb-8 font-mono tracking-widest text-[var(--muted)]">
              [SYSTEM_COMPARISON_LOG]
            </h2>
            <BlueprintComparison />
          </div>
        </section>

        <section className="max-w-4xl mx-auto">
          <TerminalHeader title="OPERATIONAL_HISTORY" prefix="$" />
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4 border-l-2 border-[var(--glass-border)] pl-4 py-2">
              <div className="w-32 font-bold text-[var(--accent)]">2013-2023</div>
              <div>
                <h3 className="text-lg font-bold">Cloud Migration Era</h3>
                <p className="text-gray-400 text-sm">Moved the "Big Boys" (Toyota, Intuit, S&P Global) to the cloud.</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 border-l-2 border-[var(--glass-border)] pl-4 py-2 opacity-80">
              <div className="w-32 font-bold text-gray-500">LEGACY</div>
              <div>
                <h3 className="text-lg font-bold">Scientific Excellence</h3>
                <p className="text-gray-400 text-sm">Toyota Research Institute (Lidar), Intuit (IaC Education), S&P Global (DR). This deterministic era was the mandatory foundation for the Agentic Era.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
