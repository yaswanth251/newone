import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import "./animation.css";
function Home() {
  return (
    <div>
      <header>
        <div className="left">
          <h1 className="fade-left">
            Port<b>folio</b>
          </h1>
        </div>
        <div className="right">
          <span id="hom">
            <Link to="/">
              <a href="#">Home</a>
            </Link>
          </span>
          <span>
            <Link to="/about">About</Link>
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
      <div className="mainbody">
        <div className="bodyright fade-right">
          <img id="yas"
            src="../images/img5-removebg-preview.png"
            alt=""
          />
          <img id="yas1" src="https://pngfreepic.com/wp-content/uploads/2021/02/shape-png-freepic-32.png" alt="" />
        </div>
        <div className="bodyleft fade-down">
          <h1 id="a">Hi, I'm</h1>
          <h1 id="a1"><b>Y</b>aswanth kumar</h1>
          <h2 id="a3">And I'm a <b>W</b>eb developer</h2>
          <button ><Link className="bh" to="/contact">Hire me</Link></button>
        </div>
      </div>
    </div>
  );
}
export default Home;
