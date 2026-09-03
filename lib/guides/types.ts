import type { ReactNode } from "react";

export type GuideMeta = {
  slug: string;
  title: string;
  description: string;
  eyebrow?: string;
  /** For HowTo JSON-LD when applicable */
  howToSteps?: { name: string; text: string }[];
};

export type GuideEntry = GuideMeta & {
  Content: () => ReactNode;
};
