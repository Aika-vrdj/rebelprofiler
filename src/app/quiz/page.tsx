"use client";

import EnneagramQuiz from "@/components/EnneagramQuiz";

export default function QuizPage() {
  return (
    <div className="min-h-screen bg-background text-foreground py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">
          Discover Your Rebel Type
        </h1>
        <p className="text-muted-foreground text-center mb-12">
          Answer the following questions honestly to find your primary Rebel type
          and closest matches.
        </p>
        <EnneagramQuiz />
      </div>
    </div>
  );
}
