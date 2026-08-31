import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { CURRENT_YEAR, SITE_NAME, SITE_URL } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Service",
  description: `Terms of Service for ${SITE_NAME} at ${SITE_URL}.`,
  path: "/terms/"
});

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl px-4 py-10 md:px-6 md:py-14">
        <h1 className="font-display text-4xl font-semibold tracking-tight text-ink">
          Terms of Service
        </h1>
        <p className="mt-3 text-sm text-ink/55">
          Last updated: {CURRENT_YEAR}-08-31
        </p>
        <div className="prose-guide mt-6 space-y-4">
          <p>
            By using {SITE_NAME} ({SITE_URL}), you agree to these terms. If you
            do not agree, please do not use the service.
          </p>
          <h2>Service</h2>
          <p>
            {SITE_NAME} provides AI-assisted tools to draft Twitter/X threads
            and related formats from text or public URLs. Features, limits, and
            pricing may change over time.
          </p>
          <h2>Your content</h2>
          <p>
            You are responsible for the content you submit and publish. Only
            submit material you have the right to use. Review AI output before
            posting — drafts may contain errors or omissions.
          </p>
          <h2>Acceptable use</h2>
          <p>
            Do not use the service to spam, harass, infringe rights, break laws,
            or attempt to disrupt or abuse our systems or third-party providers.
          </p>
          <h2>Disclaimer</h2>
          <p>
            The service is provided &quot;as is&quot; without warranties of any
            kind. We are not liable for decisions you make based on generated
            drafts, downtime, or third-party outages.
          </p>
          <h2>Contact</h2>
          <p>
            Questions about these terms:{" "}
            <a
              href="mailto:hello@blog2thread.com"
              className="font-semibold text-brand hover:underline"
            >
              hello@blog2thread.com
            </a>
            . See also our{" "}
            <Link
              href="/privacy/"
              className="font-semibold text-brand hover:underline"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
