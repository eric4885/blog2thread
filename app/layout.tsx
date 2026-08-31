import { Outfit, Source_Serif_4 } from "next/font/google";
import type { Metadata } from "next";
import { CURRENT_YEAR, SITE_NAME, SITE_URL } from "@/lib/site";
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
    default: `Twitter Thread Generator — Turn Blog Posts into X Threads Free (${CURRENT_YEAR})`,
    template: `%s | ${SITE_NAME}`
  },
  description:
    "Convert any blog post into an engaging Twitter/X thread with AI. Paste your article URL or text, get a ready-to-post thread instantly. No sign-up required.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `Twitter Thread Generator — Turn Blog Posts into X Threads Free (${CURRENT_YEAR})`,
    description:
      "The best free Twitter thread generator. Turn any blog post into an X thread in seconds — no login required."
  },
  twitter: {
    card: "summary_large_image",
    title: `Twitter Thread Generator (${CURRENT_YEAR})`,
    description:
      "Turn any blog post into a ready-to-post X thread with AI. Free, no sign-up."
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
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
