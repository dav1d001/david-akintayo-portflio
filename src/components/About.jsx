import { FiCode } from 'react-icons/fi'
import fallbackPortrait from '../assets/portfolio.jpg'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="section-number">01.</span> About Me
          </h2>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p>
              Hello! My name is David and I enjoy creating things that live on the internet.
              My interest in web development started back in 2020 when I decided to try editing
              custom Tumblr themes — turns out hacking together a custom reblog button taught me
              a lot about HTML & CSS!
            </p>
            <p>
              Fast-forward to today, and I've had the privilege of working on projects ranging from
              <span className="highlight"> blockchain applications</span> to
              <span className="highlight"> educational platforms</span>. My main focus these days is
              building accessible, inclusive products and digital experiences for a variety of clients.
            </p>
            <p>
              I'm soon to graduate from <span className="highlight">African Leadership University</span> where I
              am studying Software Engineering and developing a passion for creating user-centered solutions
              that make a real impact.
            </p>

            <p>Here are a few technologies I've been working with recently:</p>

            <div className="tech-list">
              <ul>
                <li>JavaScript (ES6+)</li>
                <li>React</li>
                <li>Node.js</li>
                <li>TypeScript</li>
              </ul>
              <ul>
                <li>MongoDB</li>
                <li>Express.js</li>
                <li>CSS/SCSS</li>
                <li>Git & GitHub</li>
              </ul>
            </div>
          </div>

          <div className="about-image">
            <div className="about-image-container image-wrapper glass">
              <img src={fallbackPortrait} alt="Photo of David Akintayo" className="about-portrait" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About