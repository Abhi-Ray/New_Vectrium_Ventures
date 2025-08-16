"use client";
import React from "react";
import { Spotlight } from "@/components/ui/spotlight-new";

export function Automation() {
  return (
    <div
      className="h-[40rem] w-full rounded-md flex items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden"
    >
      <Spotlight />
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full  md:pt-0">
        <h1
          className="text-3xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50"
        >
          Agentic Automation <br /> AI That Works Like You
        </h1>
        <p
          className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto"
        >
          Go beyond simple task automation — our agentic AI systems can think, adapt,
          and act on your behalf. From managing workflows to making data-driven decisions,
          experience automation that feels truly intelligent.
        </p>
      </div>
    </div>
  );
}
