import Project01 from "./project01/Project01";
import Project02 from "./project02/Project02";
import Project03 from "./project03/Project03";
import Project04 from "./project04/Project04";
import Project05 from "./project05/Project05";
import Project06 from "./project06/Project06";
import "./Thumb.css";

const Thumb = (props) => {
  const classProject = 'project'
  const classGitHub = 'github'

  return (
  <div className='thumbnail-container'>
      <div className="thumbnail special">
        <Project01 />
        <span className="product-title">Furniture Store</span>
        <a
          href="https://sayed-aeki.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className={`goto-button ${classProject}`}
        >Project
        </a>
        <a
          href="https://github.com/hyperstone6/Aeki"
          target="_blank"
          rel="noopener noreferrer"
          className={`goto-button ${classGitHub}`}
        >GitHub
        </a>
      </div>
      <div className="thumbnail">
        <Project02 />
        <span className="product-title">Calculator</span>
        <a
          href="https://calculator-phi-blush.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className={`goto-button ${classProject}`}
        >Project
        </a>
        <a
          href="https://github.com/hyperstone6/Calculator"
          target="_blank"
          rel="noopener noreferrer"
          className={`goto-button ${classGitHub}`}
        >GitHub
        </a>
      </div>
      <div className="thumbnail">
        <Project03 />
        <span className="product-title">Todo App</span>
        <a
          href="https://todo-app-cml02ix62-hyperstone6.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className={`goto-button ${classProject}`}
        >Project
        </a>
        <a
          href="https://github.com/hyperstone6/Simple-Todo"
          target="_blank"
          rel="noopener noreferrer"
          className={`goto-button ${classGitHub}`}
        >GitHub
        </a>
      </div>
      <div className="thumbnail">
        <Project04 />
        <span className="product-title">Music Player</span>
        <a
          href="/"
          rel="noopener noreferrer"
          className={`goto-button ${classProject}`}
        >Coming Soon!
        </a>
      </div>
      <div className="thumbnail">
        <Project05 />
        <span className="product-title">Live Chat App</span>
        <a
          href="/"
          
          rel="noopener noreferrer"
          className="goto-button project"
        >Coming Soon!
        </a>
      </div>
      <div className="thumbnail">
        <Project06 />
        <span className="product-title">TicTacToe Game</span>
        <a
          href="/"
          
          rel="noopener noreferrer"
          className="goto-button project"
        >Coming Soon!
        </a>
      </div>
    </div>
  );
};
export default Thumb;
