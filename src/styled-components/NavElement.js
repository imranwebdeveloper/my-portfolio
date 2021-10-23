import styled from "styled-components";

export const Nav = styled.ul`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: ${({ center }) => (center ? "center" : "start")};
`;
export const NavList = styled.li`
  display: flex;
  align-items: center;
  transition: 0.5s all ease;

  .menuListItem {
    padding: 0.8em 1em;
    height: 100%;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.textColor.secondary};

    &:hover {
      color: ${({ theme }) => theme.hoverTextColor.primary};
    }
    .menu-icon {
      font-size: 1.5rem;
      height: 100%;
      display: flex;
      align-items: center;
    }
    .menu-name {
      letter-spacing: 1.2px;
      padding-left: 0.8em;
      height: 100%;
      display: flex;
      align-items: center;
    }
  }
  .active {
    color: ${({ theme }) => theme.textColor.highlight};
  }
  &:hover {
    background-color: ${({ theme }) => theme.hoverBg.primary};
  }
`;
