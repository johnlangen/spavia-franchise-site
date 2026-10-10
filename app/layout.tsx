import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import { Suspense } from "react";
import Analytics from "./components/Analytics";
import AttributionTracker from "./components/AttributionTracker";
import ChatWidget from "./components/ChatWidget";
import EngagementTracking from "./components/EngagementTracking";
import FloatingButton from "./components/FloatingButton";
import SiteMotion from "./components/SiteMotion";
import { ThemeProvider } from "./components/ThemeProvider";
import "./globals.css";
import "./motion.css";

const recoleta = localFont({
  src: [
    {
      path: "../public/fonts/Recoleta-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Recoleta-Bold.woff2",
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
        email: "alisa@spaviadayspa.com",
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
      </head>

      {process.env.NODE_ENV === "production" && (
        <>
          {/* Google Ads and GA4: preserve production conversion configuration. */}
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=AW-944657062"
            strategy="afterInteractive"
          />
          <Script id="google-ads-init" strategy="afterInteractive">
            {`
          if (["spaviafranchise.com", "www.spaviafranchise.com"].includes(window.location.hostname)) {
          window.dataLayer = window.dataLayer || [];
          window.gtag = window.gtag || function(){window.dataLayer.push(arguments);};
          gtag('js', new Date());
          gtag('config', 'AW-944657062');
          }
        `}
          </Script>

          {/* Meta pixel: loads only when NEXT_PUBLIC_META_PIXEL_ID is set. */}
          {process.env.NEXT_PUBLIC_META_PIXEL_ID && (
            <Script id="meta-pixel" strategy="afterInteractive">
              {`
          if (["spaviafranchise.com", "www.spaviafranchise.com"].includes(window.location.hostname)) {
          !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
          n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
          document,'script','https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${process.env.NEXT_PUBLIC_META_PIXEL_ID}');
          fbq('track', 'PageView');
          }
        `}
            </Script>
          )}

          {/* ✅ GOOGLE ANALYTICS (GA4) */}
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-6N6Q7GX5D4"
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
          if (["spaviafranchise.com", "www.spaviafranchise.com"].includes(window.location.hostname)) {
          window.dataLayer = window.dataLayer || [];
          window.gtag = window.gtag || function(){window.dataLayer.push(arguments);};
          gtag('js', new Date());
          gtag('config', 'G-6N6Q7GX5D4', {
            anonymize_ip: true,
            send_page_view: false,
          });
          }
        `}
          </Script>
        </>
      )}
      <body className="antialiased">
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
        <AttributionTracker />
        <EngagementTracking />
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <SiteMotion>
          <ThemeProvider>
            {children}
            <FloatingButton />
            <ChatWidget />
          </ThemeProvider>
        </SiteMotion>
      </body>
    </html>
  );
}
