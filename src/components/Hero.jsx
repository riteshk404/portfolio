import { Code2, Mail, Terminal } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 flex items-center pt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white">
                Hi, I'm <span className="text-blue-600 dark:text-blue-400">Ritesh</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                A passionate Full Stack Developer & AI Enthusiast crafting innovative solutions
                through code. Specializing in creating exceptional digital experiences that combine
                creativity with technical excellence.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Get in Touch
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 font-semibold rounded-lg border-2 border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-slate-700 transition-all duration-300"
              >
                View Projects
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-8">
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-400">3+</div>
                <div className="text-sm sm:text-base text-slate-600 dark:text-slate-400">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-400">50+</div>
                <div className="text-sm sm:text-base text-slate-600 dark:text-slate-400">Projects</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-400">7+</div>
                <div className="text-sm sm:text-base text-slate-600 dark:text-slate-400">Clients</div>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center shadow-2xl">
                <div className="text-8xl sm:text-9xl">👨‍💻</div>
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 bg-blue-600 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <Code2 className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 sm:w-20 sm:h-20 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <Terminal className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <div className="absolute top-1/2 -right-8 w-16 h-16 sm:w-20 sm:h-20 bg-purple-500 rounded-full flex items-center justify-center shadow-lg">
                <Mail className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
