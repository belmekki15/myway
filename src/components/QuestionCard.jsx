import { motion } from "framer-motion";

export default function QuestionCard({ number, total, question, selected, onSelect }) {
  const pad = (n) => String(n).padStart(2, "0");
  return (
    <motion.section
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -24 }}
      transition={{ duration: 0.22 }}
    >
      <p className="text-sm font-medium text-ink/60">{pad(number)} / {pad(total)}</p>
      <h1 className="mt-2 font-display text-3xl font-bold leading-tight sm:text-4xl">{question.q}</h1>
      <div role="radiogroup" aria-label={question.q} className="mt-8 grid gap-2.5">
        {question.options.map(([label], i) => {
          const on = selected === i;
          return (
            <button
              key={label}
              role="radio"
              aria-checked={on}
              onClick={() => onSelect(i)}
              className={`flex items-center gap-3 rounded-xl border-2 px-4 py-3.5 text-left transition-colors ${
                on ? "border-cobalt bg-cobalt text-white" : "border-mist bg-white hover:border-ink/40"
              }`}
            >
              <span className={`grid h-5 w-5 shrink-0 place-items-center rounded-full border-2 ${on ? "border-white" : "border-ink/30"}`}>
                {on && <span className="h-2.5 w-2.5 rounded-full bg-marker" />}
              </span>
              {label}
            </button>
          );
        })}
      </div>
    </motion.section>
  );
}
