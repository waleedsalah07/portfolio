import React from 'react'
import {skills} from "../data"
const 
Skils = () => {
  return (
    <div className='greySection' id='Skils'>
      <h2 className="title">my skills</h2>
      <div className="underline"></div>
      <div className='skills-section'>
        {skills.map((skill)=>
                    <div key={skill.id} className="skill">
                    <div className="icon" style={{ color:skill.color }}>
                      {skill.icon}
                    </div>
                    <p>{skill.text}</p>
                  </div>)}
      </div>
    </div>
  )
}

export default Skils
