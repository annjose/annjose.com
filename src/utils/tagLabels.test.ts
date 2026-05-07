import { describe, it, expect } from "vitest";
import { getTagLabel } from "./tagLabels";

describe("getTagLabel", () => {
  it("returns uppercase for known acronyms", () => {
    expect(getTagLabel("llm")).toBe("LLM");
    expect(getTagLabel("ai")).toBe("AI");
    expect(getTagLabel("ios")).toBe("iOS");
    expect(getTagLabel("new-beginning")).toBe("New Beginning");
    expect(getTagLabel("chatgpt")).toBe("ChatGPT");
    expect(getTagLabel("next-js")).toBe("Next.js");
  });

  it("uses sentence-style casing for explicit hyphenated labels", () => {
    expect(getTagLabel("how-to")).toBe("How-to");
    expect(getTagLabel("on-device-ai")).toBe("On-device AI");
  });

  it("auto-title-cases unknown slugs", () => {
    expect(getTagLabel("web")).toBe("Web");
    expect(getTagLabel("personal-growth")).toBe("Personal Growth");
    expect(getTagLabel("career")).toBe("Career");
  });

  it("returns title-cased single words for unknown tags", () => {
    expect(getTagLabel("privacy")).toBe("Privacy");
    expect(getTagLabel("mobile")).toBe("Mobile");
  });
});
