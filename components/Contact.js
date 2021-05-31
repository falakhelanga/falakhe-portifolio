import React from "react";
import styled from "styled-components";
import PhoneIcon from "@material-ui/icons/Phone";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import EmailIcon from "@material-ui/icons/Email";
import SocialLinks from "./SocialMedia";
import Button from "./Button";

const Container = styled.div`
  width: 100%;
  background-color: #dbdddf;
  display: flex;
  flex-direction: column;
`;

const Contact = () => {
  return (
    <Container className="py-4 mt-3 px-3">
      <div className="phone d-flex">
        <PhoneIcon className="mr-1" fontSize="small" />
        068 260 8936
      </div>
      <div className="phone d-flex mt-2">
        <EmailIcon className="mr-1" fontSize="small" />
        sivelafj@gmail.com
      </div>
      <div className="phone d-flex mt-2">
        <LocationOnIcon className="mr-1" fontSize="small" />
        1750 Dubevilage, Inanda, 4309
      </div>
      <div className="d-flex justify-content-center mt-3">
        <SocialLinks />
      </div>
      <div className="mt-4">
        <Button href="mailto:sivelafj@gmail.com">Email me</Button>
      </div>
      <div className="mt-4">
        <Button href="/FALAKHE.pdf" download>
          Download CV
        </Button>
      </div>
    </Container>
  );
};

export default Contact;
