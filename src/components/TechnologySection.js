import React from "react";
import styled from "styled-components";
import technology from "../data/homeIcon";

const TechnologySection = () => {
  return (
    <Technology>
      <SkillSection>
        {technology.map((icon, index) => {
          return (
            <Span key={index} className={icon.class} color={icon.color}>
              {icon.icon}
              <p>{icon.name}</p>
            </Span>
          );
        })}
      </SkillSection>
    </Technology>
  );
};

const Technology = styled.div``;
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
    background: ${({ theme }) => theme.hoverBg.primary};
    color: white;
  }
  svg {
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
    color: ${(props) => (props.color ? props.color : null)};
  }
`;
export default TechnologySection;
