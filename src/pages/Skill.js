import React from "react";
import styled from "styled-components";

function Skill() {
  return (
    <Container>
      <div>Styled Components</div>
      <div>Styled Components</div>
      <div>Styled Components</div>
      <div>Styled Components</div>
      <div>Styled Components</div>
      <div>Styled Components</div>
      <div>Styled Components</div>
      <div>Styled Components</div>
      <div>Styled Components</div>
      <div>Styled Components</div>
      <div>Styled Components</div>
      <div>Styled Components</div>
      <div>Styled Components</div>
      <div>Styled Components</div>
      <div>Styled Components</div>
      <div>Styled Components</div>
      <div>Styled Components</div>
      <div>Styled Components</div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  height: 400px;
  border: 1px solid red;
  width: 400px;
  flex-flow: wrap;
  div {
    border: 1px solid red;
    height: 100px;
    width: 100px;
  }
`;

export default Skill;
