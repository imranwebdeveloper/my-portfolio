import React from "react";
import styled from "styled-components";
import { Heading1, Heading5 } from "../styled-components/Heading";

function Home() {
  return (
    <Container>
      <Introduce>
        <Heading1>
          Hello, I Am <NameHighlight>Emran Nazir</NameHighlight>
        </Heading1>
        <Heading5>A Front-End Web Developer & WordPress Expert</Heading5>
        <H3>
          Over the past 2 years, as a Front-End Web Developer, I have designed,
          developed and launched customized, highly responsive websites and
          e-commerce solutions using advanced technologies. Also developed
          dynamic and interactive web site that ensure high traffic, page views
          and smooth user experience.
        </H3>
      </Introduce>
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.textColor.secondary};
`;
const Introduce = styled.div`
  width: 65%;
  padding: 1rem;
`;
const H3 = styled.p`
  font-family: sans-serif;
  font-size: 1.2rem;
  line-height: 1.5;
  text-align: start;
`;

export const NameHighlight = styled.span`
  color: #f06a6a;
`;

// /////////////////////////////////////////////////////////

export default Home;
