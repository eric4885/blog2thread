export type DraftMode = "thread" | "tweet" | "topic";

export type ThreadDraft = {
  mode: DraftMode;
  /** Latest generated text */
  current: string;
  /** One version back (for Restore previous) */
  previous?: string;
  /** Source text used for the last generation (for Regenerate) */
  source?: string;
  updatedAt: string;
};

const PREFIX = "blog2thread:draft:";

function keyFor(mode: DraftMode): string {
  return `${PREFIX}${mode}`;
}

export function readDraft(mode: DraftMode): ThreadDraft | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(keyFor(mode));
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ThreadDraft;
    if (!parsed?.current || typeof parsed.current !== "string") return null;
    return parsed;
  } catch {
    return null;
  }
}

export function writeDraft(draft: ThreadDraft): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(keyFor(draft.mode), JSON.stringify(draft));
  } catch {
    // Quota / private mode — ignore
  }
}

/** Push a new result: current → previous, keep source for regenerate. */
export function pushGeneratedDraft(
  mode: DraftMode,
  nextThread: string,
  source: string,
  existingCurrent?: string
): ThreadDraft {
  const stored = readDraft(mode);
  const toArchive =
    existingCurrent && existingCurrent !== nextThread
      ? existingCurrent
      : undefined;
  const draft: ThreadDraft = {
    mode,
    current: nextThread,
    previous: toArchive || (stored?.previous !== nextThread ? stored?.previous : undefined),
    source,
    updatedAt: new Date().toISOString()
  };
  writeDraft(draft);
  return draft;
}
