import React from 'react'
import { AmazonGrowthPage } from '@/components/common/AmazonGrowthPage'

export const metadata = {
  title: "Amazon Business Growth Services - Vectrium Ventures",
  description:
    "Grow your Amazon business with experts. Account management, listing optimization, SEO, PPC, competitor analysis, product launch strategy and performance monitoring.",
  keywords: [
    "Amazon account management",
    "Amazon listing optimization",
    "Amazon SEO",
    "Amazon PPC management",
    "Amazon product launch",
    "Flipkart seller services",
    "Meesho seller services",
    "Blinkit seller services",
    "Vectrium Ventures",
  ],
  alternates: {
    canonical: "/amazon-growth",
  },
  openGraph: {
    title: "Amazon Business Growth Services - Vectrium Ventures",
    description:
      "Grow your Amazon business with experts. Account management, listing optimization, SEO, PPC, competitor analysis, product launch strategy and performance monitoring.",
    url: "https://vectriumventures.in/amazon-growth",
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
    title: "Amazon Business Growth Services - Vectrium Ventures",
    description:
      "Grow your Amazon business with experts. Account management, listing optimization, SEO, PPC, competitor analysis, product launch strategy and performance monitoring.",
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
            "name": "Amazon Business Growth Services - Vectrium Ventures",
            "description":
              "Grow your Amazon business with experts. Account management, listing optimization, SEO, PPC, competitor analysis, product launch strategy and performance monitoring.",
            "url": "https://vectriumventures.in/amazon-growth",
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Amazon Account Management",
            "provider": {
              "@type": "Organization",
              "name": "Vectrium Ventures",
            },
            "areaServed": "IN",
            "offers": {
              "@type": "Offer",
              "description": "FREE account review and growth plan",
            },
          }),
        }}
      />
      <AmazonGrowthPage />
    </div>
  )
}

export default page
