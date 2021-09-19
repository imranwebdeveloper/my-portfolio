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
  color: ${({ theme }) => theme.iconColor.primary};
  transition: 0.3s all ease-in-out;
`;

export default ArrSpan;
