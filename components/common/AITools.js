"use client";

import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";

export function WobbleCardDemo() {
  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full px-4 md:px-0"
    >
      {/* First Card - AI Tools */}
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[400px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2
            className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white"
          >
            AI Tools for Every Workflow
          </h2>
          <p className="mt-4 text-left text-base/6 text-neutral-200">
            Explore powerful AI tools that boost productivity, automate
            repetitive work, and unlock creative potential for individuals and
            businesses.
          </p>
        </div>
        <img
          src="/img/linear.webp"
          width={500}
          height={500}
          alt="AI tools demo image"
          className="absolute -right-4 lg:-right-[20%] grayscale filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>

      {/* Second Card - Agentic Automation */}
      <WobbleCard containerClassName="col-span-1 min-h-[200px] md:min-h-[300px] ">
        <h2
          className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white"
        >
          Agentic Automation
        </h2>
        <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
          Build intelligent, self-operating systems that make decisions, execute
          tasks, and adapt to changing needs without constant human input.
        </p>
      </WobbleCard>

      {/* Third Card - AI Agents */}
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[400px] lg:min-h-[600px] xl:min-h-[300px]"
      >
        <div className="max-w-sm">
          <h2
            className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white"
          >
            AI Agents that Work for You
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
            Deploy autonomous AI agents capable of learning, reasoning, and
            completing complex goals — from research to real-time customer
            support.
          </p>
        </div>
        <img
          src="/img/linear.webp"
          width={500}
          height={500}
          alt="AI agents demo image"
          className="absolute -right-10 md:-right-[40%] lg:-right-[5%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  );
}
