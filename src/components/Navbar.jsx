import { FiX, FiMenu } from 'react-icons/fi'

const Navbar = ({ isMenuOpen, setIsMenuOpen, activeSection, scrollToSection, isScrolled }) => {
  return (
    <nav className={`nav nav-floating ${isScrolled ? 'nav-scrolled' : ''}`} role="navigation" aria-label="Main Navigation">
      <div className={`nav-container nav-floating-container ${isScrolled ? 'nav-container--scrolled' : ''}`}>
        <div className="nav-left">
          <a href="#hero" className="brand-text" onClick={() => scrollToSection('hero')}>David Akintayo</a>
        </div>

        <div className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}>
          <a
            href="#hero"
            className={`nav-link ${activeSection === 'hero' ? 'active' : ''}`}
            onClick={() => scrollToSection('hero')}
          >
            Home
          </a>
          <a
            href="#about"
            className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
            onClick={() => scrollToSection('about')}
          >
            About
          </a>
          <a
            href="#projects"
            className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
            onClick={() => scrollToSection('projects')}
          >
            Work
          </a>
          <a
            href="#skills"
            className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
            onClick={() => scrollToSection('skills')}
          >
            Skills
          </a>
          <a
            href="#contact"
            className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
            onClick={() => scrollToSection('contact')}
          >
            Contact
          </a>
        </div>

        <div className="nav-right">
          <a
            href="/David-Oluwadamipe-Akintayo_Resume.pdf"
            className="nav-link resume-link"
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
          <button
            className="nav-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar