import React from "react";
import styled from "styled-components";
import { FlexColJC } from "../styled-components/FlexComponents";
import { Section } from "../styled-components/GlobalComponents";
import { Heading1, HeadingH3 } from "../styled-components/Heading";

const GlobalHeader = ({ heading, subHeading }) => {
  return (
    <HeaderSection>
      <Section>
        <FlexColJC>
          <Heading1>{heading}</Heading1>
          {subHeading && <HeadingH3>{subHeading}</HeadingH3>}
        </FlexColJC>
      </Section>
    </HeaderSection>
  );
};

const HeaderSection = styled.section`
  background: ${({ theme }) => theme.backgroundColor.contact};
  height: 130px;
  display: flex;
  align-items: center;
`;
export default GlobalHeader;
