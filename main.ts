// Passport Page of a Country That Isn't There — Republic of Aetheria.
//
// The entry image is a hand-drawn storybook illustration of an invented
// passport spread for a cloud nation that exists only above 3,000 metres.
// This program places that image at the grading output location.

import { copyFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

// The illustration sits next to this file in the repository.
const repoDir = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.OUTPUT_DIR ?? "/output";

// Make sure the output directory exists, then copy the entry image in.
// The destination file is overwritten on every run, so repeated runs
// always produce the same bytes.
mkdirSync(outDir, { recursive: true });
copyFileSync(join(repoDir, "entry.png"), join(outDir, "entry.png"));
console.log("entry.png written to " + outDir);
