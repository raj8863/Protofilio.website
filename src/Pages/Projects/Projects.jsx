import React from "react";
import "./module.Projects.css";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="projects-main">
      <h1 className="projects-title">Featured Projects</h1>

      <div className="projects-grid">
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
              href=""
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

        {/* HMS */}
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
              href=""
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

        {/* URL Shortener */}
        <div className="project-card">
          <h3 className="project-name">URL Shortener</h3>
          <p className="project-desc">
            Converts long URLs into short, shareable links with fast redirection
            and click analytics.
          </p>

          <div className="tech-stack">
            <span>React</span>
            <span>FastAPI</span>
            <span>MongoDB</span>
            <span>Netlify</span>
          </div>

          <div className="btn-group">
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-live"
            >
              Live Demo
            </a>

            <a
              href="https://github.com/raj8863/URL-Shortener"
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
