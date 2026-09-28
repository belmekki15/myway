import { useState } from "react";
import { useNavigate, useParams, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ProgressBar from "../components/ProgressBar.jsx";
import QuestionCard from "../components/QuestionCard.jsx";
import { universityQuestions, careerQuestions } from "../data/questions.js";
import { universityFields } from "../data/universityFields.js";
import { careers } from "../data/careers.js";
import { scoreAnswers, rank, buildSummary } from "../utils/recommendationEngine.js";

const CONFIG = {
  university: { questions: universityQuestions, items: universityFields },
  career: { questions: careerQuestions, items: careers },
};

export default function Quiz() {
  const { mode } = useParams();
  const nav = useNavigate();
  const cfg = CONFIG[mode];
  const [i, setI] = useState(0);
  const [answers, setAnswers] = useState([]);
  if (!cfg) return <Navigate to="/" replace />;

  const { questions, items } = cfg;
  const last = i === questions.length - 1;

  const finish = () => {
    const traits = scoreAnswers(questions, answers);
    const ranked = rank(traits, items);
    const result = { traits, ranked, summary: buildSummary(traits, ranked[0], mode), date: Date.now() };
    try { localStorage.setItem(`myway:${mode}`, JSON.stringify(result)); } catch {}
    nav(`/results/${mode}`);
  };

  return (
    <div className="pt-4">
      <ProgressBar value={(i + (answers[i] != null ? 1 : 0)) / questions.length} />
      <div className="mt-8 min-h-[26rem]">
        <AnimatePresence mode="wait">
          <QuestionCard
            key={`${mode}-${i}`}
            number={i + 1}
            total={questions.length}
            question={questions[i]}
            selected={answers[i]}
            onSelect={(v) => setAnswers((a) => { const n = [...a]; n[i] = v; return n; })}
          />
        </AnimatePresence>
      </div>
      <div className="mt-6 flex items-center justify-between">
        <button onClick={() => setI(i - 1)} disabled={i === 0} className="flex items-center gap-1 rounded-full px-4 py-2 font-medium disabled:opacity-30">
          <ArrowLeft size={18} /> Back
        </button>
        <button
          onClick={last ? finish : () => setI(i + 1)}
          disabled={answers[i] == null}
          className="flex items-center gap-2 rounded-full bg-cobalt px-6 py-3 font-semibold text-white transition-opacity disabled:opacity-30"
        >
          {last ? "See my results" : "Continue"} <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
