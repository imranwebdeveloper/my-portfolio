import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import GlobalContact from "../components/GlobalContact";
import img from "../images/Programer.png";
// import background from "../images/5570215.jpg";
import background2 from "../images/23627.jpg";
// import background3 from "../images/5641786.jpg";
import {
  FlexSection,
  MainSection,
  Section,
  User,
} from "../styled-components/GlobalComponents";
import { Heading1 } from "../styled-components/Heading";

function Home() {
  return (
    <HeroSection>
      <MainSection>
        <FlexSection>
          <Section>
            <FlexBoxCenter>
              <Introduction>
                <Heading1 m>
                  Hello, My name is <NameHighlight>Emran Nazir</NameHighlight>.
                </Heading1>
                <Heading1 m mb>
                  A Front-End Web Developer & WordPress Expert
                </Heading1>
                <p>
                  Over the past 2 years, as a Front-End Web Developer, I have
                  designed, developed and launched customized, highly responsive
                  websites and e-commerce solutions using advanced technologies.
                  Also developed dynamic and interactive web site that ensure
                  high traffic, page views and smooth user experience.
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
          </Section>
        </FlexSection>
        <GlobalContact transparent />
      </MainSection>
    </HeroSection>
  );
}

export const NameHighlight = styled.span`
  color: ${({ theme }) => theme.textColor.highlight};
`;
const HeroSection = styled.div`
  z-index: 1;
  background-image: linear-gradient(rgba(4, 13, 33, 0.9), rgba(4, 13, 33, 0.9)),
    url(${background2});
  background-size: cover;
`;
const FlexBoxCenter = styled.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
  @media (max-width: 800px) {
    flex-direction: column-reverse;
  }
`;
const Introduction = styled.div`
  flex: 1;
  min-width: 60%;
  padding-top: 2rem;
`;
const Animation = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImgContainer = styled.div`
  img {
    width: 100%;
    max-height: 450px;
    /* border: 1px solid red; */
    display: block;
  }
`;
const LearnMore = styled.div`
  margin-top: 1rem;
  height: 40px;
`;
export default Home;
