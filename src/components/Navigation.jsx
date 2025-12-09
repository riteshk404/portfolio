import { Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navigation({ isDark, setIsDark }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white dark:bg-slate-900 shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">

          <button
            onClick={() => scrollToSection('hero')}
            className="text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            Ritesh
          </button>
           <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-medium">
              vercel succefully updated
            </span>

          <div className="flex items-center gap-4 sm:gap-8">

            <div className="hidden sm:flex gap-8">
              {['About', 'Projects', 'Tech Stack', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() =>
                    scrollToSection(item.toLowerCase().replace(' ', '-'))
                  }
                  className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                >
                  {item}
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-slate-300" />
              ) : (
                <Moon className="w-5 h-5 text-slate-700" />
              )}
            </button>

          </div>
        </div>
      </div>
    </nav>
  );
}
