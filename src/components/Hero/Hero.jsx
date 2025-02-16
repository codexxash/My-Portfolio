import React from 'react'
import './Hero.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'


function Hero() {
  return (
    <>
<div className="hero" id='color'>
      <div className="hero-heading" >
<h1>Hi, I am <span className='myself'>Ashutosh Singh.</span> </h1>
<h2>Aspiring Frontend Developer</h2>
</div>
<div className="connects">
<span> <a href="https://drive.google.com/file/d/1T9u_RjB7KgluMipdFdSwznZbF3nZ5JDG/view?usp=drivesdk">resume</a></span>
    <a href="https://github.com/codexxash" target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faGithub}/></a>
<a href="https://www.linkedin.com/in/codexash/" target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faLinkedin}/></a>
<a href="https://x.com/Ashutos29563093" target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faTwitter}/></a>
</div>
      </div>
    </>
  )
}

export default Hero
