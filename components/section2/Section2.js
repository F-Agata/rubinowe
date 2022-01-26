import React from "react";
import styled from "styled-components";

import backgroundSection2 from "../../public/backgroundSection2.svg";
import TitleVerySmallWhite from "../../stylesjs/TitleVerySmallWhite";
import TitleOfPagesWhite from "../../stylesjs/TitleOfPagesWhite";
import TextBigWhite from "../../stylesjs/TextBigWhite";

const WrappSection2Background = styled.section`
  min-width: 375px;
  max-width: 1800px;
  width: 100%;
  //border: orange 2px solid;
  background-color: ${(props) => props.theme.colors.colorPrimary};
  background-image: url(${backgroundSection2.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left top;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const WrappSection2 = styled.div`
  margin: 0px 40px 0 40px;
  padding: 190px 0px 190px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1170px;
  //border: green solid 2px;
`;

const TitleSection2VerySmall = styled(TitleVerySmallWhite)`
  margin-bottom: 15px;
`;

const TitleSection2 = styled(TitleOfPagesWhite)`
  margin-bottom: 24px;
`;

const TextSection2 = styled(TextBigWhite)`
  margin-bottom: 30px;
`;

const Section2 = () => {
  return (
    <WrappSection2Background>
      <WrappSection2>
        <TitleSection2VerySmall>About us #1</TitleSection2VerySmall>
        <TitleSection2>Deliver quality in a timely manner</TitleSection2>
        <TextSection2>We not only deliver great quality software, but we strive to deliver it in the timescales that align with your expectations. It is as important to us as it is to you that software is delivered properly, on time and on budget.</TextSection2>
      </WrappSection2>
    </WrappSection2Background>
  );
};

export default Section2;
