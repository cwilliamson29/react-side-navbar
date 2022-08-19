import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import { SidebarData } from "./sidebar-data";
import SubMenu from "./SubMenuComponent";
import IconMenu from "./IconMenuComponent";

const Nav = styled.div`
  background: #131429;
  width: 80px;
  margin-right: 10px;
  z-index: 0;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SideBarNav = styled.div`
  background: #131429;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 11;
`;
const IconBarNav = styled.div`
  background: #131429;
  width: 80px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

function SideBar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <Nav className="d-none d-sm-none d-md-none d-lg-block">
      <IconBarNav>
        <SidebarWrap>
          <NavIcon to="#">
            <FaIcons.FaArrowCircleRight
              style={{ color: "#11a4ba" }}
              onClick={showSidebar}
            />
          </NavIcon>

          {SidebarData.map((item, index) => {
            return <IconMenu item={item} key={index} />;
          })}
        </SidebarWrap>
      </IconBarNav>

      <SideBarNav sidebar={sidebar}>
        <SidebarWrap>
          <NavIcon to="#">
            <FaIcons.FaArrowCircleLeft
              style={{ color: "#11a4ba" }}
              onClick={showSidebar}
            />
          </NavIcon>
          {SidebarData.map((item, index) => {
            return <SubMenu item={item} key={index} />;
          })}
        </SidebarWrap>
      </SideBarNav>
    </Nav>
  );
}

export default SideBar;
