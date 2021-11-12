import styled from "styled-components";
export const FlexSBC = styled.div`
  display: flex;
  flex: 1;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
export const FlexColJC = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;
