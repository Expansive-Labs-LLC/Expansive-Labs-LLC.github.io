"use client";

import { motion } from "framer-motion";

export function AgenticNodes() {
    const nodes = [
        { x: 50, y: 50, r: 4 },
        { x: 150, y: 80, r: 6 },
        { x: 250, y: 40, r: 5 },
        { x: 300, y: 120, r: 4 },
        { x: 100, y: 150, r: 5 },
        { x: 200, y: 180, r: 3 },
    ];

    const connections = [
        [0, 1], [0, 4],
        [1, 2], [1, 4], [1, 5],
        [2, 3],
        [3, 5],
        [4, 5],
    ];

    return (
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice">
                {connections.map(([start, end], i) => (
                    <motion.line
                        key={`conn-${i}`}
                        x1={nodes[start].x}
                        y1={nodes[start].y}
                        x2={nodes[end].x}
                        y2={nodes[end].y}
                        stroke="var(--accent)"
                        strokeWidth="0.5"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.5 }}
                        transition={{ duration: 2, delay: i * 0.2, repeat: Infinity, repeatType: "reverse", repeatDelay: 1 }}
                    />
                ))}
                {nodes.map((node, i) => (
                    <motion.circle
                        key={`node-${i}`}
                        cx={node.x}
                        cy={node.y}
                        r={node.r}
                        fill="var(--accent)"
                        initial={{ scale: 0 }}
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
                    />
                ))}
            </svg>
        </div>
    );
}
