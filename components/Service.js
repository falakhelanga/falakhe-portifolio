import styled from "styled-components";
import Content from "./Content";
const Container = styled.div`
  width: 400px;
  height: 130px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.8);
  border-radius: 10px;
`;

const Title = styled.h4`
  font-weight: bold;
`;
const ContentDiv = styled.div`
  height: 100%;
  width: 100%;

  color: #dbdddf;
`;
const Service = ({ image, title, children }) => (
  <Container image={image} className="mt-3">
    <ContentDiv className="container text-center pt-2">
      <Title>{title}</Title>
      <Content>{children}</Content>
    </ContentDiv>
  </Container>
);

export default Service;
