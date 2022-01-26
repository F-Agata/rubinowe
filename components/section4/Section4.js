import React from "react";
import styled from "styled-components";

import backgroundSection4 from "../../public/backgroundSection4.svg";
import bbackgroundSection4Vector from "../../public/backgroundSection4Vector.svg";
import TitleVerySmallWhite from "../../stylesjs/TitleVerySmallWhite";
import TitleOfPagesWhite from "../../stylesjs/TitleOfPagesWhite";
import TextBigWhite from "../../stylesjs/TextBigWhite";

const WrappSection4Background = styled.section`
  min-width: 375px;
  max-width: 1800px;
  width: 100%;
  //border: orange 2px solid;
  background-color: ${(props) => props.theme.colors.colorPrimary};
  background-image: url(${backgroundSection4.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left top;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  z-index: -2;
  ::before {
    content: "";
    position: absolute;
    width: 30vh;
    height: 30vh;
    z-index: -1;
    background: url(${bbackgroundSection4Vector.src});
    background-repeat: no-repeat;
    top: 10%;
    right: 10%;
    //transform: rotate(-180deg);
  }
`;

const WrappSection4 = styled.div`
  margin: 0px 40px 0 40px;
  padding: 190px 0px 190px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1170px;
  //border: green solid 2px;
`;

const TitleSection4VerySmall = styled(TitleVerySmallWhite)`
  margin-bottom: 15px;
`;

const TitleSection4 = styled(TitleOfPagesWhite)`
  margin-bottom: 24px;
`;

const TextSection4 = styled(TextBigWhite)`
  margin-bottom: 30px;
`;

const Section4 = () => {
  return (
    <WrappSection4Background>
      <WrappSection4>
        <TitleSection4VerySmall>About us #3</TitleSection4VerySmall>
        <TitleSection4>Stay open, honest and transparent</TitleSection4>
        <TextSection4>We’ll be honest with you about the project, requirements, costs and timescales. We’ll keep you updated every step of the way, and we work transparently so that you can see what we’re doing without anything being hidden. We’re honest with one another in the company just as we are with our client.</TextSection4>
      </WrappSection4>
    </WrappSection4Background>
  );
};

export default Section4;
