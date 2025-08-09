"use client";
import React, { useState, useEffect } from "react";
import { MultiStepLoader as Loader } from "@/components/ui/multi-step-loader";

const loadingStates = [
  { text: "Connecting to Vectrium Ventures AI platform" },
  { text: "Gathering your business intelligence data" },
  { text: "Deploying autonomous AI agents" },
  { text: "Integrating your SaaS ecosystem" },
  { text: "Finalizing launch sequence 🚀" },
];

export function MultiStepLoaderDemo() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const totalDuration = loadingStates.length * 2000; // 2s per step
    const timer = setTimeout(() => {
      setLoading(false);
    }, totalDuration);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-[60vh] flex items-center justify-center bg-black/50">
      <Loader
        loadingStates={loadingStates}
        loading={loading}
        duration={2000}
      />
    </div>
  );
}
