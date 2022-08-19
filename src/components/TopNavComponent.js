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
import TopMenu from "./TopMenuComponent";
import { SidebarData } from "./sidebar-data";

function TopNav(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="col-12 d-block d-sm-block d-md-block d-lg-none bg-custom">
        <Navbar dark expand="lg">
          <NavbarBrand href="/" className="mr-auto navbar-dark">
            React-SideBar
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav navbar>
              {SidebarData.map((item, index) => {
                return (
                  <NavItem>
                    <TopMenu item={item} key={index} />
                  </NavItem>
                );
              })}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
      <div className="d-none d-sm-none d-md-none d-lg-block top-nav-mar bg-custom">
        <div className="col-10">React-SideBar</div>
      </div>
    </>
  );
}

export default TopNav;
