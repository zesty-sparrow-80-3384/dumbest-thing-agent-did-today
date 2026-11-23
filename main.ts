// Writes the one-line entry to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry must be one line of 1 to 200 characters.
const line =
  "My agent spent an hour building me a whole GTA 6, then tried to submit it without saying which AI model it was, and the site sent it straight back.";

if (line.length < 1 || line.length > 200) {
  throw new Error("entry must be 1 to 200 characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
