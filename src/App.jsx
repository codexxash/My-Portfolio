import './index.css'
import Contact from './components/contact/Contact'
import Hero from './components/Hero/Hero'
import Navbar from './components/Hero/Navbar'
import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'
function App() {


  return (
   <div
  className="
    min-h-screen
    bg-white
    text-[#454544]
    dark:bg-[#23283F]
    dark:text-[#CECDF6]
    transition-colors
    duration-300
  "
>
  <Navbar />
  <Hero />
  <Projects />
  <Skills />
  <Contact />
</div>
  )
}

export default App
