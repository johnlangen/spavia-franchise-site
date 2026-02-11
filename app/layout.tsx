import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import FloatingButton from "./components/FloatingButton";
import { ThemeProvider } from "./components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const recoleta = localFont({
  src: [
    {
      path: "../public/fonts/Recoleta-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Recoleta-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-recoleta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Spa Franchise | Spavia Day Spa | Luxury Spa Franchises",
  description:
    "Spavia is the premier spa franchise brand that delivers a resort-like massage and spa experience to your neighborhood in an ever-growing $19 billion spa industry.",
};

const globalJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://spaviafranchise.com/#organization",
      name: "Spavia Day Spa",
      url: "https://spaviafranchise.com",
      description:
        "Spavia is the premier spa franchise brand that delivers a resort-like massage and spa experience to your neighborhood in an ever-growing spa industry.",
      logo: {
        "@type": "ImageObject",
        url: "https://spaviafranchise.com/spavia-logo.png",
      },
      sameAs: [
        "https://www.facebook.com/SpaviaSpa",
        "https://www.instagram.com/spavia",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://spaviafranchise.com/#website",
      name: "Spavia Franchise",
      url: "https://spaviafranchise.com",
      publisher: {
        "@id": "https://spaviafranchise.com/#organization",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={recoleta.variable}>

      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalJsonLd) }}
        />
      </head>

      {/* ✅ GOOGLE ADS BASE TAG */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-944657062"
        strategy="afterInteractive"
      />
      <Script id="google-ads-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-944657062');
        `}
      </Script>

      {/* ✅ GOOGLE ANALYTICS (GA4) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-6N6Q7GX5D4"
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-6N6Q7GX5D4', {
            anonymize_ip: true,
          });
        `}
      </Script>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
          <FloatingButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
