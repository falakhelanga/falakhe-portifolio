import React from "react";
import styled from "styled-components";
import Contact from "./Contact";
import TypeWriter from "./Typewritter";

const ContainerDiv = styled.div`
  height: 100%;
`;

const ImageDiv = styled.div`
  height: 150px;
  width: 150px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Image = styled.img`
  max-height: 100%;
  height: 100%;
  max-width: 100%;
  object-fit: contain;
`;

const Profile = () => {
  return (
    <ContainerDiv className="d-flex w-100 flex-column  align-items-center pt-2 ">
      {/* image div */}
      <ImageDiv>
        <Image src="/me2.jpg" alt="my profile image" />
      </ImageDiv>
      {/* type writer */}
      <div>
        <TypeWriter />
      </div>
      <Contact />
    </ContainerDiv>
  );
};

export default Profile;
