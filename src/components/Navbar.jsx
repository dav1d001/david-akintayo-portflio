import { FiX, FiMenu } from 'react-icons/fi'

const Navbar = ({ isMenuOpen, setIsMenuOpen, activeSection, scrollToSection }) => {
  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="nav-brand">
          <span className="brand-text">DA</span>
        </div>

        <div className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}>
          <a
            href="#hero"
            className={`nav-link ${activeSection === 'hero' ? 'active' : ''}`}
            onClick={() => scrollToSection('hero')}
          >
            01. Home
          </a>
          <a
            href="#about"
            className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
            onClick={() => scrollToSection('about')}
          >
            02. About
          </a>
          <a
            href="#projects"
            className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
            onClick={() => scrollToSection('projects')}
          >
            03. Work
          </a>
          <a
            href="#skills"
            className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
            onClick={() => scrollToSection('skills')}
          >
            04. Skills
          </a>
          <a
            href="#contact"
            className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
            onClick={() => scrollToSection('contact')}
          >
            05. Contact
          </a>
          <a
              href="/David-Oluwadamipe-Akintayo_Resume.pdf"
              className="nav-link resume-link"
              download="David-Akintayo-Resume.pdf"
              rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>

        <button
            className="nav-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
        >
        {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar