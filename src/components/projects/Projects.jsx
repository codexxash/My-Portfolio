import React from 'react'
import './Projects.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

function Projects() {
  return (
    <div className='projects'>
      <h1>PROJECTS</h1>
      <div className="all-projects">
        <div className="project1">
          <h2>Weather App</h2>
          <p>Built a weather application using React.js, demonstrating skills in front-end development and API integration.  Employed Axios for efficient data fetching from a RESTful weather API, handling asynchronous requests and JSON responses.  Utilized React components and state management to dynamically render weather data, ensuring a responsive and interactive user interface.</p>
          <span>HTML</span>
          <span> CSS</span>
          <span> JavaScript</span>
          <span> React</span>
          <p>    <a href="https://github.com/codexxash/Weather-App" target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faGithub} /></a>
          </p>
        </div>
        <div className="project2">
          <h2>Quotes Generator</h2>
          <p>Created a simple and engaging quotes generator application using React.js.  Users can click a button to display a new random quote, providing a source of inspiration or amusement.  This project demonstrates basic React fundamentals and event handling.</p>
          <span>HTML</span>
          <span> CSS</span>
          <span> JavaScript</span>
          <span> React</span>
          <p>    <a href="https://github.com/codexxash/Quote-Generator" target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faGithub} /></a>
          </p>
        </div>
        <div className="project3">
          <h2>Memory Card Game</h2>
          <p> Built a memory card game using HTML, CSS, and JavaScript, focusing on DOM manipulation, event handling, and game state management.  JavaScript is used to shuffle cards, track matches, and handle user interactions, showcasing proficiency in dynamic web development.</p>
          <span>HTML</span>
          <span> CSS</span>
          <span> JavaScript</span>
          <p>    <a href="https://github.com/codexxash/Memory-Card-Game" target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faGithub} /></a>
          </p>

        </div>
      </div>
    </div>
  )
}

export default Projects
