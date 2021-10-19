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
      {toggle && <ProfileInfo />}
    </AvatarSection>
  );
};

const AvatarSection = styled.section`
  width: 100%;
  padding: 15px 2%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ProfileImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export default Profile;
