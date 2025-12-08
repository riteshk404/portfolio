import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://formsubmit.co/ajax/riteshkarki505@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Contact from ${formData.name}`,
        })
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get in Touch</h2>
        <p className="section-subtitle">
          Let's discuss how we can work together to bring your ideas to life.
        </p>
        <div className="contact-content">
          <div className="contact-info">
            <h3 className="contact-info-title">Contact Information</h3>
            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <div>
                <div className="contact-label">Email</div>
                <a href="mailto:riteshkarki505@gmail.com" className="contact-value">
                  riteshkarki505@gmail.com
                </a>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">🐙</div>
              <div>
                <div className="contact-label">GitHub</div>
                <a href="https://github.com/riteshk404" target="_blank" rel="noopener noreferrer" className="contact-value">
                  github.com/riteshk404
                </a>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">💼</div>
              <div>
                <div className="contact-label">LinkedIn</div>
                <a href="https://linkedin.com/in/riteshkarki" target="_blank" rel="noopener noreferrer" className="contact-value">
                  linkedin.com/in/riteshkarki
                </a>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">🌐</div>
              <div>
                <div className="contact-label">Website</div>
                <a href="https://riteshk.com.np" target="_blank" rel="noopener noreferrer" className="contact-value">
                  riteshk.com.np
                </a>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                required
                rows="5"
                className="form-input form-textarea"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary btn-submit"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            {submitStatus === 'success' && (
              <div className="submit-message success">
                Message sent successfully! I'll get back to you soon.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="submit-message error">
                Failed to send message. Please try again or email directly.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
