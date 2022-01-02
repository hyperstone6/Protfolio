import me from "../../images/Me.jpg";
import "./SidebarTop.css";

const SidebarTop = () => {
  return (
    <div className="sidebar-top">
      <div className="sidebar-top__img-container">
        <img src={me} alt="my profile" />
        <span className="blinker"></span>
        <span className="tooltip-sidebar-top" data-tooltip={"I'm available for hire"}></span>
      </div>
      <div className="sidebar-top__text">
        <h3>Sayed Mahmood</h3>
        <p>Front-end Developer</p>
      </div>
    </div>
  );
};

export default SidebarTop;
