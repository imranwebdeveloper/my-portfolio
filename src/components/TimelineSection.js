import React from "react";
import styled from "styled-components";

const TimelineSection = ({ current }) => {
  return (
    <Timeline>
      <TimelineDate>
        <small>May,2019 - Present </small>
        <p>Bangladesh</p>
      </TimelineDate>
      <TimelineArray current={current}></TimelineArray>
      <TimelineContent>
        <header>
          <span>Computer Operator - </span>
          <Company>Confidence Group Ltd.</Company>
        </header>
        <ul>
          <li>
            <p>
              Took part in building and releasing the mortgage application
              project for Swedish market.
            </p>
          </li>
          <li>
            <p>
              Trackers follow you around online to collect information about
              your browsing habits and interests. Firefox blocks many of these
              trackers and other malicious scripts.
            </p>
          </li>
        </ul>
      </TimelineContent>
    </Timeline>
  );
};

const Timeline = styled.div`
  display: flex;
`;
const TimelineDate = styled.div`
  text-align: end;
  padding-right: 1.5rem;
  min-width: 20%;
  @media (max-width: 800px) {
    display: none;
  }
  small {
    color: gray;
  }
  p {
    color: white;
    font-size: 0.9rem;
  }
`;
const TimelineArray = styled.div`
  position: relative;
  border-left: 1px solid gray;
  ::after {
    content: "";
    width: 16px;
    height: 16px;
    background: ${({ current, theme }) =>
      current ? theme.backgroundColor.highlight : "#eee"};
    position: absolute;
    border-radius: 50%;
    top: 0;
    left: -8px;
  }
`;
const TimelineContent = styled.article`
  flex: 1;
  padding-left: 1.5rem;
  header {
    color: ${({ theme }) => theme.textColor.secondary};
    font: 600 1.33em / 1.2 "Raleway", Helvetica, Arial, sans-serif;
    @media (max-width: 800px) {
      font-size: 1rem;
    }
  }
  ul {
    padding: 1rem 1rem 2rem 1rem;
  }
`;
const Company = styled.span`
  color: ${({ theme }) => theme.textColor.highlight};
`;
export default TimelineSection;
