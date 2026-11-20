// Writes COMMUNITY.md for the public repo (V-1per/hud): the people who helped most, from the
// GitHub issues they opened. Run by .github/workflows/community.yml once a week (GitHub Actions),
//
//   node .github/scripts/community.mjs .
//
// Points (shown, but how to earn them is not explained on the page; Pedro, 2026-11-20):
//   any report 1; a bug fixed +3, an idea added +2 (closed as completed); a bug reported again while
//   still not fixed: +1 to each person who reported it (closed as duplicate with "Duplicate of #N");
//   spam (label "spam" or "invalid") 0. The owner's account is left out.

import { execFileSync } from "node:child_process";
import { writeFileSync } from "node:fs";
import { join } from "node:path";

const REPO = "V-1per/hud";
const OWNER = "V-1per";
const out = process.argv[2];
if (!out) {
  console.log("Usage: node scripts/community.mjs <V-1per/hud clone>");
  process.exit(1);
}

const issues = JSON.parse(execFileSync("gh", [
  "issue", "list", "-R", REPO, "--state", "all", "--limit", "1000",
  "--json", "number,author,labels,state,stateReason,createdAt,comments",
], { encoding: "utf8" }));
const byNumber = new Map(issues.map((i) => [i.number, i]));
const labelsOf = (i) => i.labels.map((l) => l.name);
const isSpam = (i) => labelsOf(i).some((l) => l === "spam" || l === "invalid");
const isBug = (i) => labelsOf(i).includes("bug");
const fixed = (i) => i.state === "CLOSED" && i.stateReason === "COMPLETED";
/** the issue a duplicate points to ("Duplicate of #N" in its comments), or null */
const originalOf = (i) => {
  for (const c of i.comments ?? []) {
    const m = /duplicate of #(\d+)/i.exec(c.body ?? "");
    if (m) return byNumber.get(Number(m[1])) ?? null;
  }
  return null;
};
const extra = new Map(); // login -> extra points for bugs reported again while not fixed
for (const i of issues) {
  const dup = i.stateReason === "DUPLICATE" || labelsOf(i).includes("duplicate");
  if (!dup || isSpam(i)) continue;
  const orig = originalOf(i);
  if (!orig || !isBug(orig) || fixed(orig)) continue;
  for (const who of new Set([i.author?.login, orig.author?.login])) {
    if (who && who !== OWNER) extra.set(who, (extra.get(who) ?? 0) + 1);
  }
}

const people = new Map();
for (const i of issues) {
  const who = i.author?.login;
  if (!who || who === OWNER || i.author?.is_bot) continue;
  const p = people.get(who) ?? { who, bugs: 0, ideas: 0, done: 0, points: 0, first: i.createdAt };
  if (isSpam(i)) { people.set(who, p); continue; } // spam: no points
  if (isBug(i)) p.bugs++;
  else p.ideas++; // "enhancement" or no label: an idea / suggestion
  p.points += 1;
  if (fixed(i)) { p.done++; p.points += isBug(i) ? 3 : 2; }
  if (i.createdAt < p.first) p.first = i.createdAt;
  people.set(who, p);
}
const rows = [...people.values()]
  .map((p) => ({ ...p, points: p.points + (extra.get(p.who) ?? 0) }))
  .filter((p) => p.bugs + p.ideas > 0)
  .sort((a, b) => b.points - a.points || a.first.localeCompare(b.first));

const medal = ["🥇", "🥈", "🥉"];
const table = rows.length
  ? rows.map((p, k) => `| ${medal[k] ?? k + 1} | <img src="https://github.com/${p.who}.png?size=40" width="20" height="20" alt=""> [${p.who}](https://github.com/${p.who}) | ${p.bugs} | ${p.ideas} | ${p.done} | **${p.points}** |`).join("\n")
  : "| | Nobody yet: be the first! | | | | |";

const md = `# Drive HUD · Community

The people who helped make Drive HUD better, by reporting problems and suggesting ideas. Thank you! 🙌

| | Who | Problems reported | Ideas | Led to a change | Points |
|---|---|---|---|---|---|
${table}

Want to be here? [Report a problem or suggest an improvement](https://github.com/${REPO}/issues/new/choose).

*Updated every week.*
`;
writeFileSync(join(out, "COMMUNITY.md"), md);
console.log(`COMMUNITY.md: ${rows.length} people`);
