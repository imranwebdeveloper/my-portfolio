import React from "react";
import TechnologySection from "../components/TechnologySection";
import TimelineSection from "../components/TimelineSection";
import IntroductionSection from "../components/IntroductionSection";
import {
  AboutSectionH1,
  MainSection,
  Section,
} from "../styled-components/GlobalComponents";
import GlobalContact from "../components/GlobalContact";
import GlobalHeader from "../components/GlobalHeader";

function About() {
  return (
    <MainSection>
      <GlobalHeader heading="Know Who I AM !" />
      <Section>
        <IntroductionSection />
      </Section>
      <Section>
        <AboutSectionH1>Most Used Technologies</AboutSectionH1>
        <TechnologySection />
      </Section>
      <Section>
        <AboutSectionH1> Startup & Work Experience</AboutSectionH1>
        <TimelineSection current="true" />
        <TimelineSection />
        <TimelineSection />
        <TimelineSection />
      </Section>
      <GlobalContact />
    </MainSection>
  );
}

// ////////////////////////////////////
// Startup And Work Experience
// const Timeline = styled.div`
//   display: flex;
//   flex-flow: wrap;
// `;
// const TimelineDate = styled.div`
//   text-align: end;
//   padding-right: 1.5rem;
//   min-width: 300px;
//   @media (max-width: 800px) {
//     display: none;
//   }
//   small {
//     color: gray;
//   }
//   p {
//     color: white;
//     font-size: 0.9rem;
//   }
// `;
// const TimelineArray = styled.div`
//   position: relative;
//   border-left: 1px solid gray;
//   ::after {
//     content: "";
//     width: 16px;
//     height: 16px;
//     background: ${({ current, theme }) =>
//       !current ? theme.backgroundColor.highlight : "#eee"};
//     position: absolute;
//     border-radius: 50%;
//     top: 0;
//     left: -8px;
//   }
// `;
// const TimelineContent = styled.article`
//   flex: 1;
//   padding-left: 1.5rem;
//   header {
//     color: ${({ theme }) => theme.textColor.secondary};
//     font: 600 1.33em / 1.2 "Raleway", Helvetica, Arial, sans-serif;
//   }
//   ul {
//     padding: 1rem 1rem 2rem 1rem;
//   }

//   /* border-left: 1px solid #eee; */
// `;
// const Company = styled.span`
//   color: ${({ theme }) => theme.textColor.highlight};
// `;
export default About;
