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
import NavInfo from "./NavigationInfo";

function SideNavbar(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      {/*Primary Sidebar navigation responsive design*/}
      <div className="col-12 bg-primary d-block d-sm-block d-md-block d-lg-none">
        <Navbar {...args}>
          <NavbarBrand href="/">React-SideBar</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="me-auto" navbar>
              <NavInfo />
            </Nav>
          </Collapse>
        </Navbar>
      </div>
      <div className="col-lg-2 col-xl-2 bg-primary d-none d-sm-none d-md-none d-lg-block">
        <div className="bg-primary text-right">
          <Nav vertical>
            <NavbarBrand href="/">Main Menu</NavbarBrand>

            <NavInfo />
          </Nav>
        </div>
      </div>
    </>
  );
}

export default SideNavbar;
