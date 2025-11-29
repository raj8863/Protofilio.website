import React from "react";
import "./module.About.css";

const About = () => {
  return (
    <section className="main-container">
      <h1 className="title gradient-text">About Me</h1>

      <div className="content">
        {/* LEFT: profile circles */}
        <aside className="left-part">
          <div className="profile-container">
            <div className="profile-inner">
              <div className="profile-inner-inner" aria-hidden="false">
                <span role="img" aria-label="developer">👩‍💻</span>
              </div>
            </div>
          </div>
        </aside>

        {/* RIGHT: text + stats */}
        <div className="right-part">
          <div className="text-part">
            <p>
              I’m a creative MERN Stack Developer who loves building digital experiences with
              clean code and modern technologies. From developing full-stack applications to
              designing responsive interfaces, I enjoy every part of the development lifecycle.

            </p>
            <p>
              I specialize in React, Node.js, Express, MongoDB, JavaScript, and modern frontend
              tools. My focus is writing efficient, maintainable code and building applications
              that make an impact.
            </p>
            <p>
              When I’m not coding, I’m learning new tech, improving my projects, and exploring
              better ways to solve real-world problems with code.
            </p>
          </div>

          <div className="button-part">
            <div className="stat">
              <h2>10+</h2>
              <p>Projects Completed</p>
            </div>

            <div className="stat">
              <h2>3+</h2>
              <p>Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
