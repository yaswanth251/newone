import React from 'react'
import { Link } from 'react-router-dom';
import '../src/Projects.css'
import '../src/animation.css'
function Projects() {
  return (
    <div>
      <header>
        <div className="left">
          <h1>Port<b>folio</b></h1>
        </div>
        <div className="right">
          <span><Link to="/">Home</Link></span>
          <span><Link to="/about">About</Link></span>
          <span><Link to="/skills">Skills</Link></span>
          <span id="hom"><Link to="/projects"><a href="#">Projects</a></Link></span>
          <span><Link to="/contact">Contact</Link></span>
        </div>
      </header>
      <div className="proj" id='hei'>
        <span className="pro fade-left">
          <div className="num">1</div>
          <div className="namee">E-commerse</div>
          <p className="projede">I developed an e-commerce website using advanced web development techniques to create a user-friendly and responsive online shopping experience.</p>
          <a href="https://kyaswanth.netlify.app/">View More</a>
        </span>
        <span className="pro fade-down">
          <div className="num">2</div>
          <div className="namee">Netflix-Clone</div>
          <p className="projede">
I developed a Netflix clone web app using modern web development technologies including React, Node.js, and MongoDB for full-stack functionality.</p>
          <a href="">Read More</a>
        </span>
        <span className="pro fade-right">
          <div className="num">3</div>
          <div className="namee">KiddieMind Explorer</div>
          <p className="projede">I developed KiddieMind Explorer web app using modern web development technologies to create an engaging and interactive user experience.</p>
          <a href="">Read More</a>
        </span>
        <span className="pro fade-left">
          <div className="num">4</div>
          <div className="namee">Portfolio</div>
          <p className="projede">I developed a portfolio web app using modern web development technologies, including React, CSS, and JavaScript, for showcasing projects.</p>
          <a href="">Read More</a>
        </span>
        <span className="pro fade-right">
          <div className="num">5</div>
          <div className="namee"></div>
          <p className="projede">Working on it.......</p>
          <a href="">Read More</a>
        </span>
        <span className="pro fade-left">
          <div className="num">6</div>
          <div className="namee"></div>
          <p className="projede">Working on it.......</p>
          <a href="">Read More</a>
        </span>
        <span className="pro fade-left" id='nn'>
          <div className="num">7</div>
          <div className="namee"></div>
          <p className="projede"></p>
          <a href="">Read More</a>
        </span>
        <span className="pro fade-down" id='nn'>
          <div className="num">8</div>
          <div className="namee"></div>
          <p className="projede"></p>
          <a href="">Read More</a>
        </span>
      </div>
      <button onClick={fun2} href="" id="next" className='fade-right'>See More++</button>
    </div>
  )
  function fun2(){
    document.getElementById('nn').style.display = 'flex';
    document.getElementById('next').style.display = 'none';
  }
}

export default Projects
