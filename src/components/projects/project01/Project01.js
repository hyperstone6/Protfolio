import { useState } from "react";
import "./Project01.css";
import aeki from "../../../images/aeki.png";

const Project01 = (props) => {
  const [modal, setModal] = useState(true)

  if (modal) {
    return (
      <div className="no-modal">
        <img
          className="project-img"
          src={aeki}
          alt="project aeki"
          onClick={() => setModal(false)}
        />
      </div>
    );
  } else {
    return (
      <div className="modal">
        <iframe
          title="furniture store"
          src="https://sayed-aeki.netlify.app/"
        ></iframe>
      </div>
    );
  }
};

export default Project01;
