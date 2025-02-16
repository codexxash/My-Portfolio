import React from 'react'
import './skills.css'

const skills = [
    "HTML", "CSS", "JavaScript", "React", "Tailwind", "Bootstrap", "Git", "Github",
]

const Skills = () => {
    return (
        <div className='skills-container'>
            <h2>SKILLS</h2>
            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <div key={index} className="skill">{skill}</div>
                ))}
            </div>
            
        </div>
    );
};

export default Skills
