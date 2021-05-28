import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    font-size: 1.2rem;
    line-height: 1.3rem;
  }
`;
const Content = ({ children }) => {
  return <Container className="px-2">{children}</Container>;
};

export default Content;
