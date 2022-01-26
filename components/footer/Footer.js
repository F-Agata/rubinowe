import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  width: 100%;
  min-height: 100px;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = () => {
  return (
    <StyledFooter>
      Rubinowe Sp. z o.o. | 43-100 Tychy | www.rubinowe.pl | Software Development and Digital Transformation
    </StyledFooter>
  );
};

export default Footer;
