"use client";

import { useState } from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { TerminalHeader } from "@/components/ui/TerminalHeader";
import { Send, Terminal } from "lucide-react";

export function IntentForm() {
    const [status, setStatus] = useState<"IDLE" | "PROCESSING" | "ACKNOWLEDGED">("IDLE");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("PROCESSING");
        setTimeout(() => {
            setStatus("ACKNOWLEDGED");
        }, 2000);
    };

    if (status === "ACKNOWLEDGED") {
        return (
            <GlassCard className="p-8 border-green-500/30">
                <TerminalHeader title="INTENT_ACKNOWLEDGED" prefix="OK" />
                <div className="font-mono text-sm text-green-400 space-y-2">
                    <p>&gt; SIGNAL_RECEIVED: INTENT_DIAGNOSTIC_INITIATED</p>
                    <p>&gt; PROTOCOL_CHECK: CONSTRAINTS_VERIFIED</p>
                    <p>&gt; NEXT_STEP: ARCHITECT_REVIEW (ASYNC_CHANNEL)</p>
                </div>
                <button
                    onClick={() => setStatus("IDLE")}
                    className="mt-6 px-4 py-2 bg-white/5 hover:bg-white/10 text-xs font-bold tracking-widest uppercase transition-colors rounded border border-white/10"
                >
                    [NEW_TRANSMISSION]
                </button>
            </GlassCard>
        );
    }

    return (
        <GlassCard className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-xs font-bold tracking-widest text-gray-400 mb-2 uppercase">
                        [01] Goal / Mission Objective
                    </label>
                    <textarea
                        required
                        className="w-full h-32 bg-black/50 border border-white/10 rounded p-4 text-sm text-gray-200 focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)] transition-all resize-none font-mono"
                        placeholder="// Describe the strategic objective..."
                    />
                </div>

                <div>
                    <label className="block text-xs font-bold tracking-widest text-gray-400 mb-2 uppercase">
                        [02] Success Criteria
                    </label>
                    <input
                        type="text"
                        required
                        className="w-full bg-black/50 border border-white/10 rounded p-4 text-sm text-gray-200 focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)] transition-all font-mono"
                        placeholder="// How will verify completion?"
                    />
                </div>

                <div>
                    <label className="block text-xs font-bold tracking-widest text-gray-400 mb-2 uppercase">
                        [03] Operational Constraints
                    </label>
                    <input
                        type="text"
                        className="w-full bg-black/50 border border-white/10 rounded p-4 text-sm text-gray-200 focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)] transition-all font-mono"
                        placeholder="// Time, Budget, Compliance..."
                    />
                </div>

                <button
                    type="submit"
                    disabled={status === "PROCESSING"}
                    className="w-full py-4 bg-[var(--accent)] text-black font-bold tracking-widest hover:bg-[var(--accent)]/90 transition-colors rounded flex items-center justify-center gap-2 group"
                >
                    {status === "PROCESSING" ? (
                        <>
                            <Terminal className="w-4 h-4 animate-spin" />
                            <span>TRANSMITTING...</span>
                        </>
                    ) : (
                        <>
                            <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            <span>TRANSMIT_INTENT</span>
                        </>
                    )}
                </button>
            </form>
        </GlassCard>
    );
}
