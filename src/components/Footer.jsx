function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-social">
          <a href="https://github.com/riteshk404" target="_blank" rel="noopener noreferrer" className="footer-link">
            GitHub
          </a>
          <a href="https://linkedin.com/in/riteshkarki" target="_blank" rel="noopener noreferrer" className="footer-link">
            LinkedIn
          </a>
          <a href="https://riteshk.com.np" target="_blank" rel="noopener noreferrer" className="footer-link">
            Website
          </a>
        </div>
        <p className="footer-copyright">
          © {new Date().getFullYear()} Ritesh. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
