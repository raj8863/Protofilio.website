import React from 'react'
import "./module.Skills.css"
import Skill from './Skill/Skill'
import Categories from './Categories/Categories'
const Skills = () => {
  return (
    <div className='main-container'>
      <div className='container'>
        {/* left:Categories */}
        <div className='Cate-container'>
          <Categories />
        </div>
        {/* Right:skills */}
        <div className='Skill-container'>
          <Skill/>
         </div>
      </div>

    </div>
  )
}

export default Skills
