import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
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
          <NavbarBrand href="/" className="mr-auto navbar-dark link-color">
            React-SideBar
          </NavbarBrand>
          <NavbarToggler className="custom-toggler" onClick={toggle} />
          <Collapse className="custom-toggler" isOpen={isOpen} navbar>
            <Nav navbar>
              {SidebarData.map((item, index) => {
                return (
                  <NavItem key={index}>
                    <TopMenu item={item} key={index} />
                  </NavItem>
                );
              })}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
      <div className="d-none d-sm-none d-md-none d-lg-block top-nav-mar bg-custom">
        <div className="col-10 logo">React-SideBar</div>
      </div>
    </>
  );
}

export default TopNav;
