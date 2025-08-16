import React from 'react'
import { AIAgent } from '@/components/AIAgent/page'

export const metadata = {
  title: "Advanced AI Agents for Business Automation - Vectrium Ventures",
  description:
    "Explore our advanced AI agents designed to automate complex business processes. Vectrium Ventures provides intelligent agents that streamline workflows and enhance productivity.",
  keywords: [
    "advanced AI agents",
    "intelligent automation agents",
    "business process automation AI",
    "AI workflow automation",
    "AI-powered business agents",
    "enterprise AI agents",
  ],
  alternates: {
    canonical: "/ai-agents",
  },
  openGraph: {
    title: "Advanced AI Agents for Business Automation - Vectrium Ventures",
    description:
      "Explore our advanced AI agents designed to automate complex business processes. Vectrium Ventures provides intelligent agents that streamline workflows and enhance productivity.",
    url: "https://vectriumventures.com/ai-agents",
    siteName: "Vectrium Ventures",
    images: [
      {
        url: "https://vectriumventures.com/img/logo.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Advanced AI Agents for Business Automation - Vectrium Ventures",
    description:
      "Explore our advanced AI agents designed to automate complex business processes. Vectrium Ventures provides intelligent agents that streamline workflows and enhance productivity.",
    images: ["https://vectriumventures.com/img/logo.png"],
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
            "name": "Advanced AI Agents for Business Automation - Vectrium Ventures",
            "description": "Explore our advanced AI agents designed to automate complex business processes. Vectrium Ventures provides intelligent agents that streamline workflows and enhance productivity.",
            "url": "https://vectriumventures.com/ai-agents"
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "AI Agents",
            "provider": {
              "@type": "Organization",
              "name": "Vectrium Ventures"
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://vectriumventures.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "AI Agents",
                "item": "https://vectriumventures.com/ai-agents"
              }
            ]
          })
        }}
      />
      <AIAgent/>
    </div>
  )
}

export default page
