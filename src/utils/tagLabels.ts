/** Custom display labels for tag slugs.
 *  If a tag isn't listed here, it gets auto-title-cased. */
const TAG_LABELS: Record<string, string> = {
  ai: "AI",
  llm: "LLM",
  rag: "RAG",
  ios: "iOS",
  chatgpt: "ChatGPT",
  "next-js": "Next.js",
  "edge-ai": "Edge AI",
  "how-to": "How-to",
  "on-device-ai": "On-device AI",
  "agentic-coding": "Agentic Coding",
  "thinking-loud": "Thinking Out Loud",
};

/** Convert a slug like "personal-growth" to "Personal Growth" */
function titleCase(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

/** Get the display label for a tag slug. */
export function getTagLabel(slug: string): string {
  return TAG_LABELS[slug] ?? titleCase(slug);
}
