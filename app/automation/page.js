import React from 'react'
import { Automation } from '@/components/automation/page'

export const metadata = {
  title: "Agentic Automation Solutions for Enterprise - Vectrium Ventures",
  description:
    "Leverage the power of agentic automation with Vectrium Ventures. Our AI-driven solutions automate complex tasks, improve efficiency, and drive business process innovation.",
  keywords: [
    "agentic automation solutions",
    "enterprise AI automation",
    "AI business process automation",
    "intelligent automation platforms",
    "Vectrium Ventures automation",
    "AI-driven automation solutions",
  ],
  alternates: {
    canonical: "/automation",
  },
  openGraph: {
    title: "Agentic Automation Solutions for Enterprise - Vectrium Ventures",
    description:
      "Leverage the power of agentic automation with Vectrium Ventures. Our AI-driven solutions automate complex tasks, improve efficiency, and drive business process innovation.",
    url: "https://vectriumventures.com/automation",
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
    title: "Agentic Automation Solutions for Enterprise - Vectrium Ventures",
    description:
      "Leverage the power of agentic automation with Vectrium Ventures. Our AI-driven solutions automate complex tasks, improve efficiency, and drive business process innovation.",
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
            "name": "Agentic Automation Solutions for Enterprise - Vectrium Ventures",
            "description": "Leverage the power of agentic automation with Vectrium Ventures. Our AI-driven solutions automate complex tasks, improve efficiency, and drive business process innovation.",
            "url": "https://vectriumventures.com/automation"
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Agentic Automation",
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
                "name": "Automation",
                "item": "https://vectriumventures.com/automation"
              }
            ]
          })
        }}
      />
      <Automation/>
    </div>
  )
}

export default page
