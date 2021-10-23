import React from "react";
// import { useParams } from "react-router-dom";
import styled from "styled-components";
import GlobalContact from "../components/GlobalContact";
import GlobalHeader from "../components/GlobalHeader";
import PauseOnHover from "../components/Slider";
import Tag from "../components/TagContainer";
import projectData from "../data/projectData";
import {
  FlexSB,
  FlexSection,
  FlexWrapper,
  Heading,
  MainSection,
  User,
} from "../styled-components/GlobalComponents";

const ProjectDetails = () => {
  // const params = useParams();
  const item = projectData[6];

  return (
    <MainSection>
      <GlobalHeader
        heading="Front End Web Project"
        subHeading="Some of Project I worked on"
      />
      <FlexSection>
        <FlexWrapper>
          <Slider>
            <PauseOnHover />
          </Slider>
          <TagContainer>
            <TagWrapper>
              <Heading>Technology</Heading>
              <Tag item={item} />
            </TagWrapper>

            <TagWrapper height>
              <Heading>Specification</Heading>
              <OrderList>
                <li>Clean Code</li>
                <li>Pixel Perfect</li>
                <li>Used Modern CSS Syntax</li>
                <li>Used Vanilla JavaScript</li>
                <li>Responsive Design</li>
                <li>Cross Platform Capability </li>
                <li>Font Awesome, Google Front </li>
                <li> Jquery UI</li>
              </OrderList>
            </TagWrapper>
            <TagWrapper>
              <FlexSB>
                <LiveLink href="https://github.com">
                  Source Code: <User>https://github.com </User>
                </LiveLink>
                <LiveLink href="https://github.com">
                  Demo: <User>https://github.com </User>
                </LiveLink>
              </FlexSB>
            </TagWrapper>
          </TagContainer>
        </FlexWrapper>
      </FlexSection>
      <GlobalContact />
    </MainSection>
  );
};

const Slider = styled.div`
  width: 50%;
  background: ${({ theme }) => theme.backgroundColor.contact};
  margin: 0.5rem 0;
  position: relative;
  display: block;
  @media (max-width: 800px) {
    width: 100%;
  }
`;
const TagContainer = styled.div`
  flex: 1;
  margin: 0.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const TagWrapper = styled.div`
  padding: 1rem;
  background: ${({ theme }) => theme.backgroundColor.contact};
  height: ${({ height }) => height && "100%"};
`;

const LiveLink = styled.a`
  /* text-align: ${({ align }) => (align ? "start" : "end")}; */
  padding: 2px 0;
  border: 1px solid red;
`;
const OrderList = styled.ul`
  padding-left: 1rem;
`;
export default ProjectDetails;
