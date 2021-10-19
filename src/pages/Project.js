import React, { useState } from "react";
import styled from "styled-components";
import GlobalContact from "../components/GlobalContact";
import GlobalHeader from "../components/GlobalHeader";
import ProjectCard from "../components/ProjectCard";
import projectData from "../data/projectData";

import {
  FlexSection,
  MainSection,
  Section,
} from "../styled-components/GlobalComponents";

const filterBtn = ["All", ...new Set(projectData.map((item) => item.category))];

const Project = () => {
  const [filteredProject, setFilteredProject] = useState(projectData);
  const [active, setActive] = useState(filterBtn[0]);

  const handler = (item) => {
    setActive(item);
    if (item === "All") {
      setFilteredProject(projectData);
      return;
    }
    const filteredData = projectData.filter(
      (filler) => filler.category === item
    );
    setFilteredProject(filteredData);
  };
  return (
    <MainSection>
      <GlobalHeader
        heading="Front End Web Project"
        subHeading="Some of Project I worked on"
      />
      <FlexSection>
        <Section>
          <Category>
            {filterBtn.map((item, index) => (
              <Button
                active={active === item}
                key={index}
                onClick={() => handler(item)}
              >
                {item}
              </Button>
            ))}
          </Category>
          <ProjectSection>
            <ProjectCard project={filteredProject} />
          </ProjectSection>
        </Section>
      </FlexSection>
      <GlobalContact />
    </MainSection>
  );
};

const Category = styled.div`
  padding: 0.5rem 0;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  margin: 0.3rem;
  cursor: pointer;
  border: none;
  font-size: inherit;
  color: inherit;
  background: ${({ theme, active }) =>
    active ? theme.backgroundColor.highlight : theme.backgroundColor.contact};
  &:hover {
    background: ${({ theme }) => theme.BGHover.primary};
    transition: 0.3s all ease;
  }
`;

const ProjectSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: auto;
`;

export default Project;
