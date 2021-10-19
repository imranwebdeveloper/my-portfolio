import React from "react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Tag from "./TagContainer";

const ProjectCard = ({ project }) => {
  return project.map((item, index) => {
    return (
      <Card key={index}>
        <Link to={`/project/${item.projectLink}`}>
          <Image>
            <img src={item.projectImg} alt="img" />
          </Image>
          <header>
            <h3>{item.projectName}</h3>
            <p>{item.projectDescription}</p>
          </header>
          <HoverCard className="hovered">
            <Eye>
              <FaEye />
            </Eye>
            <TagContainer>
              {/* <div>
                {item.designTech.map((tag, index) => {
                  return <span key={index}>{tag}</span>;
                })}
              </div> */}
              <Tag item={item} />
            </TagContainer>
          </HoverCard>
        </Link>
      </Card>
    );
  });
};
const Card = styled.div`
  position: relative;
  margin: 0.5rem;
  background: ${({ theme }) => theme.backgroundColor.contact};
  header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 90px;
    padding: 0 1rem;
  }
  &:hover .hovered {
    visibility: visible;
  }
  &:hover header {
    visibility: hidden;
  }
`;
const HoverCard = styled.div`
  background: rgba(22, 32, 58, 0.5);
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  visibility: hidden;
  display: flex;
  flex-direction: column;
`;
const Image = styled.div`
  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

const Eye = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  svg {
    width: 50px;
    height: 50px;
  }
`;
const TagContainer = styled.div`
  height: 90px;
  display: flex;
  align-items: center;
  padding: 1rem;
`;

export default ProjectCard;
