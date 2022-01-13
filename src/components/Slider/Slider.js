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
            href="https://drive.google.com/file/d/1Q0KSYSUBLqEYdEBKNR3XlZFvqA6B2WeK/view?usp=sharing"
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
          From the moment I wrote my first code, I knew I was destined to become
          a developer. Software development isn't "merely a job" for me, but a
          passion and a full-fledged, life-long engaging challenge to
          continually learn and grow, while striving to improve my skills and
          write great software. The more software I write, the more I fall in
          love with the development field. Please click on the button above to
          explore some of my work and hover over my image to download my CV.
        </p>
      </div>
    </div>
  );
}

export default Slider;
