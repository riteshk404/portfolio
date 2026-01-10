import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import Cv from "./pages/CVMaker";

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <Routes>

      {/* HOME */}
      <Route
        path="/"
        element={
          <div
            className={`min-h-screen transition-colors duration-300 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 ${
              isDark ? "dark" : ""
            }`}
          >
            <Navigation isDark={isDark} setIsDark={setIsDark} />
            <Hero />
            <About />
            <Projects />
            <TechStack />
            <Contact />
            <Footer />
          </div>
        }
      />

      {/* CV PAGE */}
      <Route path="/CVMaker" element={<Cv />} />

    </Routes>
  );
}

export default App;
