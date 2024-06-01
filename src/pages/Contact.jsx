import React from 'react';
import { Link } from 'react-router-dom';
import '../src/Contact.css';
import '../src/animation.css';

function Contact() {
  return (
    <div>
      <header>
        <div className="left">
          <h1 className='fade-left'>Port<b>folio</b></h1>
        </div>
        <div className="right">
          <span><Link to="/">Home</Link></span>
          <span><Link to="/about">About</Link></span>
          <span><Link to="/skills">Skills</Link></span>
          <span><Link to="/projects">Projects</Link></span>
          <span id="hom"><Link to="/contact">Contact</Link></span>
        </div>
      </header>
      <div className="bod"> 
        <h1 className='fade-down adi'>Let's get in touch</h1>
        <p>Question? Feedback? Proposal?</p>
        <p id='cd'>Whatever it is, feel free to contact me and I'll get back to you as soon as possible</p>
        <form action="mailto:assertivewill@gmail.com" method="post" encType="text/plain">
          <input type="name" placeholder='Enter Name' className='fade-left' required />
          <div className="line"></div>
          <input type="email" placeholder='Enter e-mail' className='fade-right' required />
          <div className="line"></div>
          <br />
          <br />
          <div className="linee"></div>
          <input type="text" id='bb' className='fade-right' required />
          <button id='sub'>Submit</button>
        </form>
      </div>
      <div className="social fade-down">
        <div className="im"><a href=""><img src="https://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19757.png" alt="Facebook" /></a></div>
        <div className="im"><a href="www.linkedin.com/in/yaswanth-kumar19" target='_blank'><img src="http://www.freepnglogos.com/uploads/official-linkedin-logo----17.png" alt="LinkedIn" /></a></div>
        <div className="im"><img src="https://clipartcraft.com/images/twitter-logo-svg-1.png" alt="Twitter" /></div>
        <div className="im"><img src="https://pngimg.com/uploads/chrome_logo/chrome_logo_PNG22.png" alt="Chrome" /></div>
      </div>
    </div>
  );
}

export default Contact;
