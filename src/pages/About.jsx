import React from 'react';
import '../src/About.css';
import '../src/animation.css';
import { Link } from 'react-router-dom';
import '../src/animation.css'

function About() {
  function fun() {
    document.getElementById('cc').style.display = 'block';
    document.getElementById('btn').style.display = 'none';
    document.getElementById('btn1').style.display = 'block';
  }
  function fun1() {
    document.getElementById('cc').style.display = 'none';
    document.getElementById('btn').style.display = 'block';
    document.getElementById('btn1').style.display = 'none';
  }

  return (
    <div>
      <header className="fade">
        <div className="left">
          <h1 className='fade-left'>
            Port<b>folio</b>
          </h1>
        </div>
        <div className="right">
          <span>
            <Link to="/">Home</Link>
          </span>
          <span id="hom">
            <Link to="/">About</Link>
          </span>
          <span>
            <Link to="/skills">Skills</Link>
          </span>
          <span>
            <Link to="/projects">Projects</Link>
          </span>
          <span>
            <Link to="/contact">Contact</Link>
          </span>
        </div>
      </header>
      <div className="mainbody1 cb">
        <div className="left1">
          <p className='fade-right'>Hello! I'm K Yaswanth kumar, a passionate and enthusiastic fresher with a strong foundation in frontend web development and Java programming.
            Over the past few years, I have honed my skills in creating dynamic, responsive, and user-friendly web applications using the latest technologies and frameworks.
            I am well-versed in HTML, CSS, and JavaScript, and have hands-on experience with popular libraries and frameworks such as React.js. I enjoy transforming complex problems into intuitive and visually appealing web interfaces. My training has equipped me with the skills to build and maintain websites, ensuring they are optimized for performance and accessibility.
            In addition to my frontend development skills, I have a solid understanding of Java programming and DSA. I have successfully solved numerous coding challenges and problems, demonstrating my ability to write efficient and optimized code. My knowledge of algorithms and data structures enables me to tackle complex computational problems and develop robust solutions. <br />
          </p>
          <a href='#' onClick={fun} id='btn' className='fade-down'>See More ++</a>
          <p id='cc' className='fade-left'>I have had the opportunity to work on several real-time projects that have further enhanced my practical skills. These projects have involved everything from developing interactive web applications to creating backend services and APIs. Additionally, my internships have provided me with invaluable industry experience, allowing me to apply my knowledge in real-world 
            scenarios and collaborate effectively with diverse teams.</p>
            <a href='#' onClick={fun1} id='btn1' className='fade-right'> See Less --</a>
        </div>
        <div className="right1">
          <div className="back fade-left"></div>
          <img className='fade-down' src="../images/img1.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default About;
