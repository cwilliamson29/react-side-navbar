import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

function TopMenu({ item }) {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  const navLinkIcon = {
    fontSize: "20px",
    paddingLeft: "25px",
    paddingRight: "25px",
  };

  return (
    <>
      <NavLink
        style={navLinkIcon}
        className="nav-link bg-secondary"
        to={item.path}
        onClick={item.subNav && showSubnav}
      >
        <div className="nav-link">
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
              className="nav-link bg-dark"
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
