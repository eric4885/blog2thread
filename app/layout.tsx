import { Outfit, Source_Serif_4 } from "next/font/google";
import type { Metadata } from "next";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { GA_MEASUREMENT_ID, SITE_NAME, SITE_URL } from "@/lib/site";
import { HOME_DESCRIPTION, HOME_TITLE } from "@/lib/seo";
import "./globals.css";

const sans = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const display = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: HOME_TITLE,
    template: `%s | ${SITE_NAME}`
  },
  description: HOME_DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/`,
    siteName: SITE_NAME,
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "blog → thread — Twitter Thread Generator"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: ["/og-image.png"]
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }]
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body className="font-sans antialiased">
        {GA_MEASUREMENT_ID ? (
          <GoogleAnalytics measurementId={GA_MEASUREMENT_ID} />
        ) : null}
        {children}
      </body>
    </html>
  );
}
