import { useState } from "react";
import { Sparkles } from "lucide-react";
import { TRAIT_INFO } from "../data/traits.js";

export default function AiInsight({ mode, traits, ranked }) {
  const [text, setText] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | error

  const run = async () => {
    setStatus("loading");
    try {
      const labeled = Object.fromEntries(Object.entries(traits).map(([k, v]) => [TRAIT_INFO[k].label, v]));
      const matches = ranked.slice(0, 5).map(({ name, match }) => ({ name, match }));
      const res = await fetch("/api/explain", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mode, traits: labeled, matches }),
      });
      if (!res.ok) throw new Error();
      const data = await res.json();
      setText(data.text);
      setStatus("idle");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="mt-6 rounded-2xl border-2 border-cobalt bg-white p-5">
      {text ? (
        <p className="max-w-prose whitespace-pre-line leading-relaxed">{text}</p>
      ) : (
        <button
          onClick={run}
          disabled={status === "loading"}
          className="flex items-center gap-2 rounded-full bg-cobalt px-5 py-2.5 font-semibold text-white disabled:opacity-50"
        >
          <Sparkles size={18} />
          {status === "loading" ? "Writing your explanation..." : "Get a personalized explanation"}
        </button>
      )}
      {status === "error" && <p className="mt-3 text-sm text-red-700">The AI explanation is unavailable right now. Your results above are still valid, so try again in a moment.</p>}
    </div>
  );
}
