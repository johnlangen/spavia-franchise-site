import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Script from "next/script";
import { Suspense } from "react";
import FloatingButton from "./components/FloatingButton";
import ChatWidget from "./components/ChatWidget";
import { ThemeProvider } from "./components/ThemeProvider";
import Analytics from "./components/Analytics";
import AttributionTracker from "./components/AttributionTracker";

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
      alternateName: ["Spavia Franchise", "Spavia"],
      legalName: "Spavia International LLC",
      url: "https://spaviafranchise.com",
      foundingDate: "2005",
      areaServed: "US",
      description:
        "Spavia is a luxury day spa franchise and franchisor offering franchise ownership opportunities across the U.S. Spavia's full-service membership model delivers a resort-like massage, facial, and body-treatment experience, with 60+ locations and median unit gross sales of $1.1M+.",
      knowsAbout: [
        "Day spa franchise",
        "Massage franchise",
        "Facial spa franchise",
        "Wellness franchise",
        "Spa franchise ownership",
      ],
      logo: {
        "@type": "ImageObject",
        url: "https://spaviafranchise.com/spavia-logo.png",
      },
      sameAs: [
        "https://www.facebook.com/SpaviaSpa",
        "https://www.instagram.com/spavia",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Franchise Development",
        email: "marty@spaviadayspa.com",
        url: "/get-started",
        availableLanguage: "English",
      },
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
        {/* If JS is disabled, scroll-reveal elements never get .reveal-in —
            show them so content is never invisible. */}
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important;}`}</style>
        </noscript>
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
            send_page_view: false,
          });
        `}
      </Script>

      <body
        className="antialiased"
      >
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
        <AttributionTracker />
        <ThemeProvider>
          {children}
          <FloatingButton />
          <ChatWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
