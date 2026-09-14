import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.himastechdigi.com";

export const metadata: Metadata = {
  title: "Merlinflow Enterprise Tech Portfolio | Himastech Digi",
  description: "Enterprise software ecosystem by Merlinflow Technologies in strategic alliance with Himastech Digi (himastechdigi.com): PropTech ERP, CRM, and D2C Engines.",
  keywords: [
    "Himastech Digi",
    "himastechdigi",
    "Merlinflow Technologies",
    "Real Estate ERP",
    "PropTech OS",
    "Enterprise CRM",
    "Brokerage Management Software",
    "D2C Commerce Engine",
    "Omnichannel Sales Automation",
    "Himastech Merlinflow",
    "Hyderabad Software Development",
  ],
  alternates: {
    canonical: `${baseUrl}/merlinflow`,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: `${baseUrl}/merlinflow`,
    siteName: "Himastech Digi - Merlinflow Portfolio",
    title: "Merlinflow Enterprise Tech Portfolio | Himastech Digi",
    description: "Enterprise software ecosystem engineering: Real Estate ERP, Omnichannel CRM, and D2C Commerce engines in strategic alliance with Himastech Digi.",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Merlinflow Technologies Enterprise Software Suite - Himastech Digi Alliance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Merlinflow Enterprise Tech Portfolio | Himastech Digi",
    description: "PropTech OS, Enterprise CRM, and D2C E-commerce Engines built in alliance with Himastech Digi.",
    images: [`${baseUrl}/og-image.png`],
  },
};

export default function MerlinflowLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
