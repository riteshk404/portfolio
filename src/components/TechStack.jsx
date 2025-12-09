export default function TechStack() {
  const techCategories = [
    {
      title: 'Frontend',
      techs: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vue.js'],
    },
    {
      title: 'Backend',
      techs: ['Node.js', 'Python', 'Django', 'Express', 'FastAPI'],
    },
    {
      title: 'Database',
      techs: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Supabase'],
    },
    {
      title: 'AI/ML',
      techs: ['TensorFlow', 'PyTorch', 'OpenCV', 'Scikit-learn', 'Keras'],
    },
    {
      title: 'Data Science',
      techs: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    },
    {
      title: 'Tools',
      techs: ['Git', 'Docker', 'AWS', 'Linux'],
    },
  ];

  return (
    <section id="tech-stack" className="py-16 sm:py-24 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Tech Stack
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-4"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A comprehensive collection of technologies I work with to build powerful solutions.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {techCategories.map((category) => (
            <div
              key={category.title}
              className="hover-card bg-white dark:bg-gray-800/50 rounded-xl shadow-lg p-8 backdrop-blur-sm dark:bg-slate-800 "
            >
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {category.techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 sm:px-4 py-2 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
