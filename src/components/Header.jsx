function Header({ darkMode, toggleDarkMode }) {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">Ritesh</div>
        <nav className="nav">
          <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
          <button onClick={() => scrollToSection('projects')} className="nav-link">Projects</button>
          <button onClick={() => scrollToSection('tech-stack')} className="nav-link">Tech Stack</button>
          <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
          <button onClick={toggleDarkMode} className="theme-toggle" aria-label="Toggle dark mode">
            {darkMode ? '☀️' : '🌙'}
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
