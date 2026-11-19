// Writes COMMUNITY.md for the public repo (V-1per/hud): the people who helped most, from the
// GitHub issues they opened. Run by .github/workflows/community.yml once a week (GitHub Actions),
//
//   node .github/scripts/community.mjs .
//
// Points (shown, but how to earn them is not explained on the page): a problem report (label "bug") 3, an idea 2, +1 when the issue led
// to a change (closed as completed). The owner's account is left out.

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
  "--json", "number,author,labels,state,stateReason,createdAt",
], { encoding: "utf8" }));

const people = new Map();
for (const i of issues) {
  const who = i.author?.login;
  if (!who || who === OWNER || i.author?.is_bot) continue;
  const p = people.get(who) ?? { who, bugs: 0, ideas: 0, done: 0, first: i.createdAt };
  const labels = i.labels.map((l) => l.name);
  if (labels.includes("bug")) p.bugs++;
  else p.ideas++; // "enhancement" or no label: an idea / suggestion
  if (i.state === "CLOSED" && i.stateReason === "COMPLETED") p.done++;
  if (i.createdAt < p.first) p.first = i.createdAt;
  people.set(who, p);
}
const rows = [...people.values()]
  .map((p) => ({ ...p, points: p.bugs * 3 + p.ideas * 2 + p.done }))
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
