import Project01 from "./project01/Project01";
import Project02 from "./project02/Project02";
import Project03 from "./project03/Project03";
import Project04 from "./project04/Project04";
import Project05 from "./project05/Project05";
import Project06 from "./project06/Project06";
import "./Thumb.css";

const Thumb = () => {
  return (
    <div className="thumbnail-container">
      <div className="thumbnail">
        <Project01 />
        <a
          href="https://sayed-aeki.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="goto-button"
        >Visit the Project
        </a>
      </div>
      <div className="thumbnail">
        <Project02 />
        <a
          href="https://calculator-phi-blush.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="goto-button"
        >Visit the Project
        </a>
      </div>
      <div className="thumbnail">
        <Project03 />
        <a
          href="https://todo-app-cml02ix62-hyperstone6.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="goto-button"
        >Visit the Project
        </a>
      </div>
      <div className="thumbnail">
        <Project04 />
        <a
          href="/"
          rel="noopener noreferrer"
          className="goto-button"
        >Coming Soon!
        </a>
      </div>
      <div className="thumbnail">
        <Project05 />
        <a
          href="/"
          
          rel="noopener noreferrer"
          className="goto-button"
        >Coming Soon!
        </a>
      </div>
      <div className="thumbnail">
        <Project06 />
        <a
          href="/"
          
          rel="noopener noreferrer"
          className="goto-button"
        >Coming Soon!
        </a>
      </div>
    </div>
  );
};
export default Thumb;
