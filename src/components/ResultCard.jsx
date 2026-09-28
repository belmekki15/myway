import SkillTag from "./SkillTag.jsx";

export function TopResult({ item }) {
  return (
    <div className="rounded-2xl bg-ink p-7 text-white">
      <p className="text-sm text-white/60">Best match</p>
      <div className="mt-1 flex items-baseline justify-between gap-4">
        <h2 className="font-display text-3xl font-extrabold sm:text-4xl">{item.name}</h2>
        <span className="font-display text-3xl font-extrabold text-marker">{item.match}%</span>
      </div>
      <p className="mt-2 text-white/80">{item.blurb}</p>
      <div className="mt-4 flex flex-wrap gap-2">{item.next.map((n) => <SkillTag key={n}>{n}</SkillTag>)}</div>
    </div>
  );
}

export function OtherResult({ item }) {
  return (
    <li className="flex items-center justify-between gap-4 rounded-xl border-2 border-mist bg-white px-4 py-3">
      <div>
        <p className="font-semibold">{item.name}</p>
        <p className="text-sm text-ink/60">{item.blurb}</p>
      </div>
      <span className="font-display text-lg font-bold text-cobalt">{item.match}%</span>
    </li>
  );
}
