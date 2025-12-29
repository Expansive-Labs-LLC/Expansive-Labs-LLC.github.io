"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Activity, ShieldCheck, Terminal } from "lucide-react";

export function Navbar() {
    const pathname = usePathname();

    const navItems = [
        { name: "MISSION_LOG", href: "/" },
        { name: "ARCHITECT_LOG", href: "/architect-log" },
        { name: "INTENT_INTAKE", href: "/intent" },
        { name: "SYSTEM_PROMPT", href: "/system-prompt" },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-md">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
                <div className="flex items-center gap-2">
                    <Terminal className="h-6 w-6 text-[var(--accent)]" />
                    <span className="text-sm font-bold tracking-widest text-[var(--accent)]">
                        ANT/GRAVITY
                    </span>
                </div>

                <div className="flex items-center gap-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "text-xs font-semibold tracking-wider hover:text-[var(--accent)] transition-colors",
                                pathname === item.href ? "text-[var(--accent)]" : "text-gray-400"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                <div className="hidden sm:flex items-center gap-4">
                    <div className="flex items-center gap-2 text-xs text-green-500">
                        <Activity className="h-3 w-3" />
                        <span>SYSTEM_ONLINE</span>
                    </div>
                    <div className="h-4 w-[1px] bg-white/10" />
                    <div className="flex items-center gap-2 text-xs text-blue-400">
                        <ShieldCheck className="h-3 w-3" />
                        <span>SECURE</span>
                    </div>
                </div>
            </div>
        </nav>
    );
}
