import { useState, useRef } from "react";
import SidebarTop from "./SidebarTop";
import SidebarMid from "./SidebarMid";
import SidebarBottom from "./SidebarBottom";
import "./Sidebar.css";

const Sidebar = () => {
  const [switchIt, setSwitchIt] = useState(false);
  const toggleRef = useRef();

  const switchHandler = (e) => {
    setSwitchIt(e.target.checked);
    toggleHandler(switchIt);
  };

  const toggleHandler = (switchIt) => {
    switchIt
      ? (toggleRef.current.style.transform = "translate(-100%)")
      : (toggleRef.current.style.transform = "translate(0%)");
  };

  return (
    <div className="sidebar" ref={toggleRef}>
      <div className="sidebar-hide">
        <input
          type={"checkbox"}
          className="toggle-sidebar"
          onChange={switchHandler}
        ></input>
      </div>

      <SidebarTop />
      <SidebarMid />
      <SidebarBottom />
    </div>
  );
};

export default Sidebar;
