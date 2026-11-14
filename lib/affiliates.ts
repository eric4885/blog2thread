/** Partner / comparison links. Swap query params when real affiliate IDs land. */
export type AffiliateLink = {
  name: string;
  href: string;
  blurb: string;
  sponsored?: boolean;
};

export const AFFILIATE_LINKS: AffiliateLink[] = [
  {
    name: "Typefully",
    href: "https://typefully.com/?via=eric-hu",
    blurb: "Calm editor + schedule",
    sponsored: true
  },
  {
    name: "Hypefury",
    href: "https://hypefury.com/?via=eric-1ee99a",
    blurb: "Recycle evergreen + preview",
    sponsored: true
  },
  {
    name: "Tweet Hunter",
    href: "https://tweethunter.io/?via=eric-hu",
    blurb: "Viral library + AI",
    sponsored: true
  }
];

/** Non-partner tools mentioned in comparisons (no sponsored claim). */
export const COMPARISON_LINKS = {
  postory: "https://postory.app/",
  blogtweet: "https://blogtweet.com/",
  tugan: "https://tugan.ai/"
} as const;

export function getAffiliate(name: string): AffiliateLink | undefined {
  return AFFILIATE_LINKS.find((l) => l.name === name);
}

/** FTC-style disclosure — use on every surface that shows AFFILIATE_LINKS. */
export const AFFILIATE_DISCLOSURE =
  "These are affiliate links — if you buy through them we may earn a commission at no extra cost to you. They are our own accounts (Typefully, Hypefury, Tweet Hunter), so you are not funding a stranger.";

