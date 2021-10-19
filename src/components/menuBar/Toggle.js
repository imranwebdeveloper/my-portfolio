import ArrSpan from "../../styled-components/Span";
import { useSelector, useDispatch } from "react-redux";
import { show, hide } from "../../slices/sidebarSlice";

import * as Md from "react-icons/md";
import styled from "styled-components";

function Toggle() {
  const toggle = useSelector((state) => state.sidebar.toggle);
  const dispatch = useDispatch();
  return (
    <SideBarToggle>
      {toggle ? (
        <ArrSpan onClick={() => dispatch(hide())}>
          <Md.MdKeyboardArrowLeft />
        </ArrSpan>
      ) : (
        <ArrSpan right onClick={() => dispatch(show())}>
          <Md.MdKeyboardArrowRight />
        </ArrSpan>
      )}
    </SideBarToggle>
  );
}

const SideBarToggle = styled.div`
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: ${({ theme }) => theme.hoverBg.primary};
  }
`;
export default Toggle;
