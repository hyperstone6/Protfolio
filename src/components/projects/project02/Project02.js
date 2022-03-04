import { useState } from "react";
import calc from "../../../images/calc.png";
import "./Project02.css";

const Project02 = (props) => {
  const [modal, setModal] = useState(true);

  if (modal) {
    return (
      <div className="no-modal">
        <img
          className="project-img"
          src={calc}
          alt="project calculator"
          onClick={() => setModal(false)}
        />
      </div>
    );
  } else {
    return (
      <div className="modal">
        <iframe
          title="calculator"
          src="https://calculator-phi-blush.vercel.app/"
        ></iframe>
      </div>
    );
  }
};

export default Project02;
