"use client";
import { motion } from "motion/react";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";
import { ToolsGrid } from "../ui/tool-card";

// Automation data - 6 enterprise-level automation solutions
const automationData = [
  {
    icon: "⚡",
    title: "WorkflowMax",
    description: "Visual workflow automation platform. Connect apps, automate processes, and build complex workflows without code.",
    features: [
      "Drag-and-drop builder",
      "500+ app integrations",
      "Conditional logic",
      "Error handling & retry"
    ],
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    icon: "📧",
    title: "EmailFlow Pro",
    description: "Intelligent email automation for marketing, sales, and customer engagement. Personalized sequences at scale.",
    features: [
      "Smart segmentation",
      "A/B testing built-in",
      "Behavior triggers",
      "Analytics dashboard"
    ],
    gradient: "from-red-500 to-pink-500"
  },
  {
    icon: "🔄",
    title: "SyncMaster Hub",
    description: "Real-time data synchronization across all your business systems. Keep data consistent and up-to-date everywhere.",
    features: [
      "Bi-directional sync",
      "Conflict resolution",
      "Field mapping",
      "Audit logging"
    ],
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: "📊",
    title: "ReportBot Auto",
    description: "Automated report generation and distribution. Schedule, generate, and deliver insights to stakeholders automatically.",
    features: [
      "Scheduled generation",
      "Multi-format export",
      "Dynamic templates",
      "Smart distribution"
    ],
    gradient: "from-teal-500 to-emerald-500"
  },
  {
    icon: "🔔",
    title: "AlertEngine Pro",
    description: "Intelligent alerting and notification system. Monitor KPIs, detect anomalies, and trigger actions automatically.",
    features: [
      "Anomaly detection",
      "Multi-channel alerts",
      "Escalation rules",
      "Custom thresholds"
    ],
    gradient: "from-purple-500 to-violet-500"
  },
  {
    icon: "🏭",
    title: "ProcessMiner AI",
    description: "AI-powered process discovery and optimization. Analyze workflows, identify bottlenecks, and suggest improvements.",
    features: [
      "Process mapping",
      "Bottleneck detection",
      "ROI calculator",
      "Optimization suggestions"
    ],
    gradient: "from-slate-500 to-zinc-600"
  }
];

export function Automation() {
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
          Experience{" "}
          <Highlight className="text-white dark:text-white">
            Agentic Automation
          </Highlight>{" "}
          that adapts, learns, and executes complex strategies —{" "}
          <Highlight className="text-white dark:text-white">
            your co-founder.
          </Highlight>

        </motion.h1>
      </HeroHighlight>

      <ToolsGrid
        title="Agentic Automation Solutions"
        subtitle="Transform your business with intelligent automation. Connect systems, eliminate manual work, and let AI handle the complexity."
        tools={automationData}
      />
    </>
  );
}
