import React from 'react'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
function Contact() {
  return (
    <div className="contact">
      <h2>Contact</h2>
      <form className='form' action="https://api.web3forms.com/submit" method="POST">
        <input type="hidden" name="access_key" value="3098bf26-e288-4626-9d51-03ff27637457" />
        <label htmlFor="name">Name</label>
        <input type="text" name="name" placeholder='Enter your name' required />
        <label htmlFor="email">Email</label>

        <input type="email" name="email" placeholder='Enter your email address' required />
        <label htmlFor="message">Message</label>

        <textarea name="message" placeholder='Type your message here' required></textarea>

        <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

        <button className='btn' type="submit">Submit</button>
        <div className="connects footer">
          <a href="https://github.com/codexxash" target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faGithub} /></a>
          <a href="https://www.linkedin.com/in/codexash/" target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href="https://x.com/Ashutos29563093" target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faTwitter} /></a>
        </div>
        <p>Created By Ashutosh</p>
      </form>
    </div>

  );
}

export default Contact
