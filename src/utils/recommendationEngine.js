import { TRAITS, TRAIT_INFO } from "../data/traits.js";

const parse = (s) => Object.fromEntries(s.split(",").map((x) => [x.trim()[0], +x.trim().slice(1)]));

// answers[i] = index of the chosen option for question i
export function scoreAnswers(questions, answers) {
  const raw = Object.fromEntries(TRAITS.map((t) => [t, 0]));
  const max = { ...raw };
  questions.forEach((q, i) => {
    const opts = q.options.map(([, w]) => parse(w));
    TRAITS.forEach((t) => {
      max[t] += Math.max(...opts.map((o) => o[t] || 0));
      raw[t] += (opts[answers[i]] || {})[t] || 0;
    });
  });
  return Object.fromEntries(TRAITS.map((t) => [t, max[t] ? Math.round((raw[t] / max[t]) * 100) : 0]));
}

// cosine similarity between the user's trait vector and each item's profile
export function rank(traits, items) {
  const u = TRAITS.map((t) => traits[t]);
  const nu = Math.hypot(...u) || 1;
  return items
    .map((it) => {
      const v = TRAITS.map((t) => it.profile[t] || 0);
      const dot = u.reduce((s, x, i) => s + x * v[i], 0);
      return { ...it, match: Math.round((dot / (nu * (Math.hypot(...v) || 1))) * 100) };
    })
    .sort((a, b) => b.match - a.match);
}

export function topTraits(traits, n = 3) {
  return Object.entries(traits).sort((a, b) => b[1] - a[1]).slice(0, n).map(([k]) => k);
}

export function buildSummary(traits, top, mode) {
  const [a, b, c] = topTraits(traits).map((k) => TRAIT_INFO[k]);
  const closing =
    mode === "university"
      ? "Treat this as a starting point: read first-year syllabi, visit open days and talk to current students before you commit."
      : "Treat this as a starting point: look at entry-level roles, build one small portfolio project and talk to people already doing the work.";
  return `Your strongest skills are ${a.skill}, ${b.skill} and ${c.skill}. You come across as ${a.vibe} and ${b.vibe}, and someone who ${c.drive}. ${top.name} comes out on top because ${top.why}. ${closing}`;
}
