"use client";
import { Cpu, Zap, Shield, Workflow, Bot } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export function CareerChoose() {
  return (
    <ul
      className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2 bg-transparent lg:max-w-7xl mx-auto px-6 pb-20">
      <GridItem
        area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
        icon={<Cpu className="h-4 w-4 text-neutral-400 dark:text-neutral-400" />}
        title="Build the Future of AI"
        description="Join a team developing AI tools and agentic automation that reshape industries and empower businesses worldwide." />
      <GridItem
        area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
        icon={<Workflow className="h-4 w-4 text-neutral-400 dark:text-neutral-400" />}
        title="Work With Next-Gen AI Agents"
        description="Design, train, and deploy intelligent AI agents that perform complex tasks with full autonomy." />
      <GridItem
        area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
        icon={<Shield className="h-4 w-4 text-neutral-400 dark:text-neutral-400" />}
        title="Innovate With Confidence"
        description="Be part of a culture where security, ethics, and data privacy are the foundation of every AI solution." />
      <GridItem
        area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
        icon={<Zap className="h-4 w-4 text-neutral-400 dark:text-neutral-400" />}
        title="Solve Real-World Challenges"
        description="Work on projects that push AI boundaries—automating workflows, accelerating decisions, and delivering measurable impact." />
      <GridItem
        area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
        icon={<Bot className="h-4 w-4 text-neutral-400 dark:text-neutral-400" />}
        title="Grow With Industry Leaders"
        description="Collaborate with top AI engineers, product innovators, and automation experts while accelerating your own career growth." />
    </ul>
  );
}

const GridItem = ({ area, icon, title, description }) => {
  return (
    <li className={`min-h-[14rem] list-none ${area} `}>
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div
          className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3
                className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-white md:text-2xl/[1.875rem] dark:text-white">
                {title}
              </h3>
              <h2
                className="font-sans text-sm/[1.125rem] text-neutral-400 md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
