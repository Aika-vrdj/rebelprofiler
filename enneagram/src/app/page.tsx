"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const enneagramTypes = [
  { number: 1, name: "The Reformer", color: "bg-[#1E3A8A]" },
  { number: 2, name: "The Helper", color: "bg-[#991B1B]" },
  { number: 3, name: "The Achiever", color: "bg-[#854D0E]" },
  { number: 4, name: "The Individualist", color: "bg-[#064E3B]" },
  { number: 5, name: "The Investigator", color: "bg-[#581C87]" },
  { number: 6, name: "The Loyalist", color: "bg-[#7C2D12]" },
  { number: 7, name: "The Enthusiast", color: "bg-[#831843]" },
  { number: 8, name: "The Challenger", color: "bg-[#312E81]" },
  { number: 9, name: "The Peacemaker", color: "bg-[#134E4A]" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto max-w-7xl px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Link
            href="/quiz"
            className="inline-block mb-8 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            Take the Enneagram Quiz
          </Link>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            The Enneagram Hub
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the ancient wisdom of the Enneagram, a powerful tool for
            personal growth and understanding. Explore all nine personality types
            and uncover insights about yourself and others.
          </p>
        </motion.div>

        <div className="grid grid-cols-3 gap-6">
          {enneagramTypes.map((type, index) => (
            <motion.div
              key={type.number}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/type/${type.number}`}>
                <div className={`${type.color} rounded-lg p-6 h-full transition-transform hover:scale-105 cursor-pointer`}>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl font-bold">{type.number}</span>
                    <ArrowRight className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-semibold mb-2">{type.name}</h2>
                  <p className="text-sm opacity-90">
                    Click to explore Type {type.number}'s traits, wings, and growth paths
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
