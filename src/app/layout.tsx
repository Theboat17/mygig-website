import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mygig.com.au"),
  title: "MyGig — The Smarter Way to Staff Your Warehouse",
  description:
    "AI-powered Workforce-as-a-Service. Scale your casual workforce, eliminate Fair Work risk, and reduce costs by up to 70%. MyGig is your Employer of Record.",
  openGraph: {
    title: "MyGig — Workforce-as-a-Service for Warehousing & Logistics",
    description:
      "Scale casual headcount on demand. Full Fair Work compliance. Same-day pay. Book a demo today.",
    type: "website",
    locale: "en_AU",
    url: "https://mygig.com.au",
    images: [
      {
        url: "/images/mygig-logo-tagline.png",
        width: 512,
        height: 512,
        alt: "MyGig — Work your Way",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AU">
      <head>
        <link
          rel="preload"
          href="/fonts/GrenettePro-Bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/GrenettePro-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Onest-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Onest-Medium.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "MyGig",
              url: "https://mygig.com.au",
              description: "AI-powered Workforce-as-a-Service platform",
              address: {
                "@type": "PostalAddress",
                addressCountry: "AU",
              },
            }),
          }}
        />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
