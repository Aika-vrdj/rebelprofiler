"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const enneagramTypes = [
  { number: 1, name: "The Crusader", color: "bg-[#3A3A3A]" },
  { number: 2, name: "The Guardian", color: "bg-[#8B0000]" },
  { number: 3, name: "The Trailblazer", color: "bg-[#B8860B]" },
  { number: 4, name: "The Visionary", color: "bg-[#4B0082]" },
  { number: 5, name: "The Strategist", color: "bg-[#2F4F4F]" },
  { number: 6, name: "The Sentinel", color: "bg-[#A52A2A]" },
  { number: 7, name: "The Maverick", color: "bg-[#800000]" },
  { number: 8, name: "The Warlord", color: "bg-[#333333]" },
  { number: 9, name: "The Diplomat", color: "bg-[#444444]" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-gray-200">
      <main className="mx-auto max-w-6xl px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Link
            href="/quiz"
            className="inline-block mb-8 px-8 py-3 bg-red-700 text-white rounded-lg hover:bg-red-800 transition-all shadow-md"
          >
            Discover Your Rebel Mind
          </Link>
          <h1 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-red-600">
            My Rebel Mind
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Unlock your true nature and embrace the rebellion within. Find your Rebel Archetype and discover your path to power, strategy, and freedom.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {enneagramTypes.map((type, index) => (
            <motion.div
              key={type.number}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/type/${type.number}`}>
                <div
                  className={`${type.color} rounded-xl p-6 h-full transition-transform hover:scale-105 cursor-pointer shadow-lg border border-gray-700`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl font-extrabold text-gold-400">{type.number}</span>
                    <ArrowRight className="h-6 w-6 text-gray-300" />
                  </div>
                  <h2 className="text-2xl font-semibold mb-2 text-white">{type.name}</h2>
                  <p className="text-sm text-gray-300">
                    Enter the world of {type.name}. Learn how this archetype rises and falls in the rebellion.
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
