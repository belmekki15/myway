import { Link } from "react-router-dom";
import { GraduationCap, Briefcase } from "lucide-react";

const paths = [
  { to: "/quiz/university", icon: GraduationCap, title: "I'm choosing a field of study", text: "Ten questions, then a ranked list of university fields with a top pick." },
  { to: "/quiz/career", icon: Briefcase, title: "I've graduated and need a job direction", text: "Ten questions, then career matches with a profile of your skills and personality." },
];

export default function Home() {
  return (
    <div className="pt-10">
      <h1 className="font-display text-5xl font-extrabold leading-[1.05] sm:text-6xl">Find the way that fits you.</h1>
      <p className="mt-4 max-w-xl text-lg text-ink/70">Answer a few questions about what you enjoy. MyWay ranks the fields or jobs that match you best.</p>
      <div className="mt-10 grid gap-4">
        {paths.map(({ to, icon: Icon, title, text }) => (
          <Link key={to} to={to} className="group flex items-start gap-4 rounded-2xl border-2 border-ink bg-white p-6 transition-colors hover:bg-marker">
            <Icon className="mt-1 shrink-0" />
            <div>
              <h2 className="font-display text-xl font-bold">{title}</h2>
              <p className="mt-1 text-ink/70">{text}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
