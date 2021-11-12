import React from "react";
import styled from "styled-components";
import technology from "../data/homeIcon";

const TechnologySection = () => {
  return (
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
  );
};

const SkillSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
  grid-auto-rows: auto;
  gap: 0.5rem;
  @media (max-width: 800px) {
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  }
`;
const Span = styled.span`
  width: 100%;
  padding: 1rem 0.3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  cursor: pointer;
  border-radius: 4px;

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
