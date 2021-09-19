import styled from "styled-components";

export const Heading1 = styled.p`
  font-size: 3.2rem;
  font-weight: bold;
  font-family: "DM Mono", monospace;
  color: ${({ theme }) => theme.color};
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;
export const Heading5 = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  font-family: "DM Mono", monospace;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;
