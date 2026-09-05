import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: `Privacy Policy for ${SITE_NAME} — how we handle inputs, logs, and analytics on ${SITE_URL}.`,
  path: "/privacy/"
});

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl px-4 py-10 md:px-6 md:py-14">
        <h1 className="font-display text-4xl font-semibold tracking-tight text-ink">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-ink/55">
          Last updated: 2026-08-31
        </p>
        <div className="prose-guide mt-6 space-y-4">
          <p>
            {SITE_NAME} (&quot;we&quot;, &quot;our&quot;) operates {SITE_URL}.
            This policy explains what information we process when you use our
            free thread generator tools.
          </p>
          <h2>Information we process</h2>
          <p>
            When you generate content, you may paste article text or a public
            URL. That input is sent to our servers and to an AI provider solely
            to produce your thread draft. We do not require an account to use
            the core tool.
          </p>
          <p>
            If you choose <strong>Save &amp; share</strong>, we store the
            generated draft so it can be opened via a public share link. Shared
            drafts are intended for social sharing and are marked not to be
            indexed by search engines. If you submit an email for product
            updates, we store that address to contact you about the product.
          </p>
          <h2>Logs and security</h2>
          <p>
            Like most websites, our hosting provider may retain standard request
            logs (such as IP address, user agent, and timestamps) for security,
            abuse prevention, and reliability.
          </p>
          <h2>Cookies and analytics</h2>
          <p>
            We use Google Analytics 4 (GA4) by default to understand aggregate
            traffic (pages viewed, approximate location, device). GA4 uses
            cookies or similar identifiers. We do not use analytics to sell
            personal data. You can block analytics cookies in your browser if
            you prefer.
          </p>
          <h2>Third-party processors</h2>
          <p>
            AI generation and hosting providers process data on our behalf under
            their own terms. Do not submit secrets, passwords, or personal data
            you are not comfortable sharing with a processing service.
          </p>
          <h2>Contact</h2>
          <p>
            Privacy questions:{" "}
            <a
              href="mailto:hello@blog2thread.com"
              className="font-semibold text-brand hover:underline"
            >
              hello@blog2thread.com
            </a>
            .
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
