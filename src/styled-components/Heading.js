import styled from "styled-components";

export const Heading1 = styled.p`
  font-size: ${({ m }) => (m ? "2.4rem" : "3rem")};
  font-weight: bold;
  line-height: 1.2;
  color: ${({ theme }) => theme.textColor.secondary};
  margin-bottom: ${({ mb }) => mb && "0.8rem"};
  @media (max-width: 800px) {
    font-size: 2rem;
  }
`;
export const Heading5 = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: 800px) {
    font-size: 0.9rem;
  }
`;
export const HeadingH3 = styled.p`
  font-size: 1.5rem;
  color: inherit;
  margin-bottom: ${({ mb }) => mb && "1rem"};

  @media (max-width: 800px) {
    font-size: 1.1rem;
  }
`;
