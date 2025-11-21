import { FiChevronDown, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { motion } from 'framer-motion'

const Hero = ({ canvasRef, heroRef, scrollToSection }) => {
  const resumeUrl = '/David-Oluwadamipe-Akintayo_Resume.pdf'

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.12 } }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 0.9, 0.32, 1] } }
  }

  return (
    <section id="hero" className="hero" ref={heroRef}>
      <canvas
        ref={canvasRef}
        className="hero-canvas"
        aria-hidden="true"
      />

      <div className="hero-orb" aria-hidden="true" />
      <div className="hero-overlay"></div>

      <motion.div className="container container-tight hero-content" variants={container} initial="hidden" animate="show">
        <motion.h1 className="hero-title display" variants={item}>David Akintayo</motion.h1>
        <motion.p className="hero-subtitle" variants={item}>Building digital resilience & accessible web experiences.</motion.p>

        <motion.div className="hero-buttons" role="region" aria-label="Hero actions" variants={item}>
          <a
            className="btn btn-pill btn-outline"
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open resume in new tab"
          >
            Resume
          </a>

          <button
            className="btn btn-pill btn-accent-solid"
            onClick={() => scrollToSection('projects')}
            aria-label="See projects"
          >
            See my work
          </button>
        </motion.div>

        <div className="hero-scroll" onClick={() => scrollToSection('about')} role="button" tabIndex={0} aria-label="Scroll to about">
          <FiChevronDown size={24} />
        </div>
      </motion.div>

      <div className="social-sidebar">
        <a href="https://github.com/dav1d001" className="social-sidebar-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FiGithub size={20} />
        </a>
        <a href="https://www.linkedin.com/in/david-akintayo-0ba201290/" className="social-sidebar-link" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FiLinkedin size={20} />
        </a>
        <a href="mailto:akintayodavid2003@gmail.com" className="social-sidebar-link" aria-label="Email">
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