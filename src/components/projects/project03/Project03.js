import { useState } from "react";
import todo from "../../../images/todo.webp";
import "./Project03.css";

const Project03 = (props) => {
  const [modal, setModal] = useState(true);

  if (modal) {
    return (
      <div className="no-modal">
        <img
          className="project-img"
          src={todo}
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

export default Project03;