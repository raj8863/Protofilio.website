import React from "react";
import "./module.Projects.css";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="projects-main">
      <h1 className="projects-title">Featured Projects</h1>

      <div className="projects-grid">
        <div className="project-card">
          <h3 className="project-name">Hospital Management System</h3>
          <p className="project-desc">
            HMS streamlines hospital operations including patient records,
            appointments, billing, and reports.
          </p>

          <div className="tech-stack">
            <span>React</span>
            <span>Node</span>
            <span>MongoDB</span>
            <span>Express</span>
          </div>

          <div className="btn-group">
            <a
              href="https://h-m-s-frontend.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-live"
            >
              Live Demo
            </a>

            <a
              href="https://github.com/raj8863/H.M.S"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-code"
            >
              <FaGithub className="btn-icon" />
              Code
            </a>
          </div>
        </div>


        <div className="project-card">
          <h3 className="project-name">Portfolio Website</h3>
          <p className="project-desc">
            Designed and developed a modern, fully responsive personal portfolio website using React.js and Tailwind CSS
            Built reusable React functional components and applied utility-first Tailwind classes for fast and consistent UI development
  
          </p>

          <div className="tech-stack">
            <span>React</span>
            <span>Talwind</span>
            <span>netlify</span>
          </div>

          <div className="btn-group">
            <a
              href="https://raj-kumar-singh-portfolio.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-live"
            >
              Live Demo
            </a>

            <a
              href="https://github.com/raj8863/Protofilio.website"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-code"
            >
              <FaGithub className="btn-icon" />
              Code
            </a>
          </div>
        </div>

        {/* Lead Automation */}
        <div className="project-card">
          <h3 className="project-name">Lead Automation System</h3>
          <p className="project-desc">
            Automates lead capture, assignment, follow-ups, and tracking to
            improve sales productivity and conversion rates.
          </p>

          <div className="tech-stack">
            <span>React</span>
            <span>Node</span>
            <span>MongoDB</span>
            <span>Express</span>
          </div>

          <div className="btn-group">
            <a
              href="https://smart-lead-frontend2323.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-live"
            >
              Live Demo
            </a>

            <a
              href="https://github.com/raj8863/Smart-lead"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-code"
            >
              <FaGithub className="btn-icon" />
              Code
            </a>
          </div>
        </div>

        {/* EMS */}
        <div className="project-card">
          <h3 className="project-name">Employee Management System</h3>
          <p className="project-desc">
            EMS manages employee profiles, attendance, leave, payroll, and
            performance in a centralized system.
          </p>

          <div className="tech-stack">
            <span>React</span>
            <span>Node</span>
            <span>MongoDB</span>
            <span>Express</span>
          </div>

          <div className="btn-group">
            <a
              href="https://e-m-s-ak79.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-live"
            >
              Live Demo
            </a>

            <a
              href="https://github.com/raj8863/E.M.S"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-code"
            >
              <FaGithub className="btn-icon" />
              Code
            </a>
          </div>
        </div>

        {/* Study Abroad */}


        <div className="project-card">
          <h3 className="project-name">Study Abroad Consultancy Website</h3>
          <p className="project-desc">
            The Study Abroad Consultancy Website helps students explore overseas
            education opportunities including universities, courses, admissions,
            and visa guidance.
          </p>

          <div className="tech-stack">
            <span>React</span>
            <span>Node</span>
            <span>MongoDB</span>
            <span>Express</span>
            <span>Render</span>
          </div>

          <div className="btn-group">
            <a
              href="https://intake-abroad-study.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-live"
            >
              Live Demo
            </a>

            <a
              href="https://github.com/raj8863/Study_Abroad_Cousultancy_website"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-code"
            >
              <FaGithub className="btn-icon" />
              Code
            </a>
          </div>
        </div>

        {/* E-commerce */}
        <div className="project-card">
          <h3 className="project-name">E-commerce Website</h3>
          <p className="project-desc">
            Full-featured e-commerce platform with product listings, cart,
            checkout, and secure payment integration.
          </p>

          <div className="tech-stack">
            <span>React</span>
            <span>Node</span>
            <span>MongoDB</span>
            <span>Express</span>
          </div>

          <div className="btn-group">
            <a
              href="https://dreamy-dragon-456f07.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-live"
            >
              Live Demo
            </a>

            <a
              href="https://github.com/raj8863/E-commerce-"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-code"
            >
              <FaGithub className="btn-icon" />
              Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
