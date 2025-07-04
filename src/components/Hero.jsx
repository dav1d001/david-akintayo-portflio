import { FiChevronDown, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

const Hero = ({ canvasRef, heroRef, scrollToSection }) => {
  return (
    <section id="hero" className="hero" ref={heroRef}>
      <canvas
        ref={canvasRef}
        className="hero-canvas"
      />
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-intro">Hi, my name is</div>
          <h1 className="hero-title">David Akintayo.</h1>
          <h2 className="hero-subtitle">Full-stack developer & web designer.</h2>
          <p className="hero-description">
            I'm a software engineer specializing in building and designing
            exceptional digital experiences. Currently, I'm focused on building accessible,
            human-centered products at <span className="highlight">African Leadership University</span>.
          </p>
          <div className="hero-buttons">
            <button
              className="btn btn-primary"
              onClick={() => scrollToSection('projects')}
            >
              Check out my work!
            </button>
          </div>
        </div>
        <div className="hero-scroll" onClick={() => scrollToSection('about')}>
          <FiChevronDown size={24} />
        </div>
      </div>

      <div className="social-sidebar">
        <a href="https://github.com/dav1d001" className="social-sidebar-link" target="_blank" rel="noopener noreferrer">
          <FiGithub size={20} />
        </a>
        <a href="https://www.linkedin.com/in/david-akintayo-0ba201290/" className="social-sidebar-link" target="_blank" rel="noopener noreferrer">
          <FiLinkedin size={20} />
        </a>
        <a href="mailto:akintayodavid2003@gmail.com" className="social-sidebar-link">
          <FiMail size={20} />
        </a>
        <div className="social-line"></div>
      </div>

      <div className="email-sidebar">
        <a href="mailto:akintayodavid2003@gmail.com" className="email-link">
          akintayodavid2003@gmail.com
        </a>
        <div className="email-line"></div>
      </div>
    </section>
  )
}

export default Hero