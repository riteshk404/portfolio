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
    <section id="about" className="py-16 sm:py-24  ">
      <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>

        <div className='grid md:grid-cols-2 gap-16 ' >
        <div className="grid lg:grid-cols gap-8 lg:gap-12 items-start mb-12 sm:mb-16">
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

          <div className="flex gap-8">
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

        <div className="grid grid-cols-2 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="hover-card p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md backdrop-blur-sm"
            >
              <div className={`bg-gradient-to-br from-blue-500/10 to-blue-500/20 p-3 rounded-lg w-fit mb-4 ${skill.color}`}>
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
      </div>
    </section>
  );
}
