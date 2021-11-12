import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import GlobalContact from "../components/GlobalContact";
import img from "../images/Programer.png";
import {
  FlexSection,
  MainSection,
  User,
} from "../styled-components/GlobalComponents";
import { Heading1 } from "../styled-components/Heading";

function Home() {
  return (
    <MainSection>
      <FlexSection>
        <FlexBoxCenter>
          <Introduction>
            <Heading1 m>
              Hello, My name is <NameHighlight>Emran Nazir</NameHighlight>.
            </Heading1>
            <Heading1 m mb>
              A Front-End Web Developer & WordPress Theme Expert
            </Heading1>
            <p className="description">
              Over the past 2 years, as a Front-End Web Developer, I have
              designed, developed and launched customized, highly responsive
              websites and e-commerce solutions using advanced technologies.
              Also developed dynamic and interactive web site that ensure high
              traffic, page views and smooth user experience.
            </p>
            <Link to="/about">
              <LearnMore>
                <User>Learn More</User>
              </LearnMore>
            </Link>
          </Introduction>
          <Animation>
            <ImgContainer>
              <img src={img} alt="img" />
            </ImgContainer>
          </Animation>
        </FlexBoxCenter>
      </FlexSection>
      <GlobalContact transparent />
    </MainSection>
  );
}

export const NameHighlight = styled.span`
  color: ${({ theme }) => theme.textColor.highlight};
`;

const FlexBoxCenter = styled.div`
  width: 95%;
  margin: 0 auto;
  display: flex;
  flex: 1;
  @media (max-width: 800px) {
    flex-direction: column-reverse;
    text-align: center;
  }
`;
const Introduction = styled.div`
  flex: 1;
  min-width: 60%;
  align-self: center;
  padding-top: 2rem;
  .description {
    text-align: start;
  }
`;
const Animation = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImgContainer = styled.div`
  width: 100%;
  width: 80%;
  padding-top: 2rem;
  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;
const LearnMore = styled.div`
  margin-top: 1rem;
  height: 40px;
  display: flex;
  align-items: center;
`;
export default Home;
