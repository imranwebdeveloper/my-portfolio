import ArrSpan from "../../styled-components/Span";
import { useSelector, useDispatch } from "react-redux";
import { toggle, mobileToggle } from "../../slices/sidebarSlice";

import * as Md from "react-icons/md";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";

function Toggle() {
  const toggleBar = useSelector((state) => state.sidebar.toggle);
  const dispatch = useDispatch();
  return (
    <SideBarToggle>
      <ArrSpan onClick={() => dispatch(toggle())} className="desktop">
        {toggleBar ? <Md.MdKeyboardArrowLeft /> : <Md.MdKeyboardArrowRight />}
      </ArrSpan>
      <ArrSpan className="mobile" onClick={() => dispatch(mobileToggle())}>
        <FaBars />
      </ArrSpan>
    </SideBarToggle>
  );
}

const SideBarToggle = styled.div`
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background: ${({ theme }) => theme.hoverBg.primary};
  }
  .desktop {
    @media (max-width: 800px) {
      display: none;
    }
  }
  .mobile {
    padding: 1rem;
    font-size: 22px;
    @media (min-width: 799px) {
      display: none;
    }
  }
`;
export default Toggle;
