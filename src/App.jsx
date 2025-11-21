import { useState, useEffect, useRef, useCallback } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [isScrolled, setIsScrolled] = useState(false)
  const [particles, setParticles] = useState([])
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  const canvasRef = useRef(null)
  const animationRef = useRef(null)
  const heroRef = useRef(null)

  useEffect(() => {
    const initParticles = () => {
      const newParticles = []
      const particleCount = window.innerWidth < 768 ? 30 : 50

      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          id: i
        })
      }
      setParticles(newParticles)
    }

    initParticles()
    window.addEventListener('resize', initParticles)
    return () => window.removeEventListener('resize', initParticles)
  }, [])

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const animate = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    setParticles(prevParticles => {
      const updatedParticles = prevParticles.map(particle => {
        let { x, y, vx, vy } = particle

        const dx = mousePos.x - x
        const dy = mousePos.y - y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 150) {
          const force = (150 - distance) / 150
          vx += (dx / distance) * force * 0.02
          vy += (dy / distance) * force * 0.02
        }

        x += vx
        y += vy

        if (x < 0 || x > canvas.width) vx *= -1
        if (y < 0 || y > canvas.height) vy *= -1

        x = Math.max(0, Math.min(canvas.width, x))
        y = Math.max(0, Math.min(canvas.height, y))

        vx *= 0.99
        vy *= 0.99

        return { ...particle, x, y, vx, vy }
      })

      updatedParticles.forEach(particle => {
        ctx.fillStyle = 'rgba(100, 255, 218, 0.8)'
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, 3, 0, Math.PI * 2)
        ctx.fill()

        // Glow effect
        ctx.shadowColor = '#64ffda'
        ctx.shadowBlur = 10
        ctx.fillStyle = 'rgba(100, 255, 218, 0.4)'
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, 6, 0, Math.PI * 2)
        ctx.fill()
        ctx.shadowBlur = 0
      })

      return updatedParticles
    })

    animationRef.current = requestAnimationFrame(animate)
  }, [mousePos])

  useEffect(() => {
    if (particles.length > 0) {
      animate()
    }
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [animate, particles.length])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const sections = ['hero', 'about', 'projects', 'skills', 'contact']
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.6 }
    )

    sections.forEach((section) => {
      const element = document.getElementById(section)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  // Track scroll to update navbar compact state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app">
      <Navbar
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        isScrolled={isScrolled}
      />

      <Hero
        canvasRef={canvasRef}
        heroRef={heroRef}
        scrollToSection={scrollToSection}
      />

      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App