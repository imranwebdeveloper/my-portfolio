import React from "react";
import styled from "styled-components";
import photos from "../images/webDeveloper.jpg";
import technology from "../data/homeIcon";

function About() {
  return (
    <HomeSection>
      <ContactSection>
        <ContentWrapper>
          <Content>
            <h3> Know Who I'm</h3>
            <p>
              <span>I'm Emran Nazir.</span>I am a 25 years old passionate
              Fullstack Web Developer based in Bangladesh who enjoys building
              software. Very positive and highly motivated person with over 2
              years of experience in building beautiful websites, web and mobile
              applications with a stronger focus on the frontend technologies.
            </p>
            <p>
              Right now I work as a Software Engineer at Confidence
              Infrastructure Limited, trying to make investing and saving money
              easier for all people in the Nordic countries. Outside work I
              really enjoy cooking delicious food, playing chess and video
              games, rewatching Marvel movies and lifting heavy
            </p>
          </Content>
          <ContentPhotos>
            <img src={photos} alt="img" />
          </ContentPhotos>
        </ContentWrapper>
      </ContactSection>
      <Section>
        <h1>Most Used Technologies</h1>
        <Technology>
          <SkillSection>
            {technology.map((icon) => {
              return (
                <Span className={icon.class} color={icon.color}>
                  {icon.icon}
                  <p>{icon.name}</p>
                </Span>
              );
            })}
          </SkillSection>
        </Technology>
      </Section>
      <Section>
        <h1> Startup & Work Experience</h1>
      </Section>
    </HomeSection>
  );
}

const HomeSection = styled.div`
  color: ${({ theme }) => theme.textColor.primary};
  min-height: 100vh;
  padding-top: 3rem;
  text-align: start;
`;
const ContactSection = styled.div`
  max-width: 90%;
  margin: 0 auto;
  border-radius: 5px;
  box-shadow: 2px 2px 10px -2px black;
`;
const ContentWrapper = styled.section`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;
const Content = styled.div`
  padding: 1rem;
  h3 {
    font-size: 2.5rem;
    color: white;
    text-align: center;
  }
  p {
    padding: 0 1rem 0.5rem 1rem;

    span {
      font-size: 1.7rem;
      color: ${({ theme }) => theme.textColor.highlight};
      margin-right: 0.5rem;
      font-weight: 600;
    }
  }
`;
const ContentPhotos = styled.div`
  min-width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    height: 100%;
    display: block;
    border-radius: 0 5px 5px 0;
    @media (max-width: 768px) {
      width: 70%;
      padding-top: 3rem;
    }
  }
`;
/////////////////////////////
// Technology////////////////////

const Section = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-top: 3rem;
  h1 {
    margin-left: 2rem;
    padding: 1rem 0;
  }
`;
const Technology = styled.div`
  margin-top: 1rem;
`;
const SkillSection = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: wrap;
  align-items: center;
`;
const Span = styled.span`
  width: 170px;
  padding: 1rem 0.3rem;
  display: flex;
  margin: 0.3rem;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  cursor: pointer;
  border-radius: 4px;
  @media (max-width: 768px) {
    width: 130px;
  }
  p {
    text-align: center;
  }
  &:hover {
    background: ${({ theme }) => theme.formBg};
    color: white;
  }
  svg {
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
    color: ${(props) => (props.color ? props.color : null)};
  }
`;

export default About;
