import React from 'react'
import { AItools } from '@/components/AITools/page'

export const metadata = {
  title: "Innovative AI Tools for Business Growth - Vectrium Ventures",
  description:
    "Discover a suite of powerful AI tools from Vectrium Ventures. Our solutions are designed to enhance efficiency, foster innovation, and drive business growth.",
  keywords: [
    "innovative AI tools",
    "AI tools for business",
    "AI software solutions",
    "business growth AI",
    "Vectrium Ventures AI tools",
    "enterprise AI software",
  ],
  alternates: {
    canonical: "/ai-tools",
  },
  openGraph: {
    title: "Innovative AI Tools for Business Growth - Vectrium Ventures",
    description:
      "Discover a suite of powerful AI tools from Vectrium Ventures. Our solutions are designed to enhance efficiency, foster innovation, and drive business growth.",
    url: "https://vectriumventures.in/ai-tools",
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
    title: "Innovative AI Tools for Business Growth - Vectrium Ventures",
    description:
      "Discover a suite of powerful AI tools from Vectrium Ventures. Our solutions are designed to enhance efficiency, foster innovation, and drive business growth.",
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
            "name": "Innovative AI Tools for Business Growth - Vectrium Ventures",
            "description": "Discover a suite of powerful AI tools from Vectrium Ventures. Our solutions are designed to enhance efficiency, foster innovation, and drive business growth.",
            "url": "https://vectriumventures.in/ai-tools"
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "AI Tools",
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
                "item": "https://vectriumventures.in"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "AI Tools",
                "item": "https://vectriumventures.in/ai-tools"
              }
            ]
          })
        }}
      />
      <AItools/>
    </div>
  )
}

export default page
