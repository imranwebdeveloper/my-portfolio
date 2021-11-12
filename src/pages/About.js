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

export default About;
