import { useSelector } from "react-redux";
import styled from "styled-components";
import MenuList from "./MenuList";
import Profile from "./Profile";
import Toggle from "./Toggle";

const Menubar = () => {
  const toggle = useSelector((state) => state.sidebar.toggle);
  return (
    <Navbar width={toggle ? "280px" : "70px"}>
      <Profile />
      <MenuList />
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
`;
export default Menubar;
