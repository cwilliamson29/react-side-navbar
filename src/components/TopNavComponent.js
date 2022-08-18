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

function TopNav(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      {/*Primary Sidebar navigation responsive design*/}
      <div className="text-white col-12 d-block d-sm-block d-md-block d-lg-none bg-custom text-white">
        <Navbar {...args}>
          <NavbarBrand href="/" className="text-white">
            React-SideBar
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="me-auto" navbar></Nav>
          </Collapse>
        </Navbar>
      </div>
      <div className="text-white col-lg-2 col-xl-2 d-none d-sm-none d-md-none d-lg-block top-nav-mar bg-custom">
        <div className="text-right">
          <Navbar vertical className="text-white">
            <NavbarBrand href="/" className="text-white">
              React-SideBar
            </NavbarBrand>
          </Navbar>
        </div>
      </div>
    </>
  );
}

export default TopNav;
