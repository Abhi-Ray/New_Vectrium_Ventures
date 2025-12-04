"use client";
import { motion } from "motion/react";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";
import { ToolsGrid } from "../ui/tool-card";

// AI Tools data - 6 enterprise-level tools
const aiToolsData = [
  {
    icon: "🎨",
    title: "VectraDesign AI",
    description: "Generate stunning designs, logos, and marketing visuals in seconds. Enterprise-grade image generation with brand consistency controls.",
    features: [
      "Brand kit integration",
      "Batch generation",
      "4K resolution exports",
      "Custom style training"
    ],
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: "📝",
    title: "ContentForge Pro",
    description: "AI-powered content creation for blogs, social media, and marketing campaigns. Generate SEO-optimized content at scale.",
    features: [
      "Multi-language support",
      "Tone customization",
      "Plagiarism-free output",
      "SEO optimization"
    ],
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: "📊",
    title: "DataInsight Engine",
    description: "Transform raw data into actionable insights. Advanced analytics with natural language queries for non-technical users.",
    features: [
      "Real-time dashboards",
      "Predictive analytics",
      "Natural language queries",
      "Custom report builder"
    ],
    gradient: "from-emerald-500 to-teal-500"
  },
  {
    icon: "🎥",
    title: "VideoSynth Studio",
    description: "Create professional videos from text prompts or transform existing footage with AI-powered editing and effects.",
    features: [
      "Text-to-video generation",
      "Auto subtitles & translation",
      "AI voiceover synthesis",
      "Brand template library"
    ],
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: "💬",
    title: "ConvoBot Enterprise",
    description: "Deploy intelligent chatbots trained on your knowledge base. Handle customer queries 24/7 with human-like responses.",
    features: [
      "Multi-channel deployment",
      "Knowledge base training",
      "Sentiment analysis",
      "Seamless human handoff"
    ],
    gradient: "from-violet-500 to-purple-500"
  },
  {
    icon: "🔐",
    title: "SecureDoc AI",
    description: "Intelligent document processing with enterprise security. Extract, analyze, and automate document workflows.",
    features: [
      "OCR & data extraction",
      "Contract analysis",
      "Compliance checking",
      "End-to-end encryption"
    ],
    gradient: "from-slate-400 to-zinc-500"
  }
];

export function AItools() {
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
          Unlock the power of{" "}
          <Highlight className="text-white dark:text-white">
            AI Tools
          </Highlight>{" "}
          for faster productivity, smarter decisions, and{" "}
          <Highlight className="text-white dark:text-white">limitless creativity.
          </Highlight>

        </motion.h1>
      </HeroHighlight>

      <ToolsGrid
        title="Enterprise AI Tools"
        subtitle="Powerful, production-ready AI tools designed for scale. Built for enterprises that demand reliability, security, and performance."
        tools={aiToolsData}
      />
    </>
  );
}
