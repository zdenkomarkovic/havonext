import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION, COMPANY } from "@/lib/constants";
import { JsonLd } from "@/components/seo/JsonLd";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "transport tereta Srbija",
    "prevoz tereta",
    "drumski saobraćaj",
    "organizacija prevoza",
    "logistika Srbija",
    "havonext",
    "HAVONEXT DOO",
    "špedicija",
    "kamionski prevoz",
    "prevoz robe",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "sr_RS",
    url: SITE_URL,
    siteName: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sr" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="antialiased">
        <JsonLd data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: COMPANY.name,
          url: SITE_URL,
          logo: `${SITE_URL}/logo.jpeg`,
          description: SITE_DESCRIPTION,
          email: COMPANY.email,
          telephone: COMPANY.phoneTel,
          address: {
            "@type": "PostalAddress",
            addressCountry: "RS",
          },
          sameAs: [],
        }} />
        <JsonLd data={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: COMPANY.name,
          url: SITE_URL,
          telephone: COMPANY.phoneTel,
          email: COMPANY.email,
          description: SITE_DESCRIPTION,
          address: {
            "@type": "PostalAddress",
            addressCountry: "RS",
          },
          priceRange: "$$",
        }} />
        {children}
      </body>
    </html>
  );
}
