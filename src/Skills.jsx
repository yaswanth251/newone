// Skills.js
import React from 'react';
import { Link } from 'react-router-dom';
import GraphComponent from './GraphComponent';
import './animation.css';
import './Skills.css';

function Skills() {
  return (
    <div>
      <header>
        <div className="left">
          <h1 className="fade-left">Port<b>folio</b></h1>
        </div>
        <div className="right">
          <span><Link to="/">Home</Link></span>
          <span><Link to="/about">About</Link></span>
          <span id="hom"><Link to="/skills"><a href="#">Skills</a></Link></span>
          <span><Link to="/projects">Projects</Link></span>
          <span><Link to="/contact">Contact</Link></span>
        </div>
      </header>
      <div className="div fade-down">
        <GraphComponent />
      </div>
    </div>
  );
}

export default Skills;
