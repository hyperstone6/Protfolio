import { useState } from "react";
import chat from "../../../images/chat.png";
import "./Project05.css";

const Project05 = (props) => {
  const [modal, setModal] = useState(true);

  if (modal) {
    return (
      <div className="no-modal">
        <img
          className="project-img"
          src={chat}
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

export default Project05;