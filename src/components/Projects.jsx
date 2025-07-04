import { FiCode, FiGithub } from 'react-icons/fi'

import votesphereImage from '../../votesphere.png'
import edlearnImage from '../assets/edlearn.png'

const Projects = () => {
  const projects = [
    {
      title: "VoteSphere",
      description: "Decentralized voting platform built with blockchain technology for secure, transparent elections.",
      technologies: ["React", "Node.js", "Ethereum", "Solidity"],
      github: "https://github.com/dav1d001/VoteSphere",
      category: "Blockchain",
      image: votesphereImage,
      imageAlt: "VoteSphere project screenshot"
    },
    {
      title: "EdLearn Platform",
      description: "Educational management system with interactive learning modules and progress tracking.",
      technologies: ["React", "Express", "MongoDB", "Socket.io"],
      github: "https://github.com/dazeez1/EDLEARN/",
      category: "Education",
      image: edlearnImage,
      imageAlt: "EdLearn platform screenshot"
    },
    {
      title: "Portfolio Showcase",
      description: "Modern, responsive portfolio website with interactive animations and smooth user experience.",
      technologies: ["React", "CSS3", "JavaScript", "Canvas API"],
      github: "https://github.com/dav1d001/portfolio",
      category: "Web Design",
      useIcon: true
    }
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
            <div key={index} className={`project-item ${index % 2 === 1 ? 'reverse' : ''}`}>
              <div className="project-content">
                <div className="project-overline">Featured Project</div>
                <h3 className="project-title">{project.title}</h3>
                <div className="project-description">
                  <p>{project.description}</p>
                </div>
                <div className="project-tech-list">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex}>{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                    <FiGithub size={20} />
                  </a>
                </div>
              </div>
              <div className="project-image">
                <div className="project-image-wrapper">
                  <div className="project-placeholder">
                      {project.useIcon ? (
                          <FiCode size={48} className="project-icon"/>
                      ) : (
                          <img
                              src={project.image}
                              alt={project.imageAlt}
                              className="project-screenshot"
                          />
                      )}
                  <span className="project-category">{project.category}</span>
                </div>
              </div>
            </div>
            </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default Projects