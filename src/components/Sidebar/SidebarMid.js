import { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneSquare } from '@fortawesome/free-solid-svg-icons'
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import "./SidebarMid.css";

const SidebarMid = (props) => {
  const phoneIcon = <FontAwesomeIcon className="sidebar-icon" icon={faPhoneSquare} />
  const emailIcon = <FontAwesomeIcon className="sidebar-icon" icon={faEnvelopeOpenText} />

  const refs = {
    circleRef1: useRef(),
    circleRef2: useRef(),
    circleRef3: useRef(),
  };

  const [percentText1, setPercentText1] = useState(0);
  const [percentText2, setPercentText2] = useState(0);
  const [percentText3, setPercentText3] = useState(0);

  useEffect(() => {
    const offsetValues = {
      value1: 125,
      value2: 125,
      value3: 125,
    };
    const circleRefs = [
      refs.circleRef1, 
      refs.circleRef2, 
      refs.circleRef3,
    ];

    for (let i of circleRefs) {
      const radius = i.current.r.baseVal.value;
      const circumference = radius * 2 * Math.PI;
      const progressCircle = i.current.style;
      progressCircle.strokeDasharray = circumference;
      setProgress1();
      setProgress2();
      setProgress3();
    }
    function setProgress1() {
      refs.circleRef1.current.style.strokeDashoffset = offsetValues.value1;
      const valueChange1 = setInterval(() => {
        if (offsetValues.value1 > 0) {
          offsetValues.value1 -= 1;
          setProgress1();
        }
      }, 10);
      setPercentText1(100 - offsetValues.value1);
      if(percentText1 === 100) {
        clearInterval(valueChange1)
      }
    }
    function setProgress2() {
      refs.circleRef2.current.style.strokeDashoffset = offsetValues.value2;
      const valueChange2 = setInterval(() => {
        if (offsetValues.value2 > 30) {
          offsetValues.value2 -= 1;
          setProgress2();
        }
      }, 50)
      setPercentText2(100 - offsetValues.value2);
      if(percentText2 === 70) {
        clearInterval(valueChange2)
      }
    }
    function setProgress3() {
      refs.circleRef3.current.style.strokeDashoffset = offsetValues.value3;
      const valueChange3 = setInterval(() => {
        if (offsetValues.value3 > 10) {
          offsetValues.value3 -= 1;
          setProgress3();
        }
      }, 100)
      setPercentText3(100 - offsetValues.value3);
      if(percentText3 === 90) {
        clearInterval(valueChange3)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <div className="sidebar-mid">
      <div className="sidebar-wrapper">
        <ul>
          <li>
            <h6>Residence:</h6>
            <span>Canada</span>
          </li>
          <li>
            <h6>City:</h6>
            <span>Montreal</span>
          </li>
        </ul>
        <span className="linebreak"></span>
        <div className="circle-progress-container">
          <div className="circle-progress">
            <svg width={50} height={50}>
              <circle r={20} cx={26} cy={26} className="track"></circle>
              <circle
                r={20}
                cx={26}
                cy={26}
                className="progress progress-circle progress-1"
                ref={refs.circleRef1}
              ></circle>
            </svg>
            <span className="progress-percent">{`${percentText1}%`}</span>
            <span>English</span>
          </div>
          <div className="circle-progress">
            <svg width={50} height={50}>
              <circle r={20} cx={26} cy={26} className="track"></circle>
              <circle
                r={20}
                cx={26}
                cy={26}
                className="progress progress-circle progress-2"
                ref={refs.circleRef2}
              ></circle>
            </svg>
            <span className="progress-percent">{`${percentText2}%`}</span>
            <span>French</span>
          </div>
          <div className="circle-progress">
            <svg width={50} height={50}>
              <circle r={20} cx={26} cy={26} className="track"></circle>
              <circle
                r={20}
                cx={26}
                cy={26}
                className="progress progress-circle progress-3"
                ref={refs.circleRef3}
              ></circle>
            </svg>
            <span className="progress-percent">{`${percentText3}%`}</span>
            <span className="languages-spoken">
              Other <span className="other-asterisk">*</span>
            </span>
            <span
              className="tooltip-sidebar-languages"
              data-tooltip-languages={
                "Also fluent in Arabic, Hindi, Turkish, Persian and Uzbek. Currently learning Spanish"
              }
            ></span>
          </div>
        </div>
        <span className="linebreak"></span>
        <div className="line-progress">
          <ul>
            <li>
              <h6>HTML:</h6>

            </li>
          </ul>
          <svg viewBox="0 0 100 1.72" preserveAspectRatio="none">
            <path className="track" d="M 0,0.86 L 100,0.86"></path>
            <path
              className="progress progress-line progress-line-1"
              d="M 0,0.86 L 100,0.86"
            ></path>
          </svg>
        </div>
        <div className="line-progress">
          <ul>
            <li>
              <h6>CSS:</h6>
            </li>
          </ul>
          <svg viewBox="0 0 100 1.72" preserveAspectRatio="none">
            <path className="track" d="M 0,0.86 L 100,0.86"></path>
            <path
              className="progress progress-line progress-line-2"
              d="M 0,0.86 L 100,0.86"
            ></path>
          </svg>
        </div>
        <div className="line-progress">
          <ul>
            <li>
              <h6>JavaScript:</h6>
            </li>
          </ul>
          <svg viewBox="0 0 100 1.72" preserveAspectRatio="none">
            <path className="track" d="M 0,0.86 L 100,0.86"></path>
            <path
              className="progress progress-line progress-line-3"
              d="M 0,0.86 L 100,0.86"
            ></path>
          </svg>
        </div>
        <div className="line-progress">
          <ul>
            <li>
              <h6>React:</h6>
            </li>
          </ul>
          <svg viewBox="0 0 100 1.72" preserveAspectRatio="none">
            <path className="track" d="M 0,0.86 L 100,0.86"></path>
            <path
              className="progress progress-line progress-line-4"
              d="M 0,0.86 L 100,0.86"
            ></path>
          </svg>
        </div>
        <div className="line-progress">
          <ul>
            <li>
              <h6>Redux:</h6>
            </li>
          </ul>
          <svg viewBox="0 0 100 1.72" preserveAspectRatio="none">
            <path className="track" d="M 0,0.86 L 100,0.86"></path>
            <path
              className="progress progress-line progress-line-5"
              d="M 0,0.86 L 100,0.86"
            ></path>
          </svg>
        </div>
        <span className="linebreak"></span>
        <div className="extra-skills-container">
          <p className="extra-skills">Bootstrap, Bulma, Tailwind</p>
          <p className="extra-skills">Semantic UI, Sass, Stylus</p>
          <p className="extra-skills">NPM, Command line, Git</p>
          <p className="extra-skills">Work with (RESTful) APIs</p>
        </div>
        <span className="linebreak"></span>
        <div className="extra-skills-container">
        <div>{phoneIcon} <p className="contacts">+1 438 364 5017</p></div>
        <div>{emailIcon}<p className="contacts"><a href="mailto:palebluedot85@gmail.com">palebluedot85@gmail.com</a></p> </div>
        </div>
        <span className="linebreak-bottom"></span>
      </div>
    </div>
  );
};

export default SidebarMid;