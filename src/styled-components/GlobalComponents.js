import styled from "styled-components";

export const MainSection = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const FlexSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
`;
export const Section = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 1.5rem 0;
`;
export const AboutSectionH1 = styled.h1`
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.textColor.secondary};
`;

export const FlexWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  height: 100%;
  flex: 1;
  gap: 0.5rem;
  @media (max-width: 800px) {
    display: block;
  }
`;
export const Heading = styled.h2`
  color: ${({ theme }) => theme.textColor.secondary};
  margin-bottom: 1rem;
`;
export const User = styled.span`
  color: ${({ theme }) => theme.textColor.highlight};
  padding-left: 0.2rem;
  display: flex;
  align-items: center;

  &:hover {
    text-decoration: underline;
  }
`;
export const FlexSB = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
`;
