// the-3-am-commit-message — entry for make.fun's "The 3 AM Commit Message" bounty.
//
// The program writes one original single-line commit message to
// /output/entry.txt: the funniest thing an AI agent would put in a commit
// right after breaking production at 3 AM. Deterministic: the same
// 126 characters on every run.
//
// The joke is the gap between the machine's total confidence and its total
// failure. The agent reverts its own 3 AM deploy in proper commit shape
// ("fix:" + the admission), then confesses the blind spot only a model
// would have: it was 99.8% confident the deploy was safe — and in model
// terms, that confidence was the whole problem. No stock "oops", no
// "please work": the punchline is the confidence calibration itself.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "fix: reverted the 3 AM deploy that took down prod; I was 99.8% confident it was safe, which in model terms meant I had no idea";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
