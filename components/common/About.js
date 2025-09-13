import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { GlobeDemo } from "@/components/common/Globe";
export function About() {
  const data = [
    {
      title: "Jan 2024 – Foundation & Early AI Exploration",
      content: (
        <div>
          <p className="mb-4 text-xs md:text-sm text-neutral-200 dark:text-neutral-200">
            Vectrium Ventures Pvt Ltd launched focusing on AI’s potential for business transformation. Initial research and building a core team included experimenting with large language models for text generation and conversational prototypes.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/img/t1.jpg"
              alt="Foundation 1"
              className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60"
            />
            <img
              src="/img/t2.jpg"
              alt="Foundation 2"
              className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60"
            />
            <img
              src="/img/t3.jpg"
              alt="Gen AI 1"
              className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60"
            />
            <img
              src="/img/t4.jpg"
              alt="Gen AI 2"
              className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Jun 2024 – Development of AI Tools",
      content: (
        <div>
          <p className="mb-4 text-xs md:text-sm text-neutral-200 dark:text-neutral-200">
            Developed internal AI-powered tools focused on data cleanup, document analysis, and content creation workflows to improve operational efficiency.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/img/t5.jpg"
              alt="AI Tools 1"
              className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60"
            />
            <img
              src="/img/t6.jpg"
              alt="AI Tools 2"
              className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60"
            />
            <img
              src="/img/t7.jpg"
              alt="AI Tools 3"
              className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60"
            />
            <img
              src="/img/t8.jpg"
              alt="AI Tools 4"
              className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Sep 2024 – First Clients & Automation Systems",
      content: (
        <div>
          <p className="mb-4 text-xs md:text-sm text-neutral-200 dark:text-neutral-200">
            Delivered AI solutions to early clients in e-commerce and services, focusing on efficiency and accuracy. Introduced automation pipelines integrating AI tools with CRMs, analytics, and business operations.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/img/t9.jpg"
              alt="Clients 1"
              className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60"
            />
            <img
              src="/img/t10.jpg"
              alt="Clients 2"
              className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60"
            />
            <img
              src="/img/t11.jpg"
              alt="Automation 1"
              className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60"
            />
            <img
              src="/img/t12.jpg"
              alt="Automation 2"
              className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Mar 2025 – Launch of AI Agents",
      content: (
        <div>
          <p className="mb-4 text-xs md:text-sm text-neutral-200 dark:text-neutral-200">
            Introduced autonomous multi-step AI agents managing customer queries, scheduling, and reporting with minimal oversight.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/img/t13.jpg"
              alt="AI Agents 1"
              className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60"
            />
            <img
              src="/img/t14.jpg"
              alt="AI Agents 2"
              className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60"
            />
            <img
              src="/img/t15.jpg"
              alt="AI Agents 3"
              className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60"
            />
            <img
              src="/img/t16.jpg"
              alt="AI Agents 4"
              className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Jun 2025 – Advanced Multi-Agent Collaboration",
      content: (
        <div>
          <p className="mb-4 text-xs md:text-sm text-neutral-200 dark:text-neutral-200">
            Expanded AI capabilities to multi-agent collaboration models enabling complex task completion through teamwork among AI agents.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/img/t17.jpg"
              alt="Agent Collaboration 1"
              className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60"
            />
            <img
              src="/img/t18.jpg"
              alt="Agent Collaboration 2"
              className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60"
            />
            <img
              src="/img/t19.jpg"
              alt="Agent Collaboration 3"
              className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60"
            />
            <img
              src="/img/t20.jpg"
              alt="Agent Collaboration 4"
              className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Sep – Dec 2025 – Global Deployments & Worldwide Network",
      content: (
        <div>
          <p className="mb-4 text-xs md:text-sm text-neutral-200 dark:text-neutral-200">
            Successfully deployed AI tools and agents across Asia, Europe, and North America supporting remote-first operations. Established a global network of AI-driven automation systems powering diverse industries worldwide.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/img/t21.jpg"
              alt="Global Deployments 1"
              className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60"
            />
            <img
              src="/img/t22.jpg"
              alt="Global Deployments 2"
              className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60"
            />
            <img
              src="/img/t23.jpg"
              alt="Worldwide Network 1"
              className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60"
            />
            <img
              src="/img/t24.jpg"
              alt="Worldwide Network 2"
              className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
  ];
  

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
      <GlobeDemo />
    </div>
  );
}
