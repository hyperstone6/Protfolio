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
          alt="project calculator"
          onClick={() => setModal(false)}
        />
      </div>
    );
  } else {
    return (
      <div className="modal">
        <iframe
          title="todo app"
          src="https://todo-app-cml02ix62-hyperstone6.vercel.app/"
        ></iframe>
      </div>
    );
  }
};

export default Project06;