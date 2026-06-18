import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const siteUrl = "https://www.opgenesis.com";
const siteDescription =
  "GPS-tracked, HIPAA-compliant medical courier services for hospitals, labs, and pharmacies in Orlando, FL. Real-time dispatch. Monthly analytics. Request a demo.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Medical Courier Service Orlando, FL — OP Genesis Healthcare Logistics",
  description: siteDescription,
  alternates: {
    canonical: siteUrl
  },
  openGraph: {
    title: "Medical Courier Service Orlando, FL — OP Genesis Healthcare Logistics",
    description: siteDescription,
    url: siteUrl,
    siteName: "OP Genesis",
    locale: "en_US",
    type: "website"
  }
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "OP Genesis Healthcare Logistics Solutions",
  description:
    "HIPAA-compliant medical courier services for hospitals, labs, and pharmacies in Orlando, Florida.",
  url: siteUrl,
  telephone: "+1-407-874-7361",
  email: "contact@opgenesis.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "YOUR STREET ADDRESS",
    addressLocality: "Orlando",
    addressRegion: "FL",
    postalCode: "32856",
    addressCountry: "US"
  },
  areaServed: [
    "Orlando",
    "Orange County",
    "Seminole County",
    "Osceola County",
    "Lake County",
    "Volusia County",
    "Central Florida"
  ],
  serviceType: [
    "Medical Courier",
    "Specimen Transport",
    "Pharmacy Delivery",
    "STAT Courier",
    "Lab-to-Lab Transfer"
  ],
  hasCredential: "HIPAA Compliant"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What areas does OP Genesis serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "OP Genesis provides medical courier services throughout the Orlando metropolitan area and central Florida, including Orange, Seminole, Osceola, Lake, and Volusia counties."
      }
    },
    {
      "@type": "Question",
      name: "Is OP Genesis HIPAA compliant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. OP Genesis maintains full HIPAA compliance on all deliveries, including digital chain of custody documentation, secure handling protocols, and trained staff requirements."
      }
    },
    {
      "@type": "Question",
      name: "What types of medical items does OP Genesis transport?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "OP Genesis transports laboratory specimens, STAT and emergency deliveries, pharmaceutical medications, medical supplies, temperature-controlled items, and lab-to-lab transfers."
      }
    },
    {
      "@type": "Question",
      name: "How does OP Genesis handle delivery delays?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our dispatch system monitors every driver's position in real time against live traffic data. When a delay is detected, the pickup is automatically reassigned and your contact receives an immediate update before the delay affects your operation."
      }
    },
    {
      "@type": "Question",
      name: "Does OP Genesis provide proof of delivery?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every delivery includes digital chain of custody documentation with timestamped pickup and delivery confirmation, driver identification, and recipient sign-off."
      }
    },
    {
      "@type": "Question",
      name: "How do I start service with OP Genesis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Request a 20-minute demo call through our website. We'll review your pickup locations, delivery volume, and service requirements, then provide a tailored proposal within one business day."
      }
    }
  ]
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Medical Courier Service",
  provider: {
    "@type": "LocalBusiness",
    name: "OP Genesis Healthcare Logistics Solutions"
  },
  areaServed: "Orlando, FL and Central Florida",
  description:
    "GPS-tracked, HIPAA-compliant medical courier and specimen transport services for hospitals, clinical laboratories, and pharmacies in central Florida."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceSchema)
          }}
        />
        {children}
      </body>
    </html>
  );
}
