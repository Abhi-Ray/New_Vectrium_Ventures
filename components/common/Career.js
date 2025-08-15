"use client"
import React, { useState } from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Job } from "./Job";
import { CareerChoose } from "./CareerChoose";
import CertificateVerification from "./CertificateVerification";
export function Career() {
  const [selected, setSelected] = useState(null);
  return (
    <>
    <div className="bg-black ">
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 ">
        <h2
          className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight"
        >
          Build Your Future in <br /> AI, Automation & Agents
        </h2>
        <p
          className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center"
        >
          Join Vectrium Ventures to work on cutting-edge AI & automation projects,
          grow your skills, and build a career with recognized credentials.
        </p>

        {/* Buttons Row */}
        <div className="flex gap-4 mt-6">
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 px-6 py-2 text-sm lg:text-base"
            onClick={() => setSelected('job')}
          >
            <span>Apply for Jobs</span>
          </HoverBorderGradient>

          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 px-6 py-2 text-sm lg:text-base"
            onClick={() => setSelected('internship')}
          >
            <span>Apply for Internship</span>
          </HoverBorderGradient>
        </div>
      </BackgroundLines>
      {selected && <Job value={selected} />}
      <CareerChoose />
      <CertificateVerification />
    </div>
    </>
  );
}
