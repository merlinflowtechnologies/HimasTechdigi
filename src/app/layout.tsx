import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { AIChatbot } from "@/components/AIChatbot";
import { SplashScreen } from "@/components/SplashScreen";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://himastech.com"),
  title: {
    default: "Himastech | Data-Driven Digital Marketing",
    template: "%s | Himastech"
  },
  description: "Modern digital marketing and training agency dedicated to helping businesses scale predictably and efficiently with precision marketing.",
  keywords: ["digital marketing", "meta ads", "SEO", "marketing agency", "marketing training", "Himastech"],
  authors: [{ name: "Himastech" }],
  creator: "Himastech",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://himastech.com",
    siteName: "Himastech Digital Marketing",
    title: "Himastech | Data-Driven Digital Marketing",
    description: "Scale your brand with precision marketing and elite digital marketing training.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Himastech Digital Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Himastech | Data-Driven Digital Marketing",
    description: "Scale your brand with precision marketing.",
    images: ["/og-image.jpg"],
  },
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
      <body className={`${outfit.className} antialiased min-h-screen flex flex-col relative`}>
        {/* Animated Brand Splash Screen */}
        <SplashScreen />

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

