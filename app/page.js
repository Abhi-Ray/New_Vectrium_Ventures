import React from "react";
import { Home } from "@/components/common/Home";
import { WobbleCardDemo } from "@/components/common/AITools";
import { FeaturesSectionDemo } from "@/components/common/Feature";
import { ThreeDMarqueeDemoSecond } from "@/components/common/CallToAction";

export const metadata = {
  title: "Vectrium Ventures Pvt Ltd - Top AI Tools, AI Agents, and Agentic Automation",
  description:
    "Discover top-ranking AI tools, AI agents, and agentic automation solutions from Vectrium Ventures. We provide cutting-edge AI to accelerate business growth and innovation.",
  keywords: [
    "top AI tools",
    "best AI agents",
    "agentic automation platforms",
    "Vectrium Ventures",
    "AI solutions for business",
    "enterprise AI",
    "AI-driven automation",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Vectrium Ventures Pvt Ltd - Top AI Tools, AI Agents, and Agentic Automation",
    description:
      "Discover top-ranking AI tools, AI agents, and agentic automation solutions from Vectrium Ventures. We provide cutting-edge AI to accelerate business growth and innovation.",
    url: "https://vectriumventures.in",
    siteName: "Vectrium Ventures",
    images: [
      {
        url: "https://vectriumventures.in/img/logo.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Vectrium Ventures Pvt Ltd - Top AI Tools, AI Agents, and Agentic Automation",
    description:
      "Discover top-ranking AI tools, AI agents, and agentic automation solutions from Vectrium Ventures. We provide cutting-edge AI to accelerate business growth and innovation.",
    images: ["https://vectriumventures.in/img/logo.png"],
  },
};

const page = () => {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Vectrium Ventures Pvt Ltd - Top AI Tools, AI Agents, and Agentic Automation",
            description:
              "Discover top-ranking AI tools, AI agents, and agentic automation solutions from Vectrium Ventures. We provide cutting-edge AI to accelerate business growth and innovation.",
            url: "https://vectriumventures.in",
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "AI Solutions",
            provider: {
              "@type": "Organization",
              name: "Vectrium Ventures",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://vectriumventures.in",
              },
            ],
          }),
        }}
      />
      <Home />
      <WobbleCardDemo />
      <FeaturesSectionDemo />
      <ThreeDMarqueeDemoSecond />
    </div>
  );
};

export default page;
