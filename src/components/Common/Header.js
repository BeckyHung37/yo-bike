import React from "react";
import { Link } from "react-router-dom";
import { getYoBikeLogoIcon } from "../../utils/iconUtilis";

const Header = () => {
  return (
    <div className="header">
      <div className="header_container">
          <Link to="/" style={{width:'181px'}}>{getYoBikeLogoIcon()}</Link>
        <div className="nav_menu">
          <Link to="/" className="menu_rentbike">
            租/還車即時資訊
          </Link>
          <Link to="/" className="menu_routeinfo">
            路線資訊
          </Link>
          <a
            href="https://mshmwr.github.io/yo-taiwan/"
            target="_blank"
            rel="noreferrer"
            className="menu_landscape"
          >
            觀光資訊
          </a>
          <button className="btn_callforaction">今天想去哪？</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
