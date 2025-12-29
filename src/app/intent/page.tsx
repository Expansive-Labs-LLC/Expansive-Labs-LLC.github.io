import { Navbar } from "@/components/layout/Navbar";
import { TerminalHeader } from "@/components/ui/TerminalHeader";
import { IntentForm } from "@/components/forms/IntentForm";

export default function IntentPage() {
    return (
        <div className="min-h-screen relative overflow-hidden bg-[var(--background)]">
            <Navbar />

            <main className="container mx-auto px-4 pt-24 pb-12 relative z-10 max-w-2xl">
                <TerminalHeader
                    title="INTENT_INTAKE_PORTAL"
                    subtitle="PROTOCOL: DEFINE_OBJECTIVE -> GENERATE_STRATEGY"
                />

                <p className="mb-8 text-gray-400 text-sm leading-relaxed border-l-2 border-[var(--accent)] pl-4">
                    Legacy "Contact Forms" are for passive inquiries. This portal is for <strong>active intent registration</strong>.
                    Describe your goal, and an agentic strategy will be formulated.
                </p>

                <IntentForm />
            </main>
        </div>
    );
}
