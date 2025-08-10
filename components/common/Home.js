"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import AIChat from "./AIChat";

export function Home() {
  return (
    <div className="min-h-screen w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased p-4">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="relative z-10 text-4xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold mb-4">
            AI for Everyone
          </h1>
          <p className="text-neutral-500 max-w-2xl mx-auto text-sm md:text-base relative z-10">
            Powerful AI tools, agentic automation, and smart agents working together to simplify your tasks and boost results.
          </p>
        </div>
      </div>
      <AIChat />
      
      <BackgroundBeams />
    </div>
  );
}
