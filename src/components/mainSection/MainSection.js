import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Skill from "../../pages/Skill";
import Project from "../../pages/Project";
import Contact from "../../pages/Contact";

const MainSection = () => {
  const toggle = useSelector((state) => state.sidebar.toggle);
  return (
    <Section marginLeft={toggle ? "280px" : "70px"}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/skill" exact component={Skill} />
        <Route path="/project" exact component={Project} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
    </Section>
  );
};

const Section = styled.div`
  flex: 1;
  min-height: 100vh;
  margin-left: ${(props) => props.marginLeft};
  background: ${({ theme }) => theme.backgroundColor.primary};
`;
export default MainSection;
