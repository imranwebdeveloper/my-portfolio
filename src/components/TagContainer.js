import React from "react";
import styled from "styled-components";

const Tag = ({ item }) => {
  return (
    <TagWrapper>
      {item.designTech.map((tag, index) => {
        return <span key={index}>{tag}</span>;
      })}
    </TagWrapper>
  );
};

const TagWrapper = styled.div`
  display: flex;
  flex-flow: wrap;
  align-content: center;
  gap: 0.5rem;
  span {
    border-radius: 2px;
    font-size: 0.8rem;
    padding: 0.3rem 1rem;
    background: ${({ theme }) => theme.backgroundColor.secondary};
  }
`;

export default Tag;
