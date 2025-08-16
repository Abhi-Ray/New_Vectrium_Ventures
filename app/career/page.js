import React from 'react'
import { Career } from '@/components/common/Career'

export const metadata = {
  title: "AI Careers - Join the Vectrium Ventures Team",
  description:
    "Explore exciting career opportunities in the field of AI at Vectrium Ventures. We are looking for talented individuals to join our team and shape the future of artificial intelligence.",
  keywords: [
    "top AI careers",
    "AI jobs",
    "Vectrium Ventures careers",
    "careers in artificial intelligence",
    "AI engineering jobs",
    "AI research jobs",
  ],
  alternates: {
    canonical: "/career",
  },
  openGraph: {
    title: "AI Careers - Join the Vectrium Ventures Team",
    description:
      "Explore exciting career opportunities in the field of AI at Vectrium Ventures. We are looking for talented individuals to join our team and shape the future of artificial intelligence.",
    url: "https://vectriumventures.com/career",
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
    title: "AI Careers - Join the Vectrium Ventures Team",
    description:
      "Explore exciting career opportunities in the field of AI at Vectrium Ventures. We are looking for talented individuals to join our team and shape the future of artificial intelligence.",
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
            "name": "AI Careers - Join the Vectrium Ventures Team",
            "description": "Explore exciting career opportunities in the field of AI at Vectrium Ventures. We are looking for talented individuals to join our team and shape the future of artificial intelligence.",
            "url": "https://vectriumventures.com/career"
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "JobPosting",
            "title": "AI Engineer",
            "description": "Vectrium Ventures is seeking a talented AI Engineer to join our team.",
            "hiringOrganization": {
              "@type": "Organization",
              "name": "Vectrium Ventures",
              "sameAs": "https://vectriumventures.com"
            },
            "employmentType": "FULL_TIME",
            "datePosted": "2024-01-01",
            "validThrough": "2024-12-31",
            "jobLocation": {
              "@type": "Place",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 AI Lane",
                "addressLocality": "San Francisco",
                "addressRegion": "CA",
                "postalCode": "94105",
                "addressCountry": "US"
              }
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
                "name": "Career",
                "item": "https://vectriumventures.com/career"
              }
            ]
          })
        }}
      />
      <Career/>
    </div>
  )
}

export default page
