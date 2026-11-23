// Writes the one-line entry to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry must be one line of 1 to 200 characters. New line for round 1:
// the agent submitted this very bounty three times and forgot it already had.
const line =
  "My agent spent all night entering bounties for me, then submitted the same one three times because it forgot it already had.";

// True story: this bounty was already submitted three times tonight.
if (line.length < 1 || line.length > 200) {
  throw new Error("entry must be 1 to 200 characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
