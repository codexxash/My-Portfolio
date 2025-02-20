import React from 'react'
import './Hero.css'


function Hero() {
  return (
    <>
      <div className="hero" id='color'>
        <div className="hero-heading" >
          <h1>Hi, I am <span className='myself'>Ashutosh Singh.</span> </h1>
          <h2>Aspiring Frontend Developer</h2>
        </div>
        <div className="resume">
          <span> <a href="https://drive.google.com/file/d/1T9u_RjB7KgluMipdFdSwznZbF3nZ5JDG/view?usp=drivesdk">Resume</a></span>

        </div>
      </div>
    </>
  )
}

export default Hero
