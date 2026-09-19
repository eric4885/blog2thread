import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: `Privacy Policy for ${SITE_NAME} — how we handle inputs, logs, retention, and deletion on ${SITE_URL}.`,
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
          Last updated: 2026-09-19
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
          <h2>Where data is stored</h2>
          <p>
            The site is hosted on Cloudflare. Shared thread drafts and optional
            email addresses are stored in Cloudflare KV (key-value storage) so
            they can be retrieved across requests. Generation requests are
            processed by our AI API provider under their terms. We do not sell
            your content or email list.
          </p>
          <h2>AI training</h2>
          <p>
            We send inputs to an AI provider only to generate your draft. We do
            not use your pasted articles, URLs, emails, or shared threads to
            train our own models. Providers may process requests under their own
            policies — avoid submitting secrets or sensitive personal data.
          </p>
          <h2>Retention</h2>
          <ul>
            <li>
              <strong>Generation inputs</strong> are processed to create a draft
              and are not kept by us as a long-term content archive outside the
              generation request path.
            </li>
            <li>
              <strong>Shared drafts</strong> (
              <code className="text-sm">/thread/&#123;id&#125;/</code>) remain
              available while stored in KV so the share link keeps working. We
              may remove inactive or abusive drafts.
            </li>
            <li>
              <strong>Email addresses</strong> are kept until you ask us to
              remove them, or until we shut down the mailing list feature.
            </li>
            <li>
              <strong>Server / security logs</strong> (IP, user agent,
              timestamps) may be retained by our host for a limited period for
              abuse prevention and reliability.
            </li>
            <li>
              <strong>Browser drafts</strong> (last generated text on your
              device) stay in your local storage until you clear site data.
            </li>
          </ul>
          <h2>Deletion requests</h2>
          <p>
            To delete a shared thread link or remove an email you submitted,
            email{" "}
            <a
              href="mailto:hello@blog2thread.com"
              className="font-semibold text-brand hover:underline"
            >
              hello@blog2thread.com
            </a>{" "}
            with the share URL and/or the email address. We will remove the
            matching KV records when reasonably identifiable. Clearing your
            browser storage removes local drafts on that device.
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
            AI generation and hosting providers (including Cloudflare and our AI
            API gateway) process data on our behalf under their own terms. Do
            not submit secrets, passwords, or personal data you are not
            comfortable sharing with a processing service.
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
