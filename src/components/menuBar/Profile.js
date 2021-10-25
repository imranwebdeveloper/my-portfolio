import React from "react";
import styled from "styled-components";
import img from "../../images/webDeveloper.jpg";
import { useSelector } from "react-redux";
import ProfileInfo from "./ProfileInfo";

const Profile = () => {
  const toggle = useSelector((state) => state.sidebar.toggle);

  return (
    <AvatarSection>
      <ProfileImg src={img} />
      <ProfileContainer>{toggle && <ProfileInfo />}</ProfileContainer>
    </AvatarSection>
  );
};

export const AvatarSection = styled.section`
  padding: 1rem 2%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const ProfileImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
const ProfileContainer = styled.div`
  @media (max-width: 799px) {
    display: none;
  }
`;
export default Profile;
