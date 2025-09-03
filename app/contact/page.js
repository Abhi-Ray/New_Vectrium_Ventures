import React from 'react'
import { Contact } from '@/components/common/Contact'

export const metadata = {
  title: "Contact Vectrium Ventures - AI Solutions and Support",
  description:
    "Contact Vectrium Ventures for inquiries about our AI tools, AI agents, and agentic automation solutions. We are here to help you with your business needs.",
  keywords: [
    "contact Vectrium Ventures",
    "AI solutions support",
    "AI company contact",
    "agentic automation inquiries",
    "AI tools support",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Vectrium Ventures - AI Solutions and Support",
    description:
      "Contact Vectrium Ventures for inquiries about our AI tools, AI agents, and agentic automation solutions. We are here to help you with your business needs.",
    url: "https://vectriumventures.in/contact",
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
    title: "Contact Vectrium Ventures - AI Solutions and Support",
    description:
      "Contact Vectrium Ventures for inquiries about our AI tools, AI agents, and agentic automation solutions. We are here to help you with your business needs.",
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
            "name": "Contact Vectrium Ventures - AI Solutions and Support",
            "description": "Contact Vectrium Ventures for inquiries about our AI tools, AI agents, and agentic automation solutions. We are here to help you with your business needs.",
            "url": "https://vectriumventures.in/contact"
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-555-555-5555",
              "contactType": "customer service"
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
                "name": "Contact",
                "item": "https://vectriumventures.in/contact"
              }
            ]
          })
        }}
      />
      <Contact />
    </div>
  )
}

export default page
