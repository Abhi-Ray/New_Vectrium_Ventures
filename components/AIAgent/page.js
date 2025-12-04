"use client";
import { motion } from "motion/react";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";
import { ToolsGrid } from "../ui/tool-card";

// AI Agents data - 6 enterprise-level agents
const aiAgentsData = [
  {
    icon: "🤖",
    title: "SalesForce Agent",
    description: "Autonomous sales agent that qualifies leads, schedules meetings, and nurtures prospects through personalized outreach.",
    features: [
      "Lead scoring & prioritization",
      "Automated follow-ups",
      "CRM integration",
      "Performance analytics"
    ],
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: "🎧",
    title: "SupportPro Agent",
    description: "24/7 customer support agent that resolves tickets, answers queries, and escalates complex issues to human agents.",
    features: [
      "Ticket auto-resolution",
      "Multi-language support",
      "Knowledge base learning",
      "SLA monitoring"
    ],
    gradient: "from-blue-500 to-indigo-500"
  },
  {
    icon: "📈",
    title: "MarketPulse Agent",
    description: "Real-time market intelligence agent that monitors trends, competitors, and opportunities for strategic decision-making.",
    features: [
      "Competitor tracking",
      "Trend analysis",
      "Alert notifications",
      "Custom reports"
    ],
    gradient: "from-amber-500 to-orange-500"
  },
  {
    icon: "📋",
    title: "RecruitBot Agent",
    description: "End-to-end recruitment agent that screens resumes, conducts initial interviews, and ranks candidates automatically.",
    features: [
      "Resume parsing & scoring",
      "Interview scheduling",
      "Candidate ranking",
      "Bias-free screening"
    ],
    gradient: "from-pink-500 to-rose-500"
  },
  {
    icon: "💰",
    title: "FinanceGuard Agent",
    description: "Intelligent financial agent for expense tracking, invoice processing, and fraud detection with enterprise security.",
    features: [
      "Automated invoicing",
      "Expense categorization",
      "Fraud detection",
      "Compliance reporting"
    ],
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    icon: "🔧",
    title: "DevOps Agent",
    description: "Autonomous DevOps agent for infrastructure monitoring, incident response, and automated remediation.",
    features: [
      "24/7 monitoring",
      "Auto-scaling triggers",
      "Incident response",
      "Log analysis & alerts"
    ],
    gradient: "from-violet-500 to-purple-500"
  }
];

export function AIAgent() {
  return (
    <>
      <HeroHighlight>
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-3xl px-4 md:text-4xl lg:text-5xl font-bold text-white-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
        >
          Meet{" "}
          <Highlight className="text-white dark:text-white">
            AI Agents
          </Highlight>{" "}
          that think, learn, and act on your behalf. 24/7 so you can focus on what{" "}
          <Highlight className="text-white dark:text-white">truly
            matters.
          </Highlight>

        </motion.h1>
      </HeroHighlight>

      <ToolsGrid
        title="Autonomous AI Agents"
        subtitle="Deploy intelligent agents that work around the clock. From sales to support, let AI handle repetitive tasks while you focus on strategy."
        tools={aiAgentsData}
      />
    </>
  );
}
