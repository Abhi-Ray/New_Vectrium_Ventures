"use client";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import { Cover } from "@/components/ui/cover";
export function ThreeDMarqueeDemoSecond() {
  
  const images = [
 "/img/screen1.png",
 "/img/screen2.png",
 "/img/screen3.png",  
 "/img/screen4.png",
 "/img/screen5.png",
 "/img/screen6.png",
 "/img/screen7.png",
 "/img/screen8.png",
 "/img/screen9.png",
 "/img/screen10.png",
 "/img/screen11.png",
 "/img/screen1.png",
 "/img/screen2.png",
 "/img/screen3.png",  
 "/img/screen4.png",
 "/img/screen5.png",
 "/img/screen6.png",
 "/img/screen7.png",
 "/img/screen8.png",
 "/img/screen9.png",
 "/img/screen10.png",
 "/img/screen11.png",
 "/img/screen1.png",
 "/img/screen2.png",
 "/img/screen3.png",  
 "/img/screen4.png",
 "/img/screen5.png",
 "/img/screen6.png",
 "/img/screen7.png",
 "/img/screen8.png",
 "/img/screen9.png",
  ];
  return (
    <>
   <div className="mx-auto max-w-7xl border-none bg-transparent  px-0 ">
      <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl  px-4 mx-auto text-center  relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
      AI to power your next big thing, <br /> with <Cover>Vectrium Ventures</Cover>
      </h1>
    </div>
    <div className="mx-auto max-w-7xl border-none bg-transparent py-8 px-0 ">
      <ThreeDMarquee images={images} />
    </div>
    </>
  );
}
