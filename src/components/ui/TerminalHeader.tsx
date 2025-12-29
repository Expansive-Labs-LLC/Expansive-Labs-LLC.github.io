interface TerminalHeaderProps {
    title: string;
    subtitle?: string;
    prefix?: string;
}

export function TerminalHeader({ title, subtitle, prefix = ">" }: TerminalHeaderProps) {
    return (
        <div className="mb-8 font-mono">
            <div className="flex items-baseline gap-2 text-xl md:text-2xl font-bold text-[var(--foreground)]">
                <span className="text-[var(--accent)]">{prefix}</span>
                <h1>{title}</h1>
            </div>
            {subtitle && (
                <p className="mt-2 text-sm md:text-base text-[var(--muted)] opacity-80 pl-6 border-l border-[var(--glass-border)]">
          // {subtitle}
                </p>
            )}
        </div>
    );
}
