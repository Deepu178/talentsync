import { DM_Serif_Display, Poppins } from "next/font/google";
import Script from "next/script";

import "@/styles/globals.css";

import { cn } from "@/lib/utils";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Provider from "@/components/provider";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "300", "500", "600", "700"],
  subsets: ["latin"],
});

const dm_serif_display = DM_Serif_Display({
  variable: "--font-dm-serif-display",
  weight: ["400"],
  subsets: ["latin"],
});

import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://talentsync.work"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "TalentSync - Hire the Top 1% of Global Talent",
    template: "%s | TalentSync",
  },
  description:
    "TalentSync is a premium global talent partner for high-growth companies. We source, vet, and match world-class engineers, designers, and product experts.",
  keywords: [
    "Global Talent",
    "Staff Augmentation",
    "Remote Engineering",
    "TalentSync",
    "SaaS Development",
    "Product Studio",
    "Next.js",
    "React",
    "AI",
  ],
  authors: [{ name: "TalentSync Team" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://talentsync.work",
    siteName: "TalentSync",
    title: "TalentSync - Hire the Top 1% of Global Talent",
    description:
      "TalentSync is a premium global talent partner. We replace the bloated agency model with a curated network of top 1% engineers.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TalentSync",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TalentSync - Hire the Top 1% of Global Talent",
    description:
      "TalentSync is a premium global talent partner. We replace the bloated agency model with a curated network of top 1% engineers.",
    creator: "@talentteamsync",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  applicationName: "TalentSync",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "TalentSync",
  url: "https://talentsync.work",
  logo: "https://talentsync.work/logo.png", // Assuming logo exists or generic
  image: "https://talentsync.work/og-image.png",
  description: "TalentSync is a premium global talent partner for high-growth companies.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Noida",
    addressRegion: "UP",
    addressCountry: "IN",
  },
  priceRange: "$$",
  knowsAbout: ["SaaS Development", "Software Engineering", "Product Design", "Next.js"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className}>
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-397Y20WMV5"
        />
        <Script id="google-analytics">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-397Y20WMV5');`}
        </Script>
        <meta name="apple-mobile-web-app-title" content="TalentSync Studio" />
      </head>
      <body
        className={cn(
          "font-normal bg-background",
          poppins.variable,
          dm_serif_display.variable
        )}
      >
        <Provider>
          <Script
            id="json-ld"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          <div id="root"></div>
          <Header />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
