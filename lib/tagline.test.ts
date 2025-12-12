import { describe, expect, it } from "vitest";
import { buildTagline } from "./tagline";

describe("buildTagline", () => {
  it("trims whitespace and concatenates the suffix", () => {
    expect(buildTagline(" Launch ")).toBe("Launch · test, learn, repeat");
  });

  it("throws for empty input", () => {
    expect(() => buildTagline("   ")).toThrowError("subject must not be empty");
  });
});
