function TechStack() {
  const techCategories = [
    {
      title: 'Frontend',
      technologies: ['React', 'JavaScript', 'HTML/CSS', 'Tailwind', 'Vue.js']
    },
    {
      title: 'Backend',
      technologies: ['Node.js', 'Python', 'Express', 'Django', 'Flask']
    },
    {
      title: 'Database',
      technologies: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Firebase']
    },
    {
      title: 'AI/ML',
      technologies: ['TensorFlow', 'PyTorch', 'OpenCV', 'Scikit-learn', 'Keras']
    },
    {
      title: 'Data Science',
      technologies: ['Pandas', 'NumPy', 'Seaborn', 'Matplotlib']
    },
    {
      title: 'Tools',
      technologies: ['Git', 'Docker', 'AWS', 'Linux']
    }
  ];

  return (
    <section id="tech-stack" className="tech-stack">
      <div className="container">
        <h2 className="section-title">Tech Stack</h2>
        <p className="section-subtitle">
          A comprehensive collection of technologies I work with to build powerful solutions.
        </p>
        <div className="tech-grid">
          {techCategories.map((category, index) => (
            <div key={index} className="tech-category">
              <h3 className="tech-category-title">{category.title}</h3>
              <div className="tech-items">
                {category.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-item">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
