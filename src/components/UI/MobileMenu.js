import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import menuListItems from "../../data/menuListData";
import { mobileToggle } from "../../slices/sidebarSlice";
import { Nav, NavList } from "../../styled-components/NavElement";
import { AvatarSection, ProfileImg } from "../menuBar/Profile";
import OverlayModal from "./Overlay";
import img from "../../images/webDeveloper.jpg";
import ProfileInfo from "../menuBar/ProfileInfo";

const MobileMenu = () => {
  const itemNameHide = useSelector((state) => state.sidebar.mobileToggle);
  const dispatch = useDispatch();

  return (
    <>
      {itemNameHide && (
        <>
          <OverlayModal
            isOpen={itemNameHide}
            handler={() => dispatch(mobileToggle())}
          />
          <MobileNavbar>
            <CloseNavbar onClick={() => dispatch(mobileToggle())}>
              <AiOutlineClose />
            </CloseNavbar>
            <AvatarSection>
              <ProfileImg src={img} />
              <ProfileInfo />
            </AvatarSection>
            <Nav>
              {menuListItems.map((listItem, index) => {
                const { link, name, icon, className } = listItem;
                return (
                  <NavList key={index} onClick={() => dispatch(mobileToggle())}>
                    <NavLink
                      exact
                      to={`/${link}`}
                      className={className}
                      activeClassName="active"
                    >
                      <span className="menu-icon">{icon}</span>
                      <span className="menu-name">{name}</span>
                    </NavLink>
                  </NavList>
                );
              })}
            </Nav>
          </MobileNavbar>
        </>
      )}
    </>
  );
};

const MobileNavbar = styled.nav`
  width: 240px;
  height: 100vh;
  background: ${({ theme }) => theme.backgroundColor.secondary};
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  z-index: 15;
  position: fixed;
  top: 0;
  left: 0;
  @media (min-width: 799px) {
    display: none;
  }
`;
const CloseNavbar = styled.button`
  position: absolute;
  top: 20px;
  right: -70px;
  padding: 0.5rem 1rem;
  background: rgba(0, 0, 0, 0);
  border: none;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.textColor.highlight};
  }

  svg {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.textColor.secondary};
    &:hover {
      color: ${({ theme }) => theme.textColor.highlight};
    }
  }
`;
export default MobileMenu;
