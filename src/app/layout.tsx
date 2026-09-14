import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { AIChatbot } from "@/components/AIChatbot";
import { JsonLd } from "@/components/JsonLd";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://himastechdigi.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Himastech | Data-Driven Digital Marketing & Performance Agency",
    template: "%s | Himastech",
  },
  description:
    "Enterprise performance marketing agency scaling brands predictably with high-ROAS Meta Ads, Google Ads, Generative Engine Optimization (GEO), and certified marketing training in Hyderabad, India.",
  keywords: [
    "Himastech",
    "Himastech Digital Marketing",
    "Performance Marketing Agency",
    "Digital Marketing Agency Hyderabad",
    "Meta Ads Agency India",
    "Google Ads ROAS",
    "Generative Engine Optimization",
    "GEO AI Search",
    "Conversion Rate Optimization",
    "Digital Marketing Training Hyderabad",
    "Merlinflow Technologies",
    "Adduri Sai Kishore",
  ],
  authors: [{ name: "Himastech", url: baseUrl }],
  creator: "Himastech & Merlinflow Technologies",
  publisher: "Himastech",
  alternates: {
    canonical: "/",
    languages: {
      "en-IN": `${baseUrl}`,
      "en-US": `${baseUrl}`,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: baseUrl,
    siteName: "Himastech Digital Marketing",
    title: "Himastech | Data-Driven Digital Marketing & Performance Agency",
    description:
      "Scale your brand predictably with data-driven Meta & Google ad funnels, Generative Engine Optimization (GEO), and elite performance marketing.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Himastech Digital Marketing Ecosystem",
      },
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Himastech Digital Marketing Ecosystem",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Himastech | Data-Driven Digital Marketing & Performance Agency",
    description:
      "Scale your brand predictably with data-driven Meta & Google ad funnels, Generative Engine Optimization (GEO), and elite performance marketing.",
    images: ["/og-image.png"],
    creator: "@himastech",
  },
  icons: {
    icon: "/logo-main.png",
    shortcut: "/logo-main.png",
    apple: "/logo-main.png",
  },
  manifest: "/manifest.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <JsonLd />
      </head>
      <body className="antialiased min-h-screen flex flex-col relative font-serif">
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />

        {/* Global Floating Communication Widgets */}
        <WhatsAppWidget />
        <AIChatbot />
      </body>
    </html>
  );
}

