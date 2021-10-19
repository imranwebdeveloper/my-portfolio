import styled from "styled-components";

const ArrSpan = styled.span`
  right: ${(props) => (props.right ? "20px" : "5px")};
  font-size: 40px;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${({ theme }) => theme.textColor.primary};
  transition: 0.3s all ease-in-out;
`;

export const GlobalSpan = styled.span`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${({ theme }) => theme.textColor.highlight};
  transition: 0.3s all ease-in-out;
  padding: 9px;
`;

export default ArrSpan;
