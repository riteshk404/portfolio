function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Ritesh</span>
          </h1>
          <p className="hero-description">
            A passionate Full Stack Developer & AI Enthusiast crafting innovative solutions through code. Specializing in creating exceptional digital experiences that combine creativity with technical excellence.
          </p>
          <div className="hero-buttons">
            <button onClick={scrollToContact} className="btn btn-primary">Get in Touch</button>
            <button onClick={scrollToProjects} className="btn btn-secondary">View Projects</button>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">3+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat">
              <div className="stat-number">50+</div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat">
              <div className="stat-number">7+</div>
              <div className="stat-label">Clients</div>
            </div>
          </div>
        </div>
        <div className="hero-image-container">
          <div className="profile-wrapper">
            <div className="profile-image-animate">
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Ritesh Karki"
                className="profile-image"
              />
            </div>
            <div className="decorative-blob blob-1"></div>
            <div className="decorative-blob blob-2"></div>
            <div className="floating-icon icon-1">{'</>'}</div>
            <div className="floating-icon icon-2">📧</div>
            <div className="floating-icon icon-3">▶</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
