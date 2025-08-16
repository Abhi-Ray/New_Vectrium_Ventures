import React from 'react'
import { About } from '@/components/common/About'

export const metadata = {
  title: "About Vectrium Ventures - Our Mission in AI Innovation",
  description:
    "Learn about Vectrium Ventures, our mission to democratize AI, and our vision for a future powered by intelligent automation. Discover the team behind our innovative AI solutions.",
  keywords: [
    "About Vectrium Ventures",
    "AI company mission",
    "AI innovation",
    "democratizing AI",
    "intelligent automation solutions",
    "AI leadership team",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Vectrium Ventures - Our Mission in AI Innovation",
    description:
      "Learn about Vectrium Ventures, our mission to democratize AI, and our vision for a future powered by intelligent automation. Discover the team behind our innovative AI solutions.",
    url: "https://vectriumventures.com/about",
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
    title: "About Vectrium Ventures - Our Mission in AI Innovation",
    description:
      "Learn about Vectrium Ventures, our mission to democratize AI, and our vision for a future powered by intelligent automation. Discover the team behind our innovative AI solutions.",
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
            "name": "About Vectrium Ventures - Our Mission in AI Innovation",
            "description": "Learn about Vectrium Ventures, our mission to democratize AI, and our vision for a future powered by intelligent automation. Discover the team behind our innovative AI solutions.",
            "url": "https://vectriumventures.com/about"
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
                "name": "About",
                "item": "https://vectriumventures.com/about"
              }
            ]
          })
        }}
      />
      <About />
    </div>
  )
}

export default page
