import { useState } from "react";
import music from "../../../images/music.jpg";
import "./Project04.css";

const Project04 = (props) => {
  const [modal, setModal] = useState(true);

  if (modal) {
    return (
      <div className="no-modal">
        <img
          className="project-img"
          src={music}
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

export default Project04;