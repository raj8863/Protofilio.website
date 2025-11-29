import React from 'react'
import './module.Home.css'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Home = () => {
  return (
    <div className="home-container">
      <header className="header" role="banner">
        <h1 className="h1-tg">Welcome to My Portfolio! 🎉</h1>
      </header>

      <main className="content" role="main">
        <p className="p1">
          Hi, I’m <strong>Raj Kumar Singh</strong>, a passionate MERN Stack Developer who turns ideas into fast,
          scalable, and user-friendly web applications.
        </p>

        <div className="controls" aria-hidden="false">
          <div className="slider-content" aria-live="polite">
            📣 Crafting scalable applications · Solving complex problems · Optimizing performance
          </div>
        </div>

        <p className="p2">
          My journey into tech started with a simple curiosity—understanding how things work behind the scenes.
          Over time, that curiosity evolved into a strong drive to build clean, efficient, and impactful digital
          solutions. I specialize in the <strong>MERN stack (MongoDB, Express.js, React.js, Node.js)</strong> and enjoy
          creating full-stack applications that bring together powerful backend logic with smooth, intuitive,
          and responsive frontend interfaces.
        </p>

        <div className="cta-row">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="mailto:yourmail@gmail.com" className="btn btn-outline">Get In Touch</a>
        </div>

      </main>
      
        <div className="social-icons" aria-label="Social links">
          <a
            className="social-link"
            href="https://github.com/raj8863"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            className="social-link"
            href="https://linkedin.com/in/singhraj2004"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            className="social-link"
            href="mailto:singhRaj0439@gmail.com"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>

        </div>
    </div>
  )
}

export default Home
