import { useState } from "react";
import tictactoe from "../../../images/tictactoe.webp";
import "./Project06.css";

const Project06 = (props) => {
  const [modal, setModal] = useState(true);

  if (modal) {
    return (
      <div className="no-modal">
        <img
          className="project-img"
          src={tictactoe}
          alt="Project Refund Tracker"
          onClick={() => setModal(false)}
        />
      </div>
    );
  } else {
    return (
      <div className="modal">
        <iframe
          title="Refunc Tracker"
          src="https://refund-tracker.vercel.app/"
        ></iframe>
      </div>
    );
  }
};

export default Project06;