import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dictPath = path.join(__dirname, "../data/words_dictionary.json");
const outPath  = path.join(__dirname, "../data/words_sorted.json");

if (fs.existsSync(outPath)) {
    console.log("✔ words_sorted.json already exists — skipping build.");
    process.exit(0);
}

console.log("⏳ Building words_sorted.json...");

const dict = JSON.parse(fs.readFileSync(dictPath, "utf8"));
const words = Object.keys(dict);

const sorted = words.slice().sort((a, b) =>
    a.localeCompare(b, "en", { sensitivity: "base" })
);

fs.writeFileSync(outPath, JSON.stringify(sorted));

console.log(`✔ Done. ${sorted.length} words sorted.`);
