import "./Header.css";

const Header = (props) => {
  
  return (
    <div className="header">
      <h1 className="header__slogan">Discover my Amazing Dev Space!</h1>
      <button onClick={() => props.handleClick()} className="header__cta-button">Explore My Work</button>
    </div>
  );
};

export default Header;
