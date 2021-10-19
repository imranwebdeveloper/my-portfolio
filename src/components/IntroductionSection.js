import React from "react";
import styled from "styled-components";
import photos from "../images/webDeveloper.jpg";

const IntroductionSection = () => {
  return (
    <ContentWrapper>
      <Content>
        <p>
          <span>I'm Emran Nazir.</span>I am a 25 years old passionate Fullstack
          Web Developer based in Bangladesh who enjoys building software. Very
          positive and highly motivated person with over 2 years of experience
          in building beautiful websites, web and mobile applications with a
          stronger focus on the frontend technologies.
        </p>
        <p>
          Right now I work as a Software Engineer at Confidence Infrastructure
          Limited, trying to make investing and saving money easier for all
          people in the Nordic countries. Outside work I really enjoy cooking
          delicious food, playing chess and video games, rewatching Marvel
          movies and lifting heavy
        </p>
      </Content>
      <ContentPhotos>
        <img src={photos} alt="img" />
      </ContentPhotos>
    </ContentWrapper>
  );
};
const ContentWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  box-shadow: 0px 0px 5px -2px black;

  @media (max-width: 800px) {
    flex-direction: column-reverse;
  }
`;
const Content = styled.div`
  padding: 1rem;
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
    @media (max-width: 800px) {
      width: 70%;
      padding-top: 3rem;
    }
  }
`;

export default IntroductionSection;
