import { NavLink, Link } from "react-router-dom";

const tab = ({ isActive }) =>
  `px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${isActive ? "bg-ink text-white" : "hover:bg-mist"}`;

export default function Navbar() {
  return (
    <header className="mx-auto flex max-w-3xl items-center justify-between px-5 py-5">
      <Link to="/" className="font-display text-xl font-extrabold tracking-tight">
        my<span className="text-cobalt">way</span>
      </Link>
      <nav className="flex gap-1">
        <NavLink to="/quiz/university" className={tab}>University</NavLink>
        <NavLink to="/quiz/career" className={tab}>Career</NavLink>
      </nav>
    </header>
  );
}
