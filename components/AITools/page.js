import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/Spotlight";

export function AItools() {
  return (
    <div className="relative flex h-[40rem] w-full items-center justify-center bg-white dark:bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
       <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0">
        <h1
          className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl"
        >
          AI Tools for Everyone <br /> Power at Your Fingertips
        </h1>
        <p
          className="mx-auto mt-4 max-w-lg text-center text-base font-normal text-neutral-300"
        >
          Whether you’re an individual exploring AI for personal projects or a business
          looking to scale faster, our tools make innovation simple. From smart chat
          assistants to workflow automation, experience AI that works for you — anytime,
          anywhere.
        </p>
      </div>
    </div>
  );
}
