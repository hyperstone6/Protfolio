import { useState } from "react";
import agency from "../../../images/agency.png";
import "./Project04.css";

const Project04 = (props) => {
  const [modal, setModal] = useState(true);

  if (modal) {
    return (
      <div className="no-modal">
        <img
          className="project-img"
          src={agency}
          alt="project agency"
          onClick={() => setModal(false)}
        />
      </div>
    );
  } else {
    return (
      <div className="modal">
        <iframe
          title="todo app"
          src="https://digital-agency-henna.vercel.app/"
        ></iframe>
      </div>
    );
  }
};

export default Project04;