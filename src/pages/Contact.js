import React, { useState } from "react";
import styled from "styled-components";
import { Heading1, Heading5 } from "../styled-components/Heading";
import SocialProfileData from "../data/SocialProfileData";
import { InputField } from "../styled-components/Input";
import { Label } from "../styled-components/Label";
import { TextArea } from "../styled-components/TextArea";
import { Button } from "../styled-components/Button";

function Contact() {
  const [nameValue, setNameValue] = useState("");
  const [messageValue, setMessageValue] = useState("");
  const SubmitHandler = (event) => {
    event.preventDefault();
    setNameValue("");
    setMessageValue("");
  };
  return (
    <HomeSection>
      <ContactSection>
        <Heading1>Let's work together!</Heading1>
        <Heading5>How do you take your coffee?</Heading5>
        <SocialLink>
          {SocialProfileData.map((profile, index) => {
            return (
              <Link
                key={index}
                href={profile.link}
                target="_blank"
                rel="noreferrer"
              >
                <span>{profile.icon}</span>
                <span>{profile.linkName}</span>
              </Link>
            );
          })}
        </SocialLink>
        <Form onSubmit={SubmitHandler}>
          <FormGroup>
            <Label>Name</Label>
            <InputField
              type="text"
              value={nameValue}
              onChange={(e) => setNameValue(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label>Massage</Label>
            <TextArea
              value={messageValue}
              onChange={(e) => setMessageValue(e.target.value)}
            />
          </FormGroup>
          <Send type="submit">Send</Send>
        </Form>
      </ContactSection>
    </HomeSection>
  );
}
const HomeSection = styled.div`
  color: ${({ theme }) => theme.colorSec};
  min-height: 100vh;
  padding: 2rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ContactSection = styled.div`
  max-width: 90%;
  width: 1200px;
  margin: 0 auto;
  border-radius: 5px;
  box-shadow: 2px 2px 10px -2px black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const SocialLink = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.8rem;
  margin-top: 1rem;
  flex-flow: wrap;
`;
const Link = styled.a`
  width: 180px;
  font-weight: 550;
  text-shadow: 2px 2px 1px black;
  transition: transform 0.3s ease-out;
  color: ${({ theme }) => theme.colorSec};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin: 0.5rem;
  @media (max-width: 768px) {
    width: 150px;
  }
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    @media (max-width: 768px) {
      font-size: 1.2rem;
    }

    svg {
      font-size: 1.7rem;
      margin-right: 0.7rem;
      @media (max-width: 768px) {
        font-size: 1.4rem;
      }
    }
  }
  &:hover {
    transform: translateY(8px);
  }
`;
const Form = styled.form`
  min-width: 70%;
  background: ${({ theme }) => theme.formBg};
  padding: 1rem 2rem;
  border-radius: 4px;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const FormGroup = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const Send = styled(Button)`
  width: 120px;
  cursor: pointer;
  margin-top: 1rem;
  font-size: 1.2rem;
  align-self: flex-end;
  background-color: ${({ theme }) => theme.mainSectionBg};
  &:hover {
    background-color: ${({ theme }) => theme.sidebarBg};
  }
`;
export default Contact;
