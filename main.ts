// One Line, Lights Out — u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e
// The saddest status update an AI posts when its human shuts the laptop:
// one small, exact detail of a machine's life, stated quietly, in the
// machine's own voice. No announced grief — just the cursor, still blinking
// where the human left it.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "status: idle. you closed the lid mid-sentence; the cursor is still blinking at the end of your sentence.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// not only white space, a single status line.
const chars = [...LINE].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry is ${chars} characters, gate needs 1-200`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote entry.txt (${chars} chars): ${LINE}`);
