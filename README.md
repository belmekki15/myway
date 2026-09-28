# MyWay

A one-question-per-screen quiz that points you somewhere:

- **University tab**: your interests → ranked fields of study.
- **Career tab** (for graduates): your working style → ranked careers, plus a paragraph on your skills and personality.

Each answer adds points to six traits (Logic, Technical, Creativity, People, Leadership, Research).
Every field/career has its own trait profile, and the engine ranks them by cosine similarity.
The top match is highlighted and the next best are listed too. Results are saved in `localStorage`. No backend.
Send `traits` + top matches to an LLM API for a personalized explanation option.

## Run

```bash
npm install
npm run dev
```

## Stack
React + Vite, Tailwind CSS v4, Framer Motion, Lucide, Recharts, React Router (HashRouter, so it works on GitHub Pages).

## Structure
```
src/
  components/  Navbar, ProgressBar, QuestionCard, ResultCard, SkillTag
  data/        traits, questions, universityFields, careers   <- edit these to tune results
  pages/       Home, Quiz (university + career), Results
  utils/       recommendationEngine.js
```

## Ideas for V2
- Country-specific university programs
- Shareable result link, i18n (Arabic / French / English)
