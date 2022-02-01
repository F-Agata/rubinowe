import React from "react";
import styled from "styled-components";
import TitleVerySmallWhite from "../../stylesjs/TitleVerySmallWhite";


const Footer = () => {
  return (
    <StyledFooter>
        <TitleVerySmallWhiteFooter>
            Rubinowe Sp. z o.o. | 43-100 Tychy | www.rubinowe.pl | Software Development and Digital Transformation
        </TitleVerySmallWhiteFooter>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  width: 100%;
  min-height: 100px;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  
`;

const TitleVerySmallWhiteFooter = styled(TitleVerySmallWhite)`
  margin: 0px 40px 0 40px;
  text-align: center;
`
