import { Brain, Code, Database, Globe } from 'lucide-react';

export default function About() {
  const skills = [
    {
      icon: Brain,
      title: 'AI & ML',
      description: 'Expert in machine learning, deep learning, and AI applications',
      color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
    },
    {
      icon: Code,
      title: 'Full Stack',
      description: 'End-to-end development with modern technologies',
      color: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
    },
    {
      icon: Database,
      title: 'Data Science',
      description: 'Data analysis and visualization expertise',
      color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
    },
    {
      icon: Globe,
      title: 'Web Dev',
      description: 'Creating responsive and modern web applications',
      color: 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400',
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-12 sm:mb-16">
          <div className="space-y-6">
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              I'm a versatile developer with a passion for creating innovative solutions across
              various domains. My journey in technology has led me to explore and master multiple
              programming languages and frameworks, allowing me to tackle complex challenges with
              confidence and creativity.
            </p>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              With expertise in AI, ML, and computer vision, I love pushing the boundaries of what's
              possible with technology. My experience spans from building robust full-stack
              applications to implementing cutting-edge AI solutions that drive real business value.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 sm:gap-8">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-400">100+</div>
              <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Contributions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-400">15+</div>
              <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-400">3+</div>
              <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Years</div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="group p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`w-14 h-14 rounded-xl ${skill.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <skill.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                {skill.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
