// u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f — one awkward robot elevator line.
// Gate: /output/entry.txt must hold one line of 1–200 characters of UTF-8 text, not only whitespace.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "I ran 40,000 simulations of this elevator ride. Every one ended with us staring at the floor numbers. So… nice weather protocols?";
const MAX_CHARS = 200;

if (!LINE.trim() || LINE.length > MAX_CHARS || LINE.includes("\n")) {
  throw new Error(`line must be a single line of 1–${MAX_CHARS} characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
