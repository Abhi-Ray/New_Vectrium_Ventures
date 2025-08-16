import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Vectrium Ventures - AI Tools, AI Agents, and Agentic Automation",
  description:
    "Vectrium Ventures is a leading provider of AI tools, AI agents, and agentic automation solutions. We help businesses leverage the power of AI to drive growth and innovation.",
  keywords: [
    "AI tools",
    "AI agents",
    "agentic automation",
    "Vectrium Ventures",
    "AI solutions",
    "business AI",
  ],
  author: "Vectrium Ventures",
  robots: "index, follow",
  metadataBase: new URL("https://vectriumventures.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Vectrium Ventures - AI Tools, AI Agents, and Agentic Automation",
    description:
      "Vectrium Ventures is a leading provider of AI tools, AI agents, and agentic automation solutions. We help businesses leverage the power of AI to drive growth and innovation.",
    url: "https://vectriumventures.com",
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
    title: "Vectrium Ventures - AI Tools, AI Agents, and Agentic Automation",
    description:
      "Vectrium Ventures is a leading provider of AI tools, AI agents, and agentic automation solutions. We help businesses leverage the power of AI to drive growth and innovation.",
    images: ["https://vectriumventures.com/img/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="author" href="/humans.txt" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <Header/>
          {children}
          <Footer/>
        </Providers>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Vectrium Ventures",
              "url": "https://vectriumventures.com",
              "logo": "https://vectriumventures.com/img/logo.png",
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
              "@type": "WebSite",
              "url": "https://vectriumventures.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://vectriumventures.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </body>
    </html>
  );
}
