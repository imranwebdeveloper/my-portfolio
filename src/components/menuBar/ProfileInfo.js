import React from "react";
import styled from "styled-components";

function ProfileInfo() {
  return (
    <Header>
      <h4>Emran_Nazir</h4>
      <p>Front End Developer</p>
    </Header>
  );
}

const Header = styled.header`
  letter-spacing: 1.2px;
  h4 {
    color: ${({ theme }) => theme.textColor.secondary};
  }
  p {
    font-size: 0.75rem;
    color: ${({ theme }) => theme.textColor.primary};
  }
  @media (max-width: 800px) {
    display: none;
  }
`;

export default ProfileInfo;
