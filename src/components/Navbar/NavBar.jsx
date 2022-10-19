import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const NavBar = ({ children }) => {
  const [isCollapse, setCollapse] = useState(false);

  const handleClick = () => {
    setCollapse(!isCollapse);
  };

  return (
    <main>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
          <Link className="navbar-brand" to={"/"}>
            Mandzou
          </Link>
          <button className="navbar-toggler" type="button" onClick={handleClick}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isCollapse && "show"}`}>
            <ul className="navbar-nav">
              { children }
            </ul>
          </div>
        </div>
      </nav>
      <Outlet/>
    </main>
  );
};
export default NavBar;
