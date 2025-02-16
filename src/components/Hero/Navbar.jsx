import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { FaBars, FaTimes } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Skills from '../skills/Skills';
import Projects from '../projects/Projects';
import Contact from '../contact/Contact';
import Hero from './Hero';


function Navbar() {
  const [theme, setTheme] = useState("dark-mode");
  const [myself, setmyself] = useState("myself")
  const [showMenu, setShowMenu] = useState(false)
  const [activeComponent, setActiveComponent] = useState('home')
  useEffect(() => {
    document.querySelector("body").className = theme
    document.querySelector("span").className = myself
  }, [theme, myself]);


  const handleButtonToggle = () => {
    setShowMenu(!showMenu)
  }

  const handleNavClick = (componentName) =>{
    setActiveComponent(componentName);
  }

  return (
    <>
      <div className={showMenu ? "menu-mobile" : "menu-web"}>


        <ul className={'nav-links'}>
          <li onClick={() => {
            setShowMenu(false)
handleNavClick('home')
            
          }}>Home</li>
          <li onClick={() => {
            setShowMenu(false)
handleNavClick('skills-container')

          }}>Skills</li>
          <li onClick={() => {
            setShowMenu(false)
handleNavClick('projects')
            


          }}>Projects</li>
          <li onClick={() => {
            setShowMenu(false)
handleNavClick('contact')
            


          }}>Contact</li>
          <li className='icon' onClick={change => {
            if (theme === "dark-mode") {
              setTheme("light-mode")
            } else {
              setTheme("dark-mode")
            }
            if (myself === "myself") {
              setmyself("light-myself")
            } else {
              setmyself("myself")
            }
            setShowMenu(false)

          }}>{theme == 'dark-mode' ? <i class="fa-solid fa-sun"></i> : <i class="fa-solid fa-moon"></i>}</li>
        </ul>
      </div>
      {activeComponent === 'skills-container' && <Skills/>}
      {activeComponent === 'projects' && <Projects/>}
      {activeComponent === 'contact' && <Contact/>}
      <div className="menu-icon">
        <button className='menu-toggle' onClick={handleButtonToggle}>
          <FaBars />
        </button>

      </div>
    </>
  )
}

export default Navbar
