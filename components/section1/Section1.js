import React from "react";
import styled from "styled-components";

import Section1Elements from "./Section1Elements";

import backgroundSection1 from "../../public/backgroundSection1.svg";

import TitleOfPagesDark from "../../stylesjs/TitleOfPagesDark";
import TitleVerySmallGreen from "../../stylesjs/TitleVerySmallGreen";
import DivToNavigation from "../DivToNavigation";



const Section1 = () => {
  return (
      <>
          <DivToNavigation id={"Why Rubinowe"}/>
    <WrappSection1Background>
      <WrappSection1>
        <TitleSection1VerySmall>Get the Software You Want</TitleSection1VerySmall>
        <TitleSection1>Why Rubinowe?</TitleSection1>
        <Section1Elements />
      </WrappSection1>
    </WrappSection1Background>
          </>
  );
};

export default Section1;

const WrappSection1Background = styled.section`
  min-width: 375px;
  max-width: 1800px;
  width: 100%;
  //border: orange 2px solid;
  background-color: ${(props) => props.theme.colors.colorPrimary};
  background-image: url(${backgroundSection1.src});
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-position: left 30px;
  display: flex;
  justify-content: center;
  @media (min-width: 992px) {
    background-size: 100%;
  }
`;

const WrappSection1 = styled.div`
  //margin: 0 auto;
  //border: chartreuse 2px solid;
  margin: 0px 40px 0 40px;
  padding-bottom: 80px;
  display: flex;
  flex-direction: column;
  align-items: start;
  //padding-top: 40px;
  max-width: 1170px;
`;

const TitleSection1VerySmall = styled(TitleVerySmallGreen)``;

const TitleSection1 = styled(TitleOfPagesDark)`
  max-width: 500px;
  padding-top: 30px;
  padding-bottom: 30px;
  //border: brown 2px solid;
`;
