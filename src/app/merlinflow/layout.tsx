import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://himastechdigi.com";

export const metadata: Metadata = {
  title: "Merlinflow Technologies | Enterprise PropTech ERP, CRM & AI Growth Suite",
  description: "Explore the enterprise digital product ecosystem by Merlinflow Technologies Pvt Ltd: Real Estate ERP, Brokerage OS, Omnichannel CRM, and D2C Commerce Engines.",
  keywords: [
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
    siteName: "Merlinflow Technologies Portfolio | Himastech",
    title: "Merlinflow Technologies | Enterprise PropTech ERP, CRM & AI Growth Suite",
    description: "Enterprise software ecosystem engineering: Real Estate ERP, Omnichannel CRM, and D2C Commerce engines in strategic alliance with Himastech.",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Merlinflow Technologies Enterprise Software Suite",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Merlinflow Technologies | Enterprise PropTech & CRM Suite",
    description: "PropTech OS, Enterprise CRM, and D2C E-commerce Engines built for rapid scale.",
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
