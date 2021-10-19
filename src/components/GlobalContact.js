import React from "react";
import styled from "styled-components";
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";
import { FlexWrapper } from "../styled-components/GlobalComponents";
import { GlobalSpan } from "../styled-components/Span";

const GlobalContact = ({ transparent }) => {
  return (
    <ContactSection transparent={transparent}>
      <FlexWrapper>
        <Author>Designed & Develoved By AJ Emran_Nazir</Author>
        <Copyright>Copyright &copy; 2021</Copyright>
        <IconContainer>
          <GlobalSpan>
            <FaFacebookF />
          </GlobalSpan>
          <GlobalSpan>
            <FaLinkedin />
          </GlobalSpan>
          <GlobalSpan>
            <FaGithub />
          </GlobalSpan>
        </IconContainer>
      </FlexWrapper>
    </ContactSection>
  );
};

const ContactSection = styled.footer`
  width: 100%;
  padding: 0.8rem 0;
  background: ${({ theme, transparent }) =>
    transparent
      ? "linear - gradient(rgba(4, 13, 33, 0.9), rgba(4, 13, 33, 1))"
      : theme.backgroundColor.contact};
`;
const IconContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  @media (max-width: 800px) {
    justify-content: center;
  }
`;
const Copyright = styled.p`
  text-align: center;
  flex: 1;
  padding: 3px 0;
`;
const Author = styled.p`
  flex: 1;
  padding: 3px 0;
  @media (max-width: 800px) {
    text-align: center;
  }
`;

export default GlobalContact;
