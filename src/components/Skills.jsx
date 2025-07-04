import { FiCode, FiDroplet, FiZap, FiEye, FiUsers } from 'react-icons/fi'

const Skills = () => {
  const skills = [
    { name: "React.js", level: 95, icon: FiCode },
    { name: "CSS/SCSS", level: 90, icon: FiDroplet },
    { name: "JavaScript", level: 92, icon: FiZap },
    { name: "Node.js", level: 85, icon: FiCode },
    { name: "UI/UX Design", level: 88, icon: FiEye },
    { name: "Team Collaboration", level: 94, icon: FiUsers }
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="section-number">03.</span> Skills & Expertise
          </h2>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <div key={index} className="skill-card">
                <div className="skill-icon">
                  <Icon size={32} />
                </div>
                <div className="skill-info">
                  <h3 className="skill-name">{skill.name}</h3>
                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <span className="skill-level">{skill.level}%</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills