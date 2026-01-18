import React from 'react'
import '../module.Skills.css'

const Skill = () => {
    const skills = [
        { name: "React.js / Next.js", value: 85 },
        { name: " JavaScript(ES6+)", value: 92 },
        { name: "HTML5 / CSS3", value: 95 },
        { name: "Tailwind CSS", value: 88 },
        { name: "UI / UX Design", value: 85 },
        { name: "RESTfull API", value: 80 },
        { name: "Node.js", value: 88 },
        { name: "Express.js", value: 85 },
        { name: "MongoDB", value: 80 },
        { name: "SQL", value: 92 },
        { name: "Git/GitHub", value: 95 },
        { name: "Postman", value: 88 },
        { name: "Netlify", value: 85 },
        { name: "Render", value: 80 },
        { name: "Vercel", value: 88 },
        { name: "Heroku", value: 85 },
    ];
    return (
        <div className='skills'>
            <h2 className='skills-title'>Skill & Technologies</h2>
            <h3 className="sub-title">&lt;/&gt; Technical Skills</h3>

            {skills.map((skill, index) => (
                <div className="skill" key={index}>
                    <div className="skill-header">
                        <span>{skill.name}</span>
                        <span>{skill.value}%</span>
                    </div>

                    <div className="progress-bar">
                        <div
                            className="progress"
                            style={{ width: `${skill.value}%` }}
                        ></div>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default Skill
