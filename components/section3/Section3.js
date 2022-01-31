import React from "react";
import styled from "styled-components";

import TitleVerySmallGreen from "../../stylesjs/TitleVerySmallGreen";
import TitleOfPagesDark from "../../stylesjs/TitleOfPagesDark";
import TextSmallDark from "../../stylesjs/TextSmallDark";
import DivToNavigation from "../DivToNavigation";

const Section3 = () => {
  return (

    <WrappSection3Background>
      <WrappSection3>
        <TitleSection3VerySmall>About us #2</TitleSection3VerySmall>
        <TitleSection3>Live in our customers’ shoes</TitleSection3>
        <TextSection3>When a project is delivered successfully, we’ll share that success and take pride in our work. But if there are problems or misunderstandings, we’ll work tirelessly to resolve any issues and see things from your perspective.</TextSection3>
      </WrappSection3>
    </WrappSection3Background>

  );
};

export default Section3;


const WrappSection3Background = styled.section`
  min-width: 375px;
  max-width: 1800px;
  width: 100%;
  //border: orange 2px solid;
  background-color: ${(props) => props.theme.colors.colorSmallMenu};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const WrappSection3 = styled.div`
  //border: chartreuse 2px solid;
  margin: 0px 40px 0 40px;
  padding: 190px 0px 190px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1170px;
`;

const TitleSection3VerySmall = styled(TitleVerySmallGreen)``;

const TitleSection3 = styled(TitleOfPagesDark)`
  padding-top: 30px;
  padding-bottom: 30px;
  text-align: center;
  //border: brown 2px solid;
`;

const TextSection3 = styled(TextSmallDark)`
  text-align: center;
  line-height: 148%;
  //color: #424A4D;
`;

