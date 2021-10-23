import { useSelector } from "react-redux";
import styled from "styled-components";
import MenuList from "./MenuList";
import Profile from "./Profile";
import Toggle from "./Toggle";

const Menubar = () => {
  const toggle = useSelector((state) => state.sidebar.toggle);
  return (
    <Navbar width={toggle ? "200px" : "70px"}>
      <Profile />
      <MenuSection>
        <MenuList />
      </MenuSection>
      <Toggle />
    </Navbar>
  );
};

const Navbar = styled.div`
  position: fixed;
  width: ${(props) => props.width};
  top: 0px;
  left: 0px;
  height: 100%;
  z-index: 1;
  background: ${({ theme }) => theme.backgroundColor.secondary};
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 800px) {
    width: 100%;
    position: relative;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
  }
`;
const MenuSection = styled.div`
  flex: 1;
  @media (max-width: 800px) {
    display: none;
  }
`;
export default Menubar;
