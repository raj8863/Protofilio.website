import React from "react";
import "./module.Home.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaFilePdf } from "react-icons/fa";

import About from "../About/About";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Experience from "../Experience/Experience";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <div className="home-container">
      {/* ================= HERO SECTION ================= */}
      <section id="home" className="hero-section">
        <header className="hero-header">
          <h1 className="hero-title">Welcome to My Portfolio! 🎉</h1>
        </header>

        <main className="hero-content">
          <p className="hero-intro">
            Hi, I’m <strong>Raj Kumar Singh</strong>, a passionate MERN Stack
            Developer who builds fast, scalable, and user-friendly web
            applications.
          </p>

          <div className="hero-badge">
            <span>
              📣 Crafting scalable applications · Solving complex problems ·
              Optimizing performance
            </span>
          </div>

          <p className="hero-description">
            I specialize in the <strong>MERN stack</strong> (MongoDB, Express.js,
            React.js, Node.js) and love building full-stack products with clean
            backend logic and responsive UI.
          </p>

          <div className="hero-actions">
            {/* Scroll to Projects Section */}
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>

            <a
              href="mailto:singhRaj0439@gmail.com"
              className="btn btn-outline"
            >
              Get In Touch
            </a>
          </div>
        </main>

        {/* ================= SOCIAL LINKS ================= */}
        <div className="hero-socials">
          <a
            href="https://github.com/raj8863"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/singhraj2004"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          {/* Resume */}
          <a
            href="/assets/RAJ KUMAR SINGH.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Resume"
          >
            <FaFilePdf />
          </a>

          <a href="mailto:singhRaj0439@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>
      </section>

      {/* ================= OTHER SECTIONS ================= */}
      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
