import React, { useState } from "react";
import styled from "styled-components";
import SocialProfileData from "../data/SocialProfileData";
import { InputField } from "../styled-components/Input";
import { Label } from "../styled-components/Label";
import { TextArea } from "../styled-components/TextArea";
import { Button } from "../styled-components/Button";
import {
  FlexSection,
  Heading,
  Section,
  User,
} from "../styled-components/GlobalComponents";
import GlobalContact from "../components/GlobalContact";
import { FlexSBC } from "../styled-components/FlexComponents";
import GlobalHeader from "../components/GlobalHeader";

function Contact() {
  const [emailValue, SetEmailValue] = useState("");
  const [messageValue, setMessageValue] = useState("");
  const [userName, setUserName] = useState("");
  const SubmitHandler = (event) => {
    event.preventDefault();
    SetEmailValue("");
    setMessageValue("");
    setUserName("");
  };
  return (
    <MainSection>
      <GlobalHeader heading="Let's work together!'" />
      <FlexSection>
        <Section>
          <FlexSBC>
            <SocialLink>
              <Heading>Where to find me</Heading>
              <p>
                Do you have an interesting project I can help with? Feel free to
                reach out to me by using one of the following:
              </p>
              <ul>
                {SocialProfileData.map((profile, index) => {
                  return (
                    <li key={index}>
                      <a href={profile.link} target="_blank" rel="noreferrer">
                        <Icon>{profile.icon}</Icon>
                        <span>{profile.linkName}:</span>
                        <User> {profile.user}</User>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </SocialLink>
            <Form onSubmit={SubmitHandler}>
              <Heading>Contact Form</Heading>
              <FormGroup>
                <Label>Full Name</Label>
                <InputField
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Enter Your Full Name"
                />
              </FormGroup>
              <FormGroup>
                <Label>Name</Label>
                <InputField
                  type="text"
                  value={emailValue}
                  onChange={(e) => SetEmailValue(e.target.value)}
                  placeholder="Enter Your email"
                />
              </FormGroup>
              <FormGroup>
                <Label>Massage</Label>
                <TextArea
                  value={messageValue}
                  onChange={(e) => setMessageValue(e.target.value)}
                  placeholder="Enter Your Message"
                />
              </FormGroup>
              <Send type="submit">Send</Send>
            </Form>
          </FlexSBC>
        </Section>
      </FlexSection>
      <GlobalContact />
    </MainSection>
  );
}
const MainSection = styled.div`
  min-height: 100vh;
  color: ${({ theme }) => theme.textColor.primary};
  display: flex;
  flex-direction: column;
`;

const SocialLink = styled.section`
  flex: 1;
  padding: 0 1rem;
  ul {
    padding: 1rem;
    li {
      margin-bottom: 5px;
      a {
        padding: 0.3rem 0;
        display: flex;
        align-items: center;
      }
    }
  }
`;

const Form = styled.form`
  flex: 1;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.3rem 0;
`;
const Send = styled(Button)`
  width: 120px;
  cursor: pointer;
  margin-top: 0.5rem;
  align-self: flex-start;
  background-color: ${({ theme }) => theme.backgroundColor.primary};
  border: 1px solid ${({ theme }) => theme.borderColor.secondary};
  color: inherit;
  &:hover {
    background-color: ${({ theme }) => theme.backgroundColor.secondary};
  }
`;

const Icon = styled.span`
  padding-right: 0.5rem;
  display: flex;
  align-items: center;
`;

export default Contact;
