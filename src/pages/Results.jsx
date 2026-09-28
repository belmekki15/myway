import { Link, useParams, Navigate } from "react-router-dom";
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer } from "recharts";
import { RotateCcw } from "lucide-react";
import { TopResult, OtherResult } from "../components/ResultCard.jsx";
import SkillTag from "../components/SkillTag.jsx";
import AiInsight from "../components/AiInsight.jsx";
import { TRAIT_INFO } from "../data/traits.js";
import { topTraits } from "../utils/recommendationEngine.js";

export default function Results() {
  const { mode } = useParams();
  let data = null;
  try { data = JSON.parse(localStorage.getItem(`myway:${mode}`)); } catch {}
  if (!data) return <Navigate to={`/quiz/${mode}`} replace />;

  const { traits, ranked, summary } = data;
  const chart = Object.entries(TRAIT_INFO).map(([k, v]) => ({ trait: v.label, value: traits[k] }));

  return (
    <div className="grid gap-8 pt-4">
      <TopResult item={ranked[0]} />

      <section>
        <h2 className="font-display text-2xl font-bold">{mode === "career" ? "Your skills and personality" : "Your profile"}</h2>
        <div className="mt-3 flex flex-wrap gap-2">{topTraits(traits).map((k) => <SkillTag key={k}>{TRAIT_INFO[k].label}</SkillTag>)}</div>
        <p className="mt-4 max-w-prose leading-relaxed text-ink/80">{summary}</p>
        <AiInsight mode={mode} traits={traits} ranked={ranked} />
        <div className="mt-2 h-64">
          <ResponsiveContainer>
            <RadarChart data={chart}>
              <PolarGrid stroke="#d5dbe7" />
              <PolarAngleAxis dataKey="trait" tick={{ fill: "#101828", fontSize: 13 }} />
              <Radar dataKey="value" stroke="#2f4bff" fill="#2f4bff" fillOpacity={0.3} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </section>

      <section>
        <h2 className="font-display text-2xl font-bold">Also worth exploring</h2>
        <ul className="mt-3 grid gap-2">{ranked.slice(1, 5).map((r) => <OtherResult key={r.id} item={r} />)}</ul>
      </section>

      <Link to={`/quiz/${mode}`} className="flex w-fit items-center gap-2 rounded-full border-2 border-ink px-5 py-2.5 font-semibold hover:bg-marker">
        <RotateCcw size={18} /> Retake the quiz
      </Link>
    </div>
  );
}
