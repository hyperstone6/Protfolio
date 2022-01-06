import Project01 from "./project01/Project01";
import Project02 from "./project02/Project02";
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
    </div>
  );
};
export default Thumb;
