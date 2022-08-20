import React, { useState } from "react";
import { NavLink, DropdownItem } from "reactstrap";

function TopMenu({ item }) {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  const navLinkIcon = {
    fontSize: "20px",
    paddingLeft: "25px",
    paddingRight: "25px",
    color: "#11a4ba",
  };

  return (
    <>
      <NavLink
        style={navLinkIcon}
        className="nav-link bg-dark"
        to={item.path}
        onClick={item.subNav && showSubnav}
      >
        <div className="nav-link link-color">
          {item.icon} {item.title}
          <span className="menu-span">
            {item.subNav && subnav
              ? item.iconOpened
              : item.subNav
              ? item.iconClosed
              : null}
          </span>
        </div>
      </NavLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownItem
              style={navLinkIcon}
              className="sub-nav-link bg-dark"
              to={item.path}
              key={index}
            >
              {item.icon} {item.title}
            </DropdownItem>
          );
        })}
    </>
  );
}

export default TopMenu;
