import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ThreadGenerator } from "@/components/thread-generator";
import { CURRENT_YEAR, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: `How to Make a Thread on Twitter: Complete Guide (${CURRENT_YEAR})`,
  description:
    "Learn how to create engaging Twitter/X threads that get engagement. Step-by-step guide with tips, examples, and a free AI thread generator.",
  alternates: { canonical: "/guides/how-to-make-a-thread-on-twitter" }
};

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Make a Thread on Twitter",
  description: "Step-by-step guide to creating engaging Twitter threads.",
  step: [
    {
      "@type": "HowToStep",
      name: "Pick one spine idea",
      text: "Decide the single claim your thread exists to prove."
    },
    {
      "@type": "HowToStep",
      name: "Write a scroll-stopping first tweet",
      text: "Open with a result, contrast, or curiosity gap — never a vague title."
    },
    {
      "@type": "HowToStep",
      name: "Break the argument into one idea per tweet",
      text: "Keep each tweet under 280 characters and easy to skim."
    },
    {
      "@type": "HowToStep",
      name: "End with a clear CTA",
      text: "Ask for a follow, a reply, or send readers to the full blog post."
    },
    {
      "@type": "HowToStep",
      name: "Optional: generate with AI",
      text: "Paste your blog into Blog2Thread to draft the thread in seconds."
    }
  ]
};

export default function HowToMakeAThreadPage() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl px-4 py-10 md:px-6 md:py-14">
        <article className="prose-guide">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand">
            Guide · {CURRENT_YEAR}
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
            How to Make a Thread on Twitter: The Complete Guide ({CURRENT_YEAR})
          </h1>
          <p className="mt-5 text-base leading-7 text-ink/75">
            Threads are still one of the highest-leverage formats on X. A strong
            thread can drive follows, bookmarks, and traffic back to your blog —
            if you structure it like an argument, not a chopped-up essay. This
            guide shows you how to make a thread on Twitter step by step, then
            gives you a free AI shortcut when you want speed.
          </p>

          <h2>What is a Twitter thread?</h2>
          <p>
            A Twitter (X) thread is a sequence of connected posts from the same
            account. Readers can follow the whole story in order. Unlike a single
            tweet, a thread lets you develop a claim, share proof, and land a
            CTA without cramming everything into 280 characters.
          </p>

          <h2>Why threads still work in {CURRENT_YEAR}</h2>
          <ul>
            <li>They reward depth without forcing people off-platform first.</li>
            <li>They are easy to bookmark and reshare tweet-by-tweet.</li>
            <li>
              They are the natural distribution format for blog posts,
              newsletters, and product lessons.
            </li>
          </ul>

          <h2>Step 1: Find the spine of your idea</h2>
          <p>
            Before you write tweet one, answer this in one sentence:{" "}
            <em>What is the single claim this thread exists to prove?</em> That
            sentence is your spine. Everything else is support. If you are
            converting a blog post, ignore SEO intros and look at the conclusion
            — it usually states the real point more honestly than the headline.
          </p>
          <h3>Spine examples</h3>
          <ul>
            <li>
              “Scheduling tools don’t grow your account — consistency does.”
            </li>
            <li>
              “One blog post can fund a week of distribution if you thread it
              correctly.”
            </li>
            <li>
              “Most AI threads fail because they summarize instead of arguing.”
            </li>
          </ul>

          <h2>Step 2: Write a hook that stops the scroll</h2>
          <p>
            Your first tweet is not a blog title. Titles describe. Hooks create
            tension. Use a specific result, a contrarian claim, or a curiosity
            gap the reader needs closed.
          </p>
          <h3>Weak vs strong openings</h3>
          <ul>
            <li>
              Weak: “How to make a thread on Twitter (tips inside).”
            </li>
            <li>
              Strong: “I rewrote 40 threads last quarter. The ones that got
              bookmarks all shared one structure. Here it is:”
            </li>
          </ul>

          <h2>Step 3: One idea per tweet</h2>
          <p>
            Take each supporting point and give it its own post. Short lines.
            White space. No “and also” crammed into the same tweet. Numbering
            (1/, 2/, 3/) is optional but helps educational threads feel
            intentional.
          </p>
          <h3>Practical length guidelines</h3>
          <ul>
            <li>Short posts (~500–800 words): 5–7 tweets</li>
            <li>Standard blogs (~1,500–2,500 words): 8–12 tweets</li>
            <li>Deep dives (3,000+ words): 12–15 tweets, or split into 2 threads</li>
          </ul>

          <h2>Step 4: Keep each tweet standalone</h2>
          <p>
            People often enter mid-thread. Each tweet should still make sense if
            quoted alone. Use concrete language. Cut throat-clearing phrases like
            “as I mentioned earlier” unless the previous tweet is essential.
          </p>

          <div className="my-10 rounded-2xl border border-brand/20 bg-brand-soft/70 p-6">
            <h2 className="!mt-0 text-xl font-semibold text-ink">
              Or skip the manual rewrite
            </h2>
            <p className="mt-2 text-sm leading-6 text-ink/75">
              Ready to create your first thread without the manual work? Use our
              free{" "}
              <Link href="/" className="font-semibold text-brand hover:underline">
                AI Thread Generator
              </Link>{" "}
              — paste your blog link and get a complete thread in seconds. It is
              the best free Twitter thread generator for converting long-form
              into X-native posts.
            </p>
            <div className="mt-5">
              <ThreadGenerator
                mode="thread"
                showUrlInput
                compact
                title="Try it on this page"
                subtitle="Paste a blog URL or article text and generate a draft thread instantly."
              />
            </div>
          </div>

          <h2>Step 5: Close with a CTA that matches the goal</h2>
          <p>
            Decide what “winning” looks like before you publish:
          </p>
          <ul>
            <li>Traffic: link back to the full blog in the final tweet or a reply.</li>
            <li>Follows: invite people who want more breakdowns like this.</li>
            <li>Conversation: ask a sharp question that is easy to answer.</li>
          </ul>
          <p>
            Deliver value in the thread itself. The link should feel like an
            upgrade, not a bait-and-switch.
          </p>

          <h2>Step 6: Edit like a human before you post</h2>
          <p>
            Whether you wrote the draft by hand or used an{" "}
            <Link
              href="/ai-thread-generator"
              className="font-semibold text-brand hover:underline"
            >
              AI thread generator
            </Link>
            , do a five-minute pass:
          </p>
          <ol>
            <li>Rewrite the hook last — once you know the payoff.</li>
            <li>Delete any tweet that does not prove the spine.</li>
            <li>Check character counts and line breaks on mobile.</li>
            <li>Replace vague claims with numbers, names, or examples.</li>
          </ol>

          <h2>Common mistakes when making a Twitter thread</h2>
          <ul>
            <li>Using the blog title as tweet one.</li>
            <li>Summarizing the whole post instead of arguing one claim.</li>
            <li>Stuffing hashtags and emojis until the voice disappears.</li>
            <li>Hiding the only useful insight behind a link.</li>
            <li>Posting 20 weak tweets when 9 sharp ones would perform better.</li>
          </ul>

          <h2>How to turn a blog post into a thread faster</h2>
          <p>
            If you publish regularly, manual rewriting becomes the bottleneck.
            The fastest workflow in {CURRENT_YEAR}:
          </p>
          <ol>
            <li>Publish the blog.</li>
            <li>
              Paste the URL into{" "}
              <Link href="/" className="font-semibold text-brand hover:underline">
                Blog2Thread
              </Link>
              .
            </li>
            <li>Generate 1–2 angles, edit the hook, and schedule.</li>
            <li>
              Optional: also create a single{" "}
              <Link
                href="/blog-to-tweet"
                className="font-semibold text-brand hover:underline"
              >
                blog to tweet
              </Link>{" "}
              teaser for the same article.
            </li>
          </ol>

          <h2>Quick checklist before you hit post</h2>
          <ul>
            <li>One clear spine</li>
            <li>Hook with a specific promise</li>
            <li>One idea per tweet</li>
            <li>Scannable formatting</li>
            <li>CTA aligned to traffic, follows, or replies</li>
            <li>Mobile preview looks clean</li>
          </ul>

          <h2>Final CTA</h2>
          <p>
            You now know how to make a thread on Twitter from scratch. If you
            want the same structure without spending an hour rewriting, open the{" "}
            <Link href="/" className="font-semibold text-brand hover:underline">
              free Twitter Thread Generator
            </Link>{" "}
            on Blog2Thread, paste your blog, and ship today.
          </p>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
