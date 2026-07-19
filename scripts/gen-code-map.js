#!/usr/bin/env node
// Generates CODE_MAP.md — a line-numbered index of lightwork.html.
// Run after any edit session:  npm run map
// Scans for: JS section banners, CSS section comments, function
// declarations, data tables (UPPERCASE consts), and element ids on
// structural containers.

const fs = require('fs');
const path = require('path');

const SRC = path.join(__dirname, '..', 'lightwork.html');
const OUT = path.join(__dirname, '..', 'CODE_MAP.md');

const lines = fs.readFileSync(SRC, 'utf8').split('\n');

const sections = [];   // { line, title }
const cssBlocks = [];  // { line, title }
const functions = [];  // { line, name }
const tables = [];     // { line, name }
const anchors = [];    // { line, id }

const reBanner = /\/\/\s*={5,}\s*(.+?)\s*={5,}/;
const reCssBanner = /\/\*\s*[─—-]{0,2}\s*([A-Z][A-Za-z0-9 '&+./·—-]{4,60}?)\s*[─—-]{0,2}\s*\*\//;
const reFunc = /^\s*(?:async\s+)?function\s+([A-Za-z_$][\w$]*)/;
const reTable = /^\s*const\s+([A-Z][A-Z0-9_]{2,})\s*=/;
const reId = /<(?:div|section|main|nav|header|footer)\b[^>]*\bid="([^"]+)"/;

let inStyle = false;
lines.forEach((raw, i) => {
  const n = i + 1;
  if (/<style/.test(raw)) inStyle = true;
  if (/<\/style>/.test(raw)) inStyle = false;

  let m;
  if ((m = raw.match(reBanner)) && /[A-Za-z]/.test(m[1])) sections.push({ line: n, title: m[1] });
  else if (inStyle && (m = raw.match(reCssBanner))) cssBlocks.push({ line: n, title: m[1] });
  if ((m = raw.match(reFunc))) functions.push({ line: n, name: m[1] });
  if ((m = raw.match(reTable))) tables.push({ line: n, name: m[1] });
  if ((m = raw.match(reId))) anchors.push({ line: n, id: m[1] });
});

const title = (lines.find(l => l.includes('<title>')) || '').replace(/.*<title>|<\/title>.*/g, '');

let md = `# Lightwork Code Map\n\n`;
md += `**Source:** \`lightwork.html\` · **Version:** ${title} · **Lines:** ${lines.length}\n\n`;
md += `> Regenerate after edits with \`npm run map\` — line numbers drift.\n\n`;

md += `## Major sections (JS banners)\n\n| Line | Section |\n|---|---|\n`;
sections.forEach(s => (md += `| ${s.line} | ${s.title} |\n`));

md += `\n## Data tables (UPPERCASE consts)\n\n| Line | Table |\n|---|---|\n`;
tables.forEach(t => (md += `| ${t.line} | \`${t.name}\` |\n`));

md += `\n## CSS blocks (style-section comments)\n\n| Line | Block |\n|---|---|\n`;
cssBlocks.forEach(c => (md += `| ${c.line} | ${c.title} |\n`));

md += `\n## Structural element ids\n\n| Line | id |\n|---|---|\n`;
anchors.forEach(a => (md += `| ${a.line} | \`#${a.id}\` |\n`));

md += `\n## Functions (${functions.length})\n\n| Line | Function |\n|---|---|\n`;
functions.forEach(f => (md += `| ${f.line} | \`${f.name}()\` |\n`));

fs.writeFileSync(OUT, md);
console.log(`CODE_MAP.md written: ${sections.length} sections, ${tables.length} tables, ${cssBlocks.length} css blocks, ${anchors.length} ids, ${functions.length} functions`);
