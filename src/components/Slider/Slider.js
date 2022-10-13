import React from "react";
import "./Slider.css";
import me2 from "../../images/me2.jpg";

function Slider(props) {
  return (
    <div className={`slider ${props.overflow ? "slide-off" : ""}`}>
      <div className="card">
        <div className="card-side card-side--front">
          <img className="card-img" src={me2} alt="sayed"></img>
        </div>
        <div className="card-side card-side--back">
          <a
            className="card-button card-button-cv"
            href="https://drive.google.com/file/d/1cX_SoEqy9jQjhC7YMifI3gjGmnGUsYYm/view?usp=sharing"
            rel="noopener noreferrer"
            target="_blank"
          >
            Download My CV
          </a>
          <a
            className="card-button card-button-github"
            href="https://github.com/hyperstone6/Protfolio"
            rel="noopener noreferrer"
            target="_blank"
          >
            This Site on GitHub
          </a>
        </div>
      </div>
      <div className="mission">
        <h2>About Me</h2>
        <p>
          From the moment I wrote my first "Hello World" I fell in love with
          development. Software development isn't just a job for me, but a
          passion and a life-long challenge to continually learn and grow while
          striving to improve my skills and holding myself to high standards to
          write great software. Fully capable of working in both self-starting
          and collaborative environments, with a focus on high-quality results
          and maximum contribution to my team.
        </p>
      </div>
    </div>
  );
}

export default Slider;
