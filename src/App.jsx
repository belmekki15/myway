import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Quiz from "./pages/Quiz.jsx";
import Results from "./pages/Results.jsx";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 pb-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz/:mode" element={<Quiz />} />
          <Route path="/results/:mode" element={<Results />} />
        </Routes>
      </main>
    </div>
  );
}
