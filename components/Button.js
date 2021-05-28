import React from "react";
import styled from "styled-components";
const StyledButton = styled.a`
  width: 100%;
  color:black
  border: none;
  display: inline-block;
  border-radius: 50px;
  font-weight: bold;
  background: #c04848; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to top,
    #480048,
    #c04848
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to top,
    #480048,
    #c04848
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.8);
  &:hover {
    color: black;
  }
`;
const Button = ({ children, ...rest }) => {
  return (
    <StyledButton className="py-2 text-center" {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
