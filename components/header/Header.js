import React, { useState } from "react";
import styled from "styled-components";
import { useSpring, animated } from 'react-spring';

import backgroundHeader from "../../public/backgroundHeader.svg";
import imgHeader from "../../public/mainImage.png";

import TextBigWhite from "../../stylesjs/TextBigWhite";
import { Btn } from "../../stylesjs/Btn";
import DivToNavigation from "../DivToNavigation"

const Header = () => {

    const [toggleActiveBtn, setToggleActiveBtn] = useState(true)
    const { spring } = useSpring({
        from: { spring: 0 },
        spring: toggleActiveBtn ? 1 : 0,
        config: { duration: 1000 },
    })

  return (
      <>
        <DivToNavigation id={"Home"}/>
    <WrappHeaderBackground>
      <WrappHeader>
        <TitleHeader>Software Development and Digital Transformation from Conception to Delivery</TitleHeader>
        <TextHeader>
          Trusted software development: delivered intelligently, designed to unlock growth.
        </TextHeader>
        <BtnNBLink href={`#Contact`}>
          <BtnAnimated
              onMouseMove={() => setToggleActiveBtn(false)}
              onMouseLeave={() => setToggleActiveBtn(true)}
              style={{
                  opacity: spring.to({range: [0, 1], output: [0.3, 1]}),
                  scale: spring.to({
                      range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                      output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
                  })
              }}
              > Contact Us</BtnAnimated>
        </BtnNBLink>
        <WrappImgHeader>
          <ImgHeader src={imgHeader.src} alt={"Main photo"} />
        </WrappImgHeader>
      </WrappHeader>
    </WrappHeaderBackground>
        </>
  );
};

export default Header;

const WrappHeaderBackground = styled.header`
  background-color: ${(props) => props.theme.colors.colorPrimary};
  background-image: url(${backgroundHeader.src});
  background-repeat: no-repeat;
  background-size: auto 70%;
  background-position: top center;
  min-width: 375px;
  max-width: 1800px;
  //border: red solid 2px;
  @media (min-width: 1500px) {
    background-size: 100% auto;
  }
`;

const WrappHeader = styled.div`
  margin: 0px 40px 0 40px;
  padding-top: 160px;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  //border: green solid 2px;
`;

const TitleHeader = styled.h1`
  font-weight: ${(props) => props.theme.fonts.fontMedium};
  color: ${(props) => props.theme.colors.colorPrimary};
  font-weight: 500;
  font-size: 38px;
  line-height: 120%;
  text-align: center;
`;

const TextHeader = styled(TextBigWhite)`
  margin: 10px 0px 30px 0px;
`;

const WrappImgHeader = styled.div`
  //border: gold 2px solid;
  margin-left: 10px;
  margin-right: 10px;
  padding-top: 40px;
  @media (min-width: 992px) {
    margin-left: 40px;
    margin-right: 40px;
    max-width: 1170px;
  }
`;

const ImgHeader = styled.img`
  width: 100%;
  //border: green solid 2px;
`;

const BtnNBLink=styled.a`
    display: block;
  cursor: pointer;
  `

const BtnAnimated = styled(animated(Btn))`
`
