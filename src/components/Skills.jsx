import { FiCode, FiDroplet, FiZap, FiEye, FiUsers } from 'react-icons/fi'

const Skills = () => {
  const categories = [
    {
      title: 'Frontend',
      items: ['React.js', 'JavaScript (ES6+)', 'CSS/SCSS', 'TypeScript']
    },
    {
      title: 'Backend',
      items: ['Node.js', 'Express', 'MongoDB', 'Socket.io']
    },
    {
      title: 'Design',
      items: ['UI/UX Design', 'Figma', 'Accessibility', 'Responsive Design']
    },
    {
      title: 'Tools',
      items: ['Git & GitHub', 'Vite', 'Docker (basics)', 'CI/CD']
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="section-number">03.</span> Tech Stack
          </h2>
        </div>

        <div className="skills-grid">
          {categories.map((cat, idx) => (
            <div key={idx} className="skill-card glass">
              <h3 className="skill-name">{cat.title}</h3>
              <div className="tech-pill-list">
                {cat.items.map((item, i) => (
                  <button key={i} className="tech-pill" aria-pressed="false">{item}</button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills