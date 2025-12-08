import { Github, Linkedin, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-black text-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex gap-6">
            <a
              href="https://github.com/riteshk404"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/riteshkarki"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://riteshk.com.np"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              aria-label="Website"
            >
              <Globe className="w-5 h-5" />
            </a>
          </div>

          <div className="text-center text-slate-400 text-sm">
            <p>&copy; 2025 Ritesh. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
