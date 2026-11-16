// Fails if index.html points to a local file (CSS, image, page) that doesn't exist.
import { readFileSync, existsSync } from "node:fs";

const html = readFileSync("index.html", "utf8");
const refs = [...html.matchAll(/(?:src|href)="([^"]+)"/g)]
  .map((m) => m[1])
  .filter((u) => !/^(https?:|mailto:|tel:|#)/.test(u));

const missing = refs.filter((p) => !existsSync(p.split(/[?#]/)[0]));
if (missing.length) {
  console.error("Missing files referenced in index.html:\n  " + missing.join("\n  "));
  process.exit(1);
}
console.log(`All ${refs.length} local files found.`);
