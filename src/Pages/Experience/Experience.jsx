import React from 'react'
import './module.Experience.css'
const Experience = () => {
  return (
    <section className="experience">
      <h2 className='exprience-title'>Experience</h2>

      <div className='exprience-card'>
        <p className='exprience-date'>July 2025 To Dec-2025</p>
        <h3 className='expreience-role'>Full Stack Intern </h3>
        <span className='expreience-company'>Jaramsys Infotech Pvt. Ltd.</span>

        <ul className='experience-points'>
          <li>
            Completed a 6-month Full Stack Development internship with hands-on experience in MERN stack.
          </li>
          <li>
            Worked on frontend development using HTML, CSS, JavaScript, and React.js.
          </li>
          <li>
            Developed backend APIs using Node.js and Express.js.
          </li>
          <li>
            Integrated databases using MongoDB for CRUD operations.

            Collaborated on real-world projects and followed industry best practices.
          </li>
        </ul>
      </div>
      <div className='exprience-card'>
        <p className='exprience-date'>Sep 2024 To June 2025</p>
        <h3 className='expreience-role'>MERN Stack Trainee</h3>
        <span className='expreience-company'>Qspider</span>

        <ul className='experience-points'>
          <li>
            Completed structured and in-depth training in MERN Stack development.
          </li>
          <li>
            Gained hands-on experience in HTML, CSS, JavaScript, and React.js for building responsive frontend interfaces.
          </li>
          <li>
            Developed backend services using Node.js and Express.js, including RESTful API creation.
          </li>
          <li>
            Worked with MongoDB for database schema design and CRUD operations.

            Built multiple small-scale projects to understand end-to-end application architecture and data flow.
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Experience
