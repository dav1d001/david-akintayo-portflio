import { FiCode, FiGithub } from 'react-icons/fi'
import { motion } from 'framer-motion'

import votesphereImage from '../../votesphere.png'
import edlearnImage from '../assets/edlearn.png'

const Projects = () => {
  const projects = [
    {
      title: 'VoteSphere',
      description: 'Decentralized voting platform built with blockchain technology for secure, transparent elections.',
      technologies: ['React', 'Node.js', 'Ethereum', 'Solidity'],
      github: 'https://github.com/dav1d001/VoteSphere',
      category: 'Blockchain',
      image: votesphereImage,
      imageAlt: 'VoteSphere project screenshot'
    },
    {
      title: 'EdLearn Platform',
      description: 'Educational management system with interactive learning modules and progress tracking.',
      technologies: ['React', 'Express', 'MongoDB', 'Socket.io'],
      github: 'https://github.com/dazeez1/EDLEARN/',
      category: 'Education',
      image: edlearnImage,
      imageAlt: 'EdLearn platform screenshot'
    },
    // Removed "Portfolio Showcase" entry per request
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="section-number">02.</span> Some Things I've Built
          </h2>
        </div>

        <div className="projects-list">
          {projects.map((project, index) => (
            <motion.article
              key={index}
              className="project-card glass"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.6, ease: [0.22, 0.9, 0.32, 1] }}
            >
              <div className="project-image-top">
                {project.image ? (
                  <img src={project.image} alt={project.imageAlt || project.title} className="project-screenshot" />
                ) : (
                  <div className="project-image-placeholder"><FiCode size={48} /></div>
                )}
                <div className="project-image-overlay">
                  <div className="project-image-overlay-inner">
                    <h3 className="project-title">{project.title}</h3>
                    <div className="project-category">{project.category}</div>
                  </div>
                </div>
              </div>

              <div className="project-body">
                <p className="project-description">{project.description}</p>
                <div className="project-tech-list">
                  {Array.isArray(project.technologies) && project.technologies.map((tech, i) => (
                    <span key={i} className="tech-pill">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer" aria-label={`${project.title} - source on GitHub`}>
                      <FiGithub size={20} />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects