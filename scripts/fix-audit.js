/**
 * BananaTone Audit Fix Script
 * Fixes: og:url mismatch, learn/ canonical, broken links,
 *        noindex on components, GA→analytics.js, privacy update, sitemap
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
let totalChanges = 0;

function log(tag, file) {
  console.log(`  ✅ [${tag}] ${file}`);
  totalChanges++;
}

function read(rel) {
  return fs.readFileSync(path.join(ROOT, rel), "utf8");
}
function write(rel, data) {
  fs.writeFileSync(path.join(ROOT, rel), data, "utf8");
}

function getAllHtml(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory() && !["node_modules", ".git", ".gemini", "scripts", ".antigravity"].includes(e.name)) {
      getAllHtml(full, out);
    } else if (e.isFile() && e.name.endsWith(".html") && !e.name.startsWith("preview")) {
      out.push(path.relative(ROOT, full).replace(/\\/g, "/"));
    }
  }
  return out;
}

// ══════════════════════════════════════════════
// 1. Replace inline GA script → analytics.js
// ══════════════════════════════════════════════
console.log("\n1️⃣  Replacing inline GA script with analytics.js...");

const gaRegex =
  /[ \t]*<!-- Google tag \(gtag\.js\) -->[\s\S]*?gtag\('config',\s*'G-3DX9NB3JME'\);\s*<\/script>/g;
const gaReplacement = '  <script src="/assets/analytics.js" defer></script>';

let gaCount = 0;
for (const file of getAllHtml(ROOT)) {
  let c = read(file);
  gaRegex.lastIndex = 0;
  if (gaRegex.test(c)) {
    gaRegex.lastIndex = 0;
    c = c.replace(gaRegex, gaReplacement);
    write(file, c);
    log("GA", file);
    gaCount++;
  }
}
console.log(`   → ${gaCount} files updated\n`);

// ══════════════════════════════════════════════
// 2. Fix og:url mismatch (remove .html)
// ══════════════════════════════════════════════
console.log("2️⃣  Fixing og:url mismatches...");

const ogFixes = [
  "free-interval-ear-training",
  "major-vs-minor-ear-training",
  "relative-pitch-training",
  "20-minute-ear-training-routine",
];

for (const name of ogFixes) {
  const file = name + ".html";
  let c = read(file);
  const bad = `content="https://bananatone.com/${name}.html"`;
  const good = `content="https://bananatone.com/${name}"`;
  if (c.includes(bad)) {
    c = c.replace(bad, good);
    write(file, c);
    log("OG:URL", file);
  }
}

// ══════════════════════════════════════════════
// 3. Fix learn/ canonical URLs + broken links
// ══════════════════════════════════════════════
console.log("\n3️⃣  Fixing learn/ canonical URLs and broken links...");

const learnPages = [
  "learn/interval-ear-training.html",
  "learn/chord-ear-training.html",
  "learn/note-ear-training.html",
  "learn/scale-ear-training.html",
  "learn/how-to-practice-ear-training.html",
];

for (const file of learnPages) {
  let c = read(file);
  const base = path.basename(file, ".html");

  // canonical: remove .html
  c = c.replace(
    `href="https://bananatone.com/learn/${base}.html"`,
    `href="https://bananatone.com/learn/${base}"`
  );

  // nav + footer links
  c = c.replace(/href="\/about\.html"/g, 'href="/about"');
  c = c.replace(/href="\/privacy\.html"/g, 'href="/privacy"');
  c = c.replace(/href="\/terms\.html"/g, 'href="/terms"');

  write(file, c);
  log("LEARN", file);
}

// learn/index.html — only footer links (canonical is already fine)
{
  let c = read("learn/index.html");
  c = c.replace(/href="\/about\.html"/g, 'href="/about"');
  c = c.replace(/href="\/privacy\.html"/g, 'href="/privacy"');
  c = c.replace(/href="\/terms\.html"/g, 'href="/terms"');
  write("learn/index.html", c);
  log("LEARN", "learn/index.html");
}

// ══════════════════════════════════════════════
// 4. Add noindex to component files
// ══════════════════════════════════════════════
console.log("\n4️⃣  Adding noindex to component files...");

const noindexFiles = [
  "session_done_component.html",
  "session_done_weak.html",
  "interstitial_component.html",
];

for (const file of noindexFiles) {
  let c = read(file);
  if (!c.includes("noindex")) {
    const le = c.includes("\r\n") ? "\r\n" : "\n";
    c = c.replace(/<head>/i, `<head>${le}  <meta name="robots" content="noindex, nofollow" />`);
    write(file, c);
    log("NOINDEX", file);
  } else {
    console.log(`   ⏭  [NOINDEX] ${file} — already has noindex`);
  }
}

// ══════════════════════════════════════════════
// 5. Update privacy.html — mention Google Analytics
// ══════════════════════════════════════════════
console.log("\n5️⃣  Updating privacy.html...");
{
  let c = read("privacy.html");
  if (!c.includes("Google Analytics")) {
    const gaItem =
      '<li><strong>Google Analytics:</strong> We use Google Analytics to understand how visitors use our website, including page views, session duration, and traffic sources. Google Analytics uses cookies to collect anonymous usage data. No personally identifiable information is collected. You can opt out by using the <a href="https://tools.google.com/dlpage/gaoptout">Google Analytics Opt-out Browser Add-on</a>.</li>';
    const marker = "<li><strong>Formspree:</strong>";
    if (c.includes(marker)) {
      const le = c.includes("\r\n") ? "\r\n" : "\n";
      c = c.replace(marker, gaItem + le + "        " + marker);
      write("privacy.html", c);
      log("PRIVACY", "privacy.html — added Google Analytics mention");
    }
  } else {
    console.log("   ⏭  privacy.html already mentions Google Analytics");
  }
}

// ══════════════════════════════════════════════
// 6. Update sitemap.xml — add learn/ sub-pages
// ══════════════════════════════════════════════
console.log("\n6️⃣  Updating sitemap.xml...");
{
  let c = read("sitemap.xml");
  const le = c.includes("\r\n") ? "\r\n" : "\n";

  const newPages = [
    "learn/interval-ear-training",
    "learn/chord-ear-training",
    "learn/note-ear-training",
    "learn/scale-ear-training",
    "learn/how-to-practice-ear-training",
  ];

  let added = 0;
  let entries = "";
  for (const pg of newPages) {
    if (!c.includes(pg)) {
      entries +=
        `  <url>${le}` +
        `    <loc>https://bananatone.com/${pg}</loc>${le}` +
        `    <lastmod>2026-06-26</lastmod>${le}` +
        `    <changefreq>monthly</changefreq>${le}` +
        `    <priority>0.7</priority>${le}` +
        `  </url>${le}`;
      added++;
    }
  }

  if (entries) {
    c = c.replace("</urlset>", entries + "</urlset>");
    write("sitemap.xml", c);
    log("SITEMAP", `Added ${added} learn/ pages`);
  } else {
    console.log("   ⏭  sitemap.xml already has learn/ pages");
  }
}

// ══════════════════════════════════════════════
// Summary
// ══════════════════════════════════════════════
console.log("\n" + "═".repeat(48));
console.log(`✅ All done! ${totalChanges} changes applied.`);
console.log("═".repeat(48) + "\n");
