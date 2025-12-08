function About() {
  const expertiseAreas = [
    {
      icon: '🎯',
      title: 'AI & ML',
      description: 'Expert in machine learning, deep learning, and AI applications',
      color: '#3b82f6'
    },
    {
      icon: '💻',
      title: 'Full Stack',
      description: 'End-to-end development with modern technologies',
      color: '#10b981'
    },
    {
      icon: '📊',
      title: 'Data Science',
      description: 'Data analysis and visualization expertise',
      color: '#8b5cf6'
    },
    {
      icon: '🌐',
      title: 'Web Dev',
      description: 'Creating responsive and modern web applications',
      color: '#ef4444'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-paragraph">
              I'm a versatile developer with a passion for creating innovative solutions across various domains. My journey in technology has led me to explore and master multiple programming languages and frameworks, allowing me to tackle complex challenges with confidence and creativity.
            </p>
            <p className="about-paragraph">
              With expertise in AI, ML, and computer vision, I love pushing the boundaries of what's possible with technology. My experience spans from building robust full-stack applications to implementing cutting-edge AI solutions that drive real business value.
            </p>
            <div className="about-stats">
              <div className="about-stat">
                <div className="about-stat-number">100+</div>
                <div className="about-stat-label">Contributions</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-number">15+</div>
                <div className="about-stat-label">Technologies</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-number">3+</div>
                <div className="about-stat-label">Years</div>
              </div>
            </div>
          </div>
          <div className="expertise-grid">
            {expertiseAreas.map((area, index) => (
              <div key={index} className="expertise-card" style={{ '--card-color': area.color }}>
                <div className="expertise-icon">{area.icon}</div>
                <h3 className="expertise-title">{area.title}</h3>
                <p className="expertise-description">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
